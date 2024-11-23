import React, { useState } from 'react';
import { Instagram, Mail, ArrowRight, LightbulbIcon, BuildingIcon, Users } from 'lucide-react';
import { Modal } from './components/Modal';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import logo from './logo.svg';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative">
      {/* Main content */}
      <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-between">
        {/* Header */}
        <header className="text-center pt-8">
          <div className="flex items-center justify-center mb-8">
            <img src={logo} alt="Indo King Logo" className="w-48 h-48 md:w-64 md:h-64" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
            Indo King
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Bridging Oregon's Cannabis Community
          </p>
        </header>

        {/* Main section */}
        <main className="flex-grow flex items-center justify-center py-16">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Cultivating Connections, Growing Together
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                <div className="flex justify-center mb-4">
                  <LightbulbIcon className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Industry Insights</h3>
                <p className="text-gray-300">Gathering deep insights to understand and address industry pain points</p>
              </div>
              <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                <div className="flex justify-center mb-4">
                  <BuildingIcon className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Building Solutions</h3>
                <p className="text-gray-300">Creating innovative ways to strengthen industry connections</p>
              </div>
              <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                <div className="flex justify-center mb-4">
                  <Users className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Community Focus</h3>
                <p className="text-gray-300">Dedicated to fostering a stronger, more connected cannabis community</p>
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="max-w-md mx-auto">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-semibold mb-3 text-green-400">Join Our Community</h3>
                <p className="text-gray-300">
                  Stay connected with the latest industry insights, community updates, and exclusive content. Be the first to know about our initiatives to strengthen Oregon's cannabis ecosystem.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 backdrop-blur-sm placeholder-gray-400"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-green-400 rounded-full hover:bg-green-500 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 text-gray-900" />
                  </button>
                </div>
                {submitted && (
                  <p className="text-green-400 text-sm">Thank you for joining our community!</p>
                )}
              </form>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center pb-8">
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://instagram.com/theindoking" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-green-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="mailto:lem@theindoking.com" 
              className="hover:text-green-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <button 
            onClick={() => setShowPrivacy(true)} 
            className="text-sm text-gray-400 hover:text-green-400 transition-colors"
          >
            Privacy Policy
          </button>
          <p className="text-sm text-gray-500 mt-2">
            © 2024 Indo King. All rights reserved.
          </p>
        </footer>
      </div>

      <Modal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)}>
        <PrivacyPolicy />
      </Modal>
    </div>
  );
}

export default App;