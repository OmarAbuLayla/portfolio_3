import React, { useState, useEffect } from 'react';
import './App.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const aiProjects = [
    {
      title: "Insightify – AI-Powered Data Storytelling",
      description: "A local LLM-powered tool that transforms raw CSV datasets into structured, human-readable insights. Designed for analysts, strategists, and decision-makers to quickly understand trends, risks, and recommendations — without writing a single line of code.",
      tech: ["LLMs", "Pandas", "Flask", "Data Analysis", "Private AI"],
      link: "#",
      featured: true,
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Local AI-Powered Customer Service Chatbot",
      description: "A local, AI-powered chatbot designed for customer service. It interacts with customers to understand their needs and extract valuable insights, such as common issues, preferences, and behaviors. These insights are then sent to the seller or service provider to help improve decision-making, customer engagement, and overall service strategies. The chatbot is fully integrated with a backend API to provide real-time responses and capture data for ongoing improvement.",
      tech: ["Local LLMs", "Flask", "RAG", "HuggingFace", "Python", "CSV Logging", "Ngrok"],
      link: "#",
      featured: true,
      icon: <Users className="w-8 h-8" />
    }
  ];

  const dataProjects = [
    {
      title: "Hayat AI - Medical Assistant",
      description: "A two-part AI system for medical diagnostics: Hayat 2.0 analyzes medical images (X-ray/MRI) and Hayat 1.0 explains diagnoses in Arabic using LLMs. The backend integrates image classification and LLM communication through Flask APIs.",
      link: "https://github.com/OmarAbuLayla/Hayat",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Complyt AI - Regulatory Compliance Analyzer",
      description: "An LLM-powered tool for summarizing and extracting insights from SOPs, CAPAs, and regulatory texts. Uses RAG with FAISS and custom prompts. Designed to evolve into a modular SaaS platform.",
      link: "https://github.com/OmarAbuLayla/Complyt",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "NYC School Test Scores Analysis",
      description: "Analyzed NYC public school test scores using data manipulation and visualization techniques to identify performance trends across districts.",
      link: "https://github.com/OmarAbuLayla/portfolio_old/blob/main/projects/NY%20Schools.py",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Movie Data Analysis",
      description: "Explored movie data to analyze relationships between budget, revenue, and ratings using Python, Pandas, and Seaborn.",
      link: "https://github.com/OmarAbuLayla/portfolio_old/blob/main/projects/netflix%20-%20Copy.py",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Supermarket Sales Analysis",
      description: "Analyzed supermarket sales data to identify trends in product performance, customer behavior, and branch efficiency.",
      link: "https://github.com/OmarAbuLayla/portfolio_old/blob/main/projects/Supermarket%20Analysis.py",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Pitch Analysis in Parkinson's Disease",
      description: "Analyzed vocal pitch data to identify differences between healthy individuals and those with Parkinson's Disease using Python, Pandas, Matplotlib, and Seaborn.",
      link: "https://github.com/OmarAbuLayla/portfolio_old/blob/main/projects/Parkinsons",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Breast Cancer Dataset Analysis",
      description: "Explored a Breast Cancer dataset to analyze tumor characteristics and their correlation with diagnosis using Python, Seaborn, and Matplotlib.",
      link: "https://github.com/OmarAbuLayla/portfolio_old/blob/main/projects/Breastcancer.py",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Diabetes Prediction Model",
      description: "Developed a logistic regression model using Statsmodels to predict diabetes based on glucose levels, with real-time user input.",
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/prediction_model.py",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Heart Failure Risk Analysis",
      description: "Evaluated logistic regression models on clinical records to predict heart failure risk using features like smoking, diabetes, and high blood pressure.",
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/heart_failure.py",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Car Insurance Claim Prediction",
      description: "Mapped driving experience to numeric values and used logistic regression to predict if an insurance claim will be filed based on user input.",
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/car_insurance_to_predict.py",
      icon: <Car className="w-6 h-6" />
    },
    {
      title: "Soil Measures Crop Prediction",
      description: "Evaluated soil nutrient features using multinomial logistic regression to predict crop type and identified the best predictor based on F1-scores.",
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/project10.py",
      icon: <Grape className="w-6 h-6" />
    },
    {
      title: "Penguins Clustering Analysis",
      description: "Applied K-Means clustering on the penguins dataset after scaling numeric features and computed cluster-wise averages.",
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/project11.py",
      icon: <TreePine className="w-6 h-6" />
    },
    {
      title: "Rental Duration Prediction",
      description: "Built a K-Nearest Neighbors regression model to predict rental duration based on amount paid, release year, rental rate, and movie length.",
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/Movie_pred_from_user.py",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Airbnb Market Analysis",
      description: "Merged multiple Airbnb datasets to evaluate listing details including pricing, review dates, and room types, with visualizations of average prices and listing counts.",
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/Airbnb_project.py",
      icon: <Home className="w-6 h-6" />
    },
    {
      title: "Mall Customers Clustering",
      description: "Segmented mall customers using K-Means clustering based on annual income and spending score, employing the elbow method to determine optimal clusters.",
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/Mall.py",
      icon: <ShoppingCart className="w-6 h-6" />
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "JavaScript", level: 85, icon: "🌐" },
        { name: "SQL", level: 90, icon: "🗄️" },
        { name: "R", level: 80, icon: "📊" }
      ]
    },
    {
      category: "AI & Machine Learning",
      items: [
        { name: "TensorFlow", level: 88, icon: "🤖" },
        { name: "PyTorch", level: 85, icon: "🔥" },
        { name: "Scikit-learn", level: 92, icon: "🔬" },
        { name: "Pandas", level: 95, icon: "🐼" },
        { name: "NumPy", level: 93, icon: "🔢" }
      ]
    },
    {
      category: "Data Visualization",
      items: [
        { name: "Matplotlib", level: 90, icon: "📈" },
        { name: "Seaborn", level: 88, icon: "🎨" },
        { name: "Plotly", level: 85, icon: "📊" },
        { name: "Tableau", level: 80, icon: "📋" }
      ]
    },
    {
      category: "Cloud & Tools",
      items: [
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "Git", level: 90, icon: "🔄" },
        { name: "Jupyter", level: 95, icon: "📓" }
      ]
    }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Portfolio...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Omar Abu Layla
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Download CV Button */}
            <motion.button
              className="hidden md:flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              <span>Download CV</span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-2 space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors w-full justify-center">
                  <Download size={16} />
                  <span>Download CV</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
              alt="Omar Abu Layla"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Omar Abu Layla
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI Developer & Data Scientist
          </motion.p>
          
          <motion.p
            className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about Data Science, Machine Learning, and AI Development.<br/>
            Building intelligent solutions that make a difference.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-green-600 hover:text-green-600 transition-colors"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Journey</h3>
                <p className="text-gray-600 mb-4">
                  As an AI Developer and Data Scientist, I specialize in transforming raw data into actionable insights. My expertise spans across multiple domains including machine learning, data visualization, and intelligent system development.
                </p>
                <p className="text-gray-600 mb-6">
                  I specialize in building AI-powered applications, from medical diagnosis tools to regulatory compliance analyzers, combining cutting-edge LLM technology with robust data science foundations.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">DataCamp Certifications Highlights:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-green-600" />
                      <span>25 courses covering Python, data analysis, and ML</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-green-600" />
                      <span>4 certification exams with hands-on projects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-green-600" />
                      <span>Advanced topics: Statistical Analysis, SQL & Development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-green-600" />
                      <span>Real-world applications: Built forex and Google AI apps</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Current Focus</h3>
                <p className="text-gray-600 mb-4">
                  I specialize in building AI-powered applications, from medical diagnosis tools to regulatory compliance analyzers, combining cutting-edge LLM technology with robust data science foundations.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">AI Development</span>
                    </div>
                    <p className="text-gray-600">Local LLMs, RAG systems, chatbots</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-green-600" />
                      <span className="font-medium">Data Science</span>
                    </div>
                    <p className="text-gray-600">Predictive modeling, clustering, analysis</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Code className="w-4 h-4 text-purple-600" />
                      <span className="font-medium">Full-Stack</span>
                    </div>
                    <p className="text-gray-600">Flask, APIs, data pipelines</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-4 h-4 text-red-600" />
                      <span className="font-medium">Healthcare AI</span>
                    </div>
                    <p className="text-gray-600">Medical imaging, diagnostics</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-green-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </motion.div>

          {/* AI Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">AI Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {aiProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-2 border-green-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-green-600">{project.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-medium">Featured</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.link}
                      className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>View Project</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Data Projects */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Data Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-blue-600">{project.icon}</div>
                    <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium text-sm"
                  >
                    <Github size={14} />
                    <span>View Code</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-2xl mx-auto text-center">
            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's connect and discuss how we can work together to build intelligent solutions that make a difference.
            </motion.p>

            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="mailto:contact@omarabulayla.com"
                className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              <a
                href="https://linkedin.com/in/omarabulayla"
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/omarabulayla"
                className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">© 2025 Omar Abu Layla. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;