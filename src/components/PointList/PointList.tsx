import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import "./PointList.css";

export const PointList = () => {
  return (
    <div className="PointList">
      <Card>
        <Card.Body>
          <Card.Title>Points</Card.Title>
        </Card.Body>
        <ListGroup variant="flush" className="PointList__content">
          <ListGroup.Item>placeholder [12345, 54321]</ListGroup.Item>
        </ListGroup>
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
};
