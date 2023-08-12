CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    description VARCHAR(256)
);