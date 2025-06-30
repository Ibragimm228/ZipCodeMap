import { Link } from 'react-router'

export function PrivacyPolicyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 font-light leading-relaxed">
            We may collect the following types of information when you use our zip code mapping services:
          </p>
          <ul className="space-y-3 text-slate-600 font-light">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-slate-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              Information you provide voluntarily, such as your name and email address when you subscribe to our newsletter or contact us.
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-slate-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              Anonymous data automatically collected through cookies and analytics tools (such as browser type, device information, and pages visited).
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-slate-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              Geographic data preferences and zip code search history to improve our mapping services.
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'How We Use Your Information',
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 font-light leading-relaxed">
            We may use the information we collect for purposes such as:
          </p>
          <ul className="space-y-3 text-slate-600 font-light">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-slate-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              Sending you zip code insights, mapping updates, and geographic content if you've subscribed.
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-slate-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              Improving the content and functionality of our mapping tools and geographic services.
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-slate-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              Analyzing site usage to better understand our audience and provide more relevant zip code information.
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Cookies & Tracking',
      content: (
        <p className="text-slate-600 font-light leading-relaxed">
          Our Site uses cookies to enhance your mapping experience. Cookies are small data files stored on your device that help us understand how visitors use our zip code tools and geographic services. You can manage or disable cookies in your browser settings, though this may affect some functionality.
        </p>
      )
    },
    {
      title: 'Third-Party Services',
      content: (
        <p className="text-slate-600 font-light leading-relaxed">
          We may use third-party services (such as Google Analytics and mapping APIs) to help us analyze how our zip code tools are used and to provide accurate geographic data. These services may collect information sent by your browser as part of a web page request, in accordance with their own privacy policies.
        </p>
      )
    },
    {
      title: 'Your Rights',
      content: (
        <p className="text-slate-600 font-light leading-relaxed">
          You have the right to access, correct, or delete your personal information at any time. You can also opt out of receiving our newsletter by following the unsubscribe link in any of our emails. For specific requests regarding your geographic data or mapping preferences, please contact us directly.
        </p>
      )
    },
    {
      title: 'Changes to This Policy',
      content: (
        <p className="text-slate-600 font-light leading-relaxed">
          We may update this Privacy Policy from time to time to reflect changes in our zip code services or legal requirements. The most current version will always be posted on this page with the updated date. We recommend checking this page periodically for any updates.
        </p>
      )
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50'>
      {/* Hero Section */}
      <section className='relative py-32 overflow-hidden'>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gray-300/10 to-slate-300/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-zinc-300/10 to-gray-300/15 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-sm uppercase tracking-widest text-slate-500 font-medium mb-6 block">
            Legal Information
          </span>
          <h1 className='text-6xl md:text-7xl font-extralight bg-gradient-to-r from-slate-800 via-gray-700 to-zinc-600 bg-clip-text text-transparent mb-8 tracking-tight leading-none'>
            Privacy Policy
          </h1>
          <p className='text-xl text-slate-500 font-light leading-relaxed mb-4'>
            Last updated: June 2025
          </p>
          <p className='text-lg text-slate-400 font-light leading-relaxed max-w-3xl mx-auto'>
            Welcome to <span className="text-slate-600 font-medium">Zip Code Map</span>. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our Site.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-20 relative'>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/15 to-slate-300/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/30 shadow-lg hover:shadow-xl transition-all duration-500">
                  <h2 className="text-2xl md:text-3xl font-light text-slate-800 mb-6">
                    {section.title}
                  </h2>
                  {section.content}
                </div>
              </div>
            ))}

            {/* Contact Section */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/20 to-slate-300/25 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/30 shadow-xl hover:shadow-2xl transition-all duration-500">
                <h2 className="text-2xl md:text-3xl font-light text-slate-800 mb-6">
                  Contact
                </h2>
                <p className="text-slate-600 font-light leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please don't hesitate to{' '}
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-slate-700 font-medium hover:text-slate-900 transition-colors duration-200 underline decoration-slate-300 hover:decoration-slate-500 underline-offset-4"
                  >
                    contact us
                    <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-20 text-center">
            <div className="inline-flex gap-4">
              <Link to="/about">
                <button className="group relative px-6 py-3 text-slate-600 bg-white/40 backdrop-blur-sm rounded-full hover:bg-white/60 border border-gray-200/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-light">
                  <span className="relative z-10">About Us</span>
                </button>
              </Link>
              
              <Link to="/contact">
                <button className="group relative px-6 py-3 text-white bg-gradient-to-r from-slate-600 to-zinc-600 rounded-full hover:from-slate-700 hover:to-zinc-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 font-light">
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-zinc-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
