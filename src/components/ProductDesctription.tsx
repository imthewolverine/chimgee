'use client'

import { useState, useRef } from 'react';

export default function ProductDescription() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [showZoom, setShowZoom] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const imgRef = useRef<HTMLDivElement>(null);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!imgRef.current) return;
      
      const { left, top, width, height } = imgRef.current.getBoundingClientRect();
      const x = ((e.pageX - left - window.scrollX) / width) * 100;
      const y = ((e.pageY - top - window.scrollY) / height) * 100;
      setZoomPosition({ x, y });
    };
  const images = [
    'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3852204/pexels-photo-3852204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const productDetails = {
    title: 'Uniage age lift хөгшөөлтийн зерэг арьс чанғалағы 40мл',
    price: '149.900₮',
    discountedPrice: '140.906₮',
    description: [
      'Свтемак',
      'Ходгалак',
      'Policy per latest',
      'Rising marketing',
      'Buying & Selling and selling',
      'Sales, certification',
      'Service delivery',
    ]
  };

  return (
    <div className="flex flex-col mt-10 md:flex-row gap-8 p-6 max-w-6xl mx-auto Poppins">
      {/* Left Side - Image Gallery */}
      <div className="md:w-1/2">
      <div 
          className="mb-4 relative overflow-hidden"
          ref={imgRef}
          onMouseEnter={() => setShowZoom(true)}
          onMouseLeave={() => setShowZoom(false)}
          onMouseMove={handleMouseMove}
        >
          <img 
            src={images[selectedImage]} 
            alt="Main product"
            className="w-full h-96 object-cover rounded-lg"
          />
          
          {/* Zoom lens */}
          {showZoom && (
            <div 
              className="absolute pointer-events-none w-48 h-48 border-2 border-white rounded-full overflow-hidden"
              style={{
                left: `${zoomPosition.x}%`,
                top: `${zoomPosition.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${images[selectedImage]})`,
                  backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  backgroundSize: '500% 500%',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
          )}
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`min-w-[80px] h-20 rounded-lg border-2 ${
                selectedImage === index ? 'border-blue-500' : 'border-gray-200'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800 Poppins">
          {productDetails.title}
        </h1>

        <div className="space-y-2">
          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-semibold text-red-600">
              {productDetails.discountedPrice}
            </span>
            <span className="text-xl text-gray-500 line-through">
              {productDetails.price}
            </span>
          </div>

          
        </div>

        <div className="space-y-3">
          {productDetails.description.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600">
              <span className="text-blue-500">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}