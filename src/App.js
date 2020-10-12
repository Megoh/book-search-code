import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Col from 'react-bootstrap/Col';
import Search from './Search.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import './App.css';

export default function App() {
  const [books, setBooks] = useState([]);
  const searchComponentRef = useRef();

  const observer = useRef();

  function infiniteScroll(node) {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        searchComponentRef.current.add10();
        searchComponentRef.current.searchBooks();
      }
    });

    if (node) observer.current.observe(node);
  }

  function handleSearch(book) {
    setBooks((prevBooks) => {
      return [...prevBooks, book];
    });
  }

  function resetSearch() {
    setBooks([]);
  }

  function truncate(str, limit) {
    return str.split(' ').splice(0, limit).join(' ');
  }

  return (
    <div className="App">
      <Search
        onSearch={handleSearch}
        onReset={resetSearch}
        ref={searchComponentRef}
      ></Search>
      {books.map((book, i) => {
        if (books.length === i + 1) {
          return (
            <div ref={infiniteScroll} as={Col} key={i}>
              <Container className="mb-4 mt-4">
                <Row className="justify-content-md-center">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img
                      variant="top"
                      src={book[1]}
                      alt="(missing thumbnail)"
                    />
                    <Card.Body>
                      <Card.Title>{book[0]}</Card.Title>
                      <Card.Text>{truncate(book[2], 15) + ' (...)'}</Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
              </Container>
            </div>
          );
        } else {
          return (
            <div as={Col} key={i}>
              <Container className="mb-4 mt-4">
                <Row className="justify-content-md-center">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img
                      variant="top"
                      src={book[1]}
                      alt="(missing thumbnail)"
                    />
                    <Card.Body>
                      <Card.Title>{book[0]}</Card.Title>
                      <Card.Text>{truncate(book[2], 15) + ' (...)'}</Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
              </Container>
            </div>
          );
        }
      })}
    </div>
  );
}
