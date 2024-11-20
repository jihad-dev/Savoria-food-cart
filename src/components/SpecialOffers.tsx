import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function SpecialOffers() {
  return (
    <section className="py-20 bg-amber-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Special Offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Weekend Brunch</h3>
            </div>
            <p className="mb-4">
              Join us for an exquisite weekend brunch experience with
              complimentary mimosas. Every Saturday and Sunday, 10am - 2pm.
            </p>
            <button className="bg-white text-amber-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Happy Hour</h3>
            </div>
            <p className="mb-4">
              Enjoy 50% off on selected drinks and appetizers during our daily
              happy hour. Monday to Friday, 4pm - 7pm.
            </p>
            <button className="bg-white text-amber-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}