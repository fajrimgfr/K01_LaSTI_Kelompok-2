# **Tubes LaSTI K01 Kelompok 2**

## **Tentang TechNest**
**TechNest** merupakan sistem berbasis *website* yang menyediakan layanan untuk calon penghuni *dormitory* agar bisa melihat kamar yang tersedia beserta fasilitasnya dan melakukan pendaftaran langsung secara daring. Selain itu, **TechNest** menyediakan layanan untuk pemilik *Dormitory* untuk menambah, mengedit, dan menghapus kamar yang tersedia di dalam *dormitory*

## **Developer Terlibat**
| Nama | NIM |
| --- | ---- |
| Silvester Kresna W. P. P | 18221049 |
| Willy Frans Farel Sijabat | 18221087 |
| Pramaditya Fajri Migfar | 18221111 |
| Reyhan Putra Ananda | 18221161 |
| Nova Risti Rusmita | 10023256 |

## **Pedoman Penggunaan**

### **1. Penggunaan Hasil Deployment**
Cukup kunjungi pranala berikut : [technest](https://www.example.com)

### **2. Penggunaan di Lokal Komputer**
- Buat sebuah folder di lokal komputer
- Copy code berikut `git clone https://github.com/fajrimgfr/K01_LaSTI_Kelompok-2.git`
- Buka command prompt di lokal komputer, lalu pindah *directory* ke folder yang telah dibuat sebelumnya dengan mengetikkan `cd {path folder yang dibuat sebelumnya}`
- Setelah berada di *directory* folder yang telah dibuat, paste code pada poin 2 di command prompt
- Pindah *directory* ke folder *development* dengan mengetikkan `cd K01_LaSTI_Kelompok-2` dan ketikkan lagi `cd view`
- *Install dependency* dengan mengetikkan `npm install`
- Jalankan *code* dengan mengetikkan `npm run dev`
- Buka browser pada `http://localhost:3000`

### **3. Catatan Tambahan**
Untuk penggunaan dan dokumentasi lengkap halaman-halaman yang bisa diakses pada *website* TechNest ini dapat dilihat pada dokumen yang dilampirkan secara bersamaan dengan pranala github ini

## **Desain API**
#### **1. GET /api/kamar**
---

  `message  : Berhasil menampilkan kamar`

  `request  : -`

  `response : noKamar, foto, harga, lantai, status, fasilitas, luas, posisi, idUser, namaUser`

#### **2. GET /api/kamar/:id**
---
- GET /api/user
- GET /api/:email
- PUT /api/kamar/:id
- POST /api/kamar
- POST /api/user
- POST /api/:email
- DELETE /api/kamar/:id