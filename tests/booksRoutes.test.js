const request = require('supertest');
const jsonschema = require('jsonschema');
const ExpressError = require('../expressError');
const bookSchema = require('../schemas/bookSchema.json');
const Book = require('../models/book');
const app = require("../app");
const db = require('../db');


//set NODE_ENV to 'test' for testing in test db
process.env.NODE_ENV = 'test';


describe('Tests for books routes', () => {

    describe('GET /', () => {
        test('get all books should return list of books from db', async () => {
            const response = await request(app).get('/books/');

            expect(response.body.books).not.toBeFalsy();
            expect(response.body.books[0].author).toEqual('Meghan Arias');
        })  
    });
    
    describe('POST / & DELETE /:isbn ', () => {
        test('valid book data should return 201 status and book object', async () => {
            const validBookData = {
                isbn: "0691161518",
                amazon_url: "http://a.co/eobPtX2",
                author: "Matthew Lane",
                language: "english",
                pages: 264,
                publisher: "Princeton University Press",
                title: "Power-Up: Unlocking the Hidden Mathematics in Video Games",
                year: 2017
            };

            const response = await request(app)
                .post('/books/')
                .send(validBookData);

            expect(response.status).toBe(201);
        });

        test('valid book deletion should return { message: "Book deleted" }', async () => {
            const response = await request(app)
                .delete('/books/0691161518');

            expect(response.body.message).toEqual("Book deleted");
        });
    });

});

afterAll(async function () {
    await db.end();
});