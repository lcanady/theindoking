import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
        Privacy Policy
      </h1>
      
      <div className="space-y-8">
        <section className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-semibold text-green-400">Our Commitment</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            At Indo King, we take your privacy seriously. This policy outlines how we handle your personal information and reflects our commitment to protecting your data.
          </p>
        </section>

        <section className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-semibold text-green-400">Information Collection</h2>
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              We collect only essential information needed to provide our services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email addresses for newsletter subscriptions</li>
              <li>Basic analytics data to improve our website experience</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-semibold text-green-400">Data Usage & Protection</h2>
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Your information is never shared, sold, or distributed to third parties. We use industry-standard security measures to protect your data.
            </p>
            <p>
              Email addresses are used exclusively for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sending industry updates and insights</li>
              <li>Community announcements</li>
              <li>Important service updates</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions about our privacy practices or would like to update your preferences, please contact us at{' '}
            <a href="mailto:lem@theindoking.com" className="text-green-400 hover:underline">
              lem@theindoking.com
            </a>
          </p>
        </section>

        <p className="text-sm text-gray-400 text-center">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
      </div>
    </div>
  );
}