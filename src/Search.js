import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import axios from 'axios';

const apiKey = 'AIzaSyBnRe4iMzT3guJYJbJs9gwn4cwUmRVLhZs';

// export async function searchBooks2() {
//   return await axios
//     .get(
//       `https://www.googleapis.com/books/v1/volumes?q=test&key=AIzaSyBnRe4iMzT3guJYJbJs9gwn4cwUmRVLhZs`
//     )
//     .then((response) => {
//       return response.data.items[0].volumeInfo.title;
//     });
// }

const Search = forwardRef((props, ref) => {
  const searchInputRef = useRef(null);
  const authorInputRef = useRef(null);
  const languageInputRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    searchBooks() {
      axios
        .get(
          authorInputRef.current.value.length > 0
            ? `https://www.googleapis.com/books/v1/volumes?q=${searchInputRef.current.value}+inauthor:${authorInputRef.current.value}&startIndex=${startIndex}&key=${apiKey}`
            : `https://www.googleapis.com/books/v1/volumes?q=${searchInputRef.current.value}&startIndex=${startIndex}&key=${apiKey}`
        )
        .then((response) => {
          response.data.items.forEach((item) => {
            if (
              languageInputRef.current.value === item.volumeInfo.language ||
              languageInputRef.current.value === 'any language'
              //   &&
              // item.volumeInfo.publishedDate
              //   ? verifyStartDate(item.volumeInfo.publishedDate) &&
              //     verifyEndDate(item.volumeInfo.publishedDate)
              //   : true
            ) {
              const entry = [
                item.volumeInfo.title
                  ? item.volumeInfo.title
                  : '(missing title)',
                item.volumeInfo.imageLinks
                  ? item.volumeInfo.imageLinks.thumbnail
                  : '',
                item.volumeInfo.description
                  ? item.volumeInfo.description
                  : '(missing description)',
              ];
              props.onSearch(entry);
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    add10() {
      setStartIndex((prevStartIndex) => prevStartIndex + 10);
    },
  }));

  function handleSubmit(e) {
    e.preventDefault();
    props.onReset();
    ref.current.searchBooks();
  }

  return (
    <>
      <Form>
        <Row className="justify-content-center">
          <Form.Group as={Col} sm={6} md={4}>
            <Form.Label htmlFor="searchInput">Search</Form.Label>
            <Form.Control
              id="searchInput"
              ref={searchInputRef}
              type="text"
              placeholder="Search your book..."
              name="search"
            />
          </Form.Group>
        </Row>

        <Row className="justify-content-center">
          <Form.Group as={Col} sm={6} md={4}>
            <Form.Label htmlFor="authorInput">Author</Form.Label>
            <Form.Control
              id="authorInput"
              ref={authorInputRef}
              type="text"
              placeholder="Specify the author..."
              name="author"
            />
          </Form.Group>
        </Row>

        <Row className="justify-content-center">
          <Form.Group as={Col} sm={6} md={4}>
            <Form.Label htmlFor="languageInput">Language</Form.Label>
            <Form.Control
              id="languageInput"
              ref={languageInputRef}
              as="select"
              defaultValue="any language"
            >
              <option value="any language">any language</option>
              <option value="ar">Arabic</option>
              <option value="zh">Chinese</option>
              <option value="da">Danish</option>
              <option value="nl">Dutch</option>
              <option value="en">English</option>
              <option value="fi">Finnish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="hi">Hindi</option>
              <option value="it">Italian</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="no">Norwegian</option>
              <option value="pl">Polish</option>
              <option value="ru">Russian</option>
              <option value="es">Spanish</option>
              <option value="sv">Swedish</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </Form>
    </>
  );
});

export default Search;
