import '../index.css';
import { FloatingLabel, Form, Row, Col } from 'react-bootstrap';

export default function SearchBar({ query, setQuery }) {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <Row className='g-2'>
        <Col md>
          <FloatingLabel
            controlId='floatingInputGrid'
            label='Search for a movie'
            className='position-fixed'
            style={{ width: '17rem' }}
          >
            <Form.Control
              type='text'
              value={query}
              onChange={handleInputChange}
            />
          </FloatingLabel>
        </Col>
      </Row>
    </div>
  );
}
