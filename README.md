# İnşaat Pazar Yeri

İnşaat malzemeleri alıcı ve satıcılarını buluşturan modern web platformu.

## 🚀 Özellikler

- **Modern Arayüz**: React ve Tailwind CSS ile tasarlanmış responsive tasarım
- **Kategori Filtreleme**: Malzemeleri kategorilere göre filtreleme
- **Arama Sistemi**: Gelişmiş arama ve filtreleme özellikleri
- **Ürün Kartları**: Detaylı ürün bilgileri ve fiyat karşılaştırması
- **Mobil Uyumlu**: Tüm cihazlarda mükemmel görünüm
- **Kullanıcı Dostu**: Kolay navigasyon ve sezgisel kullanıcı deneyimi

## 🛠️ Teknolojiler

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd insaat-pazar-yeri
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda `http://localhost:3000` adresini açın.

## 🏗️ Proje Yapısı

```
src/
├── components/
│   ├── Header.jsx          # Site başlığı ve navigasyon
│   ├── Hero.jsx            # Ana sayfa hero bölümü
│   ├── CategoryFilter.jsx  # Kategori filtreleme
│   ├── SearchBar.jsx       # Arama çubuğu
│   ├── ProductGrid.jsx     # Ürün grid'i
│   ├── ProductCard.jsx     # Ürün kartı
│   └── Footer.jsx          # Site alt bilgisi
├── App.jsx                 # Ana uygulama bileşeni
├── main.jsx               # Uygulama giriş noktası
└── index.css              # Global stiller
```

## 🎨 Kategoriler

- Çimento & Harç
- Tuğla & Blok
- Demir & Çelik
- Ahşap Malzemeler
- Seramik & Fayans
- Boya & Kaplama
- Elektrik Malzemeleri
- Su Tesisatı
- El Aletleri
- İş Makineleri

## 🔧 Geliştirme

### Yeni Özellik Ekleme

1. Yeni bileşen oluşturun: `src/components/NewComponent.jsx`
2. Ana uygulamaya import edin: `src/App.jsx`
3. Gerekli stilleri ekleyin: `src/index.css`

### Stil Değişiklikleri

Tailwind CSS kullanılıyor. Yeni stiller için:
- Utility sınıfları kullanın
- Özel stiller için `src/index.css` dosyasını düzenleyin
- Renk paleti `tailwind.config.js` dosyasında tanımlı

## 📱 Responsive Tasarım

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Production Build

```bash
npm run build
```

Build dosyaları `dist/` klasöründe oluşturulacak.

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

- **Email**: info@insaatpazaryeri.com
- **Telefon**: +90 (212) 555 0123
- **Adres**: İstanbul, Türkiye

---

**İnşaat Pazar Yeri** - Güvenilir ticaret, kaliteli malzemeler 🏗️ 