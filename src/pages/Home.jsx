import { Link } from 'react-router';
import { CheckCircle, Clock, Calendar, List } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Stay Organized",
      description: "Keep track of all your tasks in one place with our intuitive interface"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Save Time",
      description: "Prioritize tasks effectively and manage your time better"
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: "Plan Ahead",
      description: "Schedule tasks and never miss important deadlines"
    },
    {
      icon: <List className="w-8 h-8 text-green-600" />,
      title: "Track Progress",
      description: "Monitor your productivity and celebrate completed tasks"
    }
  ];

  return (
    <section className='min-h-[calc(100vh-96px)] bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800'>
      {/* Hero Section */}
      <div className='max-w-6xl mx-auto px-4 pt-16 pb-12 text-center'>
        <h1 className='text-5xl font-bold mb-6 text-gray-800 dark:text-white'>
          Organize Your Day with
          <span className='text-green-600 block mt-2 font-mono'>DoIt</span>
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12'>
          The simple, intuitive way to manage your tasks and boost your productivity.
          Start organizing your life today.
        </p>
        
        {/* CTA Buttons */}
        <div className='flex justify-center gap-6 mb-16'>
          <Link to='/register'>
            <button className='px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg 
              font-semibold text-lg transition-colors duration-300 
              shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
              Get Started
            </button>
          </Link>
          <Link to='/login'>
            <button className='px-8 py-3 border-2 border-green-600 text-green-600 
              hover:bg-green-50 dark:hover:bg-gray-800 rounded-lg font-semibold text-lg 
              transition-all duration-300'>
              Sign In
            </button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
          {features.map((feature, index) => (
            <div key={index} className='p-6 bg-secondaryBG-light dark:bg-secondaryBG-dark rounded-xl shadow-md 
              hover:shadow-lg transition-shadow duration-300'>
              <div className='flex justify-center mb-4'>
                {feature.icon}
              </div>
              <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white'>
                {feature.title}
              </h3>
              <p className='text-gray-600 dark:text-gray-300'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className='bg-green-600 py-8 mt-16'>
        <div className='max-w-4xl mx-auto text-center px-4'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            Ready to boost your productivity?
          </h2>
          <Link to='/register'>
            <button className='px-8 py-3 bg-white text-green-600 rounded-lg 
              font-semibold text-lg hover:bg-green-50 transition-colors duration-300'>
              Start Free Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;