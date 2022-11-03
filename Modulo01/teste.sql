CREATE DATABASE sistemaDeCadastro;

SHOW DATABASES;

USE sistemaDeCadastro;

CREATE TABLE usuarios(
    nome VARCHAR(255),
    email VARCHAR(255),
    idade INT
);

SHOW TABLES;

INSERT INTO usuarios(nome, email, idade) VALUES("Kervi","kervij@gmail.com",22);
INSERT INTO usuarios(nome, email, idade) VALUES("Teste","teste@test",10);

SELECT * FROM usuarios WHERE nome="Teste"

UPDATE usuarios SET email="teste@teste.com", idade=16 WHERE nome="Teste" AND email="teste@teste.com";

DELETE FROM usuarios WHERE nome="Teste" AND email="teste@teste.com";