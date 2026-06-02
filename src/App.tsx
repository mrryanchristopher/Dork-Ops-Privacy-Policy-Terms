/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans transition-colors">
      <header className="py-8 bg-white/5 backdrop-blur-sm border-b border-zinc-700">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <img 
            src="https://pbs.twimg.com/media/HGin1T5boAAqBaD?format=png&name=small" 
            alt="Dork Ops Logo" 
            className="w-24 h-24 mb-6"
            referrerPolicy="no-referrer"
          />
          <h1 className="text-3xl font-semibold tracking-tight text-white">Dork Ops Legal</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex border-b border-zinc-700 mb-8">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`py-2 px-6 text-lg font-medium transition-colors ${
              activeTab === 'privacy' 
                ? 'border-b-2 border-zinc-500 text-white' 
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`py-2 px-6 text-lg font-medium transition-colors ${
              activeTab === 'terms' 
                ? 'border-b-2 border-zinc-500 text-white' 
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Terms and Conditions
          </button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-zinc-100 space-y-8 text-lg leading-relaxed max-w-3xl"
        >
          {activeTab === 'privacy' ? (
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">Privacy Policy</h2>
              <p>At Dork Ops, we are committed to protecting your privacy. Dork Ops and Dork Ops Pro are tools designed to help you generate search queries using AI. We believe in transparency and keeping things simple.</p>
              
              <h3 className="text-2xl font-semibold text-white">Information We Collect</h3>
              <p>We do not collect or store extraneous personal information. Our commitment to privacy is paramount.</p>
              
              <h3 className="text-2xl font-semibold text-white">Google Authentication</h3>
              <p>We use Google Authentication to manage user identity securely:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Account Creation:</strong> We use your Google account info only to verify your identity.</li>
                  <li><strong>Pro Users:</strong> For Dork Ops Pro, we use your authentication to save your search history for your convenience.</li>
                </ul>
              
              <h3 className="text-2xl font-semibold text-white">Contact Us</h3>
              <p>If you have any questions regarding your privacy, please contact us at <a href="mailto:themediamultitool@gmail.com" className="text-lime-400">themediamultitool@gmail.com</a>.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">Terms and Conditions</h2>
              <p>Welcome to Dork Ops. By using our applications, you agree to the following terms and conditions.</p>

              <h3 className="text-2xl font-semibold text-white">Service Description</h3>
              <p>Dork Ops and Dork Ops Pro provide AI-powered assistance for generating search queries. You may use these queries in various search engines at your discretion.</p>

              <h3 className="text-2xl font-semibold text-white">User Responsibilities</h3>
              <p>Users must use the service responsibly. Harassment, abuse, or use of the service for illegal activities is strictly prohibited.</p>

              <h3 className="text-2xl font-semibold text-white">Limitation of Liability</h3>
              <p>The service is provided "as-is". We are not liable for any damages resulting from the use or inability to use our applications.</p>
              
              <h3 className="text-2xl font-semibold text-white">Contact Us</h3>
              <p>For inquiries, please contact <a href="mailto:themediamultitool@gmail.com" className="text-lime-400">themediamultitool@gmail.com</a>.</p>
            </div>
          )}
        </motion.div>

        <section className="mt-16 pt-8 border-t border-zinc-700">
          <h3 className="text-xl font-semibold text-white mb-4">More from Media Multi-Tool LLC</h3>
          <p className="text-zinc-400 mb-6">Explore our suite of innovative utilities and applications designed to make your digital life easier.</p>
          <a
            href="https://play.google.com/store/apps/developer?id=Media+Multi-Tool+LLC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-lime-500 text-zinc-950 font-semibold px-6 py-3 rounded-lg hover:bg-lime-400 transition-colors"
          >
            Visit Our Play Store
          </a>
        </section>
      </main>
    </div>
  );
}

