import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Users, Send, Settings, ArrowRight, CheckCircle, Zap, Target, BarChart3 } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Organize and manage your contacts with advanced filtering and search capabilities.',
      color: 'text-blue-500',
    },
    {
      icon: Send,
      title: 'Email Campaigns',
      description: 'Send personalized email campaigns with tracking and analytics.',
      color: 'text-green-500',
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'Target the right prospects with intelligent contact discovery.',
      color: 'text-purple-500',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Tracking',
      description: 'Track opens, clicks, and responses with detailed analytics.',
      color: 'text-orange-500',
    },
  ];

  const stats = [
    { label: 'Emails Sent', value: '10M+' },
    { label: 'Active Users', value: '50K+' },
    { label: 'Average Open Rate', value: '68%' },
    { label: 'Response Rate', value: '12%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-brand">
              <Mail className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Professional Email <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Outreach Platform
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Find contacts, build relationships, and run successful email campaigns 
              with Hunter Pro's powerful outreach platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="hunter-btn-primary flex items-center justify-center gap-2 text-lg">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/login" className="hunter-btn-secondary flex items-center justify-center gap-2 text-lg">
                Sign In
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything you need for email outreach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hunter Pro provides all the tools you need to find contacts, 
              send personalized emails, and track your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="hunter-card group hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 ${feature.color} bg-current/10 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground">
              Choose your path to email outreach success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/contacts" 
              className="hunter-card hover:shadow-lg transition-all duration-300 group"
            >
              <Users className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-semibold mb-2">Manage Contacts</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Add and organize your contacts with our powerful contact management system.
              </p>
              <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                View Contacts <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link 
              to="/send" 
              className="hunter-card hover:shadow-lg transition-all duration-300 group"
            >
              <Zap className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-semibold mb-2">Send Campaign</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Create and send personalized email campaigns to your prospects.
              </p>
              <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Start Sending <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link 
              to="/smtp" 
              className="hunter-card hover:shadow-lg transition-all duration-300 group"
            >
              <Settings className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="font-semibold mb-2">Setup SMTP</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connect your email account to start sending campaigns.
              </p>
              <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Configure SMTP <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-xl">Hunter Pro</span>
          </div>
          <p className="text-center text-muted-foreground">
            Professional email outreach platform for modern businesses
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
