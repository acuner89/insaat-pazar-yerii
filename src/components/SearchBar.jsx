import React from 'react'
import { Search, Filter, Grid, List } from 'lucide-react'

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-2xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Malzeme, marka veya satıcı ara..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        
        {/* Sort and View Options */}
        <div className="flex items-center space-x-4">
          {/* Sort Dropdown */}
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>En Yeni</option>
              <option>Fiyat: Düşükten Yükseğe</option>
              <option>Fiyat: Yüksekten Düşüğe</option>
              <option>En Popüler</option>
              <option>En Yakın</option>
            </select>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* View Toggle */}
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button className="px-3 py-2 bg-primary-600 text-white">
              <Grid className="w-4 h-4" />
            </button>
            <button className="px-3 py-2 bg-white text-gray-600 hover:bg-gray-50">
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Active Filters */}
      {searchTerm && (
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-sm text-gray-600">Aktif filtreler:</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-700">
            "{searchTerm}"
            <button 
              onClick={() => onSearchChange('')}
              className="ml-2 text-primary-600 hover:text-primary-800"
            >
              ×
            </button>
          </span>
        </div>
      )}
    </div>
  )
}

export default SearchBar 