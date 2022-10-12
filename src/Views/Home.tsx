import {useState, useEffect} from 'react'
import { Row, Col } from "react-bootstrap";
import { getPopularListAPI } from '../Services/request';
import MovieBox from '../Components/MovieBox';
const Home = () => {
  
    //initial Data
    const [initialData, setInitialData] = useState([])

    useEffect(() => {
      getPopularListAPI().then((resp) =>{
        setInitialData(resp.data.results)
      })
    }, [])
    
  
  
    return (
  <Row className="d-flex justify-content-center">
    <Col className="col-8 mt-4">
        <h1 className="text-white">Best place to find your movie</h1>
        <MovieBox movie={initialData} />
    </Col>
  </Row>
  )
};

export default Home;
