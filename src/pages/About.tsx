import React from 'react';
import Layout from '@/components/Layout';
import { Users, Target, Zap, Shield, Mail, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Advanced email outreach with intelligent contact management and personalization.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Send thousands of personalized emails with smart delays and batch processing.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encrypted data storage and secure SMTP connections.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Trusted by professionals worldwide with industry-leading open rates.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Former sales director with 10+ years in email marketing automation.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Ex-Google engineer specializing in scalable email infrastructure.'
    },
    {
      name: 'Emma Wilson',
      role: 'Head of Product',
      bio: 'UX expert focused on creating intuitive outreach workflows.'
    }
  ];

  return (
    <Layout>
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold">About Hunter Pro</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing email outreach with intelligent automation, 
            helping professionals connect with prospects more effectively than ever before.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="hunter-card text-center bg-gradient-subtle">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To empower sales professionals, recruiters, and business owners with the most 
            advanced email outreach platform. We believe that meaningful connections drive 
            business success, and our tools make those connections happen at scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="hunter-card text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Our Story */}
        <div className="hunter-card">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
            <p>
              Founded in 2024, Hunter Pro emerged from a simple frustration: existing email 
              outreach tools were either too basic or overwhelmingly complex. Our founders, 
              with backgrounds in sales automation and software engineering, set out to create 
              the perfect balance.
            </p>
            <p>
              Today, Hunter Pro powers millions of personalized emails monthly, helping 
              businesses of all sizes build meaningful relationships with their prospects. 
              From solopreneurs to enterprise sales teams, our platform scales with your needs.
            </p>
            <p>
              We're committed to continuous innovation, incorporating the latest in AI and 
              automation while maintaining the human touch that makes outreach successful.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="hunter-card text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="hunter-card bg-gradient-subtle">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Privacy First
              </h3>
              <p className="text-muted-foreground">
                Your data and your contacts' privacy are paramount. We employ industry-leading 
                security measures and never share or sell your information.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Results Driven
              </h3>
              <p className="text-muted-foreground">
                Every feature we build is designed to improve your outreach success. We measure 
                our success by your results.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Innovation
              </h3>
              <p className="text-muted-foreground">
                We're constantly pushing the boundaries of what's possible in email outreach, 
                incorporating AI and automation thoughtfully.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Community
              </h3>
              <p className="text-muted-foreground">
                Our users are at the heart of everything we do. We listen, learn, and build 
                based on your feedback and needs.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="hunter-card text-center bg-gradient-primary text-white">
          <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Outreach?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of professionals who trust Hunter Pro for their email campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;