﻿<h1 align="center">
  <br>
  <img src="./public/images/icon.png" alt="Binar Logo" width="200"/>
  <br>
  <br>
  Mini Challange Chapter 5 Kelompok 1 - FSW1 [API-Perpustakaan]
  <br>
</h1>

<h4 align="center">A Fullstack Dashboard for a library designed to manage library data and a library website utilizing <a href="https://expressjs.com/" target="_blank">Express.js</a> as the backend and <span style="color:red;">Sequelize(SQL) Postgress</span> as the Database Management System (DBMS)</h4>

<p align="center">
  <a href="#express">express</a> •
  <a href="#postman">postman</a> •
  <a href="#sequelize">sequelize</a> •
  <a href="#nodejs">nodejs</a> •
  <a href="#imagekit">imagekit</a> •
  <a href="#postgress">postgress</a>
</p>

## Database Structure

![screenshot](./public/images/db-diagram.png)

## KM x Binar Academy Batch 6

### Data Fasil

|                |                      |
| -------------- | -------------------- |
| Kelas          | FSW 1                |
| Fasilitator    | Imam Taufiq Hermawan |
| ID Fasilitator | F-FSW24001086        |
|                |                      |

### Data Anggota

| Nama Kelompok      | ID Peserta    |
| ------------------ | ------------- |
| Muhammad Rizki     | FSW2402KM6012 |
| MAULANA TEGAR I    | FSW2402KM6011 |
| Rizki mauludin Y.P | FSW2402KM6023 |
| M.Rayhan Hafa S    | FSW2402KM6010 |
| Rafi H             | FSW2402KM6018 |

## Project

Membuat Dashboard Perpustakaan Untuk Mengelola Data Perpustakaan dan Situs Web Perpustakaan

### Detail Table

Transaction:

- Berisikan Data Transaksi Peminjaman Buku Dan Bisa Dipinjam Oleh Semua User dan Role
- Kolom returnDate Dan borrowDate tidak dapat dimodifikasi baik ketika membuat data ataupun update karena akan otomatis mengisi borrowDate dengan data waktu pembuatan data dan returnDate +3 hari

Book:

- Berisikan Data Buku

Library:

- Berisikan Data Library Yang Ada

Rack:

- Berisikan Data Rak buku yang ada pada tiap library

### Role

Owner :

- Pemilik Dari Semua Library (Bisa Mengelola Semuanya)
- Bisa Memberikan Semua Role Ketika Melakukan Register

Manager :

- Bertanggung Jawab Menjaga Library(Bisa Mengelola Semua Yang Ada di Library Yang Dia Kelola dan tidak dapat mengelola dari Library lain)
- Hanya Bisa Memberikan Role Admin,Staff, dan manager ketika register

Admin:

- Bertanggung Jawab Mengurus Data Library tempat dia berada dan tidak dapat mengakses library lain
- Hanya Bisa Memberikan Role Staff dan Member ketika Register

Staff:

- Mengerjakan Layanan Yang Ada Di Perpustakaan Seperti Membuat Register Untuk Member dan Membuat Data Transaksi
- Hanya Bisa Memberikan Role Member Ketika Register

Member:

- Hanya Dapat Melihat Data Transaksi Yang Dia Punya Dan Juga Data Library,Book Dan Rack

### Setup

#### 1. Node.js

Install seluruh package yang ada pada package.json dengan perintah seperti berikut:

```
npm install
```

#### 2. Download Requirement

Install Postgress dan juga PGAdmin(Optional Yang penting DBMS), Serta sudah daftar pada website imageKit[Image Hosting Optional]
[pgAdmin](https://www.pgadmin.org/download/) | [PostgreSQL Server](https://www.postgresql.org/download/) | [ImageKit](https://imagekit.io/)

#### 3. Setup Database via .env

Agar dapat berjalan perlu menambahkan data pada .env untuk bisa connect ke database, contoh isi dari .env bisa dilihat pada .env-example

```
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_PORT=
DB_HOST=
PORT=
JWT_SECRET=
JWT_EXPIRED=

IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL=
```

#### 4. Setup Database

```
npm run db-create
npm run db-migrate
npm run db-seed
```

#### 5. Menjalankan server

Untuk menjalankan server, dapat digunakan perintah berikut:

```
npm run dev
```

Untuk melihat antarmuka, dapat menggunakan link berikut [example port->3000]:

```
http://localhost:3000
```

## Endpoint

### API

-Auth(Rizki)

| Method | Endpoint  | Deskripsi                                      | Example                                    | Need Token |
| ------ | --------- | ---------------------------------------------- | ------------------------------------------ | ---------- |
| Get    | /         | Mendapatkan Semua Data Auth                    | http://localhost:3000/api/v1/auth          | ❌         |
| Get    | /me       | Mendapatkan Data Login Berdasarkan Token       | http://localhost:3000/api/v1/auth/me       | ✔️         |
| Post   | /login    | Melakukan Login                                | http://localhost:3000/api/v1/auth/login    | ❌         |
| Post   | /register | Melakukan Register Atau Membuat Data Auth Baru | http://localhost:3000/api/v1/auth/register | ✔️         |

-User(Tegar)

| Method | Endpoint    | Deskripsi                                  | Example                                      | Need Token |
| ------ | ----------- | ------------------------------------------ | -------------------------------------------- | ---------- |
| Get    | /           | Mendapatkan Semua Data User                | http://localhost:3000/api/v1/user            | ✔️         |
| Get    | /:id        | Mendapatkan Data User Berdasarkan ID       | http://localhost:3000/api/v1/user/:id        | ✔️         |
| Patch  | /edit/:id   | Melakukan Edit Data User Berdasarkan ID    | http://localhost:3000/api/v1/user/edit/:id   | ✔️         |
| Delete | /delete/:id | Melakukan Delete Data User Berdasarkan ID  | http://localhost:3000/api/v1/user/delete/:id | ✔️         |

-Transaction(Rizki)

| Method | Endpoint    | Deskripsi                                        | Example                                             | Need Token |
| ------ | ----------- | ------------------------------------------------ | --------------------------------------------------- | ---------- |
| Get    | /           | Mendapatkan Semua Data Transaction               | http://localhost:3000/api/v1/transaction            | ✔️         |
| Get    | /:id        | Mendapatkan Data Transaction Berdasarkan ID      | http://localhost:3000/api/v1/transaction/:id        | ✔️         |
| Post   | /create     | Menambah Data Transaction Baru                   | http://localhost:3000/api/v1/transaction/create     | ✔️         |
| Patch  | /edit/:id   | Melakukan Edit Data Transaction Berdasarkan ID   | http://localhost:3000/api/v1/transaction/edit/:id   | ✔️         |
| Delete | /delete/:id | Melakukan Delete Data Transaction Berdasarkan ID | http://localhost:3000/api/v1/transaction/delete/:id | ✔️         |

-Library(Rayhan)

| Method | Endpoint    | Deskripsi                                    | Example                                         | Need Token |
| ------ | ----------- | -------------------------------------------- | ----------------------------------------------- | ---------- |
| Get    | /           | Mendapatkan Semua Data Library               | http://localhost:3000/api/v1/library            | ✔️         |
| Get    | /:id        | Mendapatkan Data Library Berdasarkan ID      | http://localhost:3000/api/v1/library/:id        | ✔️         |
| Post   | /create     | Menambah Data Library Baru                   | http://localhost:3000/api/v1/library/create     | ✔️         |
| Patch  | /edit/:id   | Melakukan Edit Data Library Berdasarkan ID   | http://localhost:3000/api/v1/library/edit/:id   | ✔️         |
| Delete | /delete/:id | Melakukan Delete Data Library Berdasarkan ID | http://localhost:3000/api/v1/library/delete/:id | ✔️         |

-Book(Yoga)

| Method | Endpoint    | Deskripsi                                 | Example                                      | Need Token |
| ------ | ----------- | ----------------------------------------- | -------------------------------------------- | ---------- |
| Get    | /           | Mendapatkan Semua Data Book Filter        | http://localhost:3000/api/v1/book            | ✔️         |
| Get    | /:id        | Mendapatkan Data Book Berdasarkan ID      | http://localhost:3000/api/v1/book/:id        | ✔️         |
| Get    | /find/books | Mendapatkan Data Book                     | http://localhost:3000/api/v1/book/find/books | ✔️         |
| Post   | /           | Menambah Data Book Baru                   | http://localhost:3000/api/v1/book            | ✔️         |
| Put    | /:id        | Melakukan Edit Data Book Berdasarkan ID   | http://localhost:3000/api/v1/book/:id        | ✔️         |
| Delete | /:id        | Melakukan Delete Data Book Berdasarkan ID | http://localhost:3000/api/v1/book/:id        | ✔️         |

-Rack(Rizki)

| Method | Endpoint    | Deskripsi                                 | Example                                      | Need Token |
| ------ | ----------- | ----------------------------------------- | -------------------------------------------- | ---------- |
| Get    | /           | Mendapatkan Semua Data Rack               | http://localhost:3000/api/v1/rack            | ✔️         |
| Get    | /:id        | Mendapatkan Data Rack Berdasarkan ID      | http://localhost:3000/api/v1/rack/:id        | ✔️         |
| Post   | /create     | Menambah Data Rack Baru                   | http://localhost:3000/api/v1/rack/create     | ✔️         |
| Patch  | /edit/:id   | Melakukan Edit Data Rack Berdasarkan ID   | http://localhost:3000/api/v1/rack/edit/:id   | ✔️         |
| Delete | /delete/:id | Melakukan Delete Data Rack Berdasarkan ID | http://localhost:3000/api/v1/rack/delete/:id | ✔️         |

### WEB

| Endpoint | Deskripsi | Example               |
| -------- | --------- | --------------------- |
| /        | Homepage  | http://localhost:3000 |

| Mini Challange                        |
| ------------------------------------- |
| TEAM1-API-PERPUSTAKAAN                |
| [GOLD🥇] Chapter 5 - API-Perpustakaan |

## Api Postman

<a href="https://documenter.getpostman.com/view/29668082/2sA3Bn7Cp8"
      ><img src="./public/images/postman.png" alt="Postman Logo"
    /></a>

[API POSTMAN](https://documenter.getpostman.com/view/29668082/2sA3Bn7Cp8)

# TEAM1-API-PERPUSTAKAAN
