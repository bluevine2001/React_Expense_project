import Card from "./Card";
import "./css/ApiFetching.css";

const MovieElement = (props) => {
  return (
    <Card className="movieCard">
      <h1>{props.name}</h1>
      <p>{props.synopsis}</p>
    </Card>
  );
};

export default MovieElement;
