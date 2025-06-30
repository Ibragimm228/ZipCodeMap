import { ContactForm } from '@/components/shared/contact-form'
import { Container } from '@/components/shared/container'

export function ContactsPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50'>
			{/* Hero Section */}
			<section className='relative py-32 overflow-hidden'>
				<div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50"></div>
				<div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gray-300/10 to-slate-300/15 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-zinc-300/10 to-gray-300/15 rounded-full blur-3xl"></div>
				
				<Container className="relative z-10">
					<div className='text-center max-w-4xl mx-auto'>
						<span className="text-sm uppercase tracking-widest text-slate-500 font-medium mb-6 block">
							Get in Touch
						</span>
						<h1 className='text-7xl md:text-8xl font-extralight bg-gradient-to-r from-slate-800 via-gray-700 to-zinc-600 bg-clip-text text-transparent mb-8 tracking-tight leading-none'>
							Contact Us
						</h1>
						<p className='text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto'>
							Have questions about zip codes or need help with mapping data? 
							We'd love to hear from you and help you with your geographic insights.
						</p>
					</div>
				</Container>
			</section>

			{/* Contact Form Section */}
			<section className='py-20 relative'>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent"></div>
				<Container className="relative">
					<div className='max-w-3xl mx-auto'>
						{/* Form Container */}
						<div className="group relative">
							<div className="absolute -inset-1 bg-gradient-to-r from-gray-300/20 to-slate-300/25 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-700"></div>
							<div className='relative bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-200/30 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden'>
								{/* Form Header */}
								<div className="px-12 pt-12 pb-8 text-center">
									<h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
										Send us a 
										<span className="bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent"> message</span>
									</h2>
									<p className="text-slate-500 font-light leading-relaxed">
										Fill out the form below and we'll get back to you as soon as possible
									</p>
								</div>

								{/* Contact Form */}
								<div className="px-12 pb-12">
									<ContactForm color='neutral' />
								</div>
							</div>
						</div>

						{/* Additional Contact Info */}
						<div className="mt-16 grid md:grid-cols-3 gap-8">
							{[
								{
									title: 'Response Time',
									subtitle: 'We typically respond within',
									value: '24 hours',
									icon: '⚡'
								},
								{
									title: 'Support Hours',
									subtitle: 'Available Monday to Friday',
									value: '9 AM - 6 PM EST',
									icon: '🕒'
								},
								{
									title: 'Email Support',
									subtitle: 'For urgent inquiries',
									value: 'support@zipcodemap.com',
									icon: '📧'
								}
							].map((item, index) => (
								<div 
									key={index}
									className="group relative"
									style={{ animationDelay: `${index * 100}ms` }}
								>
									<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/15 to-slate-300/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
									<div className="relative bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 shadow-lg hover:shadow-xl transition-all duration-300 text-center group-hover:-translate-y-1">
										<div className="text-3xl mb-4">{item.icon}</div>
										<h3 className="text-lg font-medium text-slate-800 mb-2">
											{item.title}
										</h3>
										<p className="text-sm text-slate-500 mb-3 font-light">
											{item.subtitle}
										</p>
										<p className="text-slate-600 font-medium">
											{item.value}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</Container>
			</section>

			{/* FAQ Section */}
			<section className='py-20 relative'>
				<div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50"></div>
				<Container className="relative">
					<div className="text-center mb-16">
						<span className="text-sm uppercase tracking-widest text-slate-500 font-medium mb-4 block">
							Quick Answers
						</span>
						<h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
							Frequently Asked 
							<span className="bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent"> Questions</span>
						</h2>
					</div>

					<div className="max-w-3xl mx-auto space-y-6">
						{[
							{
								question: 'How accurate is your zip code data?',
								answer: 'Our zip code data is sourced from official USPS databases and updated regularly to ensure maximum accuracy and reliability.'
							},
							{
								question: 'Can I use your mapping tools for commercial purposes?',
								answer: 'Yes, our mapping tools and data can be used for both personal and commercial purposes. Contact us for enterprise licensing options.'
							},
							{
								question: 'How often is the demographic data updated?',
								answer: 'We update our demographic data quarterly, incorporating the latest census information and geographic boundary changes.'
							}
						].map((faq, index) => (
							<div 
								key={index}
								className="group relative"
								style={{ animationDelay: `${index * 150}ms` }}
							>
								<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/15 to-slate-300/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
								<div className="relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/30 shadow-lg hover:shadow-xl transition-all duration-300">
									<h3 className="text-xl font-medium text-slate-800 mb-4">
										{faq.question}
									</h3>
									<p className="text-slate-600 font-light leading-relaxed">
										{faq.answer}
									</p>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>
		</div>
	)
}
