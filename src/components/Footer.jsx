import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Calendar,
  Globe,
  TruckElectric,
  CreditCard,
  Recycle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm px-6 md:px-12 py-12">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 border-b border-gray-700 pb-8">
  <div className="flex items-center justify-center gap-2">
    <TruckElectric className="w-5 h-5" />
    <span>Free Shipping</span>
  </div>
  <div className="flex items-center justify-center gap-2">
    <CreditCard className="w-5 h-5" />
    <span>Secure Payment</span>
  </div>
  <div className="flex items-center justify-center gap-2">
    <Recycle className="w-5 h-5" />
    <span>Exchange and Returns</span>
  </div>
</div>


      {/* Middle Row */}
      <div className="flex flex-wrap justify-between items-center py-6 text-xs gap-4 border-b border-gray-700">
        
        <span className='flex'> <span><Globe size={15}/></span>  <span className='ml-1'>Saudi Arabia</span></span>
        <div className="flex items-center gap-4">
          <span>Enable High Contrast</span>
          <input type="checkbox" className="toggle toggle-sm" />
          <span>Disable Animations</span>
          <input type="checkbox" className="toggle toggle-sm" />
        </div>
      </div>

      {/* Link Columns */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-8">
        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3 uppercase">Contact</h4>
          <ul className="space-y-2 text-gray-300">
            <Link to="/contact" className="flex items-center gap-2">
              <Mail size={14} /> Contact Us
            </Link>
            <Link to="/find" className="flex items-center gap-2">
              <MapPin size={14} /> Find a Boutique
            </Link>
            <Link to="/appointment" className="flex items-center gap-2">
              <Calendar size={14} /> Book an Appointment
            </Link>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-3 uppercase">Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Track Your Order</li>
            <li>Make a Return</li>
            <li>FAQ</li>
            <li>Servicing and Warranty</li>
            <li>Sitemap</li>
            <li>Catalogs</li>
            <li>Instruction Manuals</li>
          </ul>
        </div>

        {/* Our Maison */}
        {/* <div>
          <h4 className="text-white font-semibold mb-3 uppercase">Our Maison</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Corporate Information</li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                Careers at AU Beta ↗
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                Press ↗
              </a>
            </li>
          </ul>
        </div> */}

        {/* Stay Up to Date */}
        <div className="md:col-span-2">
          <h4 className="text-white font-semibold mb-3 uppercase">Stay Up to Date</h4>
          <div className="flex gap-4 mb-4">
            <a href="#"><Facebook size={18} /></a>
            <a href="#"><Instagram size={18} /></a>
            <a href="#"><Linkedin size={18} /></a>
            <a href="#"><Youtube size={18} /></a>
          </div>
          <a
            href="#"
            className="text-sm uppercase text-white border-b border-white inline-flex items-center gap-1 hover:text-gray-300"
          >
            Subscribe Newsletter →
          </a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-xs text-gray-400 flex flex-wrap justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Terms of Website Use</a>
          <a href="#">Terms of Sale</a>
          <a href="#">Alert Line</a>
        </div>
        <span>© 2025 AU Beta – All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
