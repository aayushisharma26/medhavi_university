import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Phone, Mail, MapPin } from 'lucide-react'
import { footerLinks } from './FooterLinks'

export default function Footer() {
  return (
    <footer className="bg-[#002B4E] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 mt-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{footerLinks.about.title}</h2>
            <p className="text-gray-300 mb-4">{footerLinks.about.intro}</p>
            <ul className="space-y-2">
              {footerLinks.about.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{footerLinks.academics.title}</h2>
            <ul className="space-y-2">
              {footerLinks.academics.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{footerLinks.admissions.title}</h2>
            <ul className="space-y-2">
              {footerLinks.admissions.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Schools Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{footerLinks.schools.title}</h2>
            <ul className="space-y-2">
              {footerLinks.schools.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{footerLinks.quickLinks.title}</h2>
            <ul className="space-y-2">
              {footerLinks.quickLinks.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-700 p-3 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-400">PHONE:</div>
                <a href="tel:+919874875876" className="hover:text-[#f39c12]">+91 9874875876</a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-700 p-3 rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-400">EMAIL:</div>
                <a href="mailto:contact@msu.edu.in" className="hover:text-[#f39c12]">contact@msu.edu.in</a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-700 p-3 rounded-full">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-400">LOCATION</div>
                <div>East Sikkim, West Sikkim</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-start lg:items-end gap-2">
              <div className="text-sm text-gray-400">FOLLOW US ON</div>
              <div className="flex gap-2">
                <a href="#" className="bg-[#f39c12] p-2 rounded-full hover:bg-[#e67e22] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-[#f39c12] p-2 rounded-full hover:bg-[#e67e22] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-[#f39c12] p-2 rounded-full hover:bg-[#e67e22] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-[#f39c12] p-2 rounded-full hover:bg-[#e67e22] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              ©Copyright 2024. All Rights Reserved by Medhavi Skill University.
            </div>
            <img 
              src="/dmca-badge.png" 
              alt="DMCA Protected" 
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#f39c12] p-3 rounded-full hover:bg-[#e67e22] transition-colors"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}

