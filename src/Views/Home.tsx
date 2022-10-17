import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { getPopularListAPI } from "../Services/request";
import MovieBox from "../Components/MovieBox";
import LottieAnimated from "../Components/Animation";
const Home = () => {
  //initial Data
  const [initialData, setInitialData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getPopularListAPI()
      .then((resp) => {
        setInitialData(resp.data.results);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch((err) => {});
  }, []);

  return (
    <Row className="d-flex justify-content-center">
      <Col className="col-8 mt-4">
        <h1 className="text-white">Best place to find your movie</h1>
        {loading ? <LottieAnimated /> : <MovieBox movie={initialData} />}
      </Col>
    </Row>
  );
};

export default Home;
