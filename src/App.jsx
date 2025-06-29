import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import CategoryFilter from './components/CategoryFilter'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="lg:w-1/4">
              <CategoryFilter 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
            <div className="lg:w-3/4">
              <SearchBar 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
              <ProductGrid 
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App 