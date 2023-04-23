import "../index.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function MovieView({ movie }) {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "50rem" }} className="d-flex flex-row mx-auto">
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
          alt={movie.title}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>content 1</ListGroup.Item>
          <ListGroup.Item>content 2</ListGroup.Item>
          <ListGroup.Item>content 3</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {/*<Card.Link href="#">Trailer</Card.Link>*/}
          {/*<Card.Link href="#">Another Link</Card.Link>*/}
        </Card.Body>
      </Card>
    </div>
  );
}
