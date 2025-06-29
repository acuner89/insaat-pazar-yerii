import React from 'react'
import { Filter } from 'lucide-react'

const categories = [
  { id: 'all', name: 'Tüm Kategoriler', count: 1250 },
  { id: 'cement', name: 'Çimento & Harç', count: 156 },
  { id: 'brick', name: 'Tuğla & Blok', count: 89 },
  { id: 'steel', name: 'Demir & Çelik', count: 234 },
  { id: 'wood', name: 'Ahşap Malzemeler', count: 167 },
  { id: 'tile', name: 'Seramik & Fayans', count: 198 },
  { id: 'paint', name: 'Boya & Kaplama', count: 145 },
  { id: 'electrical', name: 'Elektrik Malzemeleri', count: 123 },
  { id: 'plumbing', name: 'Su Tesisatı', count: 98 },
  { id: 'tools', name: 'El Aletleri', count: 76 },
  { id: 'machinery', name: 'İş Makineleri', count: 45 },
  { id: 'other', name: 'Diğer', count: 67 }
]

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="card">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 text-gray-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Kategoriler</h3>
      </div>
      
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 flex justify-between items-center ${
              selectedCategory === category.id
                ? 'bg-primary-50 text-primary-700 border border-primary-200'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="font-medium">{category.name}</span>
            <span className={`text-sm px-2 py-1 rounded-full ${
              selectedCategory === category.id
                ? 'bg-primary-100 text-primary-700'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
      
      {/* Price Filter */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Fiyat Aralığı</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-primary-600" />
            <span className="ml-2 text-sm text-gray-700">0 - 1.000 TL</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-primary-600" />
            <span className="ml-2 text-sm text-gray-700">1.000 - 5.000 TL</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-primary-600" />
            <span className="ml-2 text-sm text-gray-700">5.000 - 10.000 TL</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-primary-600" />
            <span className="ml-2 text-sm text-gray-700">10.000 TL+</span>
          </label>
        </div>
      </div>
      
      {/* Location Filter */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Konum</h4>
        <select className="input-field text-sm">
          <option>Tüm Şehirler</option>
          <option>İstanbul</option>
          <option>Ankara</option>
          <option>İzmir</option>
          <option>Bursa</option>
          <option>Antalya</option>
        </select>
      </div>
    </div>
  )
}

export default CategoryFilter 