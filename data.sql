\c books

CREATE TABLE books (
  isbn TEXT PRIMARY KEY,
  amazon_url TEXT,
  author TEXT,
  language TEXT, 
  pages INTEGER,
  publisher TEXT,
  title TEXT, 
  year INTEGER
);

INSERT INTO books (isbn, amazon_url, author, language, pages, publisher, title, year)
VALUES (069999999, 'http://a.co/brenden', 'Brenden Arias', 'english', 220, 'SFFC', 'How to Get Into SWE',2023);

INSERT INTO books (isbn, amazon_url, author, language, pages, publisher, title, year)
VALUES (06999222, 'http://a.co/meghan', 'Meghan Arias', 'english', 300, 'UFC', 'How to Get Into Fashion',2023);