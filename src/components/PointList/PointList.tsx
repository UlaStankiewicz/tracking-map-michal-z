import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import "./PointList.css";

interface Props {
  points: Point[];
}

export const PointList = ({ points }: Props) => {
  const pointList = points.map(({ id, name, lat, lng }) => (
    <ListGroup.Item key={id}>
      <div className="ms-2">
        <div className="fw-bold">{name}</div>[{lat}, {lng}]
      </div>
    </ListGroup.Item>
  ));

  return (
    <div className="PointList">
      <Card>
        <Card.Body>
          <Card.Title>Points</Card.Title>
        </Card.Body>
        <ListGroup variant="flush" className="PointList__content">
          {pointList}
        </ListGroup>
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
};
