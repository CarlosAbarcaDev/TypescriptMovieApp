import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import MovieBox from "../Components/MovieBox";
import LottieAnimated from "../Components/Animation";

const Favorites = () => {
  
  //initial Data
  const [initialData, setInitialData] = useState([]);
  const [loading, setLoading] = useState(true);
  //favorites list

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favorites") || "");
    setInitialData(items);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Row className="d-flex justify-content-center">
      <Col className="col-8 mt-4">
        <h1 className="text-white">Movies you like</h1>
        {loading ? <LottieAnimated /> : initialData.length > 0 ? <MovieBox movie={initialData}/> : <h2 className="text-white mt-5">visit our movies page to add a new favorite</h2>}
      </Col>
    </Row>
  );
};

export default Favorites;
