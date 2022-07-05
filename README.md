# Panduan Instalasi

Setelah melakukan clone repository atau download zip dari repository, buka terminal dan pindah ke lokasi direktori dimana file tersebut berada dengan perintah berikut :
```
cd lokasi direkotri atau cd home/document/mockup-binar-frontend
```
pastikan terminal sudah mengakses direktori benar seperti :
```
home/document/mockup-binar-frontend
```
lalu jalan perintah berikut :

```
npm install
```

Setelah proses instalasi selesai, jalankan aplikasi dengan perintah sebegai berikut :

```
npm run start
```

#### Package Node Module Yang Dibutuhkan

```
# axios
# bootstrap
# formik
# react
# react-bootstrap
# react-dom
# react-icons
# react-router-dom
# react-scripts
# react-toastify
```

# Question No 4

1. Menurut saya seharusnya untuk API show all data lebih baik digunakan server side pagination di karenakan jika menggunakan client side pagination seperti jika data nya sudah puluhan ribu bisa memakan waktu yang sangat lama bahkan bisa menyababkan browser not responding.
2. Lalu untuk API ke delete product dan edit product itu tidak berfungsi karena di backend tidak di gunakan middleware cors untuk api ini sehingga yang berbeda domain tidak akan bisa merequest ke API ini / di block oleh server API.
