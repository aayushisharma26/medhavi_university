import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const links = [
    { name: 'About', href: '/about' },
    { name: 'Academic', href: '/academic' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Schools', href: '/schools' },
    { name: 'Life @ MSU', href: '/life-at-msu' },
    { name: 'Happenings', href: '/happenings' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="	https://www.msu.edu.in/frontend_assets/images/logo/medhavi-logo.png"
                alt="Medhavi Skills University"
                width={200}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Collaborations Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium"
              >
                Collaborations
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48">
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/collaborations/skilling"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Skilling
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/collaborations/industry"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Industry
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link to="/apply" className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              APPLY NOW
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-900 text-base font-medium"
                >
                  {link.name}
                </Link>
              ))}

              {/* Collaborations Mobile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-900 text-base font-medium"
                >
                  Collaborations
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48">
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/collaborations/skilling"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Skilling
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/collaborations/industry"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Industry
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/collaborations/government"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Government
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/collaborations/technology"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Technology
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/collaborations/placement cell"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Placement Cell
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Link
                to="/apply"
                className="block w-full text-center bg-blue-600 text-white px-6 py-2 rounded-md text-base font-medium hover:bg-blue-700"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}














