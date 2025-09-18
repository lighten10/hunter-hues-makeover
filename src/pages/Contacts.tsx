import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Search, Plus, Filter, Users, Building, Briefcase, Trash2, Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Contact {
  id: string;
  firstName: string;
  email: string;
  company: string;
  title: string;
  linkedin?: string;
  tags?: string;
  notes?: string;
}

const Contacts = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
  const [limit, setLimit] = useState(25);
  
  // Form state for adding contacts
  const [newContact, setNewContact] = useState({
    firstName: '',
    email: '',
    company: '',
    title: '',
    linkedin: '',
    tags: '',
    notes: ''
  });

  // Mock data
  const [contacts] = useState<Contact[]>([
    {
      id: '1',
      firstName: 'Sarah Johnson',
      email: 'sarah@techcorp.com',
      company: 'TechCorp Inc',
      title: 'Hiring Manager',
      tags: 'tech, remote'
    },
    {
      id: '2',
      firstName: 'Michael Chen',
      email: 'michael@startup.io',
      company: 'Startup.io',
      title: 'Technical Recruiter',
      tags: 'startup, tech'
    },
    {
      id: '3',
      firstName: 'Emma Wilson',
      email: 'emma@enterprise.com',
      company: 'Enterprise Solutions',
      title: 'HR Director',
      tags: 'enterprise, hr'
    }
  ]);

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Contact added!",
      description: `${newContact.firstName} has been added to your contacts.`,
    });
    
    // Reset form
    setNewContact({
      firstName: '',
      email: '',
      company: '',
      title: '',
      linkedin: '',
      tags: '',
      notes: ''
    });
  };

  const filteredContacts = contacts.filter(contact => {
    return (
      (!searchQuery || contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.company.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!nameFilter || contact.firstName.toLowerCase().includes(nameFilter.toLowerCase())) &&
      (!companyFilter || contact.company.toLowerCase().includes(companyFilter.toLowerCase())) &&
      (!titleFilter || contact.title.toLowerCase().includes(titleFilter.toLowerCase()))
    );
  });

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="hunter-card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-semibold">Contacts</h1>
            </div>
            <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-lg">
              Total: {filteredContacts.length}
            </div>
          </div>

          {/* Filters */}
          <div className="grid md:grid-cols-6 gap-4 mb-6">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="hunter-input pl-12"
                placeholder="Quick search contacts..."
              />
            </div>
            <input
              type="text"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              className="hunter-input"
              placeholder="Filter by name"
            />
            <input
              type="text"
              value={companyFilter}
              onChange={(e) => setCompanyFilter(e.target.value)}
              className="hunter-input"
              placeholder="Filter by company"
            />
            <input
              type="text"
              value={titleFilter}
              onChange={(e) => setTitleFilter(e.target.value)}
              className="hunter-input"
              placeholder="Filter by title"
            />
            <select
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="hunter-select"
            >
              <option value={10}>10 / page</option>
              <option value={25}>25 / page</option>
              <option value={50}>50 / page</option>
              <option value={100}>100 / page</option>
            </select>
          </div>

          {/* Add Contact Form */}
          <form onSubmit={handleAddContact} className="grid md:grid-cols-3 gap-4 p-6 bg-muted/30 rounded-xl">
            <input
              type="text"
              value={newContact.firstName}
              onChange={(e) => setNewContact({...newContact, firstName: e.target.value})}
              className="hunter-input"
              placeholder="First name"
              required
            />
            <input
              type="email"
              value={newContact.email}
              onChange={(e) => setNewContact({...newContact, email: e.target.value})}
              className="hunter-input"
              placeholder="Email address"
              required
            />
            <input
              type="text"
              value={newContact.company}
              onChange={(e) => setNewContact({...newContact, company: e.target.value})}
              className="hunter-input"
              placeholder="Company"
            />
            <input
              type="text"
              value={newContact.title}
              onChange={(e) => setNewContact({...newContact, title: e.target.value})}
              className="hunter-input"
              placeholder="Job title"
            />
            <input
              type="url"
              value={newContact.linkedin}
              onChange={(e) => setNewContact({...newContact, linkedin: e.target.value})}
              className="hunter-input"
              placeholder="LinkedIn URL"
            />
            <input
              type="text"
              value={newContact.tags}
              onChange={(e) => setNewContact({...newContact, tags: e.target.value})}
              className="hunter-input"
              placeholder="Tags (comma-separated)"
            />
            <textarea
              value={newContact.notes}
              onChange={(e) => setNewContact({...newContact, notes: e.target.value})}
              className="hunter-textarea md:col-span-3"
              placeholder="Notes about this contact..."
            />
            <div className="md:col-span-3 flex justify-end">
              <button type="submit" className="hunter-btn-primary flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Contact
              </button>
            </div>
          </form>
        </div>

        {/* Contacts Table */}
        <div className="hunter-card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="hunter-table">
              <thead>
                <tr>
                  <th className="text-left">Contact</th>
                  <th className="text-left">Company</th>
                  <th className="text-left">Title</th>
                  <th className="text-left">Tags</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>
                      <div>
                        <div className="font-medium">{contact.firstName}</div>
                        <div className="text-sm text-muted-foreground">{contact.email}</div>
                        {contact.linkedin && (
                          <a 
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline flex items-center gap-1 mt-1"
                          >
                            LinkedIn Profile →
                          </a>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        {contact.company}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-muted-foreground" />
                        {contact.title}
                      </div>
                    </td>
                    <td>
                      {contact.tags && (
                        <div className="flex flex-wrap gap-1">
                          {contact.tags.split(',').map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg"
                            >
                              {tag.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;