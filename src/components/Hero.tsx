import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to{' '}
          <span className="text-amber-400">Savoria</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200">
          Where culinary artistry meets unforgettable moments
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors flex items-center gap-2">
            Explore Our Menu
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
            Reserve a Table
          </button>
        </div>
      </div>
    </div>
  );
}