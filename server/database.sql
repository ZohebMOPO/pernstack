CREATE DATABASE docs;


CREATE TABLE note(
    docs_id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    description VARCHAR(255)
);