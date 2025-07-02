import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Code2, ArrowLeft, Star, Zap, Users, Trophy } from 'lucide-react';
import Logo from '../components/ui/Logo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ThemeToggle from '../components/ui/ThemeToggle';

const UserTypeSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleDeveloperSelect = () => {
    navigate('/developer/login');
  };

  const handleUserSelect = () => {
    navigate('/user/login');
  };

  const handleBack = () => {
    navigate('/');
  };

  const developerFeatures = [
    { icon: Star, text: 'Create your developer profile' },
    { icon: Code2, text: 'Browse available projects' },
    { icon: Trophy, text: 'Showcase your portfolio' },
    { icon: Zap, text: 'Get hired for your skills' },
  ];

  const clientFeatures = [
    { icon: Users, text: 'Post your project requirements' },
    { icon: Star, text: 'Browse developer profiles' },
    { icon: Trophy, text: 'Review portfolios and skills' },
    { icon: Zap, text: 'Hire the perfect match' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-secondary-400/20 to-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={handleBack}
              icon={ArrowLeft}
              className="p-3 hover:bg-white/50 dark:hover:bg-gray-800/50"
            />
            <Logo size="md" animated />
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              Choose your path to success
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tell us who you are to get started with DevConnect and unlock your potential
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Developer Card */}
            <Card 
              hover 
              onClick={handleDeveloperSelect}
              className="p-8 lg:p-10 animate-slide-up group cursor-pointer"
              glow
              gradient
            >
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="p-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <Code2 className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  I'm a Developer
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  Showcase your skills, find exciting projects, and connect with clients 
                  who need your expertise to build amazing things.
                </p>
                
                <div className="space-y-4 mb-10">
                  {developerFeatures.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center text-left p-3 rounded-xl bg-primary-50 dark:bg-primary-900/20 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-all duration-300"
                    >
                      <div className="p-2 bg-primary-500 rounded-lg mr-4">
                        <feature.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full group-hover:shadow-lg transition-all duration-300"
                  glow
                >
                  Continue as Developer
                </Button>
                
                <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                  Join 10,000+ developers already earning
                </div>
              </div>
            </Card>

            {/* Client Card */}
            <Card 
              hover 
              onClick={handleUserSelect}
              className="p-8 lg:p-10 animate-slide-up group cursor-pointer"
              style={{ animationDelay: '0.2s' }}
              glow
              gradient
            >
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="p-6 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <User className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors duration-300">
                  I'm a Client
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  Find talented developers to bring your ideas to life. Post projects 
                  and collaborate with experts who understand your vision.
                </p>
                
                <div className="space-y-4 mb-10">
                  {clientFeatures.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center text-left p-3 rounded-xl bg-secondary-50 dark:bg-secondary-900/20 group-hover:bg-secondary-100 dark:group-hover:bg-secondary-900/30 transition-all duration-300"
                    >
                      <div className="p-2 bg-secondary-500 rounded-lg mr-4">
                        <feature.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full group-hover:shadow-lg transition-all duration-300"
                  glow
                >
                  Continue as Client
                </Button>
                
                <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                  Trusted by 5,000+ successful projects
                </div>
              </div>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Not sure which option is right for you?
            </p>
            <Button variant="ghost" onClick={handleBack}>
              Learn More About DevConnect
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserTypeSelection;