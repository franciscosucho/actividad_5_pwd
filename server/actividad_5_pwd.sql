-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-04-2025 a las 01:20:56
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de datos: `actividad_5_pwd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_proyects`
--

CREATE TABLE `users_proyects` (
  `id_proyecto` int(20) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `año_actual` enum('1','2','3','4','5','6','7') NOT NULL,
  `carrera` enum('programacion','electronica') NOT NULL,
  `email` varchar(255) NOT NULL,
  `nombre_proyecto` varchar(255) NOT NULL,
  `nombre_docente` varchar(255) NOT NULL,
  `area_proyecto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users_proyects`
--

INSERT INTO `users_proyects` (`id_proyecto`, `nombre`, `apellido`, `año_actual`, `carrera`, `email`, `nombre_proyecto`, `nombre_docente`, `area_proyecto`) VALUES
(1, 'fran', 'sucho', '7', 'programacion', 'franciscosuchomela@gmail.com', 'ludiverso', 'balda', 'taller');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users_proyects`
--
ALTER TABLE `users_proyects`
  ADD PRIMARY KEY (`id_proyecto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users_proyects`
--
ALTER TABLE `users_proyects`
  MODIFY `id_proyecto` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;
