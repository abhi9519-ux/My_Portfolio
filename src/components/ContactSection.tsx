import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Download, Send, DollarSign, Shield, CheckCircle, AlertCircle, Instagram, Twitter, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    budget: '',
    message: '',
    file: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToastMessage(null);

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("company", formData.company);
      formDataObj.append("email", formData.email);
      formDataObj.append("budget", formData.budget);
      formDataObj.append("message", formData.message);
      if (formData.file) {
        formDataObj.append("file", formData.file);
      }

      const response = await fetch("https://formspree.io/f/xzzanwlj", {
        method: "POST",
        body: formDataObj,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setToastMessage({
          type: "success",
          title: "Message Sent",
          description: "Thanks for your interest! I'll respond within 24 hours.",
        });

        setFormData({
          name: "",
          company: "",
          email: "",
          budget: "",
          message: "",
          file: null,
        });

        setTimeout(() => setToastMessage(null), 4000);
      } else {
        setToastMessage({
          type: "error",
          title: "Error",
          description: "Something went wrong. Please try again.",
        });
        setTimeout(() => setToastMessage(null), 4000);
      }
    } catch (error) {
      setToastMessage({
        type: "error",
        title: "Error",
        description: "Network issue. Please try again later.",
      });
      setTimeout(() => setToastMessage(null), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
    setFormData(prev => ({ ...prev, file }));
  };

  const showToast = (type, title, description) => {
    setToastMessage({ type, title, description });
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="relative">
      {/* Custom Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-lg p-4 shadow-2xl max-w-sm">
          <div className="flex items-center gap-3">
            {toastMessage.type === 'success' ? (
              <>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">{toastMessage.title}</div>
                  <div className="text-sm text-gray-300">{toastMessage.description}</div>
                </div>
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">{toastMessage.title}</div>
                  <div className="text-sm text-gray-300">{toastMessage.description}</div>
                </div>
              </>
            )}
            <button 
              onClick={() => setToastMessage(null)} 
              className="ml-auto text-gray-400 hover:text-white transition-colors text-lg"
            >
              ×
            </button>
          </div>
        </div>
      )}
      
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-green-400 border border-green-400/30 rounded-full px-4 py-2 bg-green-400/10">
              <Shield className="w-3 h-3" />
              <span className="font-medium">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              Secure Your Enterprise Today
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise engagements typically start at $10,000. Contact me for a custom security assessment quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <Send className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Request Security Assessment</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 focus:border-blue-500 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-200">
                        Company *
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 focus:border-blue-500 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
                      Business Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 focus:border-blue-500 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2 text-gray-200">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 focus:border-blue-500 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-plus">$100K+</option>
                      <option value="discuss">Let's Discuss</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 focus:border-blue-500 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none text-white placeholder-gray-400"
                      placeholder="Describe your security assessment needs, timeline, and any specific compliance requirements..."
                    />
                  </div>

                  <div>
                    <label htmlFor="file" className="block text-sm font-medium mb-2 text-gray-200">
                      Attach Documents (Optional)
                    </label>
                    <input
                      id="file"
                      name="file"
                      type="file"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 focus:border-blue-500 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white text-white"
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Attach any relevant documentation, network diagrams, or compliance requirements.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Security Assessment Request
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info & CTAs */}
            <div className="space-y-6">
             {/* Direct Contact */}
<div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:transform hover:-translate-y-1">
  <div className="flex items-center gap-3 mb-4">
    <Mail className="w-6 h-6 text-green-400" />
    <h3 className="text-xl font-bold text-white">Direct Contact</h3>
  </div>
  <div className="space-y-4">
    {/* Email */}
    <div className="flex items-center gap-3">
      <Mail className="w-4 h-4 text-gray-400" />
      <a 
        href="mailto:abhilokaman2000@gmail.com" 
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        abhilokaman2000@gmail.com
      </a>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-3">
      <Phone className="w-4 h-4 text-gray-400" />
      <a 
        href="tel:+9519165002" 
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        +91-9519165002
      </a>
    </div>

    {/* Location */}
    <div className="flex items-center gap-3">
      <MapPin className="w-4 h-4 text-gray-400" />
      <span className="text-gray-300">Pune, Maharashtra</span>
    </div>

    {/* Social Links */}
    <div className="flex items-center gap-4 mt-2">
      <a href="https://linkedin.com/in/abhay-kushwaha-96825623a" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-400 transition-colors" />
      </a>
      <a href="https://github.com/abhi9519-ux" target="_blank" rel="noopener noreferrer">
        <Github className="w-5 h-5 text-gray-400 hover:text-gray-200 transition-colors" />
      </a>
      <a href="https://x.com/composer_dark" target="_blank" rel="noopener noreferrer">
        <Twitter className="w-5 h-5 text-blue-400 hover:text-blue-300 transition-colors" />
      </a>
      <a href="https://instagram.com/abhaykushwaha667" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-5 h-5 text-pink-500 hover:text-pink-400 transition-colors" />
      </a>
    </div>
  </div>
</div>

              {/* Schedule Meeting */}
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Quick Consultation</h3>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Schedule a 30-minute consultation to discuss your security needs and get a custom quote.
                </p>
                <button 
                  className="w-full bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:transform hover:-translate-y-0.5"
                  onClick={() => window.open('https://calendly.com/abhilokaman2000', '_blank')}
                >
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </button>
              </div>

              {/* Download Sample Report */}
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <Download className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Sample Report</h3>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Download a sample VAPT report to see the quality and depth of our assessments.
                </p>
                <button 
                  className="w-full bg-transparent border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:transform hover:-translate-y-0.5"
                  onClick={() => showToast("success", "Sample Report", "Sample report download would be gated by email capture.")}
                >
                  <Download className="w-4 h-4" />
                  Get Sample Report
                </button>
              </div>

              {/* Pricing Note */}
              <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
                <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-white">Enterprise Pricing</h4>
                <p className="text-sm text-gray-300">
                  Enterprise security assessments typically start at <span className="text-green-400 font-semibold">$10,000 USD</span>. 
                  Custom scoping available for complex environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;