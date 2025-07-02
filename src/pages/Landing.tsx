import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Users, Code, Sparkles, Star, Zap, Globe, Shield } from 'lucide-react';
import Logo from '../components/ui/Logo';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import ThemeToggle from '../components/ui/ThemeToggle';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleGetStarted = () => {
    navigate('/select-type');
  };

  const features = [
    {
      icon: Users,
      title: 'Connect with Talent',
      description: 'Find skilled developers for your next project with our smart matching system',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Showcase Skills',
      description: 'Developers can display their expertise and build an impressive portfolio',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Sparkles,
      title: 'Smart Matching',
      description: 'AI-powered matching based on skills, experience, and project requirements',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Enterprise-grade security with verified profiles and secure payments',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick project turnaround with milestone-based development process',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with developers and clients from around the world',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Developers' },
    { number: '5K+', label: 'Projects Completed' },
    { number: '98%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-secondary-400/20 to-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent-400/10 to-primary-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo size="md" animated />
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" onClick={() => navigate('/select-type')}>
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8 animate-slide-down">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 10,000+ developers worldwide
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Connect{' '}
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent animate-shimmer bg-300% bg-pos-0">
                Developers
              </span>
              <br />
              with{' '}
              <span className="bg-gradient-to-r from-secondary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent">
                Visionaries
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The premier platform where innovative projects meet talented developers. 
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-semibold">
                Build the future together.
              </span>
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-16 animate-slide-up">
            <form onSubmit={handleSearch}>
              <Card className="p-2 hover:shadow-2xl transition-all duration-300" glow>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex-1 w-full">
                    <Input
                      type="search"
                      placeholder="Search for developers, skills, or projects..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      icon={Search}
                      className="border-0 shadow-none bg-transparent"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    variant="gradient"
                    icon={Search}
                    className="w-full sm:w-auto whitespace-nowrap"
                    glow
                  >
                    Search Now
                  </Button>
                </div>
              </Card>
            </form>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-20 animate-scale-in">
            <Button
              size="xl"
              variant="gradient"
              onClick={handleGetStarted}
              icon={ArrowRight}
              iconPosition="right"
              className="shadow-2xl hover:shadow-glow-lg"
              glow
            >
              Get Started Today
            </Button>
            <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm">
              Join thousands of successful collaborations
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-6 text-center animate-slide-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
                gradient
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                hover
                gradient
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-20 animate-fade-in">
            <Card className="p-12 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-primary-200 dark:border-primary-700" gradient>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join DevConnect today and be part of the future of collaborative development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="gradient"
                  onClick={handleGetStarted}
                  glow
                >
                  Join as Developer
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleGetStarted}
                >
                  Hire Developers
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;