-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 04 Jan 2017 pada 16.40
-- Versi Server: 10.1.19-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_kuliah_stok`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `Histories`
--

CREATE TABLE `Histories` (
  `id` int(10) UNSIGNED NOT NULL,
  `status_code` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `users` int(10) UNSIGNED DEFAULT NULL,
  `stoks` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20161214111719_Rules.js', 1, '2016-12-23 02:44:51'),
(2, '20161214111724_Users.js', 1, '2016-12-23 02:44:56'),
(3, '20161214111745_Stoks.js', 1, '2016-12-23 02:45:00'),
(4, '20161214111750_Supliers.js', 1, '2016-12-23 02:45:04'),
(5, '20161214111754_Histories.js', 1, '2016-12-23 02:45:10');

-- --------------------------------------------------------

--
-- Struktur dari tabel `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`is_locked`) VALUES
(0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `Rules`
--

CREATE TABLE `Rules` (
  `id` int(10) UNSIGNED NOT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `Rules`
--

INSERT INTO `Rules` (`id`, `status`) VALUES
(1, 'admin'),
(2, 'superadmin');

-- --------------------------------------------------------

--
-- Struktur dari tabel `Stoks`
--

CREATE TABLE `Stoks` (
  `id` int(10) UNSIGNED NOT NULL,
  `item_name` varchar(100) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `users` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `Supliers`
--

CREATE TABLE `Supliers` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `users` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `Users`
--

CREATE TABLE `Users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `rules` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `Users`
--

INSERT INTO `Users` (`id`, `username`, `password`, `email`, `rules`) VALUES
(48, 'admin', 'sha1$0f0bcf0b$1$e3e2b5812a86d647ad0d198de12f087fce6d83ac', 'admin@mail.com', 1),
(60, 'Super admin', 'sha1$f2be0e43$1$89f7bf680b5cd8523f7cc8f03a6874104254992b', 'superadmin@mail.com', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Histories`
--
ALTER TABLE `Histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `histories_users_foreign` (`users`),
  ADD KEY `histories_stoks_foreign` (`stoks`);

--
-- Indexes for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Rules`
--
ALTER TABLE `Rules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Stoks`
--
ALTER TABLE `Stoks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `stoks_users_foreign` (`users`);

--
-- Indexes for table `Supliers`
--
ALTER TABLE `Supliers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `supliers_email_unique` (`email`),
  ADD KEY `supliers_users_foreign` (`users`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_rules_foreign` (`rules`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Histories`
--
ALTER TABLE `Histories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
--
-- AUTO_INCREMENT for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `Rules`
--
ALTER TABLE `Rules`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `Stoks`
--
ALTER TABLE `Stoks`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
--
-- AUTO_INCREMENT for table `Supliers`
--
ALTER TABLE `Supliers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `Histories`
--
ALTER TABLE `Histories`
  ADD CONSTRAINT `histories_stoks_foreign` FOREIGN KEY (`stoks`) REFERENCES `Stoks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `histories_users_foreign` FOREIGN KEY (`users`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `Stoks`
--
ALTER TABLE `Stoks`
  ADD CONSTRAINT `stoks_users_foreign` FOREIGN KEY (`users`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `Supliers`
--
ALTER TABLE `Supliers`
  ADD CONSTRAINT `supliers_users_foreign` FOREIGN KEY (`users`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `users_rules_foreign` FOREIGN KEY (`rules`) REFERENCES `Rules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
