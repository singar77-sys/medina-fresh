export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-oxford via-brand-emerald to-brand-oxford">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-oxford/95 backdrop-blur-sm border-b border-brand-cambridge/20">
        <div className="container-app flex items-center justify-between h-16">
          <div className="text-xl font-bold text-white font-display">
            Medina Chamber
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-200 hover:text-white transition">
              About
            </a>
            <a href="#" className="text-gray-200 hover:text-white transition">
              Membership
            </a>
            <a href="#" className="text-gray-200 hover:text-white transition">
              Events
            </a>
            <a href="#" className="text-gray-200 hover:text-white transition">
              Contact
            </a>
          </div>
          <button className="btn-primary hidden md:inline-block">
            Join Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section pt-20 md:pt-32 pb-16 md:pb-24 text-center text-white">
        <div className="container-app max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 leading-tight">
            Medina Chamber of Commerce
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            Grow your business with networking, advocacy, and community connections across Medina County
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="btn-primary">Join Us Today</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section bg-white/10 backdrop-blur-sm text-white py-12 md:py-16">
        <div className="container-app">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-cambridge mb-2">
                500+
              </div>
              <p className="text-gray-200">Member Businesses</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-coquelicot mb-2">
                50+
              </div>
              <p className="text-gray-200">Annual Events</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-cambridge mb-2">
                25+
              </div>
              <p className="text-gray-200">Years Strong</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white py-16 md:py-24">
        <div className="container-app max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-oxford mb-6">
            Why Join the Medina Chamber?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The Greater Medina Chamber of Commerce is your partner in business success. We provide networking opportunities, advocacy support, and community resources to help your business thrive.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-brand-cambridge font-bold mr-3">✓</span>
              <span>Access to 500+ local business professionals</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-cambridge font-bold mr-3">✓</span>
              <span>Exclusive member savings and discounts</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-cambridge font-bold mr-3">✓</span>
              <span>Leadership development programs</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-cambridge font-bold mr-3">✓</span>
              <span>Business advocacy and policy support</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="section bg-brand-oxford text-white py-16">
        <div className="container-app text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Join hundreds of Medina County businesses already benefiting from Chamber membership.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
      </section>
    </div>
  )
}
