const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const User = require('./src/models/User');
const Blog = require('./src/models/Blog');
const Job = require('./src/models/Job');
const Service = require('./src/models/Service');
const MentalHealthProfile = require('./src/models/MentalHealthProfile');
const Resource = require('./src/models/Resource');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://Shady:Shady@cluster0.3pkmpzv.mongodb.net/?appName=Cluster0';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

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

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(409).json({ message: 'Email already registered.' });
  }

  const user = await User.create({
    email,
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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`SVRM server running on port ${PORT}`);
});
