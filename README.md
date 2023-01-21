# My-Reads Project

This is a project of React Front-End which apply the library website that's show to you  3 shelves Currently Reading the shelf of the ongoing books you are now reading , Want To Read shelf which is like wish list of books you want to read in the future  and Read shelf which is the books that you had finished. 
Also you can change  each book from shelf to another based on your state of reading. 
Not only you can search for new books but also you can still see the satet of books if they are in your shelf.


To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md 
├── SEARCH_TERMS.md 
├── package.json 
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    ├── App.css 
    ├── App.js 
    ├── App.test.js 
    ├── BooksAPI.js 
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css 
    └── index.js 
```

## Backend Server

The backend is preArranged not done by me , I just made the frontEnd Process. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods that I used 

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

Simple view on the project 

![app](https://user-images.githubusercontent.com/97471166/192148143-1fab2069-93cb-4c65-94e0-30ca4d4e2fb0.gif)



#
