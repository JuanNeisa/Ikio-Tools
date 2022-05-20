-- Up
CREATE TABLE evento(
    evento_id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
  	ubicacion TEXT NOT NULL,
  	descripcion TEXT,
  	fecha NUMERIC NOT NULL
);

INSERT INTO evento VALUES(null,'Gladeadores OffRoad', 'Modoñedo', null, 22042022 );
INSERT INTO evento VALUES(null,'Valida Nacional Enduro FIM', 'La Florida', null, 02042022 );
INSERT INTO evento VALUES(null,'Lista_Evento 3', 'La Mariposita', null, 22042022 );
INSERT INTO evento VALUES(null,'Lista_Evento 4', 'La Florida', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 20042022 );
INSERT INTO evento VALUES(null,'Enduro FIM 5', 'Laguna Seca - Guasca', null, 12042022 );

-- Down
DROP TABLE evento;