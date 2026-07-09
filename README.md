# 🔧 ServisTek PWA

**Aplikasi manajemen servis HP profesional** — dibangun sebagai Progressive Web App (PWA), bisa diinstall di Android, iOS, dan PC tanpa Play Store atau App Store.

[![Deploy Status](https://img.shields.io/badge/deploy-netlify-00C7B7?logo=netlify)](https://servistek-21.netlify.app)
[![Version](https://img.shields.io/badge/versi-v11.12.0-FF8A3D)](https://github.com/)
[![PWA](https://img.shields.io/badge/PWA-ready-5EEAD4)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## 🌐 Live App

**[servistek-21.netlify.app](https://servistek-21.netlify.app)**

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 📊 **Dashboard Harian** | KPI real-time: masuk hari ini, ETA terlambat, omzet, piutang |
| 🔍 **Diagnosa Kerusakan** | Database 200+ kerusakan HP dengan estimasi biaya & waktu |
| 🧮 **Kalkulator Servis** | Input tiket, jasa, sparepart, diskon, DP — auto-hitung total |
| ⚡ **Paket Harga Cepat** | Template paket servis siap pakai, sekali klik masuk kalkulator |
| 📋 **Antrian Kanban** | Drag & drop status: Masuk → Proses → Selesai |
| 💰 **Kasir** | Terima pembayaran, DP cicilan, struk thermal 58mm, nota A4 |
| 📦 **Stok Sparepart** | Inventaris + log pergerakan + picker di kalkulator |
| 🛍️ **Stok Aksesoris** | Case, TG, charger, earphone — grid kartu dengan filter kategori |
| 📈 **Laporan** | Chart omzet, CSV multi-tabel, statistik teknisi, ringkasan aksesoris |
| 👥 **CRM Pelanggan** | Riwayat kunjungan, total belanja, label pelanggan |
| 💬 **WA Integration** | Kirim notifikasi, tagihan, dan blast ke banyak pelanggan sekaligus |
| 🔔 **Notifikasi ETA** | Browser notification untuk servis yang melewati estimasi selesai |
| 🔍 **Pencarian Global** | Ctrl+F — cari di seluruh data sekaligus |
| 🖨️ **Cetak Nota & Struk** | Nota A4 profesional + struk thermal 58mm dengan logo toko |
| 🏪 **Profil Toko** | Logo, nama, alamat, WA — muncul di semua dokumen cetak |
| 💾 **Backup & Restore** | Export/import JSON lengkap semua data |

---

## 🗂️ Struktur File

```
servistek-pwa/
├── index.html          # Aplikasi utama (PWA single-file)
├── sw.js               # Service Worker (offline + auto-update)
├── manifest.json       # PWA manifest (nama, ikon, tema)
├── CARA-INSTALL.html   # Panduan instalasi untuk pengguna
├── icons/              # Ikon aplikasi (8 ukuran: 72px–512px)
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
├── netlify.toml        # Konfigurasi Netlify auto-deploy
└── README.md           # Dokumentasi ini
```

---

## 🚀 Deploy & Development

### Cara Deploy ke Netlify (otomatis)

1. Fork atau clone repo ini ke GitHub kamu
2. Login ke [netlify.com](https://netlify.com)
3. Klik **"Add new site"** → **"Import an existing project"**
4. Pilih **GitHub** → pilih repo `servistek-pwa`
5. Setting:
   - **Build command**: *(kosongkan)*
   - **Publish directory**: `.` (titik — root folder)
6. Klik **Deploy site**

Setelah itu, setiap `git push` ke branch `main` akan otomatis deploy dalam ~30 detik.

### Cara Update Manual (drag & drop)

1. Buka [app.netlify.com](https://app.netlify.com)
2. Pilih site ServisTek
3. Tab **Deploys** → drag folder ke area deploy

---

## 📱 Cara Install Aplikasi

### Android (Chrome)
1. Buka link di Chrome
2. Klik banner **"📲 Install App"** di pojok kanan atas, ATAU
3. Menu ⋮ → "Tambahkan ke layar utama"

### PC / Laptop (Chrome atau Edge)
1. Buka link di browser
2. Klik ikon **➕** di address bar, ATAU
3. Menu → "Install ServisTek"

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Aksi |
|----------|------|
| `Ctrl+F` | Pencarian Global |
| `Ctrl+K` | Kalkulator |
| `Ctrl+R` | Riwayat Servis |
| `Ctrl+Q` | Antrian Kanban |
| `Ctrl+P` | Kasir |
| `Ctrl+L` | Laporan |
| `Ctrl+T` | Stok Sparepart |
| `Ctrl+A` | Stok Aksesoris |
| `Ctrl+D` | Diagnosa / Dashboard |
| `Ctrl+B` | Database Kerusakan |
| `Ctrl+G` | Cek Garansi |

---

## 🔄 Changelog

### v11.12.0 (terbaru)
- ✨ Dashboard harian di tab Diagnosa (KPI, alert, servis hari ini)
- ✨ Paket Harga Cepat di kalkulator (template item sekali klik)
- ✨ WA Blast UI — filter penerima, centang, kirim bertahap
- 🐛 Fix: key `servistek_last_backup` inconsistency
- 🐛 Fix: paket harga tidak masuk backup JSON
- 🐛 Fix: memory leak `blastCheckAll` listener menumpuk
- 🐛 Fix: `pwaTriggerInstall` async tanpa try/catch
- 🐛 Fix: console.log debug aktif di production

### v11.11.0
- ✨ Logo toko upload (muncul di nota A4 dan struk thermal)
- ✨ Bayar sebagian / DP cicilan dari kasir
- ✨ Pencarian Global Ctrl+F (riwayat + sparepart + aksesoris)

### v11.10.0
- ✨ Struk kasir thermal format 58mm
- ✨ Notifikasi browser untuk ETA terlewat
- ✨ Export CSV laporan informatif (5 tabel: bulanan, teknisi, perangkat, stok)
- 🐛 Fix: backup version hardcode "11.1"

### v11.9.0
- ✨ Storage monitor + hapus massal riwayat lama
- ✨ Filter bulan & tahun di laporan
- ✨ Lightbox foto dengan navigasi prev/next (← →)
- ✨ Panel ringkasan aksesoris di laporan
- ✨ Smooth theme transition

### v11.8.0
- ✨ Tab Stok Aksesoris (07) — grid kartu, filter chip, log, badge
- 🐛 Fix: NAV_MAP + tab switch handler aksesori tidak berfungsi

### v11.7.0
- ✨ Cache `loadHistory()` — performa lebih cepat
- ✨ Pagination riwayat 40 entri/halaman
- ✨ Debounce search 220ms
- ✨ Autosave draft kalkulator setiap 15 detik
- ✨ Validasi format nomor HP saat simpan

### v11.6.0
- ✨ Kompresi foto otomatis (canvas, max 900px, 72% JPEG)
- ✨ `safeSetItem` — penanganan localStorage penuh
- ✨ Badge ukuran foto di thumbnail

### v11.5.0
- ✨ Folder `icons/` lengkap 8 ukuran PNG (72–512px)
- 🐛 Fix: escapeHtml di 100+ titik render data pelanggan
- 🐛 Fix: sistem foto duplikat (fotoBase64List dihapus)
- 🐛 Fix: reminder backup dobel
- 🐛 Fix: CSS PWA-banner nyasar ke stiker tiket

---

## 🛡️ Keamanan & Data

- **Data tersimpan lokal** di `localStorage` browser — tidak dikirim ke server manapun
- **Backup JSON** tersedia di tab Profil Toko → Download Backup
- **Restore** dari file JSON backup kapan saja
- **XSS protected** — semua input user di-escape via `escapeHtml()` sebelum dirender
- **Storage guard** — peringatan otomatis jika localStorage mendekati penuh

---

## 📋 Aturan Kontribusi & Versioning

Setiap perubahan **wajib** disertai bump versi di **10 lokasi**:

1. `<title>` tag di `index.html`
2. Header brand badge
3. Status-strip badge
4. Footer
5. `console.log` startup
6. `VERSION` const di `initPWA`
7. Komentar kode relevan
8. Payload version di QR export
9. **`APP_VERSION` di `sw.js`** ← paling kritis
10. Backup JSON version field

Format: `v11.X.0` (fitur baru) | `v11.X.Y` (bugfix)

---

## 📄 Lisensi

MIT License — bebas digunakan, dimodifikasi, dan didistribusikan.

---

*Dibangun dengan ❤️ untuk toko servis HP Indonesia*
