import React from 'react';
import { Mail, Phone, Linkedin, Instagram, User } from 'lucide-react';

export const ContactCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white mb-6">
      <div className="flex items-center mb-4">
        <User className="w-8 h-8 mr-3" />
        <div>
          <h3 className="text-xl font-bold">Mallapuram Venkata Rao</h3>
          <p className="text-blue-100">Data Visualization Specialist</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="flex items-center">
          <Mail className="w-4 h-4 mr-2 text-blue-200" />
          <a href="mailto:venkatmallapuram7@gmail.com" className="hover:text-blue-200 transition-colors">
            venkatmallapuram7@gmail.com
          </a>
        </div>
        
        <div className="flex items-center">
          <Phone className="w-4 h-4 mr-2 text-blue-200" />
          <span>+91 9177916981</span>
        </div>
        
        <div className="flex items-center">
          <Linkedin className="w-4 h-4 mr-2 text-blue-200" />
          <a 
            href="http://www.linkedin.com/in/mallapuram-venkata-rao-0ab7a42b1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
          >
            LinkedIn Profile
          </a>
        </div>
        
        <div className="flex items-center">
          <Instagram className="w-4 h-4 mr-2 text-blue-200" />
          <a 
            href="https://www.instagram.com/invites/contact/?igsh=1h6b9sibc6wxd&utm_content=rydjjrd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};