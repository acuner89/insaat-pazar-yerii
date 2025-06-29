import React from 'react'
import ProductCard from './ProductCard'

// Örnek ürün verileri
const sampleProducts = [
  {
    id: 1,
    name: 'Portland Çimento 50kg',
    price: 45,
    originalPrice: 55,
    location: 'İstanbul',
    seller: 'Yapı Market A.Ş.',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    category: 'cement',
    condition: 'Yeni',
    stock: 'Stokta',
    description: 'Yüksek kaliteli portland çimento, 50kg paket'
  },
  {
    id: 2,
    name: 'Tuğla 8.5x13x26.5cm',
    price: 2.5,
    originalPrice: 3.2,
    location: 'Ankara',
    seller: 'Tuğla Dünyası',
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    category: 'brick',
    condition: 'Yeni',
    stock: 'Stokta',
    description: 'Standart tuğla, 8.5x13x26.5cm boyutlarında'
  },
  {
    id: 3,
    name: 'Demir Çubuk 8mm',
    price: 8500,
    originalPrice: 9200,
    location: 'İzmir',
    seller: 'Demir Ticaret',
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    category: 'steel',
    condition: 'Yeni',
    stock: 'Stokta',
    description: '8mm demir çubuk, ton başına fiyat'
  },
  {
    id: 4,
    name: 'Seramik Fayans 30x60cm',
    price: 85,
    originalPrice: 95,
    location: 'Bursa',
    seller: 'Seramik Merkezi',
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    category: 'tile',
    condition: 'Yeni',
    stock: 'Stokta',
    description: '30x60cm seramik fayans, m² başına fiyat'
  },
  {
    id: 5,
    name: 'Ahşap Kereste 4x8cm',
    price: 12,
    originalPrice: 15,
    location: 'Antalya',
    seller: 'Ahşap Ticaret',
    rating: 4.5,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    category: 'wood',
    condition: 'Yeni',
    stock: 'Stokta',
    description: '4x8cm ahşap kereste, metre başına fiyat'
  },
  {
    id: 6,
    name: 'İç Cephe Boyası 20L',
    price: 280,
    originalPrice: 320,
    location: 'İstanbul',
    seller: 'Boya Market',
    rating: 4.4,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    category: 'paint',
    condition: 'Yeni',
    stock: 'Stokta',
    description: '20L iç cephe boyası, su bazlı'
  },
  {
    id: 7,
    name: 'Elektrik Kablosu 2.5mm²',
    price: 8.5,
    originalPrice: 10,
    location: 'Ankara',
    seller: 'Elektrik Malzemeleri',
    rating: 4.8,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    category: 'electrical',
    condition: 'Yeni',
    stock: 'Stokta',
    description: '2.5mm² elektrik kablosu, metre başına fiyat'
  },
  {
    id: 8,
    name: 'PVC Boru 110mm',
    price: 45,
    originalPrice: 52,
    location: 'İzmir',
    seller: 'Tesisat Malzemeleri',
    rating: 4.6,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    category: 'plumbing',
    condition: 'Yeni',
    stock: 'Stokta',
    description: '110mm PVC boru, metre başına fiyat'
  }
]

const ProductGrid = ({ searchTerm, selectedCategory }) => {
  // Filtreleme işlemi
  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          {filteredProducts.length} ürün bulundu
          {searchTerm && ` "${searchTerm}" için`}
          {selectedCategory !== 'all' && ` ${selectedCategory} kategorisinde`}
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Ürün bulunamadı</h3>
          <p className="text-gray-600">
            Arama kriterlerinize uygun ürün bulunamadı. Farklı anahtar kelimeler deneyebilir veya filtreleri değiştirebilirsiniz.
          </p>
        </div>
      )}

      {/* Load More Button */}
      {filteredProducts.length > 0 && (
        <div className="text-center mt-8">
          <button className="btn-secondary">
            Daha Fazla Göster
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductGrid 