-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 18, 2018 at 03:29 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bantu_desa`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id_artikel` varchar(25) COLLATE utf8_bin NOT NULL,
  `judul_artikel` varchar(100) COLLATE utf8_bin NOT NULL,
  `isi_artikel` text COLLATE utf8_bin NOT NULL,
  `deskripsi_singkat` text COLLATE utf8_bin,
  `topik` varchar(50) COLLATE utf8_bin NOT NULL,
  `foto` text COLLATE utf8_bin,
  `tanggal_buat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `can_comment` tinyint(1) NOT NULL,
  `id_user` varchar(25) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id_artikel`, `judul_artikel`, `isi_artikel`, `deskripsi_singkat`, `topik`, `foto`, `tanggal_buat`, `can_comment`, `id_user`) VALUES
('5aea8dd37175c4bbb00e6193', 'Panen Desa Besar-Besaran', 'Kegiatan gotong royong dimulai pagi hingga pukul 12 belas siang. Perangkat Desa bersama warga membersihkan lingkungan desa untuk menciptakan kebersihan dan keindahan, baik membersihkan saluran dan lorong-lorong masuk ke rumah warga maupun meunasah (surau) sebagai tempat ibadah yang paling banyak didatangi warga menjelang datangnya bulan suci ramadhan.\\n“Kegiatan gotong-royong bersama merupakan tanggung jawab kami bersama. Apalagi menjelang masuk bulan suci ramadhan, Meunasah adalah salah satu tempat yang paling banyak dan sering didatangi masyarakat untuk beribadah,” kata Tgk. Nurdin Saad selaku Imam Meunasah Gampong Pulo Panjoe.\\nSelain melaksanakan kegiatan kebersihan, Desa (Gampong) juga mengoptimalkan suplai air bersih melalui sumur bor desa dan memperbaiki lampu penerangan jalan dalam desa untuk memudahkan masyarakat dalam beribadah.\\n“Selain membersihkan lingkungan, kami juga memperbaiki lampu jalan yang sudah rusak beserta mengoptimalkan penyuplaian air beraih melalui sumur bor desa kepada warga,” tambah Sukardi sebagai Kepala Urusan Pembangunan.\\nDengan demikian, saat warga masyarakat akan merasa nyaman dan khusyu’ dalam beribadah nantinya. tutupnya.\\nSeperti kita ketahui, bulan puasa tahun ini jatuh pada tanggal tujuh mei, tepatnya Sabtu pekan ini. (Cekdin)', 'Menjelang Ramadhan, warga Desa Wisata Malangan melakukan panen secara besar-besaran. Simak artikel berikut untuk mengetahui lebih lanjut', 'Ramadhan', '/uploads/img/articles/article1.jpg', '2018-11-18 00:55:09', 1, '5ace22c89029d318c0565c68'),
('5b3452cc8ae9710a04164929', 'Artikel Kedua', 'var db = req.con;\r\n	db.query(\'SELECT * FROM articles WHERE id_artikel=\'+req.params.id, function(err,article){\r\n		if(err) throw err;\r\n		if(!article){\r\n    		res.render(\'article\', {message: \'Article not found\'});\r\n    	}\r\n    	res.render(\'article\', {article:article});\r\n	});', 'Deskripsi singkat dari artikel dua', 'Irigasi', '/uploads/img/articles/article2.jpg', '2018-11-18 01:22:35', 1, '5ace22c89029d318c0565c68');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id_artikel`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
