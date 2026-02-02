import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, FolderOpen, Cloud, FileText, Smartphone, Building2, 
  Home, Users, Heart, Star, Check, ChevronDown, ChevronRight,
  Mail, Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(null)

  // Scroll effect for header
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50)
    })
  }

  const faqs = [
    {
      question: "How does Paper Tiger work?",
      answer: "Paper Tiger is a simple yet powerful indexing system that helps you track both physical and digital documents. You assign each item a location and keywords, making it easy to find anything in seconds using our search feature."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption (256-bit SSL) to protect your data. All information is stored on secure servers with regular backups, and we never share your data with third parties."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! There are no long-term contracts. You can cancel your subscription at any time from your account settings, and you'll retain access until the end of your billing period."
    },
    {
      question: "Do I need to scan my documents?",
      answer: "No, scanning is optional. Paper Tiger works by indexing the location and contents of your documents, whether they're physical or digital. You can add scanned images if you want, but it's not required."
    },
    {
      question: "Can multiple people use one account?",
      answer: "Yes! Our Professional and Business plans support multiple users with different permission levels, making it perfect for teams and organizations."
    },
    {
      question: "What if I need help getting started?",
      answer: "We offer comprehensive onboarding support, video tutorials, and a dedicated customer success team. Plus, our knowledge base has answers to common questions and best practices."
    },
    {
      question: "Can I import existing data?",
      answer: "Yes, we provide import tools for common formats like Excel, CSV, and other document management systems. Our support team can help you migrate your existing data smoothly."
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <nav className="container mx-auto max-w-7xl px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-gray-900">Paper Tiger</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#products" className="text-gray-600 hover:text-primary transition-colors font-medium">Products</a>
              <a href="#solutions" className="text-gray-600 hover:text-primary transition-colors font-medium">Solutions</a>
              <a href="#resources" className="text-gray-600 hover:text-primary transition-colors font-medium">Resources</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors font-medium">Pricing</a>
              <a href="#support" className="text-gray-600 hover:text-primary transition-colors font-medium">Support</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors font-medium">About</a>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden md:block text-gray-600 hover:text-primary px-5 py-2 rounded-lg font-semibold transition-colors">
                Sign In
              </button>
              <button className="bg-coral hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-bold transition-all transform hover:scale-105 shadow-md min-h-[44px]">
                Start Free Trial
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Get Organized.<br />
                Stay Organized.<br />
                <span className="text-primary">Forever.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                The powerful document indexing system that helps you find anything in seconds—whether it's physical or digital.
              </p>
              
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors text-lg min-h-[56px]"
                  />
                  <button className="bg-coral hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg whitespace-nowrap min-h-[56px]">
                    Start Your Free Trial
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center sm:text-left">
                  No credit card required
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl shadow-2xl p-8 transform rotate-1">
                <div className="bg-white rounded-xl p-6 transform -rotate-1">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" 
                    alt="Document Organization Interface"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="py-16 px-4 md:px-6 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center text-gray-500 font-semibold mb-10 text-lg">
            Trusted by thousands of businesses and individuals
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
            <div className="text-4xl font-bold text-gray-400">Microsoft</div>
            <div className="text-4xl font-bold text-gray-400">Amazon</div>
            <div className="text-4xl font-bold text-gray-400">Google</div>
            <div className="text-4xl font-bold text-gray-400">IBM</div>
            <div className="text-4xl font-bold text-gray-400">Oracle</div>
            <div className="text-4xl font-bold text-gray-400">Dell</div>
          </div>
        </div>
      </section>

      {/* PROBLEM-SOLUTION */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Stop Wasting Time Searching for Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The average person spends 4.5 hours per week searching for documents. Paper Tiger eliminates that frustration with intelligent indexing and instant search.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning-Fast Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Find any document in seconds with our powerful keyword search. No more digging through boxes or folders—just type and find.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FolderOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Organization</h3>
              <p className="text-gray-600 leading-relaxed">
                Organize both physical and digital documents in one centralized system. Create custom categories and assign multiple keywords.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Access Anywhere</h3>
              <p className="text-gray-600 leading-relaxed">
                Cloud-based access means you can search your document index from any device, anywhere in the world. Desktop, tablet, or mobile.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURE SHOWCASE - ZIGZAG */}
      <section className="py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-7xl space-y-24">
          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80"
                alt="Index Everything"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Index Everything
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Create a complete inventory of all your documents—physical files, digital files, boxes, folders, binders, and more. Assign locations and keywords to make everything searchable.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Index physical and digital documents in one system</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Assign multiple keywords and custom categories</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Track exact locations with our numbering system</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Find Anything in Seconds
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Our powerful search engine lets you find documents instantly using keywords, dates, categories, or any combination. No more wasted time hunting through files.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Instant keyword search across all documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Advanced filters by date, category, and location</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Save frequent searches for one-click access</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Find Anything"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Feature 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                alt="Access Anywhere"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Access from Anywhere
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Work from home, the office, or on the go. Paper Tiger's cloud-based system syncs across all your devices so your document index is always at your fingertips.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Full-featured web, desktop, and mobile apps</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Real-time sync across all devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Offline mode for working without internet</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Perfect for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From solo entrepreneurs to large enterprises, Paper Tiger adapts to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary transition-all transform hover:-translate-y-2"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Business</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamline operations and keep all your business documents organized. Perfect for teams of 1-50 people.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary transition-all transform hover:-translate-y-2"
            >
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Home Office</h3>
              <p className="text-gray-600 leading-relaxed">
                Manage personal files, tax documents, receipts, and household paperwork with ease.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary transition-all transform hover:-translate-y-2"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-gray-600 leading-relaxed">
                Scale to thousands of users with advanced permissions, integrations, and dedicated support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary transition-all transform hover:-translate-y-2"
            >
              <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Non-Profit</h3>
              <p className="text-gray-600 leading-relaxed">
                Special pricing for non-profits to help manage grants, donor records, and compliance documents.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "Paper Tiger has completely transformed how we manage documents. What used to take hours now takes seconds. It's an absolute game-changer for our business."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JS
                </div>
                <div>
                  <p className="font-bold text-gray-900">Jennifer Smith</p>
                  <p className="text-gray-600 text-sm">CEO, TechStart Inc.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "As a lawyer, I deal with thousands of documents. Paper Tiger helps me find exactly what I need instantly. The ROI has been incredible—saved us countless billable hours."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MR
                </div>
                <div>
                  <p className="font-bold text-gray-900">Michael Rodriguez</p>
                  <p className="text-gray-600 text-sm">Partner, Rodriguez & Associates</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "I was drowning in paperwork at home. Paper Tiger gave me peace of mind knowing I can find any document—tax returns, warranties, receipts—in seconds. Highly recommend!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  SC
                </div>
                <div>
                  <p className="font-bold text-gray-900">Sarah Chen</p>
                  <p className="text-gray-600 text-sm">Homeowner & Freelancer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start with a 30-day free trial. No credit card required.
            </p>
            
            <div className="inline-flex bg-gray-100 rounded-full p-1 mb-12">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-primary shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-white text-primary shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual <span className="text-green-600 text-sm ml-1">(Save 20%)</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
              <p className="text-gray-600 mb-6">Perfect for individuals</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-gray-900">
                  ${billingCycle === 'monthly' ? '9' : '7'}
                </span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 500 items</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1 user account</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mobile & web access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Email support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cloud backup</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-lg font-bold transition-all transform hover:scale-105 min-h-[56px]">
                Get Started
              </button>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-8 shadow-2xl border-2 border-primary transform scale-105 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-coral text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <p className="text-blue-100 mb-6">For small teams</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">
                  ${billingCycle === 'monthly' ? '29' : '23'}
                </span>
                <span className="text-blue-100 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Up to 5,000 items</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Up to 5 users</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Advanced search filters</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Custom categories</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">API access</span>
                </li>
              </ul>
              <button className="w-full bg-coral hover:bg-orange-600 text-white py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg min-h-[56px]">
                Get Started
              </button>
            </motion.div>

            {/* Business Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
              <p className="text-gray-600 mb-6">For growing companies</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-gray-900">
                  ${billingCycle === 'monthly' ? '79' : '63'}
                </span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited items</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited users</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced permissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SSO integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SLA guarantee</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-lg font-bold transition-all transform hover:scale-105 min-h-[56px]">
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors min-h-[68px]"
                >
                  <span className="text-lg font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-primary via-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Ready to Get Organized?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Start your free 30-day trial today. No credit card required.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 border-2 border-white/30 rounded-lg focus:outline-none focus:border-white bg-white/10 text-white placeholder-blue-200 backdrop-blur-sm text-lg min-h-[56px]"
                />
                <button className="bg-coral hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl whitespace-nowrap min-h-[56px]">
                  Start Free Trial
                </button>
              </div>
              <p className="text-blue-100 text-sm mt-4">
                No credit card required • Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold text-white">Paper Tiger</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                The powerful document indexing system that helps you organize and find anything in seconds.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Products</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Desktop App</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press Kit</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">System Status</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm">
                © 2024 Paper Tiger. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App