import { Link } from 'react-router-dom';
import { AlertTriangle, Clock, ThermometerSun, Home as HomeIcon, Flame } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-lg h-64 mb-8">
        <img 
          src="/api/placeholder/1200/400" 
          alt="Wildfire landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="text-white p-8 max-w-lg">
            <h2 className="text-4xl font-bold mb-4">Understanding the Wildfire Crisis</h2>
            <p className="text-lg">
              Exploring the causes, impacts, and solutions to one of our most pressing environmental challenges.
            </p>
          </div>
        </div>
      </section>

      <div className="flex items-center gap-3 p-4 bg-orange-100 border-l-4 border-orange-500 rounded">
        <AlertTriangle className="text-orange-600" size={24} />
        <p className="text-orange-800">
          Wildfires are becoming more frequent and intense due to climate change and human activities.
        </p>
      </div>

      <section className="my-8">
        <h3 className="text-2xl font-bold text-orange-800 mb-6">About This Resource</h3>
        <p className="text-gray-700 mb-4">
          Welcome to the Wildfire Crisis Awareness resource center. This site provides comprehensive information about 
          wildfires, their historical context, contributing factors, community impacts, and potential solutions.
        </p>
        <p className="text-gray-700">
          Use the navigation tabs above to explore different aspects of the wildfire crisis, from historical data to 
          future outlooks. Each section offers in-depth analysis and resources to help understand this complex issue.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
        {[
          {
            title: "History",
            icon: <Clock size={32} className="text-orange-600" />,
            description: "Explore an interactive timeline of major wildfires and policy developments.",
            link: "/history",
            color: "bg-amber-50 border-amber-200"
          },
          {
            title: "Causes",
            icon: <ThermometerSun size={32} className="text-orange-600" />,
            description: "Understand the ecological factors and policies that contribute to wildfires.",
            link: "/causes",
            color: "bg-orange-50 border-orange-200"
          },
          {
            title: "Impact",
            icon: <HomeIcon size={32} className="text-orange-600" />,
            description: "Learn how wildfires affect communities, economies, and ecosystems.",
            link: "/impact",
            color: "bg-red-50 border-red-200"
          },
          {
            title: "Solutions",
            icon: <Flame size={32} className="text-orange-600" />,
            description: "Discover strategies and policies to mitigate wildfire risks.",
            link: "/solutions",
            color: "bg-green-50 border-green-200"
          }
        ].map((item, index) => (
          <Link 
            key={index} 
            to={item.link}
            className={`p-6 rounded-lg border ${item.color} hover:shadow-md transition-shadow`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="bg-gradient-to-r from-orange-100 to-amber-50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">Latest Wildfire Updates</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold text-orange-700">California Wildfire Season</h4>
            <p className="text-sm text-gray-600">
              The 2024 California wildfire season has already surpassed previous years in terms of acres burned.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold text-orange-700">New Prevention Technologies</h4>
            <p className="text-sm text-gray-600">
              Advanced satellite monitoring systems are being deployed to detect wildfires earlier than ever before.
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-8">
        <Link 
          to="/causes" 
          className="inline-flex items-center gap-2 py-3 px-6 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors"
        >
          Start Exploring
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4.16669 10H15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 4.16669L15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}