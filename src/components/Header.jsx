import React, { useState } from 'react'
import { Menu, X, ShoppingCart, User, Plus } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">
                İnşaat Pazar Yeri
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Ana Sayfa
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Kategoriler
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Hakkımızda
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              İletişim
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>İlan Ver</span>
            </button>
            <button className="btn-primary flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Giriş Yap</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a href="#" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Ana Sayfa
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Kategoriler
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Hakkımızda
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                İletişim
              </a>
              <div className="pt-4 space-y-2">
                <button className="btn-secondary w-full flex items-center justify-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>İlan Ver</span>
                </button>
                <button className="btn-primary w-full flex items-center justify-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Giriş Yap</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 