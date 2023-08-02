-- Script para crear la tabla "películas"
CREATE TABLE movie (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  budget INTEGER NOT NULL,
  date DATE NOT NULL,
  duration INTEGER NOT NULL
);

-- Script para crear la tabla "opciones"
CREATE TABLE option (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  path VARCHAR(100) UNIQUE NOT NULL,
  disabled BOOLEAN DEFAULT FALSE
);

INSERT INTO option (name, path) VALUES
('Listado de películas', '/peliculas'),
('Formulario', '/formulario'),
('Renta de películas', '/rentar-pelicula'),
('Administrar opciones', '/administrar-opciones');