const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const User = require('./src/models/User');
const Blog = require('./src/models/Blog');
const Job = require('./src/models/Job');
const Service = require('./src/models/Service');
const MentalHealthProfile = require('./src/models/MentalHealthProfile');
const Resource = require('./src/models/Resource');
const AdminSetting = require('./src/models/AdminSetting');
const Translation = require('./src/models/Translation');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://Shady:Shady@cluster0.3pkmpzv.mongodb.net/?appName=Cluster0';
const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@admin.co';
const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin123@';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    return ensureAdmin();
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const ensureAdmin = async () => {
  let settings = await AdminSetting.findOne();
  if (!settings) {
    settings = await AdminSetting.create({
      adminEmail: DEFAULT_ADMIN_EMAIL.toLowerCase(),
      adminPassword: DEFAULT_ADMIN_PASSWORD,
    });
  }

  const adminEmail = String(settings.adminEmail || DEFAULT_ADMIN_EMAIL).toLowerCase();
  let adminUser = await User.findOne({ email: adminEmail });
  if (!adminUser) {
    adminUser = await User.create({
      email: adminEmail,
      firstName: 'Admin',
      lastName: 'User',
      profileInfo: 'SVRM Administrator',
      password: settings.adminPassword || DEFAULT_ADMIN_PASSWORD,
      state: 'N/A',
      role: 'businessOwner',
      providesService: false,
      isAdmin: true,
    });
  } else if (!adminUser.isAdmin) {
    adminUser.isAdmin = true;
    await adminUser.save();
  }
};

app.post('/api/signup', async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    profileInfo,
    password,
    state,
    role,
    providesService,
  } = req.body;

  if (!email || !firstName || !lastName || !password || !state || !role) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  const normalizedEmail = String(email).toLowerCase();
  const existing = await User.findOne({ email: normalizedEmail });
  if (existing) {
    return res.status(409).json({ message: 'Email already registered.' });
  }

  const user = await User.create({
    email: normalizedEmail,
    firstName,
    lastName,
    profileInfo,
    password,
    state,
    role,
    providesService: Boolean(providesService),
  });

  return res.status(201).json({
    message: 'Signup successful.',
    userId: user._id,
  });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const normalizedEmail = String(email).toLowerCase();
  const settings = await AdminSetting.findOne();
  const adminEmail = settings?.adminEmail?.toLowerCase();
  const adminPassword = settings?.adminPassword;
  const user = await User.findOne({ email: normalizedEmail });

  if (user) {
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }
    return res.json({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      profileInfo: user.profileInfo,
      state: user.state,
      isAdmin: Boolean(user.isAdmin || (adminEmail && user.email === adminEmail)),
    });
  }

  if (adminEmail && normalizedEmail === adminEmail && adminPassword === password) {
    const adminUser = await User.findOneAndUpdate(
      { email: adminEmail },
      {
        email: adminEmail,
        firstName: 'Admin',
        lastName: 'User',
        profileInfo: 'SVRM Administrator',
        password: adminPassword,
        state: 'N/A',
        role: 'businessOwner',
        providesService: false,
        isAdmin: true,
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.json({
      email: adminUser.email,
      firstName: adminUser.firstName,
      lastName: adminUser.lastName,
      role: adminUser.role,
      profileInfo: adminUser.profileInfo,
      state: adminUser.state,
      isAdmin: true,
    });
  }

  return res.status(401).json({ message: 'Invalid credentials.' });
});

app.get('/api/admin/overview', async (req, res) => {
  const [userCount, blogCount, jobCount, serviceCount, mentalHealthCount, resourceCount] =
    await Promise.all([
      User.countDocuments(),
      Blog.countDocuments(),
      Job.countDocuments(),
      Service.countDocuments(),
      MentalHealthProfile.countDocuments(),
      Resource.countDocuments(),
    ]);

  res.json({
    userCount,
    blogCount,
    jobCount,
    serviceCount,
    mentalHealthCount,
    resourceCount,
  });
});

app.get('/api/admin/users', async (req, res) => {
  const users = await User.find().select('-password').sort({ createdAt: -1 });
  res.json(users);
});

app.get('/api/admin/blogs', async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

app.post('/api/admin/blogs', async (req, res) => {
  const { title, author, content, status } = req.body || {};
  if (!title || !author || !content) {
    return res.status(400).json({ message: 'Title, author, and content are required.' });
  }
  const blog = await Blog.create({ title, author, content, status });
  res.status(201).json(blog);
});

app.delete('/api/admin/blogs/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: 'Blog deleted.' });
});

app.get('/api/admin/jobs', async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
});

app.post('/api/admin/jobs', async (req, res) => {
  const { title, provider, location, description, status } = req.body || {};
  if (!title || !provider) {
    return res.status(400).json({ message: 'Title and provider are required.' });
  }
  const job = await Job.create({ title, provider, location, description, status });
  res.status(201).json(job);
});

app.delete('/api/admin/jobs/:id', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: 'Job deleted.' });
});

app.get('/api/admin/services', async (req, res) => {
  const services = await Service.find().sort({ createdAt: -1 });
  res.json(services);
});

app.post('/api/admin/services', async (req, res) => {
  const { name, provider, description, contactInfo, status } = req.body || {};
  if (!name || !provider) {
    return res.status(400).json({ message: 'Name and provider are required.' });
  }
  const service = await Service.create({
    name,
    provider,
    description,
    contactInfo,
    status,
  });
  res.status(201).json(service);
});

app.delete('/api/admin/services/:id', async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: 'Service deleted.' });
});

app.get('/api/admin/mental-health', async (req, res) => {
  const profiles = await MentalHealthProfile.find().sort({ createdAt: -1 });
  res.json(profiles);
});

app.post('/api/admin/mental-health', async (req, res) => {
  const { name, license, specialty, location, bio, status } = req.body || {};
  if (!name || !license) {
    return res.status(400).json({ message: 'Name and license are required.' });
  }
  const profile = await MentalHealthProfile.create({
    name,
    license,
    specialty,
    location,
    bio,
    status,
  });
  res.status(201).json(profile);
});

app.delete('/api/admin/mental-health/:id', async (req, res) => {
  await MentalHealthProfile.findByIdAndDelete(req.params.id);
  res.json({ message: 'Profile deleted.' });
});

app.get('/api/admin/resources', async (req, res) => {
  const resources = await Resource.find().sort({ createdAt: -1 });
  res.json(resources);
});

app.post('/api/admin/resources', async (req, res) => {
  const { title, type, link, description, status } = req.body || {};
  if (!title) {
    return res.status(400).json({ message: 'Title is required.' });
  }
  const resource = await Resource.create({ title, type, link, description, status });
  res.status(201).json(resource);
});

app.delete('/api/admin/resources/:id', async (req, res) => {
  await Resource.findByIdAndDelete(req.params.id);
  res.json({ message: 'Resource deleted.' });
});

app.get('/api/translations', async (req, res) => {
  const entries = await Translation.find({ lang: 'ar' });
  const ar = entries.reduce((acc, entry) => {
    acc[entry.key] = entry.value;
    return acc;
  }, {});
  res.json({ ar });
});

app.get('/api/admin/translations', async (req, res) => {
  const entries = await Translation.find({ lang: 'ar' });
  const ar = entries.reduce((acc, entry) => {
    acc[entry.key] = entry.value;
    return acc;
  }, {});
  res.json({ ar });
});

app.put('/api/admin/translations/:key', async (req, res) => {
  const key = req.params.key;
  const { value } = req.body || {};
  if (!key) {
    return res.status(400).json({ message: 'Translation key is required.' });
  }
  const translation = await Translation.findOneAndUpdate(
    { key, lang: 'ar' },
    { key, lang: 'ar', value },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  res.json(translation);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`SVRM server running on port ${PORT}`);
});
