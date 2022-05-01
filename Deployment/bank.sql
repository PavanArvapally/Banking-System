-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 29, 2022 at 09:52 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bank`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `adminId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `bankCode` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`adminId`, `name`, `bankCode`) VALUES
(1, 'Pavan', 'KKBK');

-- --------------------------------------------------------

--
-- Table structure for table `banks`
--

CREATE TABLE `banks` (
  `bankCode` varchar(11) NOT NULL,
  `bankName` varchar(255) NOT NULL,
  `mainOfficeAddress` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `banks`
--

INSERT INTO `banks` (`bankCode`, `bankName`, `mainOfficeAddress`) VALUES
('KKBK', 'Kotak Mahindra Bank', 'Bandra Kurla Complex, Mumbai,Maharashtra,India,400020');

-- --------------------------------------------------------

--
-- Table structure for table `bank_accounts`
--

CREATE TABLE `bank_accounts` (
  `accNo` int(11) NOT NULL,
  `customer` int(11) NOT NULL,
  `branch` varchar(11) NOT NULL,
  `type` enum('savings','current') NOT NULL,
  `accBalance` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bank_accounts`
--

INSERT INTO `bank_accounts` (`accNo`, `customer`, `branch`, `type`, `accBalance`) VALUES
(54001, 1, 'KKBK0000148', 'savings', 300),
(54002, 2, 'KKBK0009669', 'current', 980),
(54003, 3, 'KKBK0009669', 'current', 600),
(54006, 3, 'KKBK0000148', 'current', 800);

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE `branches` (
  `branchCode` varchar(11) NOT NULL,
  `address` longtext NOT NULL,
  `manager` varchar(100) NOT NULL,
  `bankCode` varchar(11) DEFAULT NULL,
  `isHeadOffice` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `branches`
--

INSERT INTO `branches` (`branchCode`, `address`, `manager`, `bankCode`, `isHeadOffice`) VALUES
('KKBK0000148', 'NR PETA, Kurnool, Andhra Pradesh, India, 518004', 'kane', 'KKBK', 0),
('KKBK0002345', 'C Camp, Kurnool, Andhra Pradesh, India, 518004', 'Hafiz Khan', 'KKBK', 1),
('KKBK0008774', 'RiverView Coloney, Kurnool, Andhra Pradesh, India, 518004', 'warner', 'KKBK', 0);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customerId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customerId`, `name`, `address`) VALUES
(1, 'ramesh', 'nayaadda, Nizamabad, Telangana, India, 518004'),
(2, 'ravi', 'tahanagally, Nizamabad, Telangana, India, 518004'),
(3, 'banu', 'premNagar, Kurnool, Andhra Pradesh, India, 518001');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `empId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `branchCode` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`empId`, `name`, `branchCode`) VALUES
(1, 'Ktr tammudu', 'KKBK0000148'),
(2, 'Kavitha akka', 'KKBK0009669'),
(3, 'kcr Anna', 'KKBK0000148');

-- --------------------------------------------------------

--
-- Table structure for table `reversal_requests`
--

CREATE TABLE `reversal_requests` (
  `reqId` int(11) NOT NULL,
  `transactionNo` int(11) NOT NULL,
  `reqDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `isApproved` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `transactionNo` int(11) NOT NULL,
  `accNo` int(11) NOT NULL,
  `amount` decimal(11,2) NOT NULL,
  `type` enum('debit','credit') NOT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`transactionNo`, `accNo`, `amount`, `type`, `timestamp`) VALUES
(14, 54001, '200.00', 'credit', '2022-04-28 21:32:39'),
(15, 54001, '100.00', 'debit', '2022-04-28 21:33:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`adminId`),
  ADD KEY `bankCode` (`bankCode`);

--
-- Indexes for table `banks`
--
ALTER TABLE `banks`
  ADD PRIMARY KEY (`bankCode`);

--
-- Indexes for table `bank_accounts`
--
ALTER TABLE `bank_accounts`
  ADD PRIMARY KEY (`accNo`),
  ADD KEY `branch` (`branch`),
  ADD KEY `customer` (`customer`);

--
-- Indexes for table `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`branchCode`),
  ADD KEY `bankCode` (`bankCode`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customerId`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`empId`),
  ADD KEY `branchCode` (`branchCode`);

--
-- Indexes for table `reversal_requests`
--
ALTER TABLE `reversal_requests`
  ADD PRIMARY KEY (`reqId`),
  ADD KEY `transactionNo` (`transactionNo`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`transactionNo`),
  ADD KEY `accNo` (`accNo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `adminId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customerId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `empId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `reversal_requests`
--
ALTER TABLE `reversal_requests`
  MODIFY `reqId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `transactionNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `admins_ibfk_1` FOREIGN KEY (`bankCode`) REFERENCES `banks` (`bankCode`);

--
-- Constraints for table `bank_accounts`
--
ALTER TABLE `bank_accounts`
  ADD CONSTRAINT `bank_accounts_ibfk_1` FOREIGN KEY (`branch`) REFERENCES `branches` (`branchCode`),
  ADD CONSTRAINT `bank_accounts_ibfk_2` FOREIGN KEY (`customer`) REFERENCES `customers` (`customerId`);

--
-- Constraints for table `branches`
--
ALTER TABLE `branches`
  ADD CONSTRAINT `branches_ibfk_1` FOREIGN KEY (`bankCode`) REFERENCES `banks` (`bankCode`);

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`branchCode`) REFERENCES `branches` (`branchCode`);

--
-- Constraints for table `reversal_requests`
--
ALTER TABLE `reversal_requests`
  ADD CONSTRAINT `reversal_requests_ibfk_1` FOREIGN KEY (`transactionNo`) REFERENCES `transactions` (`transactionNo`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`accNo`) REFERENCES `bank_accounts` (`accNo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
