<?php
header('Content-Type: application/json');

// $mahasiswa = [
//     [
//         "nama" => "Azra",
//         "umur" => 23,
//         "NPM" => "140810200036",
//         "lulus" => true
//     ],
//     [
//         "nama" => "Alvar",
//         "umur" => 23,
//         "NPM" => "140810200039",
//         "lulus" => true
//     ]
// ];

// var_dump($mahasiswa); // Jadinya Array

// coba konek ke db
// $conn = mysqli_connect("localhost", "root", "", "kampus_db");
// $result = mysqli_query($conn, "SELECT * FROM mahasiswa");
// $mahasiswa = mysqli_fetch_all($result, MYSQLI_ASSOC);

// $dbh = new PDO('mysql:host=localhost;dbname=kampus_db', 'root');
// $db = $dbh->prepare('SELECT * FROM mahasiswa');
// $db->execute();
// $mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

// $data = json_encode($mahasiswa);
// echo $data;



// Decode
$data = file_get_contents('episode3.json');
$mahasiswa = json_decode($data, true);

var_dump($mahasiswa);
echo $mahasiswa[1]["pembimbing"]["pembimbing1"];
