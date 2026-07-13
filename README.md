# Arthae' Fashion

Arthae' Fashion adalah prototype website e-commerce bertema fashion. Website ini dibuat untuk menampilkan katalog produk, fitur pencarian dan filter, detail produk, keranjang belanja, checkout dummy, serta dashboard admin sederhana menggunakan HTML, CSS, dan JavaScript vanilla.

## Deskripsi Bisnis

Arthae' Fashion berfokus pada penjualan produk fashion untuk kebutuhan gaya harian modern. Produk yang ditampilkan meliputi pakaian, sepatu, tas, dan aksesoris. Website ini dibuat sebagai simulasi toko online yang mudah digunakan, responsif, dan memiliki alur belanja yang jelas dari halaman produk sampai checkout.

## Proposisi Nilai

Arthae' Fashion menawarkan pengalaman belanja fashion yang sederhana dan rapi. Pengguna dapat melihat rekomendasi produk, mencari produk berdasarkan nama, memilih kategori, menyaring berdasarkan harga, melihat detail produk, menambahkan produk ke keranjang, dan melakukan simulasi checkout.

## Target Pasar

Target pasar Arthae' Fashion adalah:

- Pelajar dan mahasiswa yang membutuhkan outfit harian
- Pekerja yang membutuhkan pakaian rapi untuk kantor
- Pengguna yang mencari sepatu, tas, dan aksesoris untuk aktivitas sehari-hari
- Pengguna yang menyukai belanja fashion online dengan tampilan sederhana
- Pembeli yang ingin memilih produk berdasarkan kategori dan budget

## Analisis Pasar dan Pesaing

Produk fashion memiliki permintaan tinggi karena digunakan dalam aktivitas harian, sekolah, kerja, acara santai, dan acara formal. Konsumen biasanya mencari produk dengan gambar jelas, harga transparan, kategori yang mudah dipahami, serta proses checkout yang praktis.

Pesaing utama dalam pasar ini adalah marketplace besar seperti Shopee, Tokopedia, Lazada, serta toko fashion online lokal. Arthae' Fashion membedakan diri dengan katalog yang fokus, tampilan butik sederhana, penggunaan gambar produk lokal, dan alur belanja yang mudah dipahami.

## Produk yang Dijual

Produk utama Arthae' Fashion meliputi:

- Floral Midi Dress
- Linen Office Blazer
- Cream Daily Sneakers
- Maroon Classic Heels
- Structured Tote Bag
- Mini Shoulder Bag
- Gold Minimal Watch
- Satin Pattern Scarf
- White Essential Shirt
- Soft Denim Jacket
- Brown Smart Loafers
- Pearl Charm Bracelet

## Strategi Manajemen Produk

Produk dikelompokkan ke dalam kategori Pakaian, Sepatu, Tas, dan Aksesoris. Setiap produk memiliki nama, kategori, harga, gambar lokal dari folder `image`, dan deskripsi singkat. Produk unggulan ditampilkan pada halaman beranda, sedangkan seluruh produk tersedia di halaman produk.

Halaman admin digunakan sebagai simulasi pengelolaan produk. Admin dapat menambahkan produk baru menggunakan localStorage, menghapus produk tambahan, melihat ringkasan produk, dan memperbarui status pesanan.

## Model Bisnis dan Aliran Pendapatan

Model bisnis Arthae' Fashion adalah Business to Consumer (B2C), yaitu menjual produk fashion langsung kepada konsumen akhir.

Aliran pendapatan berasal dari:

- Penjualan produk pakaian, sepatu, tas, dan aksesoris
- Margin keuntungan dari setiap produk
- Paket bundling outfit
- Promo produk musiman
- Potensi kerja sama dengan brand fashion lokal

## Strategi Harga

Arthae' Fashion menggunakan strategi harga kompetitif. Produk aksesoris dibuat lebih terjangkau, produk pakaian dan sepatu berada pada harga menengah, sedangkan tas dan heels memiliki harga lebih tinggi sesuai fungsi dan tampilannya.

## Strategi Promosi

Promosi yang dapat digunakan:

- Diskon produk pilihan
- Promo bundling outfit
- Voucher pelanggan baru
- Gratis biaya admin untuk minimum pembelian tertentu
- Promo musiman seperti Lebaran, akhir tahun, atau hari belanja online

## Fitur Website

Website Arthae' Fashion memiliki fitur:

- Halaman pembuka
- Navbar dan halaman beranda
- Hero beranda menggunakan gambar lokal `Model.jpeg`
- Bagian produk pilihan pada beranda
- Bagian Tentang Kami, Statistik, Review, dan Footer
- Katalog produk dengan 12 produk utama
- Filter produk berdasarkan nama, kategori, dan harga
- Detail produk menggunakan modal
- Keranjang belanja menggunakan localStorage
- Tambah produk ke keranjang
- Ubah jumlah produk di keranjang
- Hapus produk dari keranjang
- Stok barang pada setiap produk
- Perhitungan subtotal, biaya admin, diskon, dan total otomatis
- Checkout berbentuk popup
- Form checkout dengan validasi sederhana
- Simulasi pembayaran dummy
- Pembelian melalui WhatsApp
- Popup pesanan berhasil dengan nomor pesanan otomatis
- Riwayat transaksi pembeli
- Login akun pembeli menggunakan nama dan nomor WhatsApp
- Tombol translate Indonesia/English
- Dashboard admin simulasi
- Tambah produk melalui admin menggunakan localStorage
- Hapus produk tambahan melalui admin
- Update status pesanan
- Tampilan responsif untuk desktop dan mobile

## Checkout dan Payment

Checkout dibuat dalam bentuk popup agar halaman keranjang tetap sederhana. Pengguna mengisi nama, nomor telepon, alamat, kota, kode pos, dan memilih metode pembayaran.

Payment yang digunakan adalah simulasi dummy. Setelah checkout berhasil, website menampilkan popup pesanan berhasil dengan nomor pesanan otomatis.

## Rencana SEO

Strategi SEO yang digunakan:

- Judul halaman yang jelas
- Meta description pada setiap halaman utama
- Struktur heading yang rapi
- Nama file gambar sesuai produk
- Teks alternatif pada gambar produk
- Konten produk relevan dengan fashion
- Tampilan responsif untuk perangkat mobile

## Rencana Keamanan

Rencana keamanan website:

- Validasi form checkout dengan atribut HTML
- Tidak menyimpan data kartu pembayaran
- Data simulasi disimpan di localStorage
- Menggunakan HTTPS saat website dipublikasikan
- Menjaga data pelanggan seperti nama, nomor telepon, dan alamat
- Menghindari input kosong pada form penting

## Rencana Analytics

Analytics dapat ditambahkan saat website dipublikasikan untuk memantau performa website.

Metrik yang dapat dipantau:

- Jumlah pengunjung
- Halaman yang paling sering dibuka
- Produk yang paling sering dilihat
- Produk yang paling sering dimasukkan ke keranjang
- Bounce rate
- Conversion rate
- Jumlah transaksi checkout
- Perangkat yang digunakan pengunjung

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript ES6+
- Flexbox
- CSS Grid
- Media query
- localStorage
- GitHub Pages

## Struktur File

Struktur utama proyek:

```text
fashion-market/
|-- index.html
|-- beranda.html
|-- produk.html
|-- keranjang.html
|-- admin.html
|-- README.md
|-- css/
|   |-- tampilan-awal.css
|   |-- beranda.css
|   |-- produk.css
|   |-- keranjang.css
|   `-- admin.css
|-- js/
|   `-- app.js
|-- image/
|   |-- Model.jpeg
|   |-- Midi Dress.jpeg
|   |-- Blazer Linen.jpeg
|   |-- Sneakers Cream .jpeg
|   |-- Heels Maroon.jpeg
|   |-- Tote Leather.jpeg
|   |-- Mini Bag.jpeg
|   |-- Watch.jpeg
|   |-- Scarf.jpeg
|   |-- White Shirt.jpeg
|   |-- Denim Jacket.jpeg
|   |-- Loafers.jpeg
|   `-- Bracekelet Pearl.jpeg
`-- screenshot/
    `-- dokumentasi tampilan website
```

## Deployment
Website dapat dipublikasikan menggunakan GitHub Pages.

Link Repository GitHub:
https://github.com/lisnanurhasanahabi-cpu/Nana2

Link GitHub Pages:
https://lisnanurhasanahabi-cpu.github.io/Nana2/

## Dokumentasi Screenshot

Folder screenshot: `screenshot`

Screenshot yang sudah dimasukkan ke dalam proyek:

### Tampilan Desktop

| Halaman | Screenshot |
| --- | --- |
| Tampilan Awal | ![Tampilan Awal Desktop](<screenshot/Tampilan Awal _ Dekstop.png>) |
| Beranda | ![Beranda Desktop](<screenshot/Beranda _ Dekstop.png>) |
| Tentang Kami | ![Tentang Kami Desktop](<screenshot/Tentang Kami_Dekstop.png>) |
| Review | ![Review Desktop](<screenshot/Review_Dekstop.png>) |
| Produk | ![Produk Desktop](<screenshot/Produk_Dekstop.png>) |
| Keranjang | ![Keranjang Desktop](<screenshot/Keranjang_Dekstop.png>) |
| Keranjang Alternatif | ![Keranjang Desktop Alternatif](<screenshot/Keranjang_Dekstop (2).png>) |
| Checkout | ![Checkout Desktop](<screenshot/Chekout_Dekstop.png>) |
| Admin | ![Admin Desktop](<screenshot/Admin_Dekstop.png>) |

### Tampilan Mobile

| Halaman | Screenshot |
| --- | --- |
| Tampilan Awal | ![Tampilan Awal Mobile](<screenshot/Tampilan Awal_Mobile.jpeg>) |
| Beranda | ![Beranda Mobile](<screenshot/Beranda_Mobile.jpeg>) |
| Produk | ![Produk Mobile](<screenshot/Produk_Mobile.jpeg>) |
| Keranjang | ![Keranjang Mobile](<screenshot/Keranjang_Mobile.jpeg>) |
| Admin | ![Admin Mobile](<screenshot/Admin_Mobile.jpeg>) |
| Admin Tambah Produk | ![Admin Tambah Produk Mobile](<screenshot/Admin Tambah Produk_Mobile.jpeg>) |

## Rencana Commit Git

Commit dapat dibuat secara bertahap dan bermakna, misalnya:

1. Membuat struktur awal proyek
2. Menambahkan halaman pembuka dan navigasi
3. Menambahkan halaman beranda dan hero
4. Menambahkan katalog produk fashion
5. Menambahkan fitur pencarian dan filter produk
6. Menambahkan modal detail produk
7. Menambahkan keranjang belanja dengan localStorage
8. Menambahkan form checkout dan simulasi pembayaran
9. Menambahkan dashboard admin simulasi
10. Mengganti gambar produk menjadi aset lokal
11. Memperbaiki tampilan warna dan responsif
12. Melengkapi dokumentasi README
13. Deploy website ke GitHub Pages

## Catatan Fitur Admin

Fitur admin pada proyek ini adalah simulasi pengelolaan produk dan pesanan menggunakan localStorage. Data produk tambahan disimpan di browser pengguna, bukan database server.

Melalui halaman admin, pengguna dapat melakukan simulasi tambah produk, hapus produk tambahan, melihat jumlah produk, melihat ringkasan pesanan, dan mengelola status pesanan secara sederhana.

Produk bawaan dari katalog utama tidak dapat dihapus melalui admin. Fitur hapus hanya berlaku untuk produk tambahan yang dibuat melalui form admin.

## Kesimpulan

Arthae' Fashion dibuat sebagai prototype website e-commerce fashion yang menggabungkan konsep bisnis, desain responsif, fitur interaktif JavaScript, keranjang belanja, simulasi checkout, dashboard admin sederhana, dan dokumentasi strategi bisnis. Website ini menunjukkan alur dasar e-commerce mulai dari melihat produk, memilih produk, memasukkan ke keranjang, hingga checkout.
