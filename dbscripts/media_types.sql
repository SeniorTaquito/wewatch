CREATE TABLE ${tableName}.media_type (
    id NUMERIC PRIMARY KEY,
    media VARCHAR(100) NOT NULL,     
    UNIQUE(media)
);

INSERT INTO ${tableName}.media_type(id, media) VALUES(1, 'Movie');
INSERT INTO ${tableName}.media_type(id, media) VALUES(2, 'Show');
-- INSERT INTO ${tableName}.media_type(id, media) VALUES(3, 'Game');
