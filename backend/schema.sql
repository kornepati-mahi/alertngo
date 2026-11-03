-- Database Schema for ALERT NGO (XAMPP MySQL)
CREATE DATABASE IF NOT EXISTS `alertngo_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `alertngo_db`;

-- 1. Donations Table
CREATE TABLE IF NOT EXISTS `donations` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `phone` VARCHAR(30) NULL,
    `pan` VARCHAR(20) NULL,
    `amount` DECIMAL(10,2) NOT NULL,
    `message` TEXT NULL,
    `payment_status` ENUM('pending', 'completed', 'failed') DEFAULT 'completed',
    `transaction_id` VARCHAR(100) NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Contact Queries Table
CREATE TABLE IF NOT EXISTS `contacts` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `phone` VARCHAR(30) NULL,
    `subject` VARCHAR(255) NULL,
    `message` TEXT NOT NULL,
    `status` ENUM('unread', 'read', 'replied') DEFAULT 'unread',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Newsletter Subscriptions
CREATE TABLE IF NOT EXISTS `newsletters` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `email` VARCHAR(150) NOT NULL UNIQUE,
    `subscribed_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Programs / Initiatives Table
CREATE TABLE IF NOT EXISTS `programs` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(200) NOT NULL,
    `category` VARCHAR(100) NOT NULL,
    `description` TEXT NOT NULL,
    `beneficiaries` VARCHAR(100) DEFAULT '1,000+',
    `image_url` VARCHAR(255) NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. Impact Metrics / Statistics Table
CREATE TABLE IF NOT EXISTS `impact_stats` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `metric_key` VARCHAR(50) UNIQUE NOT NULL,
    `metric_label` VARCHAR(100) NOT NULL,
    `metric_value` INT NOT NULL,
    `suffix` VARCHAR(20) DEFAULT '+',
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed Data for Programs
INSERT INTO `programs` (`title`, `category`, `description`, `beneficiaries`, `image_url`) VALUES
('Adivasi Forest Rights Recognition', 'Advocacy', 'Enabling tribal families to secure legal rights under the Forest Rights Act (FRA), protecting ancestral land and access to forest resources.', '12,000+ Families', 'https://alertngo.in/wp-content/uploads/2022/08/StockSnap_SUSVDM9A94.jpg'),
('Women Livelihood & Cooperatives', 'Livelihood', 'Empowering indigenous women through sustainable handicraft production, non-timber forest product processing, and micro-enterprises.', '3,500+ Women', 'https://alertngo.in/wp-content/uploads/2022/08/StockSnap_H2WUGQ38EZ.jpg'),
('Sustainable Agriculture & Seed Banks', 'Agriculture', 'Promoting millets, organic indigenous crop cultivation, and conservation of native heirloom seeds among Adivasi farmers.', '4,800+ Farmers', 'https://alertngo.in/wp-content/uploads/2022/08/StockSnap_6CUBJFF90D.jpg'),
('Community Solar & Clean Energy', 'Environment', 'Equipping remote off-grid tribal hamlets with decentralized solar lighting systems and clean energy alternatives.', '75+ Hamlets', 'https://alertngo.in/wp-content/uploads/2022/08/StockSnap_W7A2G964H2.jpg');

-- Seed Data for Impact Metrics
INSERT INTO `impact_stats` (`metric_key`, `metric_label`, `metric_value`, `suffix`) VALUES
('families_supported', 'Tribal Families Empowered', 25000, '+'),
('hectares_protected', 'Hectares Forest Rights Protected', 15000, ' ha'),
('women_trained', 'Women Micro-Entrepreneurs', 3500, '+'),
('villages_reached', 'Tribal Hamlets Reached', 180, '+');

-- 6. Flash News / Scrolling Announcements (managed from the admin panel)
CREATE TABLE IF NOT EXISTS `flash_news` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `message` VARCHAR(500) NOT NULL,
    `is_active` TINYINT(1) NOT NULL DEFAULT 1,
    `sort_order` INT NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `flash_news` (`message`, `is_active`, `sort_order`) VALUES
('Welcome to ALERT — latest announcements and field updates appear here.', 1, 1);
