INSERT INTO `turmas` (`disciplina_id`,`letra`,`semestre_id`,`plano_id`,`docente_responsavel`,`docente_secundario`,`horario`,`local`,`max_alunos`,`chave_acesso`,`createdAt`,`updatedAt`) 
VALUES (1,'A',1,2,3,4,'12M12345','Sala',10,'abc' ,DATE('now'),DATE('now'));

CREATE TABLE turmas_nova (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    disciplina_id INTEGER NOT NULL,
    letra CHAR(1) NOT NULL,
    semestre_id TEXT NOT NULL,
    plano_id INTEGER,
    docente_responsavel INTEGER,
    docente_secundario INTEGER,
    horario TEXT NOT NULL,
    local TEXT NOT NULL,
    max_alunos INTEGER NOT NULL,
    chave_acesso TEXT NOT NULL,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
    updatedAt TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id)
);

DROP TABLE turmas_nova

UPDATE usuarios
SET docente = 1
WHERE id = 1;

UPDATE usuarios
SET docente = 2
WHERE id = 2;

UPDATE usuarios
SET docente = 3
WHERE id = 3;