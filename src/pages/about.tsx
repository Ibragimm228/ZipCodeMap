import { Container } from '@/components/shared/container';
import { Link } from 'react-router';

export function AboutPage() {
  const authors = [
    {
      name: 'Nathaniel Reed',
      role: 'GIS Expert & Founder',
      image: 'https://hips.hearstapps.com/rover/profile_photos/fa03b6b2-a7a8-4449-8b09-cc7c06c55699_1567362076.jpg',
      bio: 'With over 15 years of experience in Geographic Information Systems, Michael founded Zip Code Map to make zip code data accessible and useful for everyone.',
    },
    {
      name: 'Emily Carter',
      role: 'Data Analyst',
      image: 'https://pbs.twimg.com/profile_images/1220339906670661632/BU_vqPln_400x400.jpg',
      bio: 'Sarah brings her expertise in demographic analysis and data visualization to help readers understand zip code patterns and trends.',
    },
    {
      name: 'Daniel Brooks',
      role: 'Cartographer & Writer',
      image: 'https://www.no5.com/wp-content/uploads/2024/03/19.-Lucas-Bennett-800x800.png',
      bio: 'David combines his mapping expertise with clear writing to create comprehensive zip code guides and educational content for our community.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-100"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gray-300/10 to-slate-300/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-zinc-300/10 to-gray-300/15 rounded-full blur-3xl"></div>
        
        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-7xl md:text-8xl font-extralight bg-gradient-to-r from-slate-800 via-gray-700 to-zinc-600 bg-clip-text text-transparent mb-8 tracking-tight">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
              Your trusted source for zip code information, mapping data, and geographic insights
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-32 relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm uppercase tracking-widest text-slate-500 font-medium">Our Mission</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extralight text-slate-800 leading-tight">
                Simplifying 
                <span className="bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent"> geographic data</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                <p>
                  At Zip Code Map, we provide comprehensive zip code information, mapping tools, 
                  and demographic data to help you understand geographic patterns and make informed decisions.
                </p>
                <p>
                  We combine accurate data with user-friendly tools to help you navigate 
                  and understand zip code information across the United States.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-300/15 to-slate-300/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
                alt="Map and Data Analysis"
                className="relative rounded-3xl w-full h-[500px] object-cover shadow-2xl transition-all duration-700"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-slate-100 relative">
        <Container>
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-widest text-slate-500 font-medium">Our Team</span>
            <h2 className="text-5xl md:text-6xl font-extralight text-slate-800 mt-4 mb-6">
              Meet the minds behind 
              <span className="bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent">the magic</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {authors.map((author, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/20 to-slate-300/25 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/30 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden ring-4 ring-gray-100/50 shadow-lg">
                      <img
                        src={author.image}
                        alt={author.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-light text-slate-800">
                      {author.name}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">
                      {author.role}
                    </p>
                    <p className="text-slate-500 font-light leading-relaxed">
                      {author.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-slate-100"></div>
        <Container className="relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-sm uppercase tracking-widest text-slate-500 font-medium">Get in Touch</span>
            <h2 className="text-5xl md:text-6xl font-extralight text-slate-800 mt-4 mb-8">
              Ready to start your 
              <span className="bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent">journey?</span>
            </h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
              Have questions about zip codes or need help with mapping data? We would love to hear from you.
            </p>
            
            <Link to="/contact">
              <button className="group relative inline-flex items-center px-12 py-4 text-lg font-medium text-white bg-gradient-to-r from-slate-600 to-zinc-600 rounded-full hover:from-slate-700 hover:to-zinc-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-zinc-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
