-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.1.0 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para integrador_cac
CREATE DATABASE IF NOT EXISTS `integrador_cac` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `integrador_cac`;

-- Volcando estructura para tabla integrador_cac.integrador_cac_23544
CREATE TABLE IF NOT EXISTS `integrador_cac_23544` (
  `id_orador` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `apellido` varchar(40) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `mail` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `tema` varchar(60) COLLATE latin1_spanish_ci NOT NULL,
  `fecha_alta` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id_orador`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci COMMENT='Trabajo Práctico Integrador Base de Datos';

-- Volcando datos para la tabla integrador_cac.integrador_cac_23544: ~10 rows (aproximadamente)
INSERT INTO `integrador_cac_23544` (`id_orador`, `nombre`, `apellido`, `mail`, `tema`, `fecha_alta`) VALUES
	(1, 'Bill', 'Gates', 'abc123@gmail.com', 'Windown', '2023-11-10 13:52:37'),
	(2, 'Steven', 'Job', 'abc234@gmail.com', 'Iphone', '2023-11-10 13:53:12'),
	(3, 'Marie', 'Cure', 'qaz123@gmail.com', 'Radiation', '2023-11-10 13:53:39'),
	(4, 'Isaac', 'Newton', 'zxc001@gmail.com', 'Phisycs', '2023-11-10 13:54:26'),
	(5, 'Albet', 'Einstein', 'qwerty@gamil.com', 'Space', '2023-11-10 13:55:07'),
	(6, 'Michael', 'Bloomberg', 'wsx001@gmail.com', 'Cambio Climático', '2023-11-10 13:56:36'),
	(7, 'Elon', 'Musk', 'infinity@gmail.com', 'Tesla', '2023-11-10 13:57:46'),
	(8, 'Oswaldo', 'Romero', 'oart1409@gmail.com', 'JavaSctipt', '2023-11-10 13:59:12'),
	(9, 'Merlty', 'Streep', 'mju112@gmail.com', 'Actuaciòn', '2023-11-10 13:59:51'),
	(10, 'Hiroyiki', 'Sanada', 'huiop1010@gmail.com', 'Actor', '2023-11-10 14:00:24');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
