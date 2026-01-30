const baseTranslations = {
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navJobs: 'Jobs',
    navServices: 'Services',
    navMentalHealth: 'Mental Health',
    navBlogs: 'Blogs',
    navCourses: 'Courses',
    navResources: 'Resources',
    navAdmin: 'Admin',
    login: 'Login',
    languageLabel: 'Language',
    heroTitle: 'SVRM',
    heroSubtitle:
      'The St. Verena Resources Ministry Directory is a hub for Orthodox community support. This homepage is a work-in-progress with sample placeholders for future listings.',
    exampleTitle: 'Unfinished Examples',
    exampleOne: 'Example profile card (details coming soon).',
    exampleTwo: 'Example job listing (details coming soon).',
    exampleThree: 'Example service listing (details coming soon).',
    disclaimerTitle: 'Directory Notice',
    disclaimerBody:
      'The St. Verena Resources Ministry Directory serves only as a data resource for mental health professionals, job opportunities, and professional services. It is strictly for reference purposes and does not imply endorsement by any affiliated Orthodox organizations. The Directory Administrators do not guarantee the accuracy, reliability, or fitness of its content.\n\nListed mental health professionals confirm they have a valid license, are Orthodox Christians in good standing, and wish to serve the Orthodox community. However, the Administrators do not verify credentials, competence, or legal authority to practice. The absence of a professional does not reflect their qualifications.\n\nUsers must conduct their own research before selecting a professional or using job listings and services. By using the Directory, users assume all risks and waive their right to subrogation, liability, or filing claims against the platform or Administrators. The Administrators are not liable for any damages resulting from the use of Directory, its professionals, or job listings.\n\nCopyright belongs to the Orthodox Church. The Directory is for personal, non-commercial use only and cannot be copied, shared, or used for marketing or financial gain without permission.',
    acknowledge: 'Acknowledge',
    aboutTitle: 'St. Verena Resource Ministry',
    aboutBody:
      'By the grace of God and the blessings of His Eminence Metropolitan Youssef, we are pleased to announce St. Verena Resource Ministry (SVRM). This ministry is designed to help our brothers and sisters seeking assistance and share resources from experts in the field. Our goal is to assist each other in finding information about various issues encountered. We know at times people are not able to find information easily, so we hope that through this ministry they can find answers within our Coptic community.',
    missionTitle: 'Mission Statement',
    missionBody:
      'The mission of this ministry is to help others help themselves by providing a network of resources in finding information, referrals, assistance, and tips about various issues. A database of specialists within our Coptic Orthodox community is maintained by the SVRM Committee. Requests will be forwarded to the appropriate consultant.',
    verenaTitle: 'St. Verena’s Life',
    verenaBody:
      'Saint Verena of the Theban Legion departed on the 4th day of Thoout (September 14). She was brought up in the Theban region (modern day Luxor in Upper Egypt) in a noble Christian family, who handed her over to Bishop Sherimon, Bishop of Bani Suwayf, who in turn taught her and baptized her. Saint Verena joined the Theban Legion in its mission to Rhaetia (modern day Switzerland) and was a relative of St. Victor of the Theban Legion. The soldiers’ relatives were allowed to accompany them in order to look after them and take care of their wounds. When Saint Maurice, St. Victor, and the other members of the Theban Legion were martyred, Saint Verena led a solitary and ascetic life. First, she settled in a place called Solothurn, but later moved into a cave near present day Zurich. She used to fast and pray continuously. Moreover, God performed several miracles through her. She was particularly concerned over young girls and used to look after them spiritually and physically, due to her expertise as a nurse. As a result of her fame, the ruler arrested her and sent her to jail, where Saint Maurice appeared to her to console and strengthen her. After her release from jail, she moved into several regions, and God made several miracles through her prayers. Due to her, many converted to Christianity. Saint Verena was interested in serving the poor and used to offer them food. Moreover, she enjoyed serving the sick, especially those suffering from leprosy. She used to wash their wounds and put ointments on them, not fearing infection. At the time of the departure of Saint Verena from our world, the most blessed and honored Ever-Virgin St. Mary appeared to her to console and strengthen her.',
    emptySection: 'Content will be added soon.',
    comingSoon: 'Coming soon.',
    loginTitle: 'Member Login',
    loginEmail: 'Email',
    loginPassword: 'Password',
    loginAction: 'Sign in',
    close: 'Close',
    loginSignupPrompt: 'New to the website?',
    loginSignupAction: 'Sign up now',
    profile: 'Profile',
    profileSettings: 'Profile settings',
    logout: 'Log out',
    loginErrorAdmin: 'Invalid admin credentials.',
    loginErrorRequired: 'Please enter an email and password.',
    signupTitle: 'Create your SVRM account',
    signupSubtitle: 'Join the directory and connect with resources.',
    signupSubmit: 'Create account',
    signupEmail: 'Email',
    signupFirstName: 'First name',
    signupLastName: 'Last name',
    signupProfileInfo: 'Profile info',
    signupProfilePlaceholder: 'Share a short bio',
    signupPassword: 'Password',
    signupConfirmPassword: 'Confirm password',
    signupState: 'State',
    signupSelectState: 'Select a state',
    signupRoleLabel: 'Select one role',
    signupJobSeeker: 'Job seeker',
    signupBusinessOwner: 'Business owner',
    signupServiceToggle: 'I provide a service',
    passwordMismatch: 'Passwords do not match.',
    sampleProfile: 'Sample Profile',
    sampleJob: 'Sample Job',
    sampleService: 'Sample Service',
    sampleProfileBody: 'Placeholder for a profile card.',
    sampleJobBody: 'Placeholder for a job listing.',
    sampleServiceBody: 'Placeholder for a service listing.',
    footerText: 'SVRM Directory',
    profileTitle: 'Profile settings',
    profileSubtitle: 'Manage your personal information and preferences.',
    profileSave: 'Save changes',
    profileLocked: 'Please log in to manage your profile.',
    profileUpdated: 'Profile updated successfully.',
    adminTitle: 'Administration Console',
    adminSubtitle: 'Manage users, listings, and editorial content.',
    adminUsers: 'User Management',
    adminBlogs: 'Blog Management',
    adminJobs: 'Job Postings',
    adminServices: 'Service Listings',
    adminMentalHealth: 'Mental Health Profiles',
    adminResources: 'Resource Library',
    adminUsersCount: 'active users',
    adminBlogsCount: 'drafts or posts',
    adminJobsCount: 'open listings',
    adminServicesCount: 'active services',
    adminMentalCount: 'providers',
    adminResourcesCount: 'resources',
    adminReviewUsers: 'Review Users',
    adminWriteBlog: 'Write Blog',
    adminPostJob: 'Post Job',
    adminAddService: 'Add Service',
    adminAddProfile: 'Add Profile',
    adminAddResource: 'Add Resource',
    adminTranslation: 'Arabic Translation Editor',
    adminTranslationHelp:
      'Adjust Arabic translations below and save to update the on-site language pack.',
    adminTranslationCta: 'Open Translation Editor',
    adminManagementTitle: 'Content Management',
    adminManagementHelp: 'Create and review directory records in real time.',
    adminTableEmail: 'Email',
    adminTableName: 'Name',
    adminTableRole: 'Role',
    adminTableState: 'State',
    adminTableAdmin: 'Admin',
    adminTableTitle: 'Title',
    adminTableStatus: 'Status',
    adminTableActions: 'Actions',
    adminTableProvider: 'Provider',
    adminTableLicense: 'License',
    adminTableType: 'Type',
    adminPlaceholderTitle: 'Title',
    adminPlaceholderAuthor: 'Author',
    adminPlaceholderContent: 'Content',
    adminPlaceholderProvider: 'Provider',
    adminPlaceholderLocation: 'Location',
    adminPlaceholderDescription: 'Description',
    adminPlaceholderService: 'Service name',
    adminPlaceholderContact: 'Contact info',
    adminPlaceholderName: 'Name',
    adminPlaceholderLicense: 'License',
    adminPlaceholderSpecialty: 'Specialty',
    adminPlaceholderBio: 'Bio',
    adminPlaceholderType: 'Type',
    adminPlaceholderLink: 'Link',
    adminCreateBlog: 'Create Blog',
    adminCreateJob: 'Create Job',
    adminCreateService: 'Create Service',
    adminCreateProfile: 'Create Profile',
    adminCreateResource: 'Create Resource',
    adminDelete: 'Delete',
    adminSave: 'Save',
    translationEditorTitle: 'Arabic Translation Corrections',
    translationEditorSubtitle:
      'Review each English label and adjust the Arabic translation, then save instantly.',
    translationTableEnglish: 'English',
    translationTableArabic: 'Arabic',
    translationTableActions: 'Actions',
    adminLocked: 'You must be logged in as an admin to access this page.',
  },
  ar: {
    navHome: 'الرئيسية',
    navAbout: 'حول',
    navJobs: 'الوظائف',
    navServices: 'الخدمات',
    navMentalHealth: 'الصحة النفسية',
    navBlogs: 'المدونات',
    navCourses: 'الدورات',
    navResources: 'الموارد',
    navAdmin: 'لوحة الإدارة',
    login: 'تسجيل الدخول',
    languageLabel: 'اللغة',
    heroTitle: 'SVRM',
    heroSubtitle:
      'دليل موارد القديسة فيرينا هو مركز لدعم المجتمع الأرثوذكسي. هذه الصفحة الرئيسية ما زالت قيد الإعداد مع أمثلة مؤقتة للقوائم المستقبلية.',
    exampleTitle: 'أمثلة غير مكتملة',
    exampleOne: 'بطاقة ملف تعريف كمثال (التفاصيل قريبًا).',
    exampleTwo: 'إعلان وظيفة كمثال (التفاصيل قريبًا).',
    exampleThree: 'قائمة خدمة كمثال (التفاصيل قريبًا).',
    disclaimerTitle: 'تنبيه الدليل',
    disclaimerBody:
      'دليل خدمة موارد القديسة فيرينا هو مصدر بيانات فقط للمتخصصين في الصحة النفسية وفرص العمل والخدمات المهنية. وهو مخصص للمرجعية فقط ولا يعني وجود أي اعتماد من المنظمات الأرثوذكسية التابعة. لا يضمن القائمون على الدليل دقة المحتوى أو موثوقيته أو صلاحيته.\n\nالمتخصصون المدرجون في الصحة النفسية يؤكدون أن لديهم ترخيصًا صالحًا وأنهم مسيحيون أرثوذكس في وضع كنسي جيد ويرغبون في خدمة المجتمع الأرثوذكسي. ومع ذلك، لا يقوم المسؤولون بالتحقق من المؤهلات أو الكفاءة أو السلطة القانونية للممارسة. غياب أحد المتخصصين لا يعكس مؤهلاته.\n\nيجب على المستخدمين إجراء أبحاثهم الخاصة قبل اختيار أي متخصص أو استخدام قوائم الوظائف والخدمات. باستخدام الدليل، يتحمل المستخدمون جميع المخاطر ويتنازلون عن حقهم في الرجوع أو المسؤولية أو رفع الدعاوى ضد المنصة أو المسؤولين. لا يتحمل المسؤولون أي مسؤولية عن أي أضرار ناتجة عن استخدام الدليل أو المتخصصين أو قوائم الوظائف.\n\nحقوق النشر تعود للكنيسة الأرثوذكسية. الدليل للاستخدام الشخصي وغير التجاري فقط ولا يجوز نسخه أو مشاركته أو استخدامه لأغراض تسويقية أو مالية دون إذن.',
    acknowledge: 'أُقر',
    aboutTitle: 'خدمة موارد القديسة فيرينا',
    aboutBody:
      'بنعمة الله وبركة نيافة الأنبا يوساب، يسرنا أن نعلن عن خدمة موارد القديسة فيرينا (SVRM). صممت هذه الخدمة لمساعدة إخوتنا وأخواتنا الباحثين عن المساعدة ومشاركة الموارد من الخبراء في المجال. هدفنا أن نساعد بعضنا البعض في إيجاد معلومات حول القضايا المختلفة التي نواجهها. نعلم أنه في بعض الأحيان لا يستطيع الناس العثور على المعلومات بسهولة، لذلك نأمل أن يجدوا من خلال هذه الخدمة إجابات داخل مجتمعنا القبطي.',
    missionTitle: 'بيان الرسالة',
    missionBody:
      'تهدف هذه الخدمة إلى مساعدة الآخرين على مساعدة أنفسهم من خلال توفير شبكة من الموارد لإيجاد المعلومات والإحالات والمساعدة والنصائح حول قضايا مختلفة. يتم الحفاظ على قاعدة بيانات للمتخصصين داخل مجتمعنا القبطي الأرثوذكسي من قبل لجنة SVRM. سيتم توجيه الطلبات إلى الاستشاري المناسب.',
    verenaTitle: 'حياة القديسة فيرينا',
    verenaBody:
      'رقدت القديسة فيرينا من الفيلق الطيبي في اليوم الرابع من توت (14 سبتمبر). نشأت في منطقة طيبة (الأقصر حاليًا في صعيد مصر) في عائلة مسيحية نبيلة، وسلمت إلى الأسقف شيريمون أسقف بني سويف الذي علمها وعمدها. انضمت القديسة فيرينا إلى الفيلق الطيبي في بعثته إلى ريتيا (سويسرا الحديثة) وكانت قريبة للقديس فيكتور من الفيلق الطيبي. كان يُسمح لأقارب الجنود بمرافقتهم لرعايتهم وتضميد جراحهم. عندما استشهد القديس موريس والقديس فيكتور وبقية أعضاء الفيلق الطيبي، عاشت القديسة فيرينا حياة نسك ووحدة. استقرت أولًا في سولوتورن ثم انتقلت إلى كهف قرب زيورخ حاليًا. كانت تصوم وتصلي باستمرار. كما صنع الله معجزات كثيرة على يديها. وكانت تهتم بالفتيات الصغيرات وتهتم بهن روحيًا وجسديًا لخبرتها كممرضة. وبسبب شهرتها اعتقلها الحاكم وأرسلها إلى السجن حيث ظهر لها القديس موريس ليعزيها ويقويها. وبعد إطلاق سراحها تنقلت بين مناطق عدة وصنع الله معجزات بصلواتها. بسببها آمن كثيرون بالمسيحية. كانت تهتم بخدمة الفقراء وتقدم لهم الطعام، كما كانت تحب خدمة المرضى خصوصًا المصابين بالبرص، فكانت تغسل جراحهم وتضع عليها مراهم دون خوف من العدوى. وعند انتقال القديسة فيرينا من عالمنا ظهرت لها السيدة العذراء مريم لتعزيها وتقويها.',
    emptySection: 'سيتم إضافة المحتوى قريبًا.',
    comingSoon: 'قريبًا.',
    loginTitle: 'تسجيل دخول الأعضاء',
    loginEmail: 'البريد الإلكتروني',
    loginPassword: 'كلمة المرور',
    loginAction: 'تسجيل الدخول',
    close: 'إغلاق',
    loginSignupPrompt: 'جديد على الموقع؟',
    loginSignupAction: 'سجّل الآن',
    profile: 'الملف الشخصي',
    profileSettings: 'إعدادات الملف الشخصي',
    logout: 'تسجيل الخروج',
    loginErrorAdmin: 'بيانات المسؤول غير صحيحة.',
    loginErrorRequired: 'يرجى إدخال البريد الإلكتروني وكلمة المرور.',
    signupTitle: 'أنشئ حساب SVRM',
    signupSubtitle: 'انضم إلى الدليل وتواصل مع الموارد.',
    signupSubmit: 'إنشاء حساب',
    signupEmail: 'البريد الإلكتروني',
    signupFirstName: 'الاسم الأول',
    signupLastName: 'اسم العائلة',
    signupProfileInfo: 'معلومات الملف الشخصي',
    signupProfilePlaceholder: 'شارك نبذة قصيرة',
    signupPassword: 'كلمة المرور',
    signupConfirmPassword: 'تأكيد كلمة المرور',
    signupState: 'الولاية',
    signupSelectState: 'اختر ولاية',
    signupRoleLabel: 'اختر دورًا واحدًا',
    signupJobSeeker: 'باحث عن عمل',
    signupBusinessOwner: 'صاحب عمل',
    signupServiceToggle: 'أقدّم خدمة',
    passwordMismatch: 'كلمتا المرور غير متطابقتين.',
    sampleProfile: 'ملف تعريفي تجريبي',
    sampleJob: 'وظيفة تجريبية',
    sampleService: 'خدمة تجريبية',
    sampleProfileBody: 'حقل تجريبي لبطاقة ملف تعريف.',
    sampleJobBody: 'حقل تجريبي لإعلان وظيفة.',
    sampleServiceBody: 'حقل تجريبي لقائمة خدمة.',
    footerText: 'دليل SVRM',
    profileTitle: 'إعدادات الملف الشخصي',
    profileSubtitle: 'حدّث معلوماتك الشخصية وتفضيلاتك.',
    profileSave: 'حفظ التغييرات',
    profileLocked: 'يرجى تسجيل الدخول لإدارة ملفك الشخصي.',
    profileUpdated: 'تم تحديث الملف الشخصي بنجاح.',
    adminTitle: 'لوحة الإدارة',
    adminSubtitle: 'إدارة المستخدمين والقوائم والمحتوى التحريري.',
    adminUsers: 'إدارة المستخدمين',
    adminBlogs: 'إدارة المدونات',
    adminJobs: 'إعلانات الوظائف',
    adminServices: 'قوائم الخدمات',
    adminMentalHealth: 'ملفات الصحة النفسية',
    adminResources: 'مكتبة الموارد',
    adminUsersCount: 'مستخدمين نشطين',
    adminBlogsCount: 'مسودات أو منشورات',
    adminJobsCount: 'إعلانات مفتوحة',
    adminServicesCount: 'خدمات نشطة',
    adminMentalCount: 'مقدمي الخدمة',
    adminResourcesCount: 'موارد',
    adminReviewUsers: 'مراجعة المستخدمين',
    adminWriteBlog: 'كتابة مدونة',
    adminPostJob: 'نشر وظيفة',
    adminAddService: 'إضافة خدمة',
    adminAddProfile: 'إضافة ملف',
    adminAddResource: 'إضافة مورد',
    adminTranslation: 'محرر الترجمة العربية',
    adminTranslationHelp: 'قم بتعديل الترجمات العربية أدناه واحفظها لتحديث حزمة اللغة.',
    adminTranslationCta: 'افتح محرر الترجمة',
    adminManagementTitle: 'إدارة المحتوى',
    adminManagementHelp: 'أنشئ وراجع سجلات الدليل مباشرة.',
    adminTableEmail: 'البريد الإلكتروني',
    adminTableName: 'الاسم',
    adminTableRole: 'الدور',
    adminTableState: 'الولاية',
    adminTableAdmin: 'مسؤول',
    adminTableTitle: 'العنوان',
    adminTableStatus: 'الحالة',
    adminTableActions: 'الإجراءات',
    adminTableProvider: 'المُقدّم',
    adminTableLicense: 'الترخيص',
    adminTableType: 'النوع',
    adminPlaceholderTitle: 'العنوان',
    adminPlaceholderAuthor: 'الكاتب',
    adminPlaceholderContent: 'المحتوى',
    adminPlaceholderProvider: 'المُقدّم',
    adminPlaceholderLocation: 'الموقع',
    adminPlaceholderDescription: 'الوصف',
    adminPlaceholderService: 'اسم الخدمة',
    adminPlaceholderContact: 'معلومات التواصل',
    adminPlaceholderName: 'الاسم',
    adminPlaceholderLicense: 'الترخيص',
    adminPlaceholderSpecialty: 'التخصص',
    adminPlaceholderBio: 'نبذة',
    adminPlaceholderType: 'النوع',
    adminPlaceholderLink: 'الرابط',
    adminCreateBlog: 'إنشاء مدونة',
    adminCreateJob: 'إنشاء وظيفة',
    adminCreateService: 'إنشاء خدمة',
    adminCreateProfile: 'إنشاء ملف',
    adminCreateResource: 'إنشاء مورد',
    adminDelete: 'حذف',
    adminSave: 'حفظ',
    translationEditorTitle: 'تصحيح الترجمات العربية',
    translationEditorSubtitle:
      'راجع كل عنوان بالإنجليزية وعدّل الترجمة العربية ثم احفظ مباشرة.',
    translationTableEnglish: 'الإنجليزية',
    translationTableArabic: 'العربية',
    translationTableActions: 'الإجراءات',
    adminLocked: 'يجب تسجيل الدخول كمسؤول للوصول إلى هذه الصفحة.',
  },
};

const stateList = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

const PROFILE_STORAGE_KEY = 'svrm-profiles';

const loadProfiles = () => {
  const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
  if (!stored) {
    return {};
  }
  try {
    return JSON.parse(stored);
  } catch (error) {
    return {};
  }
};

const saveProfiles = (profiles) => {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profiles));
};

const getProfile = (email) => {
  if (!email) {
    return null;
  }
  const profiles = loadProfiles();
  return (
    profiles[email] || {
      email,
      firstName: '',
      lastName: '',
      state: '',
      profileInfo: '',
      role: '',
    }
  );
};

const setProfile = (email, updates) => {
  if (!email) {
    return;
  }
  const profiles = loadProfiles();
  profiles[email] = {
    ...(profiles[email] || { email }),
    ...updates,
    email,
  };
  saveProfiles(profiles);
};

const moveProfile = (oldEmail, newEmail, updates) => {
  if (!oldEmail || !newEmail) {
    return;
  }
  const profiles = loadProfiles();
  const existing = profiles[oldEmail] || { email: oldEmail };
  delete profiles[oldEmail];
  profiles[newEmail] = { ...existing, ...updates, email: newEmail };
  saveProfiles(profiles);
};

const translations = {
  en: { ...baseTranslations.en },
  ar: { ...baseTranslations.ar },
};

const loadRemoteTranslations = async () => {
  try {
    const response = await fetch('/api/translations');
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    if (data?.ar) {
      translations.ar = { ...translations.ar, ...data.ar };
    }
  } catch (error) {
    // Ignore translation fetch errors and fall back to base translations.
  }
};

const getCurrentLang = () => localStorage.getItem('svrm-lang') || 'en';

const applyTranslations = (lang) => {
  const selected = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.body.classList.toggle('rtl', lang === 'ar');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (selected[key]) {
      element.textContent = selected[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (selected[key]) {
      element.setAttribute('placeholder', selected[key]);
    }
  });
};

const setActiveNav = () => {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach((link) => {
    if (link.getAttribute('href') === path || (path === '/' && link.dataset.home)) {
      link.classList.add('active');
    }
  });
};

const initLanguageToggle = () => {
  const select = document.querySelector('#language-select');
  if (!select) {
    return;
  }
  const saved = getCurrentLang();
  select.value = saved;
  applyTranslations(saved);
  select.addEventListener('change', (event) => {
    const lang = event.target.value;
    localStorage.setItem('svrm-lang', lang);
    applyTranslations(lang);
  });
};

const initDisclaimer = () => {
  const modal = document.querySelector('#disclaimer-modal');
  if (!modal) {
    return;
  }
  modal.classList.add('active');
  const button = modal.querySelector('[data-close-disclaimer]');
  if (button) {
    button.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }
};

const initLogin = () => {
  const openButton = document.querySelector('[data-login-open]');
  const modal = document.querySelector('#login-modal');
  if (!openButton || !modal) {
    return;
  }
  const closeButton = modal.querySelector('[data-login-close]');
  const form = modal.querySelector('form');
  const message = modal.querySelector('[data-login-message]');

  openButton.addEventListener('click', () => {
    if (message) {
      message.textContent = '';
    }
    modal.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const emailInput = String(formData.get('email') || '').trim();
    const password = String(formData.get('password') || '').trim();
    const selected = translations[getCurrentLang()] || translations.en;
    if (message) {
      message.textContent = '';
    }

    if (!emailInput || !password) {
      if (message) {
        message.textContent = selected.loginErrorRequired;
      }
      return;
    }

    const email = emailInput.toLowerCase();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (!response.ok) {
        if (message) {
          message.textContent = result.message || selected.loginErrorAdmin;
        }
        return;
      }
      localStorage.setItem('svrm-user', result.email || email);
      localStorage.setItem('svrm-admin', result.isAdmin ? 'true' : 'false');
      setProfile(result.email || email, {
        email: result.email || email,
        firstName: result.firstName || '',
        lastName: result.lastName || '',
        state: result.state || '',
        profileInfo: result.profileInfo || '',
        role: result.role || (result.isAdmin ? 'Administrator' : 'Member'),
      });
      modal.classList.remove('active');
      updateAuthUI();
    } catch (error) {
      if (message) {
        message.textContent = selected.loginErrorAdmin;
      }
    }
  });
};

const updateAuthUI = () => {
  const email = localStorage.getItem('svrm-user');
  const profile = getProfile(email);
  const adminLink = document.querySelector('#admin-link');
  const isAdmin = localStorage.getItem('svrm-admin') === 'true';
  if (adminLink) {
    adminLink.classList.toggle('hidden', !isAdmin);
  }

  const userMenu = document.querySelector('[data-user-menu]');
  if (userMenu) {
    userMenu.classList.toggle('hidden', !email);
  }

  const loginButton = document.querySelector('[data-login-open]');
  if (loginButton) {
    loginButton.classList.toggle('hidden', Boolean(email));
  }

  const userEmail = document.querySelector('[data-user-email]');
  if (userEmail) {
    userEmail.textContent = profile?.email || '';
  }
};

const initUserMenu = () => {
  const menu = document.querySelector('[data-user-menu]');
  if (!menu) {
    return;
  }
  const toggle = menu.querySelector('[data-user-menu-toggle]');
  const logoutButtons = document.querySelectorAll('[data-logout]');

  if (toggle) {
    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      menu.classList.toggle('open');
    });
  }

  document.addEventListener('click', () => {
    menu.classList.remove('open');
  });

  logoutButtons.forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.removeItem('svrm-user');
      localStorage.removeItem('svrm-admin');
      menu.classList.remove('open');
      updateAuthUI();
      if (window.location.pathname === '/profile.html') {
        window.location.href = '/';
      }
    });
  });
};

const fillStateOptions = (select) => {
  if (!select || select.options.length > 1) {
    return;
  }
  stateList.forEach((state) => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    select.appendChild(option);
  });
};

const initSignupForm = () => {
  const form = document.querySelector('#signup-form');
  if (!form) {
    return;
  }

  const stateSelect = form.querySelector('#state');
  if (stateSelect) {
    fillStateOptions(stateSelect);
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const message = form.querySelector('#signup-message');

    if (payload.password !== payload.confirmPassword) {
      const selected = translations[getCurrentLang()] || translations.en;
      message.textContent = selected.passwordMismatch;
      message.classList.add('notice');
      return;
    }

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        providesService: formData.get('providesService') === 'on',
      }),
    });

    const result = await response.json();
    if (response.ok) {
      message.textContent = result.message;
      message.classList.remove('notice');
      if (payload.email) {
        const email = String(payload.email).toLowerCase();
        setProfile(email, {
          email,
          firstName: payload.firstName || '',
          lastName: payload.lastName || '',
          profileInfo: payload.profileInfo || '',
          state: payload.state || '',
          role: payload.role || '',
        });
      }
    } else {
      message.textContent = result.message || 'Unable to sign up right now.';
      message.classList.add('notice');
    }
  });
};

const initProfileForm = () => {
  const form = document.querySelector('#profile-form');
  if (!form) {
    return;
  }
  const lockedNotice = document.querySelector('#profile-locked');
  const message = form.querySelector('[data-profile-message]');
  const email = localStorage.getItem('svrm-user');

  if (!email) {
    form.classList.add('hidden');
    if (lockedNotice) {
      lockedNotice.classList.remove('hidden');
    }
    return;
  }

  const profile = getProfile(email);
  if (lockedNotice) {
    lockedNotice.classList.add('hidden');
  }

  const stateSelect = form.querySelector('[name="state"]');
  if (stateSelect) {
    fillStateOptions(stateSelect);
  }

  form.querySelector('[name=\"firstName\"]').value = profile?.firstName || '';
  form.querySelector('[name=\"lastName\"]').value = profile?.lastName || '';
  form.querySelector('[name=\"email\"]').value = profile?.email || email;
  form.querySelector('[name=\"state\"]').value = profile?.state || '';
  form.querySelector('[name=\"role\"]').value = profile?.role || '';
  form.querySelector('[name=\"profileInfo\"]').value = profile?.profileInfo || '';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const updates = Object.fromEntries(formData.entries());
    const newEmail = String(updates.email || '').trim().toLowerCase();
    if (!newEmail) {
      return;
    }
    const storedEmail = email.toLowerCase();
    if (newEmail !== storedEmail) {
      moveProfile(storedEmail, newEmail, updates);
      localStorage.setItem('svrm-user', newEmail);
    } else {
      setProfile(storedEmail, updates);
    }
    const selected = translations[getCurrentLang()] || translations.en;
    if (message) {
      message.textContent = selected.profileUpdated;
    }
    updateAuthUI();
  });
};

const initAdminDashboard = () => {
  const overview = document.querySelector('#admin-overview');
  if (!overview) {
    return;
  }

  const isAdmin = localStorage.getItem('svrm-admin') === 'true';
  const lockedNotice = document.querySelector('#admin-locked');
  document.querySelectorAll('.admin-content').forEach((section) => {
    section.classList.toggle('hidden', !isAdmin);
  });
  if (lockedNotice) {
    lockedNotice.classList.toggle('hidden', isAdmin);
  }
  if (!isAdmin) {
    return;
  }

  fetch('/api/admin/overview')
    .then((response) => response.json())
    .then((data) => {
      overview.querySelector('[data-admin-users]').textContent = data.userCount || 0;
      overview.querySelector('[data-admin-blogs]').textContent = data.blogCount || 0;
      overview.querySelector('[data-admin-jobs]').textContent = data.jobCount || 0;
      overview.querySelector('[data-admin-services]').textContent = data.serviceCount || 0;
      overview.querySelector('[data-admin-mental]').textContent = data.mentalHealthCount || 0;
      overview.querySelector('[data-admin-resources]').textContent = data.resourceCount || 0;
    })
    .catch(() => {
      overview.querySelectorAll('strong').forEach((element) => {
        element.textContent = '—';
      });
    });
};

const initAdminManagement = () => {
  const management = document.querySelector('#admin-management');
  if (!management) {
    return;
  }
  const isAdmin = localStorage.getItem('svrm-admin') === 'true';
  if (!isAdmin) {
    return;
  }
  const selected = translations[getCurrentLang()] || translations.en;

  const rowRenderers = {
    users: (user) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.email || ''}</td>
        <td>${[user.firstName, user.lastName].filter(Boolean).join(' ')}</td>
        <td>${user.role || ''}</td>
        <td>${user.state || ''}</td>
        <td>${user.isAdmin ? 'Yes' : 'No'}</td>
      `;
      return row;
    },
    blogs: (blog) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${blog.title || ''}</td>
        <td>${blog.status || ''}</td>
        <td><button type="button" class="secondary" data-delete="blogs" data-id="${blog._id}">
          ${selected.adminDelete}
        </button></td>
      `;
      return row;
    },
    jobs: (job) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${job.title || ''}</td>
        <td>${job.provider || ''}</td>
        <td>${job.status || ''}</td>
        <td><button type="button" class="secondary" data-delete="jobs" data-id="${job._id}">
          ${selected.adminDelete}
        </button></td>
      `;
      return row;
    },
    services: (service) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${service.name || ''}</td>
        <td>${service.provider || ''}</td>
        <td>${service.status || ''}</td>
        <td><button type="button" class="secondary" data-delete="services" data-id="${service._id}">
          ${selected.adminDelete}
        </button></td>
      `;
      return row;
    },
    'mental-health': (profile) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${profile.name || ''}</td>
        <td>${profile.license || ''}</td>
        <td>${profile.status || ''}</td>
        <td><button type="button" class="secondary" data-delete="mental-health" data-id="${profile._id}">
          ${selected.adminDelete}
        </button></td>
      `;
      return row;
    },
    resources: (resource) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${resource.title || ''}</td>
        <td>${resource.type || ''}</td>
        <td>${resource.status || ''}</td>
        <td><button type="button" class="secondary" data-delete="resources" data-id="${resource._id}">
          ${selected.adminDelete}
        </button></td>
      `;
      return row;
    },
  };

  const loadTable = async (type, url, rowRenderer) => {
    const tableBody = document.querySelector(`[data-admin-table="${type}"]`);
    if (!tableBody) {
      return;
    }
    tableBody.innerHTML = '';
    try {
      const response = await fetch(url);
      const items = await response.json();
      items.forEach((item) => {
        const row = rowRenderer(item);
        tableBody.appendChild(row);
      });
    } catch (error) {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      const headerCells = tableBody.closest('table')?.querySelectorAll('th') || [];
      cell.colSpan = headerCells.length || 1;
      cell.textContent = 'Unable to load data.';
      row.appendChild(cell);
      tableBody.appendChild(row);
    }
  };

  const deleteItem = async (type, id) => {
    await fetch(`/api/admin/${type}/${id}`, { method: 'DELETE' });
  };

  Object.entries({
    users: '/api/admin/users',
    blogs: '/api/admin/blogs',
    jobs: '/api/admin/jobs',
    services: '/api/admin/services',
    'mental-health': '/api/admin/mental-health',
    resources: '/api/admin/resources',
  }).forEach(([type, url]) => {
    loadTable(type, url, rowRenderers[type]);
  });

  management.addEventListener('click', async (event) => {
    const button = event.target.closest('[data-delete]');
    if (!button) {
      return;
    }
    const type = button.dataset.delete;
    const id = button.dataset.id;
    if (!type || !id) {
      return;
    }
    await deleteItem(type, id);
    const url = type === 'mental-health' ? '/api/admin/mental-health' : `/api/admin/${type}`;
    loadTable(type, url, rowRenderers[type]);
  });

  document.querySelectorAll('[data-admin-form]').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      const type = form.dataset.adminForm;
      const message = form.querySelector(`[data-admin-message="${type}"]`);
      if (message) {
        message.textContent = '';
      }
      try {
        const response = await fetch(`/api/admin/${type}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const result = await response.json();
        if (!response.ok) {
          if (message) {
            message.textContent = result.message || 'Unable to save entry.';
          }
          return;
        }
        form.reset();
        if (message) {
          message.textContent = 'Saved successfully.';
        }
        const url =
          type === 'mental-health' ? '/api/admin/mental-health' : `/api/admin/${type}`;
        loadTable(type, url, rowRenderers[type]);
      } catch (error) {
        if (message) {
          message.textContent = 'Unable to save entry.';
        }
      }
    });
  });
};

const initTranslationEditor = () => {
  const tableBody = document.querySelector('[data-translation-rows]');
  if (!tableBody) {
    return;
  }
  const isAdmin = localStorage.getItem('svrm-admin') === 'true';
  const selected = translations[getCurrentLang()] || translations.en;
  const lockedNotice = document.querySelector('#translation-locked');
  document.querySelectorAll('.admin-content').forEach((section) => {
    section.classList.toggle('hidden', !isAdmin);
  });
  if (lockedNotice) {
    lockedNotice.classList.toggle('hidden', isAdmin);
  }
  if (!isAdmin) {
    return;
  }

  const buildRows = async () => {
    tableBody.innerHTML = '';
    let overrides = {};
    try {
      const response = await fetch('/api/admin/translations');
      const data = await response.json();
      overrides = data.ar || {};
    } catch (error) {
      overrides = {};
    }

    Object.entries(baseTranslations.en).forEach(([key, english]) => {
      const row = document.createElement('tr');
      const currentArabic = overrides[key] || baseTranslations.ar[key] || '';
      row.innerHTML = `
        <td>${english}</td>
        <td>
          <textarea class="translation-input" data-translation-key="${key}">${currentArabic}</textarea>
        </td>
        <td>
          <button type="button" class="secondary" data-translation-save="${key}">
            ${selected.adminSave}
          </button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  };

  tableBody.addEventListener('click', async (event) => {
    const button = event.target.closest('[data-translation-save]');
    if (!button) {
      return;
    }
    const key = button.dataset.translationSave;
    const textarea = tableBody.querySelector(`[data-translation-key="${key}"]`);
    if (!textarea) {
      return;
    }
    const value = textarea.value;
    await fetch(`/api/admin/translations/${key}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value }),
    });
    translations.ar[key] = value;
    applyTranslations(getCurrentLang());
  });

  buildRows();
};

const initApp = async () => {
  await loadRemoteTranslations();
  setActiveNav();
  initLanguageToggle();
  initDisclaimer();
  initLogin();
  initUserMenu();
  initSignupForm();
  initProfileForm();
  initAdminDashboard();
  initAdminManagement();
  initTranslationEditor();
  updateAuthUI();
};

initApp();
