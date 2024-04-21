﻿<h1 align="center">
  <br>
  <img src="./public/images/icon.png" alt="Binar Logo" width="200"/>
  <br>
  <br>
  Mini Challange Chapter 5 Kelompok 1 - FSW1 [API-Perpustakaan]
  <br>
</h1>

<h4 align="center">A Fullstack Dashboard for a library designed to manage library data and a library website utilizing <a href="https://expressjs.com/" target="_blank">Express.js</a> as the backend and <span style="color:red;">Postgress</span> as the Database Management System (DBMS)</h4>

<p align="center">
  <a href="#express">express</a> •
  <a href="#postman">postman</a> •
  <a href="#sequelize">sequelize</a> •
  <a href="#nodejs">nodejs</a> •
  <a href="#imagekit">imagekit</a> •
  <a href="#postgress">postgress</a> •
</p>

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

#### 4. Menjalankan server

Untuk menjalankan server, dapat digunakan perintah berikut:

```
npm run dev
```

Untuk melihat antarmuka, dapat menggunakan link berikut[example port->3000]:

```
http://localhost:3000
```

| Mini Challange                        |
| ------------------------------------- |
| TEAM1-API-PERPUSTAKAAN                |
| [GOLD🥇] Chapter 5 - API-Perpustakaan |

## Api Postman

[API POSTMAN](https://documenter.getpostman.com/view/29668082/2sA3Bn7Cp8#f0dfdce1-124e-40af-a282-9553de4af84a)

# TEAM1-API-PERPUSTAKAAN
