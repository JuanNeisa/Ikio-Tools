-- Up
CREATE TABLE evento(
    evento_id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
  	ubicacion TEXT NOT NULL,
  	descripcion TEXT,
	estado NUMERIC NOT NULL,
  	fecha NUMERIC NOT NULL
);

CREATE TABLE piloto(
	numero INTEGER PRIMARY KEY,
	nombre TEXT NOT NULL,
	liga TEXT,
	departamento TEXT,
	club TEXT,
	evento_id INTEGER NOT NULL,
	FOREIGN KEY (evento_id) REFERENCES evento (evento_id)
);

INSERT INTO evento VALUES(null,'Gladeadores OffRoad 2022-1', 'Modoñedo', 'Evento multimarca y multiproposito organizado por el grupo BikeFriend', 1, 22042022 );

INSERT INTO piloto VALUES(321,'Juan David Neisa', 'Bogota', 'Cundinamarca', 'IkioRace Club', 1 );

-- Down
DROP TABLE evento;
DROP TABLE piloto;