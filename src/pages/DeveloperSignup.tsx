import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, Github, Linkedin, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import Logo from '../components/ui/Logo';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import ThemeToggle from '../components/ui/ThemeToggle';

const DeveloperSignup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    techStack: '',
    githubUrl: '',
    linkedinUrl: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.techStack.trim()) {
      newErrors.techStack = 'Please specify your tech stack';
    }

    if (formData.githubUrl && !formData.githubUrl.includes('github.com')) {
      newErrors.githubUrl = 'Please enter a valid GitHub URL';
    }

    if (formData.linkedinUrl && !formData.linkedinUrl.includes('linkedin.com')) {
      newErrors.linkedinUrl = 'Please enter a valid LinkedIn URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/developer/dashboard');
    }
  };

  const handleGoogleSignup = () => {
    console.log('Google signup clicked');
    navigate('/developer/dashboard');
  };

  const handleBack = () => {
    navigate('/developer/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="absolute top-0 left-0 right-0 px-4 py-6 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={handleBack}
              icon={ArrowLeft}
              className="p-2"
            />
            <Logo size="md" />
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="w-full max-w-lg mx-auto px-4 pt-20">
        <Card className="p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Join as a Developer
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Create your profile and start finding projects
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              icon={User}
              error={errors.fullName}
              required
            />

            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              icon={Mail}
              error={errors.email}
              required
            />

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                icon={Lock}
                error={errors.password}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="relative">
              <Input
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                icon={Lock}
                error={errors.confirmPassword}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <Input
              label="Tech Stack"
              type="text"
              name="techStack"
              value={formData.techStack}
              onChange={handleInputChange}
              placeholder="e.g., React, Node.js, Python, AWS"
              error={errors.techStack}
              required
            />

            <Input
              label="GitHub URL"
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleInputChange}
              placeholder="https://github.com/username"
              icon={Github}
              error={errors.githubUrl}
            />

            <Input
              label="LinkedIn URL"
              type="url"
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleInputChange}
              placeholder="https://linkedin.com/in/username"
              icon={Linkedin}
              error={errors.linkedinUrl}
            />

            <Button type="submit" size="lg" className="w-full">
              Create Developer Account
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={handleGoogleSignup}
              className="w-full mt-4"
            >
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5 mr-2" />
              Sign up with Google
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Already have an account?{' '}
              <Link
                to="/developer/login"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DeveloperSignup;