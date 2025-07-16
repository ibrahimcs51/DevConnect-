import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  FolderOpen, 
  LogOut, 
  Settings, 
  Bell, 
  Search,
  Plus,
  Calendar,
  DollarSign,
  Star,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Logo from '../components/ui/Logo';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ThemeToggle from '../components/ui/ThemeToggle';

const DeveloperDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    navigate('/');
  };

  const mockProjects = [
    {
      id: 1,
      title: 'E-commerce Mobile App',
      client: 'TechCorp Inc.',
      status: 'In Progress',
      deadline: '2024-02-15',
      budget: '$5,000',
      completion: 65
    },
    {
      id: 2,
      title: 'AI Dashboard',
      client: 'DataFlow Solutions',
      status: 'Review',
      deadline: '2024-01-30',
      budget: '$8,500',
      completion: 90
    },
    {
      id: 3,
      title: 'Portfolio Website',
      client: 'Creative Studio',
      status: 'Completed',
      deadline: '2024-01-10',
      budget: '$2,500',
      completion: 100
    }
  ];

  const mockBids = [
    {
      id: 1,
      project: 'Social Media Platform',
      bidAmount: '$12,000',
      status: 'Pending',
      submittedAt: '2024-01-20'
    },
    {
      id: 2,
      project: 'Learning Management System',
      bidAmount: '$15,500',
      status: 'Accepted',
      submittedAt: '2024-01-18'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-accent-600 bg-accent-100 dark:bg-accent-900/30';
      case 'In Progress': return 'text-primary-600 bg-primary-100 dark:bg-primary-900/30';
      case 'Review': return 'text-secondary-600 bg-secondary-100 dark:bg-secondary-900/30';
      case 'Pending': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
      case 'Accepted': return 'text-accent-600 bg-accent-100 dark:bg-accent-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: FolderOpen },
    { id: 'projects', label: 'My Projects', icon: FolderOpen },
    { id: 'bids', label: 'My Bids', icon: DollarSign },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Logo size="sm" />
              <div className="hidden md:block">
                <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="bg-transparent border-none outline-none text-sm text-gray-600 dark:text-gray-300 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="p-2">
                <Bell className="w-5 h-5" />
              </Button>
              <ThemeToggle />
              <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Muhammad Ibrahim</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Senior Developer</p>
                </div>
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">IB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 min-h-screen shadow-sm border-r border-gray-200 dark:border-gray-700">
          <nav className="p-6">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="ghost"
                onClick={handleLogout}
                icon={LogOut}
                className="w-full justify-start text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
              >
                Logout
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="animate-fade-in">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome back, John! 👋
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Here's what's happening with your projects today.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Active Projects</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">5</p>
                    </div>
                    <FolderOpen className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Total Earnings</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">$24,500</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-accent-600 dark:text-accent-400" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Pending Bids</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
                    </div>
                    <Clock className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">92%</p>
                    </div>
                    <Star className="w-8 h-8 text-yellow-500" />
                  </div>
                </Card>
              </div>

              {/* Recent Projects */}
              <Card className="p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Recent Projects
                  </h2>
                  <Button variant="outline" size="sm" icon={Plus}>
                    New Project
                  </Button>
                </div>

                <div className="space-y-4">
                  {mockProjects.slice(0, 3).map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white">{project.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{project.client}</p>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{project.budget}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Due: {project.deadline}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h1>
                <Button icon={Plus}>New Project</Button>
              </div>

              <div className="grid gap-6">
                {mockProjects.map((project) => (
                  <Card key={project.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">{project.client}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">Due: {project.deadline}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span className="text-sm">{project.budget}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="text-sm">{project.completion}% Complete</span>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-4">
                      <div 
                        className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">View Details</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'bids' && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Bids</h1>
                <Button icon={Plus}>Submit New Bid</Button>
              </div>

              <div className="grid gap-6">
                {mockBids.map((bid) => (
                  <Card key={bid.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {bid.project}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            <span className="text-sm">{bid.bidAmount}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">Submitted: {bid.submittedAt}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(bid.status)}`}>
                          {bid.status}
                        </span>
                        {bid.status === 'Pending' && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                        {bid.status === 'Accepted' && <CheckCircle className="w-5 h-5 text-accent-500" />}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Profile</h1>
              
              <Card className="p-8">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">IB</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Muhammad Ibrahim</h2>
                    <p className="text-gray-600 dark:text-gray-400">Senior Full-Stack Developer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Member since 2023 SMIT</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skills & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'MongoDB', 'GraphQL', 'Docker'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                    <div className="space-y-2 text-gray-600 dark:text-gray-400">
                      <p>📧 ibrahimcom@example.com</p>
                      <p>🌐 github.com/ibrahimcs51</p>
                      <p>💼 linkedin.com/in/muhammad ibrahim</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                  <Button>Edit Profile</Button>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Settings</h1>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notification Preferences</h2>
                  <div className="space-y-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-3 text-gray-700 dark:text-gray-300">Email notifications for new projects</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-3 text-gray-700 dark:text-gray-300">Project deadline reminders</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-3 text-gray-700 dark:text-gray-300">Marketing emails</span>
                    </label>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Privacy Settings</h2>
                  <div className="space-y-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-3 text-gray-700 dark:text-gray-300">Make my profile public</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-3 text-gray-700 dark:text-gray-300">Show my earnings publicly</span>
                    </label>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Actions</h2>
                  <div className="space-y-4">
                    <Button variant="outline">Change Password</Button>
                    <Button variant="outline">Download Data</Button>
                    <Button variant="ghost" className="text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20">
                      Delete Account
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DeveloperDashboard;