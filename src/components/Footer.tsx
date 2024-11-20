import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  UtensilsCrossed,
} from 'lucide-react';
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <UtensilsCrossed className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-semibold text-white">Savoria</span>
            </div>
            <p className="text-sm">
              Experience the art of fine dining in an atmosphere of elegance and
              warmth.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-600" />
                <span>123 Gourmet Street, Foodville</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-600" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-600" />
                <span>info@savoria.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Hours</h3>
            <ul className="space-y-3">
              <li>
                <span className="block font-medium text-white">
                  Monday - Friday
                </span>
                11:30 AM - 10:00 PM
              </li>
              <li>
                <span className="block font-medium text-white">
                  Saturday - Sunday
                </span>
                10:00 AM - 11:00 PM
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ContactForm />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">
              © {new Date().getFullYear()} Savoria. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="hover:text-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-amber-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
              <a href="#" className="hover:text-amber-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}