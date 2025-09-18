import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Send as SendIcon, Upload, Zap, Clock, FileText, Users, AlertTriangle, Image } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Send = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    subject: '',
    bodyHtml: '',
    includeResume: false,
    resumeId: '',
    delaySec: '',
    recipientsRaw: '',
    trackingImage: null as File | null
  });

  const [resumes] = useState([
    { id: '1', fileName: 'John_Doe_Resume.pdf' },
    { id: '2', fileName: 'Cover_Letter.pdf' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Campaign queued!",
      description: "Your email campaign has been queued and will start sending shortly.",
    });
  };

  const handleFileUpload = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Resume uploaded!",
      description: "Your resume has been uploaded successfully.",
    });
  };

  return (
    <Layout>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main compose form */}
        <div className="lg:col-span-2">
          <div className="hunter-card">
            <div className="flex items-center gap-3 mb-6">
              <SendIcon className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-semibold">Compose Campaign</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Email Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="hunter-input"
                  placeholder="Your compelling subject line..."
                />
              </div>

              <div>
                <label htmlFor="body" className="block text-sm font-medium mb-2">
                  Email Body <span className="text-muted-foreground">(HTML supported)</span>
                </label>
                <textarea
                  id="body"
                  value={formData.bodyHtml}
                  onChange={(e) => setFormData({...formData, bodyHtml: e.target.value})}
                  className="hunter-textarea min-h-[200px]"
                  placeholder="<p>Hi {{FirstName}},</p>

<p>I hope this email finds you well. I'm reaching out because...</p>

<p>Best regards,<br>Your name</p>"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-4 border border-border rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.includeResume}
                      onChange={(e) => setFormData({...formData, includeResume: e.target.checked})}
                      className="w-4 h-4 text-primary"
                    />
                    <FileText className="w-5 h-5 text-muted-foreground" />
                    <span>Attach resume</span>
                  </label>
                  
                  {formData.includeResume && (
                    <select
                      value={formData.resumeId}
                      onChange={(e) => setFormData({...formData, resumeId: e.target.value})}
                      className="hunter-select"
                    >
                      <option value="">— Select resume —</option>
                      {resumes.map(resume => (
                        <option key={resume.id} value={resume.id}>
                          {resume.fileName}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                <div>
                  <label htmlFor="delay" className="block text-sm font-medium mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Delay configuration
                  </label>
                  <Select value={formData.delaySec} onValueChange={(value) => setFormData({...formData, delaySec: value})}>
                    <SelectTrigger className="hunter-select">
                      <SelectValue placeholder="Select delay between emails" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4">4 seconds</SelectItem>
                      <SelectItem value="6">6 seconds</SelectItem>
                      <SelectItem value="8">8 seconds</SelectItem>
                      <SelectItem value="10">10 seconds</SelectItem>
                      <SelectItem value="12">12 seconds</SelectItem>
                      <SelectItem value="14">14 seconds</SelectItem>
                      <SelectItem value="16">16 seconds</SelectItem>
                      <SelectItem value="18">18 seconds</SelectItem>
                      <SelectItem value="20">20 seconds</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Tracking Image Upload */}
              <div>
                <label htmlFor="trackingImage" className="block text-sm font-medium mb-2">
                  <Image className="w-4 h-4 inline mr-2" />
                  Email Tracking Image <span className="text-muted-foreground">(Small icon for open tracking)</span>
                </label>
                <input
                  id="trackingImage"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({...formData, trackingImage: e.target.files?.[0] || null})}
                  className="hunter-input"
                />
                {!formData.trackingImage && (
                  <div className="flex items-center gap-2 mt-2 p-3 bg-warning/10 border border-warning/20 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0" />
                    <span className="text-sm text-warning">No tracking image → opens won't be tracked</span>
                  </div>
                )}
                {formData.trackingImage && (
                  <div className="mt-2 text-sm text-success flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    Tracking enabled: {formData.trackingImage.name}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="recipients" className="block text-sm font-medium mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Recipients <span className="text-muted-foreground">(FirstName,Email,Company — one per line)</span>
                </label>
                <textarea
                  id="recipients"
                  value={formData.recipientsRaw}
                  onChange={(e) => setFormData({...formData, recipientsRaw: e.target.value})}
                  className="hunter-textarea min-h-[120px]"
                  placeholder="Jane,jane@acme.com,Acme Inc
John,john@startup.io,Startup
Sarah,sarah@techcorp.com,TechCorp"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <a 
                  href="/contacts" 
                  className="hunter-btn-secondary flex items-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  Import from Contacts
                </a>
                <button 
                  type="submit" 
                  className="hunter-btn-primary flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  Start Campaign
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upload Resume */}
          <div className="hunter-card">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload Resume
            </h2>
            <form onSubmit={handleFileUpload} className="space-y-4">
              <input 
                type="file" 
                accept=".pdf,.doc,.docx"
                className="hunter-input"
                required 
              />
              <button type="submit" className="hunter-btn-secondary w-full">
                Upload File
              </button>
            </form>
          </div>

          {/* Tips */}
          <div className="hunter-card">
            <h3 className="font-semibold mb-4">📋 Campaign Tips</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Use Gmail App Password with 2-Step Verification for SMTP
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Email tracking pixels are embedded automatically
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Keep batches small and add delays to avoid limits
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Personalize with {'{{FirstName}}'} and {'{{Company}}'} variables
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="hunter-card">
            <h3 className="font-semibold mb-4">📊 Today's Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Emails sent</span>
                <span className="font-medium">42</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Open rate</span>
                <span className="font-medium text-success">68%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Response rate</span>
                <span className="font-medium text-primary">12%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Send;