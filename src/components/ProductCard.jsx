import React from 'react'
import { Star, MapPin, Heart, ShoppingCart, Eye } from 'lucide-react'

const ProductCard = ({ product }) => {
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className="card hover:shadow-lg transition-shadow duration-300 group">
      {/* Product Image */}
      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            %{discountPercentage} İndirim
          </div>
        )}
        
        {/* Stock Badge */}
        <div className="absolute top-2 right-2">
          <span className={`text-xs font-medium px-2 py-1 rounded ${
            product.stock === 'Stokta' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.stock}
          </span>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="flex space-x-1">
            <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-sm">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-sm">
              <Eye className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        {/* Title and Rating */}
        <div>
          <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-2">
            {product.name}
          </h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-900 ml-1">
                {product.rating}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              ({product.reviews})
            </span>
          </div>
        </div>

        {/* Seller and Location */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 font-medium">{product.seller}</span>
          <div className="flex items-center text-gray-500">
            <MapPin className="w-3 h-3 mr-1" />
            {product.location}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">
            {product.price.toLocaleString('tr-TR')} ₺
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">
              {product.originalPrice.toLocaleString('tr-TR')} ₺
            </span>
          )}
        </div>

        {/* Condition */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Durum: <span className="font-medium text-green-600">{product.condition}</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Sepete Ekle</span>
          </button>
          <button className="btn-secondary px-3">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard 