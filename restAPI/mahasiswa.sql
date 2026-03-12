CREATE DATABASE IF NOT EXISTS kampus_db;
USE kampus_db;

CREATE TABLE IF NOT EXISTS mahasiswa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    npm VARCHAR(20) NOT NULL,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    jurusan VARCHAR(50)
);

INSERT INTO mahasiswa (npm, nama, email, jurusan) VALUES
('140810200001', 'Budi Santoso', 'budi@mail.com', 'Teknik Informatika'),
('140810200002', 'Siti Aminah', 'siti@mail.com', 'Sistem Informasi'),
('140810200003', 'Andi Wijaya', 'andi@mail.com', 'Teknik Informatika'),
('140810200004', 'Dewi Lestari', 'dewi@mail.com', 'Teknik Komputer'),
('140810200005', 'Fajar Ramadhan', 'fajar@mail.com', 'Teknik Informatika'),
('140810200006', 'Putri Indah', 'putri@mail.com', 'Sistem Informasi'),
('140810200007', 'Gani Pratama', 'gani@mail.com', 'Teknik Komputer'),
('140810200008', 'Rina Marlina', 'rina@mail.com', 'Teknik Informatika'),
('140810200009', 'Hendra Setiawan', 'hendra@mail.com', 'Sistem Informasi'),
('140810200010', 'Maya Kusuma', 'maya@mail.com', 'Teknik Informatika');