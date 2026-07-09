# 📘 Panduan Setup GitHub + Netlify untuk ServisTek

Panduan ini menjelaskan cara menghubungkan ServisTek ke GitHub dan mengaktifkan auto-deploy ke Netlify.

---

## Langkah 1 — Buat Repository di GitHub

1. Buka **github.com** dan login
2. Klik tombol **"+"** di pojok kanan atas → **"New repository"**
3. Isi form:
   - **Repository name**: `servistek-pwa`
   - **Description**: `Aplikasi manajemen servis HP - PWA`
   - **Visibility**: pilih `Public` atau `Private` sesuai keinginan
   - ✅ Centang **"Add a README file"** → TIDAK perlu (sudah ada)
4. Klik **"Create repository"**

---

## Langkah 2 — Upload File ke GitHub

### Cara termudah: Drag & Drop di browser

1. Di halaman repo yang baru dibuat, klik **"uploading an existing file"**
2. **Drag & drop** semua isi folder `servistek-pwa/` ke area upload:
   - `index.html`
   - `sw.js`
   - `manifest.json`
   - `CARA-INSTALL.html`
   - `README.md`
   - `CHANGELOG.md`
   - `PANDUAN-GITHUB.md`
   - `netlify.toml`
   - `.gitignore`
   - Folder `icons/` (upload semua 8 file PNG-nya satu per satu atau sekaligus)
3. Di bagian **"Commit changes"**:
   - Tulis pesan: `feat: initial commit ServisTek v11.12.0`
4. Klik **"Commit changes"**

### Cara via Git (jika sudah install Git di PC)

```bash
# Clone repo kosong yang baru dibuat
git clone https://github.com/USERNAME/servistek-pwa.git
cd servistek-pwa

# Copy semua file ServisTek ke folder ini
# (ganti PATH_FOLDER dengan lokasi folder ServisTek kamu)
cp -r PATH_FOLDER/* .

# Upload ke GitHub
git add .
git commit -m "feat: initial commit ServisTek v11.12.0"
git push origin main
```

---

## Langkah 3 — Hubungkan Netlify ke GitHub

1. Buka **app.netlify.com** dan login
2. Pilih site ServisTek yang sudah ada
3. Masuk ke **Site configuration** → **Build & deploy** → **Continuous deployment**
4. Klik **"Link site to Git"** (atau "Connect to Git provider")
5. Pilih **GitHub** → authorize Netlify
6. Pilih repo **`servistek-pwa`**
7. Setting deploy:
   - **Branch to deploy**: `main`
   - **Build command**: *(kosongkan)*
   - **Publish directory**: `.`
8. Klik **"Deploy site"**

✅ Selesai! Sekarang setiap push ke GitHub otomatis deploy ke Netlify.

---

## Langkah 4 — Cara Update Versi Selanjutnya

Setiap kali ada versi baru ServisTek, cukup:

### Via browser (paling mudah)

1. Buka repo di GitHub
2. Klik file yang mau diupdate (misal `index.html`)
3. Klik ikon **✏️ pensil** (Edit)
4. Copy-paste isi file baru
5. Commit dengan pesan yang jelas: `feat: v11.13.0 - fitur X dan Y`
6. Klik **"Commit changes"**
7. Netlify otomatis deploy dalam ~30 detik ✅

### Via Git (lebih cepat untuk banyak file)

```bash
cd servistek-pwa

# Copy file baru
cp PATH_FILE_BARU/index.html .
cp PATH_FILE_BARU/sw.js .
# dst

# Upload
git add .
git commit -m "feat: v11.13.0 - fitur X dan Y"
git push origin main
```

---

## Struktur Pesan Commit yang Disarankan

```
feat: v11.13.0 - dashboard + paket harga
fix: v11.12.1 - perbaikan bug kasir DP
perf: v11.13.1 - optimasi render riwayat
docs: update README dan CHANGELOG
```

---

## Cek Status Deploy

- Buka **app.netlify.com** → site ServisTek → tab **"Deploys"**
- Kalau ada tanda ✅ hijau = berhasil
- Kalau ada ❌ merah = ada error (klik untuk lihat log)

---

## Tips

- **Selalu update `CHANGELOG.md`** setiap rilis versi baru
- **Gunakan pesan commit yang deskriptif** — ini jadi dokumentasi otomatis
- **Jangan hapus file** yang sudah ada kecuali memang tidak diperlukan
- **Backup JSON** tetap bisa dilakukan dari dalam app kapan saja

---

*Kalau ada pertanyaan atau error, tanyakan langsung di sesi chat.*
