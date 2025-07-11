# Final Project: API Service with Express, MongoDB, JWT, PM2, and NGINX

## 📌 Deskripsi
Proyek ini adalah API service sederhana menggunakan **Node.js (Express)** dan **MongoDB** untuk menangani data user. Fitur utama mencakup:

- Register
- Login (JWT Token)
- Get User Data
- Update User Data
- Set Status (Active/Inactive)
- Soft Delete (isDeleted flag)

## 🛠️ Tech Stack

- **Node.js** + **Express**
- **MongoDB**
- **JWT** (Authentication)
- **PM2** (Process Manager)
- **NGINX** (`proxy_pass`)
- **Ngrok** (untuk lokal server via WSL)

---

## 🚀 Cara Menjalankan

### 1. Clone Repository
```bash
git clone https://github.com/username/api-final-project-bootcamp-unp.git
cd api-final-project-bootcamp-unp
```

### 2. Install Dependency
```bash
npm install
```

### 3. Konfigurasi `.env`
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/api_service
JWT_SECRET=supersecretjwtkey
```

### 4. Start MongoDB
```bash
mongod --dbpath /data/db
```

### 5. Jalankan API dengan PM2
```bash
pm2 start app.js --name api-service
```

### 6. Gunakan Ngrok (jika di WSL)
```bash
ngrok http 3000
```

---

## 📫 Endpoint API

| Method | Endpoint                | Deskripsi                    |
|--------|-------------------------|------------------------------|
| POST   | `/api/register`         | Registrasi user              |
| POST   | `/api/login`            | Login dan dapatkan JWT       |
| GET    | `/api/user`             | Ambil data user              |
| PUT    | `/api/user`             | Update data user             |
| PATCH  | `/api/user/status`      | Ubah status user (aktif/non) |
| DELETE | `/api/user`             | Soft delete data user        |

> 🔐 Semua endpoint kecuali `/register` dan `/login` memerlukan JWT di header:
```
Authorization: Bearer <your_token>
```

---

## ✅ Deployment

- Server dijalankan di background menggunakan **PM2**
- Untuk public access (via domain), menggunakan **NGINX** dan `proxy_pass`
- Untuk lokal (via WSL), gunakan **Ngrok**

---

## 👨‍💻 Author
Willy Rahmawan  
Bootcamp UNP Final Project
