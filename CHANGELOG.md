# Changelog ServisTek PWA

Semua perubahan penting pada proyek ini didokumentasikan di sini.

Format: `[versi] - tanggal`
Tipe: `✨ Fitur` | `🐛 Bugfix` | `⚡ Performa` | `🔒 Keamanan` | `♻️ Refactor`

---

## [11.12.0] - 2025-07

### ✨ Fitur
- Dashboard harian di tab Diagnosa: 6 KPI (masuk hari ini, proses, ETA terlambat, piutang, omzet, siap belum ambil)
- Alert servis yang perlu perhatian segera (ETA + piutang aktif)
- Paket Harga Cepat di kalkulator — buat template item, sekali klik masuk form
- 4 paket bawaan (LCD, charging port, baterai, servis ringan)
- WA Blast UI di Profil Toko — filter penerima, centang, kirim bertahap 1.2 detik/tab
- Paket harga masuk payload backup JSON + restore

### 🐛 Bugfix
- Fix: key `servistek_last_backup` inkonsisten (single vs double quote) — 2 entri terpisah
- Fix: paket harga tidak masuk backup JSON → hilang setelah restore
- Fix: memory leak `blastCheckAll` — listener menumpuk tiap klik "Cari Penerima"
- Fix: `pwaTriggerInstall` async tanpa try/catch → crash silent jika user cancel
- Fix: 4 `console.log` debug masih aktif di production

---

## [11.11.0] - 2025-07

### ✨ Fitur
- Upload logo toko di Profil — muncul di nota A4 dan struk thermal 58mm
- Bayar sebagian / DP cicilan dari kasir (tombol "💵 Bayar Sebagian")
- Pencarian Global Ctrl+F — cari di riwayat + sparepart + aksesoris sekaligus
- Klik hasil pencarian → navigasi otomatis ke tab + isi filter

---

## [11.10.0] - 2025-07

### ✨ Fitur
- Struk kasir thermal format 58mm (font monospace, rincian item, garansi)
- Notifikasi browser untuk ETA terlewat (Notification API)
- Panel pengaturan notifikasi di tab Profil Toko
- Export CSV laporan informatif: 5 tabel (bulanan, teknisi, perangkat, sparepart, aksesoris)

### 🐛 Bugfix
- Fix: backup JSON version hardcode `"11.1"` — sekarang dinamis sesuai versi app

---

## [11.9.0] - 2025-07

### ✨ Fitur
- Storage monitor bar di tab Riwayat (% pemakaian localStorage, warna dinamis)
- Hapus massal riwayat lama berdasarkan usia (min 30 hari, konfirmasi 2 langkah)
- Filter bulan & tahun spesifik di tab Laporan
- Lightbox foto dengan navigasi prev/next (tombol ‹ ›, keyboard ← →, Esc)
- Panel ringkasan aksesoris di tab Laporan (nilai stok, margin, terlaris, per kategori)
- Smooth theme transition 300ms (tidak lagi blinking saat ganti tema)
- Shortcut keyboard: Ctrl+T (Stok Sparepart), Ctrl+A (Stok Aksesoris)

---

## [11.8.0] - 2025-07

### ✨ Fitur
- Tab Stok Aksesoris (07) — grid kartu, 8 kategori, filter chip, +/- stok langsung
- Log pergerakan aksesoris otomatis
- Badge peringatan di nav dropdown untuk stok habis/menipis
- Form tambah/edit: nama, kategori, merek, kompatibel HP, varian warna, harga, lokasi
- Data aksesoris masuk backup/restore JSON

### 🐛 Bugfix
- Fix: Tab aksesori tidak bisa diklik — `aksesori` belum terdaftar di `NAV_MAP`
- Fix: Grid aksesori tidak ter-render — tab switch handler tidak memanggil `renderAksGrid()`

---

## [11.7.0] - 2025-07

### ✨ Fitur
- Cache `loadHistory()` di memori (`_historyCache`) — invalidate saat `saveHistory()`
- Pagination riwayat: 40 entri per halaman, tombol "Muat lebih banyak"
- Debounce search riwayat 220ms — tidak render ulang tiap keystroke
- Autosave draft form kalkulator setiap 15 detik ke localStorage
- Restore draft otomatis saat app dibuka (dengan dialog konfirmasi)
- Validasi format nomor HP saat simpan (08xx/628xx, 9–15 digit)

### ⚡ Performa
- Event delegation untuk history card — satu listener untuk semua tombol
- `DocumentFragment` untuk bulk DOM update di `renderHistory`

---

## [11.6.0] - 2025-07

### ✨ Fitur
- Kompresi foto otomatis via canvas (max 900px, 72% JPEG) sebelum disimpan
- Badge ukuran foto (KB) di setiap thumbnail
- Batas maksimal 6 foto per servis
- Indikator loading saat foto diproses

### 🔒 Keamanan / Stabilitas
- `safeSetItem()` terpusat — semua 13 fungsi save* lewat satu wrapper
- Banner merah jika localStorage penuh (QuotaExceededError) dengan tombol Backup Sekarang
- Estimasi penggunaan storage ditampilkan di banner

---

## [11.5.0] - 2025-06

### ✨ Fitur
- Folder `icons/` lengkap: 8 ukuran PNG (72px–512px)
- Ikon brand-mark "ST" dengan gradient ember (#FFB066→#FF8A3D→#FF5D2E)
- Maskable-safe design (margin 16.8% per sisi)

### 🐛 Bugfix
- Fix: `escapeHtml()` diterapkan di 100+ titik render data pelanggan (XSS protection)
- Fix: Sistem foto duplikat (`fotoBase64List`) dihapus — hanya satu implementasi aktif
- Fix: Bug foto saat edit: foto sekarang selalu disinkronkan dari `fotoList`
- Fix: Reminder backup muncul dobel — digabung jadi satu sistem (threshold 7 hari)
- Fix: CSS PWA-banner nyasar ke window cetak stiker tiket
- Fix: Dead PWA CSS di dalam stylesheet stiker — dihapus

---

## [11.4.0] - 2025-06

### Baseline
- Versi awal yang didokumentasikan
- Fitur lengkap: Diagnosa, Kalkulator, Antrian, Kasir, Database, Stok Sparepart, Laporan, Profil, CRM, Garansi, TV Mode
- PWA dengan auto-update via Service Worker
- Backup/restore JSON

---

*Format changelog mengikuti [Keep a Changelog](https://keepachangelog.com/)*
