import React, { useState, useEffect } from 'react';
import './App.css';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const aiProjects = [
    {
      title: "Hayat AI - Medical Assistant",
      description: "A two-part AI system for medical diagnostics: Hayat 2.0 analyzes medical images (X-ray/MRI) and Hayat 1.0 explains diagnoses in Arabic using LLMs. The backend integrates image classification and LLM communication through Flask APIs.",
      tech: ["Python", "LLMs", "Flask API", "Image Classification", "Arabic NLP"],
      link: "https://github.com/OmarAbuLayla/Hayat",
      featured: true
    },
    {
      title: "Complyt AI - Regulatory Compliance Analyzer",
      description: "An LLM-powered tool for summarizing and extracting insights from SOPs, CAPAs, and regulatory texts. Uses RAG with FAISS and custom prompts. Designed to evolve into a modular SaaS platform.",
      tech: ["LLMs", "RAG", "FAISS", "Python", "SaaS"],
      link: "https://github.com/OmarAbuLayla/Complyt",
      featured: true
    },
    {
      title: "Insightify – AI-Powered Data Storytelling",
      description: "A local LLM-powered tool that transforms raw CSV datasets into structured, human-readable insights. Designed for analysts, strategists, and decision-makers to quickly understand trends, risks, and recommendations — without writing a single line of code.",
      tech: ["LLMs", "Pandas", "Flask", "Data Analysis", "Private AI"],
      link: "#",
      featured: true
    },
    {
      title: "Local AI-Powered Customer Service Chatbot",
      description: "A local, AI-powered chatbot designed for customer service. It interacts with customers to understand their needs and extract valuable insights, such as common issues, preferences, and behaviors. These insights are then sent to the seller or service provider to help improve decision-making, customer engagement, and overall service strategies. The chatbot is fully integrated with a backend API to provide real-time responses and capture data for ongoing improvement.",
      tech: ["Local LLMs", "Flask", "RAG", "HuggingFace", "Python", "CSV Logging", "Ngrok"],
      link: "#", 
      featured: true
    }
  ];

  const dataProjects = [
    {
      title: "NYC School Test Scores Analysis",
      description: "Analyzed NYC public school test scores using data manipulation and visualization techniques to identify performance trends across districts.",
      tech: ["Python", "Pandas", "Data Visualization"],
      link: "https://github.com/OmarAbuLayla/portfolio_old/blob/main/projects/NY%20Schools.py"
    },
    {
      title: "Movie Data Analysis",
      description: "Explored movie data to analyze relationships between budget, revenue, and ratings using Python, Pandas, and Seaborn.",
      tech: ["Python", "Pandas", "Seaborn"],
      link: "https://github.com/OmarAbuLayla/portfolio_old/blob/main/projects/netflix%20-%20Copy.py"
    },
    {
      title: "Supermarket Sales Analysis",
      description: "Analyzed supermarket sales data to identify trends in product performance, customer behavior, and branch efficiency.",
      tech: ["Python", "Data Analysis", "Business Intelligence"],
      link: "https://github.com/OmarAbuLayla/portfolio_old/blob/main/projects/Supermarket%20Analysis.py"
    },
    {
      title: "Pitch Analysis in Parkinson's Disease",
      description: "Analyzed vocal pitch data to identify differences between healthy individuals and those with Parkinson's Disease using Python, Pandas, Matplotlib, and Seaborn.",
      tech: ["Python", "Medical Data", "Statistical Analysis"],
      link: "https://github.com/OmarAbuLayla/portfolio_old/blob/main/projects/Parkinsons"
    },
    {
      title: "Breast Cancer Dataset Analysis",
      description: "Explored a Breast Cancer dataset to analyze tumor characteristics and their correlation with diagnosis using Python, Seaborn, and Matplotlib.",
      tech: ["Python", "Medical Data", "Machine Learning"],
      link: "https://github.com/OmarAbuLayla/portfolio_old/blob/main/projects/Breastcancer.py"
    },
    {
      title: "FIFA World Cup Goals Analysis",
      description: "Analyzed goal distributions in men's and women's FIFA World Cup matches using Python, Pandas, and Seaborn. Applied the Mann-Whitney U test to compare scoring patterns.",
      tech: ["Python", "Statistical Testing", "Sports Analytics"] 
    },
    {
      title: "Diabetes Prediction Model",
      description: "Developed a logistic regression model using Statsmodels to predict diabetes based on glucose levels, with real-time user input.",
      tech: ["Machine Learning", "Logistic Regression", "Predictive Modeling"],
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/prediction_model.py"
    },
    {
      title: "Heart Failure Risk Analysis",
      description: "Evaluated logistic regression models on clinical records to predict heart failure risk using features like smoking, diabetes, and high blood pressure.",
      tech: ["Machine Learning", "Healthcare", "Risk Analysis"],
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/heart_failure.py"
    },
    {
      title: "Car Insurance Claim Prediction",
      description: "Mapped driving experience to numeric values and used logistic regression to predict if an insurance claim will be filed based on user input.",
      tech: ["Machine Learning", "Insurance", "Predictive Analytics"],
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/car_insurance_to_predict.py"
    },
    {
      title: "Soil Measures Crop Prediction",
      description: "Evaluated soil nutrient features using multinomial logistic regression to predict crop type and identified the best predictor based on F1-scores.",
      tech: ["Machine Learning", "Agriculture", "Classification"],
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/project10.py"
    },
    {
      title: "Penguins Clustering Analysis",
      description: "Applied K-Means clustering on the penguins dataset after scaling numeric features and computed cluster-wise averages.",
      tech: ["Unsupervised Learning", "K-Means", "Data Clustering"],
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/project11.py"
    },
    {
      title: "Rental Duration Prediction",
      description: "Built a K-Nearest Neighbors regression model to predict rental duration based on amount paid, release year, rental rate, and movie length.",
      tech: ["KNN", "Regression", "Predictive Modeling"],
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/Movie_pred_from_user.py"
    },
    {
      title: "Airbnb Market Analysis",
      description: "Merged multiple Airbnb datasets to evaluate listing details including pricing, review dates, and room types, with visualizations of average prices and listing counts.",
      tech: ["Data Merging", "Market Analysis", "Visualization"],
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/Airbnb_project.py"
    },
    {
      title: "Mall Customers Clustering",
      description: "Segmented mall customers using K-Means clustering based on annual income and spending score, employing the elbow method to determine optimal clusters.",
      tech: ["Customer Segmentation", "K-Means", "Business Analytics"],
      link: "https://github.com/OmarAbuLayla/portfolio/blob/main/projects/Mall.py"
    }
  ];

  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "🗃️" },
    { name: "Pandas", icon: "🐼" },
    { name: "NumPy", icon: "🔢" },
    { name: "Matplotlib", icon: "📊" },
    { name: "Seaborn", icon: "📈" },
    { name: "Machine Learning", icon: "🤖" },
    { name: "Statistical Analysis", icon: "📊" },
    { name: "Data Cleaning", icon: "🧹" },
    { name: "Exploratory Data Analysis (EDA)", icon: "🔍" },
    { name: "Generative AI", icon: "✨" },
    { name: "Transformers (LLMs)", icon: "🧠" },
    { name: "RAG Pipelines", icon: "🔗" },
    { name: "Hugging Face", icon: "🤗" },
    { name: "Embeddings & FAISS", icon: "🎯" },
    { name: "OpenAI API", icon: "⚡" },
    { name: "Vector Search", icon: "🔍" },
    { name: "Flask APIs", icon: "🌐" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold text-gray-900">Omar Abu Layla</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-[#e8f5e9] rounded-full transition-all duration-300"
                >
                  {item}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1alHT7O3X6p2NCR_BzTwhz2fY-3_oX_Aa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#34a853] text-white text-sm font-medium rounded-full hover:bg-[#2d8f47] transition-all duration-300 transform hover:scale-105"
              >
                Download CV
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-[#e8f5e9] transition-all duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item.toLowerCase());
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-[#e8f5e9] rounded-md transition-all duration-300"
                  >
                    {item}
                  </button>
                ))}
                <a
                  href="https://drive.google.com/file/d/1alHT7O3X6p2NCR_BzTwhz2fY-3_oX_Aa/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-3 py-2 mt-4 bg-[#34a853] text-white font-medium rounded-md hover:bg-[#2d8f47] transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1644325349124-d1756b79dd42)'
          }}
        ></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="https://omarabulayla.github.io/portfolio_old/pics/Omar2.png"
              alt="Omar Abu Layla"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 border-4 border-[#e8f5e9] shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-4 animate-fade-in">
            Omar Abu Layla
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-6 animate-fade-in-delay-1">
            AI Developer & Data Scientist
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Passionate about Data Science, Machine Learning, and AI Development. 
            Building intelligent solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-[#34a853] text-white font-medium rounded-full hover:bg-[#2d8f47] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-[#34a853] hover:text-[#34a853] transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isVisible.about ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">About Me</h2>
            <div className="w-20 h-1 bg-[#34a853] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="bg-cover bg-center bg-no-repeat rounded-2xl h-96 shadow-xl"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86)' }}
            ></div>
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Professional Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                As an Associate Data Scientist certified through DataCamp's comprehensive 120-hour career track, 
                I've mastered the complete data science pipeline from data wrangling to machine learning deployment.
              </p>
              <div className="bg-[#e8f5e9] p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">DataCamp Certification Highlights:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 23 courses covering Python, data analysis, and ML</li>
                  <li>• 3 certification exams with hands-on projects</li>
                  <li>• Advanced topics: Statistical Analysis, SQL, AI Development</li>
                  <li>• Real-world applications: Built Hayat AI and Complyt AI</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I specialize in building AI-powered applications, from medical diagnostic tools to regulatory 
                compliance analyzers, combining cutting-edge LLM technology with robust data science foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 bg-gray-50 ${isVisible.skills ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Technical Skills</h2>
            <div className="w-20 h-1 bg-[#34a853] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gradient-to-br from-[#e8f5e9] to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#34a853]/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{skill.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isVisible.projects ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Featured Work</h2>
            <div className="w-20 h-1 bg-[#34a853] mx-auto"></div>
          </div>

          {/* Featured AI Projects */}
          <div className="mb-20">
            <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">AI Development Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {aiProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-gradient-to-br from-[#e8f5e9] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#34a853]/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#34a853] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white text-[#34a853] text-sm font-medium rounded-full border border-[#34a853]/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#34a853] font-medium hover:text-[#2d8f47] transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Data Science Projects */}
          <div>
            <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">Data Science Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white text-blue-600 text-xs font-medium rounded-full border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gray-50 ${isVisible.contact ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Let's Connect</h2>
          <div className="w-20 h-1 bg-[#34a853] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Ready to collaborate on your next AI or data science project? 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:O.Abulayla@outlook.com"
              className="px-8 py-4 bg-[#34a853] text-white font-medium rounded-full hover:bg-[#2d8f47] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/omar-abulayla/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#34a853] text-[#34a853] font-medium rounded-full hover:bg-[#34a853] hover:text-white transition-all duration-300"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500">
              Email: <span className="font-medium">O.Abulayla@outlook.com</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;