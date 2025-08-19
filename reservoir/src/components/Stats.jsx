import React from 'react'

function Stats() {
  return (
    <div>
        <div className="w-full py-24 bg-gray-200">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 max-w-6xl mx-auto">
      <div className="bg-white shadow-md rounded-2xl p-6 text-center transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold text-blue-600">5000+</h2>
        <p className="text-gray-600 mt-2">Free Resources</p>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6 text-center transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold text-green-600">12+</h2>
        <p className="text-gray-600 mt-2">Domains Covered</p>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6 text-center transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold text-purple-600">50+</h2>
        <p className="text-gray-600 mt-2">Countries Reached</p>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6 text-center transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold text-pink-600">100+</h2>
        <p className="text-gray-600 mt-2">Institutions Linked</p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Stats