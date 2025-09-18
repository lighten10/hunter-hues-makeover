import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Bell, Smartphone, Mail, ExternalLink, Settings, CheckCircle, Eye, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Notify = () => {
  const { toast } = useToast();
  const [telegramToken, setTelegramToken] = useState('');
  const [chatId, setChatId] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const [notifications] = useState([
    {
      id: '1',
      type: 'opened',
      recipient: 'sarah@techcorp.com',
      emailId: 'EML-2024-001',
      timestamp: '2 minutes ago',
      details: 'Email opened on iPhone, Location: San Francisco'
    },
    {
      id: '2', 
      type: 'opened',
      recipient: 'michael@startup.io',
      emailId: 'EML-2024-002',
      timestamp: '5 minutes ago',
      details: 'Email opened on Desktop, Location: New York'
    },
    {
      id: '3',
      type: 'sent',
      recipient: 'emma@enterprise.com',
      emailId: 'EML-2024-003',
      timestamp: '10 minutes ago',
      details: 'Email delivered successfully'
    }
  ]);

  const handleConnectTelegram = (e: React.FormEvent) => {
    e.preventDefault();
    if (telegramToken && chatId) {
      setIsConnected(true);
      toast({
        title: "Telegram connected!",
        description: "You will now receive notifications on your mobile device.",
      });
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'opened':
        return <Eye className="w-4 h-4 text-success" />;
      case 'sent':
        return <CheckCircle className="w-4 h-4 text-primary" />;
      default:
        return <Bell className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="hunter-card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-semibold">Email Notifications</h1>
            </div>
            <div className={`text-sm px-3 py-1 rounded-lg flex items-center gap-2 ${
              isConnected ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
            }`}>
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-success' : 'bg-muted-foreground'}`}></div>
              {isConnected ? 'Telegram Connected' : 'Not Connected'}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Telegram Setup */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                Connect Telegram Bot
              </h2>
              <p className="text-sm text-muted-foreground">
                Get instant notifications on your mobile device when someone opens your emails.
              </p>
              
              <form onSubmit={handleConnectTelegram} className="space-y-4">
                <div>
                  <label htmlFor="token" className="block text-sm font-medium mb-2">
                    Bot Token
                  </label>
                  <input
                    id="token"
                    type="text"
                    value={telegramToken}
                    onChange={(e) => setTelegramToken(e.target.value)}
                    className="hunter-input"
                    placeholder="1234567890:ABCDEFghijklmnopQRSTUVwxyz"
                    disabled={isConnected}
                  />
                </div>
                <div>
                  <label htmlFor="chatId" className="block text-sm font-medium mb-2">
                    Chat ID
                  </label>
                  <input
                    id="chatId"
                    type="text"
                    value={chatId}
                    onChange={(e) => setChatId(e.target.value)}
                    className="hunter-input"
                    placeholder="123456789"
                    disabled={isConnected}
                  />
                </div>
                {!isConnected && (
                  <button type="submit" className="hunter-btn-primary">
                    Connect Telegram
                  </button>
                )}
              </form>
            </div>

            {/* Setup Instructions */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                Setup Instructions
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Create Telegram Bot</p>
                    <p>Message @BotFather on Telegram and create a new bot</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Get Bot Token</p>
                    <p>Copy the token provided by BotFather</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Find Chat ID</p>
                    <p>Message your bot, then check @userinfobot for your Chat ID</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-primary">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Connect & Enjoy</p>
                    <p>Enter your credentials above and start receiving notifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Tracking Info */}
        <div className="hunter-card bg-gradient-subtle">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            How Email Tracking Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Unique ID Generated</h3>
              <p className="text-sm text-muted-foreground">
                Each email gets a unique tracking ID like EML-2024-001
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Invisible Pixel</h3>
              <p className="text-sm text-muted-foreground">
                Tracking pixel embedded automatically in every email
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Instant Notification</h3>
              <p className="text-sm text-muted-foreground">
                Get notified immediately when email is opened
              </p>
            </div>
          </div>
        </div>

        {/* Recent Notifications */}
        <div className="hunter-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Recent Activity
            </h2>
            <button className="hunter-btn-secondary text-sm">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
                <div className="p-2 bg-background rounded-lg">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{notification.recipient}</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">
                      {notification.emailId}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {notification.details}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {notification.timestamp}
                  </p>
                </div>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="hunter-card text-center">
            <div className="text-2xl font-bold text-primary mb-1">127</div>
            <div className="text-sm text-muted-foreground">Emails Sent Today</div>
          </div>
          <div className="hunter-card text-center">
            <div className="text-2xl font-bold text-success mb-1">89</div>
            <div className="text-sm text-muted-foreground">Emails Opened</div>
          </div>
          <div className="hunter-card text-center">
            <div className="text-2xl font-bold text-primary mb-1">70%</div>
            <div className="text-sm text-muted-foreground">Open Rate</div>
          </div>
          <div className="hunter-card text-center">
            <div className="text-2xl font-bold text-success mb-1">23</div>
            <div className="text-sm text-muted-foreground">Responses</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notify;