import "../index.css";
import { FloatingLabel, Form, Row, Col } from "react-bootstrap";

export default function SideBar({ query, setQuery }) {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    // <label className='sidebar'>
    //   Search for a movie:
    //   <input
    //     className='input'
    //     type='text'
    //     value={query}
    //     onChange={handleInputChange}
    //   />
    // </label>
    <div className="sidebar">
      <Row className="g-2">
        <Col md>
          <FloatingLabel
            controlId="floatingInputGrid"
            label="Search for a movie"
            className="position-fixed"
          >
            <Form.Control
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="The Batman"
            />
          </FloatingLabel>
        </Col>
      </Row>
    </div>
  );
}
