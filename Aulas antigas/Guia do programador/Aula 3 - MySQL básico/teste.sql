/*      Primeira aula, colocar os códigos aqui e colar no mySQL pelo CMD        

Para logar: mysql -h localhost -u root -p
SHOW DATABASES; = visualizar banco de dados existentes
CREATE DATABASE casdastrodeusuarios; = cadastrar um banco de dados
USE cadastrodeusuarios; = utilizar esse banco de DADOS
SHOW TABLES; mostra as tabelas existentes
SELECT * FROM usuarios; = Mostra os dados em forma de tabela
DESCRIBE usuarios; = visualiza as colunas das tabelas e seus formatos
     

      CRIAR TABELA    */

CREATE TABLE usuarios(
    nome VARCHAR(50), /* até no máximo 50 caracteres */
    email VARCHAR(50),
    idade INT
);



/*       INSERIR DADOS   */

INSERT INTO usuarios(nome, email, idade) VALUES(
    'Carlos',
    'carlos.av.amorim@gmail.com',
    27
);
/* Não importa a ordem dos dados, desde que esteja correto com os atributos */
INSERT INTO usuarios(idade, email, nome) VALUES(
    31,
    'testeDanielle@gmail.com',
    'Danielle'
);

INSERT INTO usuarios(email, idade, nome) VALUES(
    'sophiaTeste@gmail.com',
    7,
    'Sophia'
);

INSERT INTO usuarios(email, idade, nome) VALUES(
    'testeTeste@gmail.com',
    7,
    'teste'
);

/* DESCRIBE usuarios; = visualiza tabela com os dados cadastrados

        SELECIONAR DADOS / FILTRAR DADOS    */

SELECT * FROM usuarios WHERE idade = 7;
SELECT * FROM usuarios WHERE idade >= 27;
SELECT * FROM usuarios WHERE nome = 'Carlos';

/*   DELETAR DADOS DA TABELA   */

DELETE FROM usuarios; /* CUIDADO!!! Deleta a tabela inteira */
DELETE FROM usuarios WHERE nome = 'Carlos';
DELETE FROM usuarios WHERE email = 'testeDanielle@gmail.com';

/*      ATUALIZAR DADOS NUMA TABELA JÁ CRIADA       */

UPDATE usuarios SET nome = 'teste'; /*   CUIDADO!! Todos os registros serão atualizados com esses dados*/
UPDATE usuarios SET nome = 'teste2' WHERE nome = 'Sophia';