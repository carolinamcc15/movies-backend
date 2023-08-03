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

INSERT INTO movie (name, budget, date, duration) VALUES
('Titanic', 295000000, '1997-11-01', 194),
('Super Mario Bros', 100000000, '2023-04-05', 132),
('Annabelle', 6500000, '2014-10-03', 98),
('Fractura', 5000000, '2019-09-22', 100)