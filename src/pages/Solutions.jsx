import { Flame, Shield, Building, Users, Leaf, Wrench } from 'lucide-react';
import { useState } from 'react';

export default function Solutions() {
  const [activeTab, setActiveTab] = useState('prevention');
  
  const solutions = {
    prevention: [
      {
        title: "Forest Management",
        icon: <Leaf size={32} className="text-green-600" />,
        description: "Proactive management of forests to reduce fuel loads and create healthier, more fire-resistant ecosystems.",
        actions: [
          "Implementing prescribed burns to reduce undergrowth",
          "Mechanical thinning of overly dense forest areas",
          "Creating fuel breaks around communities",
          "Removing dead and diseased trees",
          "Restoring native vegetation that's more fire-adapted"
        ]
      },
      {
        title: "Land Use Planning",
        icon: <Building size={32} className="text-green-600" />,
        description: "Designing communities and developments with wildfire risk in mind to reduce vulnerability.",
        actions: [
          "Creating buffer zones between wildlands and homes",
          "Implementing stricter building codes in high-risk areas",
          "Limiting development in the most dangerous fire corridors",
          "Requiring fire-resistant materials for new construction",
          "Designing road networks for better evacuation capabilities"
        ]
      },
      {
        title: "Infrastructure Improvements",
        icon: <Wrench size={32} className="text-green-600" />,
        description: "Upgrading infrastructure to reduce ignition risks and improve firefighting capabilities.",
        actions: [
          "Undergrounding power lines in high-risk areas",
          "Upgrading electrical equipment with automatic shutoff features",
          "Improving water systems for firefighting purposes",
          "Creating microgrids to reduce reliance on long-distance power transmission",
          "Early detection systems using cameras and sensors"
        ]
      }
    ],
    response: [
      {
        title: "Enhanced Fire Services",
        icon: <Flame size={32} className="text-amber-600" />,
        description: "Strengthening firefighting capabilities to respond more effectively when wildfires occur.",
        actions: [
          "Increasing funding for firefighting equipment and personnel",
          "Improving coordination between local, state, and federal agencies",
          "Deploying new technologies like drones for fire monitoring",
          "Training more specialized wildland firefighters",
          "Developing faster initial attack capabilities"
        ]
      },
      {
        title: "Community Preparedness",
        icon: <Users size={32} className="text-amber-600" />,
        description: "Ensuring communities are ready to respond quickly and safely when wildfires threaten.",
        actions: [
          "Creating comprehensive evacuation plans",
          "Establishing emergency notification systems",
          "Designating and equipping community safe zones",
          "Conducting regular evacuation drills",
          "Providing education on what to do during wildfire emergencies"
        ]
      },
      {
        title: "Resource Coordination",
        icon: <Shield size={32} className="text-amber-600" />,
        description: "Better allocation and coordination of resources during wildfire incidents.",
        actions: [
          "Centralizing command structures during multi-agency responses",
          "Pre-positioning resources during high-risk weather conditions",
          "Creating mutual aid agreements across jurisdictions",
          "Improving resource sharing between regions",
          "Developing specialized teams for complex fire scenarios"
        ]
      }
    ],
    policy: [
      {
        title: "Climate Action",
        icon: <Cloud size={32} className="text-blue-600" />,
        description: "Addressing the root causes of increasing wildfire frequency and intensity through climate policy.",
        actions: [
          "Reducing greenhouse gas emissions to mitigate climate change",
          "Implementing carbon pricing mechanisms",
          "Investing in renewable energy transitions",
          "Supporting international climate agreements",
          "Developing climate adaptation strategies specific to wildfire risk"
        ]
      },
      {
        title: "Funding Reform",
        icon: <DollarSign size={32} className="text-blue-600" />,
        description: "Restructuring how wildfire management is funded to emphasize prevention and resilience.",
        actions: [
          "Shifting budgets from suppression to prevention activities",
          "Creating dedicated funding sources for community adaptation",
          "Reforming disaster assistance programs",
          "Incentivizing private investment in wildfire resilience",
          "Developing innovative insurance models for high-risk areas"
        ]
      },
      {
        title: "Collaborative Governance",
        icon: <Users size={32} className="text-blue-600" />,
        description: "Improving how decisions about wildfire management are made across jurisdictions and stakeholders.",
        actions: [
          "Establishing collaborative planning processes",
          "Incorporating indigenous knowledge and practices",
          "Creating watershed-level management authorities",
          "Developing shared stewardship agreements",
          "Supporting community-based fire management"
        ]
      }
    ]
  };

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-4">Solutions & Future Outlook</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Strategies and policies to mitigate wildfire risks and build more resilient communities.
        </p>
      </section>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-12">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-green-700 mb-4">A Comprehensive Approach</h3>
            <p className="text-gray-700 mb-3">
              Addressing the wildfire crisis requires action across multiple fronts—from forest management and community 
              planning to policy reform and climate action.
            </p>
            <p className="text-gray-700">
              No single solution will solve the problem. Instead, we need an integrated approach that combines immediate 
              protective measures with long-term systemic changes.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/api/placeholder/600/400" 
              alt="Forest management activities" 
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex border-b border-gray-200">
          <button 
            className={`py-3 px-6 font-medium ${activeTab === 'prevention' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('prevention')}
          >
            Prevention & Mitigation
          </button>
          <button 
            className={`py-3 px-6 font-medium ${activeTab === 'response' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('response')}
          >
            Emergency Response
          </button>
          <button 
            className={`py-3 px-6 font-medium ${activeTab === 'policy' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('policy')}
          >
            Policy Recommendations
          </button>
        </div>
      </div>

      <section>
        <div className="space-y-8">
          {solutions[activeTab].map((solution, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-green-100 rounded-full">
                    {solution.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-xl font-semibold text-green-700 mb-2">{solution.title}</h4>
                  <p className="text-gray-700 mb-4">{solution.description}</p>
                  
                  <h5 className="font-medium text-gray-800 mb-2">Key Actions:</h5>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {solution.actions.map((action, idx) => (
                      <li key={idx}>{action}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 bg-green-50 p-6 rounded-lg border border-green-100">
        <h3 className="text-2xl font-bold text-green-700 mb-4">Future Outlook</h3>
        <p className="text-gray-700 mb-4">
          While the wildfire crisis presents significant challenges, there are reasons for hope. New technologies, 
          increasing public awareness, and growing political will are creating opportunities for meaningful change.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold text-green-700 mb-2">Technological Innovation</h4>
            <p className="text-sm text-gray-700">
              From AI-powered early detection systems to new firefighting equipment and more fire-resistant building materials, 
              technology is offering new tools to address wildfire challenges.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold text-green-700 mb-2">Community Adaptation</h4>
            <p className="text-sm text-gray-700">
              Communities in fire-prone regions are increasingly implementing innovative approaches to building resilience, 
              from FireWise communities to local prescribed burn associations.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold text-green-700 mb-2">Policy Progress</h4>
            <p className="text-sm text-gray-700">
              Recent legislation and funding initiatives at state and federal levels show growing commitment to addressing 
              both immediate wildfire threats and underlying causes.
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-8">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 py-3 px-6 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
        >
          Download Complete Solutions Report
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 15L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M15 10L10 15L5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

// Missing import
function Cloud(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size || 24} 
      height={props.size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className || ""}
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
    </svg>
  );
}

function DollarSign(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size || 24} 
      height={props.size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className || ""}
    >
      <line x1="12" y1="2" x2="12" y2="22"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );
}