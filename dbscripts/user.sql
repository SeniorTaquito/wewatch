CREATE TABLE ${tableName}.user (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    createdAt DATE,
    updatedAt DATE,
    isActive NUMERIC(1,0), 
    mostWatchedGenres TEXT[],
    UNIQUE(email)
);

