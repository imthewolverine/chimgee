'use client'

import { useState } from 'react';

export default function ProductInformation(productprop: any) {
  const [activeTab, setActiveTab] = useState('instructions');
  const product = productprop.product || {};
  console.log("product information", product);
  
 
  const tabsContent = product.tabsContent || {};
  console.log(tabsContent);  // Check if the structure is correct
  
  return (
    <div className="max-w-6xl mx-auto p-6 rounded-lg shadow-sm pb-20">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 Poppins">
        Бүтээгдэхγγний дэлгэрэнгүй мэдээлэл
      </h2>
  
      {/* Tabs Navigation */}
      <div className="flex gap-2 mb-6">
        {Object.keys(tabsContent).map((tabKey) => (
          <button
            key={tabKey}
            onClick={() => setActiveTab(tabKey)}
            className={`text-[16px] inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg Poppins ${
              activeTab === tabKey
                ? 'hover:text-blue-400 hover:border-blue-400 text-blue-600 border-blue-600'
                : 'hover:text-gray-800 hover:border-gray-500 text-gray-600 border-transparent '
            }`}
          >
            {tabsContent[tabKey as keyof typeof tabsContent]?.title}
          </button>
        ))}
      </div>
  
      {/* Active Tab Content */}
      <div className="space-y-4">
        {tabsContent[activeTab]?.items?.map((item: any, index: number) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            {'age' in item && (
              <h3 className="font-medium text-gray-800 mb-2">{item.age}</h3>
            )}
            <p className="text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}