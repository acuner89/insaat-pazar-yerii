import React from 'react'
import { Search, Truck, Shield, Users } from 'lucide-react'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            İnşaat Malzemeleri
            <br />
            <span className="text-primary-200">Pazar Yeri</span>
          </h1>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Alıcı ve satıcıları güvenli bir platformda buluşturuyoruz. 
            Kaliteli malzemeler, uygun fiyatlar ve güvenilir ticaret.
          </p>
          
          {/* Quick Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Ne arıyorsunuz? (örn: çimento, tuğla, demir...)"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <Search className="w-5 h-5 inline mr-2" />
                Ara
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Hızlı Teslimat</h3>
              <p className="text-primary-100">Güvenilir nakliye hizmetleri ile malzemeleriniz zamanında teslim edilir</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Güvenli Alışveriş</h3>
              <p className="text-primary-100">Doğrulanmış satıcılar ve güvenli ödeme sistemi ile güvenle alışveriş yapın</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Geniş Ağ</h3>
              <p className="text-primary-100">Binlerce satıcı ve alıcı ile Türkiye'nin en büyük inşaat malzemesi platformu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 