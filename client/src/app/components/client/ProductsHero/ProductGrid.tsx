'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  image: string;
  price: string;
};

// Cập nhật dữ liệu để bao gồm đường dẫn ảnh đúng từ public/
const drinks: Product[] = [
  { id: 'iced-latte', name: 'Iced Latte', image: '/ProductsHero/image.png', price: '45.000đ' },
  { id: 'frappuccino', name: 'Frappuccino', image: '/ProductsHero/image.png', price: '55.000đ' },
  { id: 'cold-brew', name: 'Cold Brew', image: '/ProductsHero/image.png', price: '40.000đ' },
  { id: 'matcha-latte', name: 'Matcha Latte', image: '/ProductsHero/image.png', price: '50.000đ' },
];

const cakes: Product[] = [
  { id: 'chocolate-cake', name: 'Chocolate Cake', image: '/ProductsHero/image2.png', price: '65.000đ' },
  { id: 'cheesecake', name: 'Cheesecake', image: '/ProductsHero/image2.png', price: '70.000đ' },
  { id: 'red-velvet', name: 'Red Velvet', image: '/ProductsHero/image2.png', price: '75.000đ' },
  { id: 'tiramisu', name: 'Tiramisu', image: '/ProductsHero/image2.png', price: '80.000đ' },
];

const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'drinks' | 'cakes'>('drinks');

  const productsToShow = activeCategory === 'drinks' ? drinks : cakes;
  const sectionTitle = activeCategory === 'drinks' ? 'The Popular Drinks' : 'The Delicious Cakes';
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">{sectionTitle}</h2>
        <div className="flex justify-center items-center gap-4 mb-10">
          <button
            onClick={() => setActiveCategory('drinks')}
            className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
              activeCategory === 'drinks'
                ? 'bg-[rgba(75,61,35,1)] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            Drinks
          </button>
          <button
            onClick={() => setActiveCategory('cakes')}
            className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
              activeCategory === 'cakes'
                ? 'bg-[rgba(75,61,35,1)] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            Cakes
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsToShow.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-lg text-[rgba(75,61,35,1)] font-bold">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;