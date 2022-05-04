-- Up
CREATE TABLE evento(
    evento_id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
  	ubicacion TEXT NOT NULL,
  	descripcion TEXT,
  	fecha NUMERIC NOT NULL
);

INSERT INTO evento VALUES(null,'Gladeadores OffRoad', 'Modoñedo', null, 20220422 );
INSERT INTO evento VALUES(null,'Valida Nacional Enduro FIM', 'La Florida', null, 20220428 );

-- Down
DROP TABLE evento;