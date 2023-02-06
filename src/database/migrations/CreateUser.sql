CREATE TABLE IF NOT EXISTS USERS(
	ID UUID PRIMARY KEY,
    NAME VARCHAR(255),
    EMAIL VARCHAR(255),
    ADMIN BOOLEAN,
    CREATED_AT DATE,
    UPDATED_AT DATE
);