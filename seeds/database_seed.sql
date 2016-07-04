CREATE DATABASE `beer_tasting_app`;
CREATE USER `beer_admin`@`localhost` IDENTIFIED BY '_B33rZ!_';
GRANT ALL PRIVILEGES ON `beer_tasting_app`.* TO `beer_admin`@`localhost` IDENTIFIED BY '_B33rZ!_';
FLUSH PRIVILEGES;
USE `beer_tasting_app`;

CREATE TABLE `sessions` (
  `id` INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `name` VARCHAR(300) DEFAULT NULL,
  `session_open` TINYINT(1) DEFAULT 1
) Engine InnoDB;

CREATE TABLE `users` (
  `id` INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `session_id` INT(10) UNSIGNED,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `name` VARCHAR(100) DEFAULT NULL,
  `user_type` SET('host','taster') DEFAULT 'taster',
  FOREIGN KEY (`session_id`) REFERENCES `sessions`(`id`) ON DELETE CASCADE
) Engine InnoDB;

CREATE TABLE `beers` (
  `id` INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `unique_code` VARCHAR(6) DEFAULT NULL,
  `session_id` INT(10) UNSIGNED,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `brand` VARCHAR(100) DEFAULT NULL,
  `name` VARCHAR(300) DEFAULT NULL,
  `tasting_in_process` TINYINT(1) DEFAULT 0,
  `tasting_complete` TINYINT(1) DEFAULT 0,
  FOREIGN KEY (`session_id`) REFERENCES `sessions`(`id`) ON DELETE CASCADE
) Engine InnoDB;

CREATE TABLE `notes` (
  `id` INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `beer_id` INT(10) UNSIGNED,
  `user_id` INT(10) UNSIGNED,
  `beer_guess` INT(10) UNSIGNED,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `rating` TINYINT(1) UNSIGNED,
  `notes` TEXT,
  UNIQUE KEY `user_x_beer` (`beer_id`,`user_id`),
  FOREIGN KEY (`beer_id`) REFERENCES `beers`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) Engine InnoDB;
