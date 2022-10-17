import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {map} from 'lodash'
import { getStorageSync, createStorageSync } from "../Services";
import { getMovieAPI, getMovieRecomendationAPI } from "../Services/request";
import { IMG_URL } from "../Services";
import MovieBox from "../Components/MovieBox";
import LottieAnimated from "../Components/Animation";



import { ToggleFavorite } from "../Services/utils";

type MovieParams = {
  id: string;
};
type MovieData = {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  release_date: string;
  poster_path: string;
};

interface MyObj {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

const Details = () => {
  //initial Data
  const history = useHistory();
  const { id } = useParams<MovieParams>();
  const [initialData, setInitialData] = useState<MovieData>();
  const [recomendationData, setRecomendationData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getMovieAPI(id)
      .then((resp) => {
        setInitialData(resp.data);
      })
      .catch((err) => {});
    getMovieRecomendationAPI(id)
      .then((resp) => {
        let recomList = resp.data.results;
        let fiveRecomendations = recomList.slice(recomList.length - 5);
        setRecomendationData(fiveRecomendations);
        setLoading(true)
      })
      .catch((err) => {});
   
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [id]);

  //favorites list
const [favData, setFavData] = useState([] as string[])
  useEffect(() => {
    const favList = getStorageSync('favorites') 
    let obj  = JSON.parse(favList!)
    setFavData(obj)
  }, [])
  
  const handleFavorites = (data:any) =>{
    ToggleFavorite(data)
  }

  return (
    <>
      {loading ? (
        <LottieAnimated />
      ) : (
        <>
          <div className="mt-5 d-flex justify-content-center">
            <div className="col-7">
              <div className="card card-profile card-plain bg-dark">
                <div className="row">
                  <div className="col-lg-5">
                    <a href="/">
                      <div className="position-relative">
                        <div className="blur-shadow-image">
                          <img
                            className=" rounded-3 shadow-lg img-fluid"
                            src={`${IMG_URL}/${initialData?.poster_path}`}
                            alt="img"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-7 ps-0 my-auto">
                    <div className="card-body text-left">
                      <div className="p-md-0 pt-3">
                        <h1 className="font-weight-bolder mb-0 text-white">
                          {initialData?.title}
                        </h1>
                        <h3 className="text-white mb-4 text-muted">
                          {initialData?.tagline}
                        </h3>
                        <p className="text-uppercase text-sm font-weight-bold mb-2 text-white">
                          Relase Date:{" "}
                          <span className="text-muted">
                            {initialData?.release_date}
                          </span>
                        </p>
                      </div>
                      <p className="mb-4 text-break text-white">
                        {initialData?.overview}
                      </p>
                      <div className="d-flex justify-content-end mt-5">
                        <button
                          type="button"
                          className="btn btn-outline-warning w-100 mr-4"
                          onClick={() => handleFavorites(initialData)}
                        >
                          Favorites
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-light w-100"
                          onClick={() => history.push('/')}
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <div className="col-8">
              <h1 className="text-white">Movies Related</h1>
              <MovieBox movie={recomendationData} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
