import Button from "react-bootstrap/Button";
import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";


function Searchbar({ criteria, getResults, search }) {
  return (
    <div>
      <div className="main">
        <Form>
          <Form.Control
            required
            type="text"
            placeholder="Search..."
            defaultValue=""
            onChange={search}
          />
        </Form>
        <br />

        <Form onChange={criteria}>
          <Form.Group onChange={criteria} controlId="formGroupRadio">
            <Form.Check className="check"
              name="radioButtonSet"
              custom
              value="movie"
              label="Movie"
              type="radio"
              id="movie"
            />
     <Form.Check className="check"
              name="radioButtonSet"
              custom
              value="musicVideo"
              label= "Music Video"
              type="radio"
              id="musicVideo"
            />
    <Form.Check className="check"
              name="radioButtonSet"
              custom
              inline
              value="ebook"
              label= "Apple Book"
              type="radio"
              id="ebook"
            />
    <Form.Check className="check"
              name="radioButtonSet"
              custom
              value="all"
              label= "All"
              type="radio"
              id="all"
            />
          </Form.Group>
        </Form>
        <Button className="btn-top" onClick={getResults} variant="danger">
          Search
        </Button>
      </div>
    </div>
  );
}

export default Searchbar;
