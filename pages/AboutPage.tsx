
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto max-w-xl">
        <Link to="/" className="inline-flex items-center mb-4 text-pink-500 hover:text-pink-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
        <img
          src="https://i.ibb.co/kgDnHWg/n41ll5.jpg"
          alt="Arjun Yadav"
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-pink-300"
        />
        <h2 className="text-2xl font-bold text-gray-800">Arjun Yadav</h2>
        <p className="text-gray-600 mt-2">App Developer</p>
        
        <div className="mt-6">
          <a
            href="https://wa.me/9779828832785"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.849 6.069l-1.254 4.579 4.66-1.241z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
