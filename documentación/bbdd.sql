-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.1.21-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.5.0.5261
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para hlanz_bank
CREATE DATABASE IF NOT EXISTS `hlanz_bank` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `hlanz_bank`;

-- Volcando estructura para tabla hlanz_bank.cuentas
CREATE TABLE IF NOT EXISTS `cuentas` (
  `id_cuenta` int(11) NOT NULL AUTO_INCREMENT,
  `numero` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `propietario` int(11) NOT NULL,
  `saldo` float unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_cuenta`),
  KEY `FK_cuentas_usuarios` (`propietario`),
  CONSTRAINT `FK_cuentas_usuarios` FOREIGN KEY (`propietario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla hlanz_bank.info
CREATE TABLE IF NOT EXISTS `info` (
  `id` int(11) NOT NULL,
  `imagen` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titulo` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` varchar(5000) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla hlanz_bank.movimientos
CREATE TABLE IF NOT EXISTS `movimientos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `concepto` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `movimiento` float NOT NULL,
  `saldo_actual` float NOT NULL,
  `cuenta` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_movimientos_cuentas` (`cuenta`),
  CONSTRAINT `FK_movimientos_cuentas` FOREIGN KEY (`cuenta`) REFERENCES `cuentas` (`id_cuenta`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla hlanz_bank.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dni` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `teléfono` int(11) DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pin` int(4) unsigned zerofill NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
