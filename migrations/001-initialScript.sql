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

INSERT INTO evento VALUES(null,'Gladeadores OffRoad', 'Modoñedo', null, 1, 22042022 );
INSERT INTO evento VALUES(null,'Valida Nacional Enduro FIM', 'La Florida', null, 1, 02042022 );
INSERT INTO evento VALUES(null,'Lista_Evento 3', 'La Mariposita', null, 1, 22042022 );
INSERT INTO evento VALUES(null,'Enduro FIM 5', 'Laguna Seca - Guasca', null, 1, 12042022 );

INSERT INTO piloto VALUES(321,'Juan David Neisa', null, null, null, 1 );

-- Down
DROP TABLE evento;
DROP TABLE piloto;