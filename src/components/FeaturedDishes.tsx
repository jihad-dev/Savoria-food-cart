import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FeaturedDishes() {
  const dishes = [
    {
      name: 'Truffle Risotto',
      description: 'Creamy Arborio rice with wild mushrooms and truffle oil',
      image: 'https://cravingcalifornia.com/wp-content/uploads/2024/10/Truffle-Mushroom-Risotto-copy.jpg',
      price: '$28',
    },
    {
      name: 'Seared Sea Bass',
      description: 'Mediterranean sea bass with herb butter sauce',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      price: '$34',
    },
    {
      name: 'Wagyu Steak',
      description: 'Premium Japanese beef with roasted vegetables',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      price: '$65',
    },
  ];

  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Signature Dishes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full">
                  {dish.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors inline-flex items-center gap-2">
            View Full Menu
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}