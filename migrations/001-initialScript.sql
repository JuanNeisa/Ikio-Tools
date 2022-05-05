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
INSERT INTO evento VALUES(null,'Lista_Evento 3', 'La Florida', null, 20220428 );
INSERT INTO evento VALUES(null,'Lista_Evento 4', '', 'Evento buenisimo, pero buenisimo', 20220428 );
INSERT INTO evento VALUES(null,'Enduro FIM 5', 'La Florida', null, 20220428 );

-- Down
DROP TABLE evento;