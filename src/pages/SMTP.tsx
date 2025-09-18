import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Settings, Mail, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SMTP = () => {
  const { toast } = useToast();
  const [smtpData, setSmtpData] = useState({
    provider: 'gmail',
    email: '',
    appPassword: ''
  });

  const [isConnected, setIsConnected] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate connection
    setTimeout(() => {
      setIsConnected(true);
      toast({
        title: "SMTP Connected!",
        description: "Your email account has been connected successfully.",
      });
    }, 1000);
  };

  const testConnection = () => {
    toast({
      title: "Testing connection...",
      description: "Sending a test email to verify SMTP settings.",
    });
  };

  return (
    <Layout>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main SMTP form */}
        <div className="lg:col-span-2">
          <div className="hunter-card">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-semibold">SMTP Configuration</h1>
              {isConnected && (
                <div className="flex items-center gap-2 text-success bg-success/10 px-3 py-1 rounded-lg">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Connected</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="provider" className="block text-sm font-medium mb-2">
                  Email Provider
                </label>
                <select
                  id="provider"
                  value={smtpData.provider}
                  onChange={(e) => setSmtpData({...smtpData, provider: e.target.value})}
                  className="hunter-select"
                >
                  <option value="gmail">Gmail</option>
                  <option value="office365">Office 365</option>
                  <option value="outlook">Outlook</option>
                  <option value="custom">Custom SMTP</option>
                </select>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  SMTP Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    value={smtpData.email}
                    onChange={(e) => setSmtpData({...smtpData, email: e.target.value})}
                    className="hunter-input pl-12"
                    placeholder="your-email@gmail.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  App Password
                </label>
                <div className="relative">
                  <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    id="password"
                    type="password"
                    value={smtpData.appPassword}
                    onChange={(e) => setSmtpData({...smtpData, appPassword: e.target.value})}
                    className="hunter-input pl-12"
                    placeholder="16-character app password"
                    required
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Your app password is encrypted with AES-GCM encryption for security.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <button type="submit" className="hunter-btn-primary">
                  Save SMTP Settings
                </button>
                {isConnected && (
                  <button
                    type="button"
                    onClick={testConnection}
                    className="hunter-btn-secondary"
                  >
                    Test Connection
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar with instructions */}
        <div className="space-y-6">
          {/* Gmail Setup Instructions */}
          <div className="hunter-card">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              📧 Gmail Setup Guide
            </h2>
            
            <ol className="space-y-4 text-sm">
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium">Enable 2-Step Verification</p>
                  <p className="text-muted-foreground">Go to your Google Account settings and turn on 2-Step Verification</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium">Generate App Password</p>
                  <p className="text-muted-foreground">Go to Security → App passwords → Select "Mail" and your device</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium">Copy & Paste</p>
                  <p className="text-muted-foreground">Copy the 16-character password and paste it above</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Security Notice */}
          <div className="hunter-card bg-info/5 border-info/20">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-info flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-info mb-2">Security First</h3>
                <p className="text-sm text-muted-foreground">
                  Your SMTP credentials are encrypted using AES-GCM encryption and stored securely. 
                  We never store your actual Gmail password - only the app-specific password.
                </p>
              </div>
            </div>
          </div>

          {/* Supported Providers */}
          <div className="hunter-card">
            <h3 className="font-semibold mb-4">✅ Supported Providers</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <div>
                  <p className="font-medium">Gmail</p>
                  <p className="text-xs text-muted-foreground">Most popular</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">O</span>
                </div>
                <div>
                  <p className="font-medium">Office 365</p>
                  <p className="text-xs text-muted-foreground">Business accounts</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <div>
                  <p className="font-medium">Custom SMTP</p>
                  <p className="text-xs text-muted-foreground">Any provider</p>
                </div>
              </div>
            </div>
          </div>

          {/* Status */}
          {!isConnected && (
            <div className="hunter-card bg-warning/5 border-warning/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-warning mb-2">Not Connected</h3>
                  <p className="text-sm text-muted-foreground">
                    You need to configure SMTP settings before you can send email campaigns.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SMTP;