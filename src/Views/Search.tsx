import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { map } from "lodash";
import { getSearchMovieAPI } from "../Services/request";
import { IMG_URL } from "../Services";

type MovieParams = {
  search: string;
};

const Search = () => {
  const { search } = useParams<MovieParams>();
  const history = useHistory();
  //initial data
  const [searchData, setSearchData] = useState<any[]>([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getSearchMovieAPI(search)
      .then((resp) => {
        setSearchData(resp.data.results);
      })
      .catch((err) => {
        setError(true);
      });
  }, [search]);

  console.log(search);
  console.log(searchData);

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-6 mt-5">
        {search.length > 0 ? 
        <>
         {map(searchData, (movie) => {
          return (
            <div className="card card-profile card-plain bg-dark my-4">
              <div className="row">
                <div className="col-lg-5">
                  <a href="/">
                    <div className="position-relative">
                      <div className="blur-shadow-image">
                        <img
                          className=" rounded-3 shadow-lg img-fluid"
                          style={{ width: "75%" }}
                          src={`${IMG_URL}/${movie?.poster_path}`}
                          alt="img"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-7 ps-0 my-auto">
                  <div className="card-body text-left">
                    <div className="p-md-0 pt-3">
                      <h3 className="font-weight-bolder mb-0 text-white">
                        {movie.title}
                      </h3>
                    </div>
                    <p className="mb-4 text-break text-white">
                      {movie.overview}
                    </p>
                    <div className="d-flex justify-content-end mt-5">
                      <button
                        type="button"
                        className="btn btn-outline-success mr-4 w-100"
                        onClick={() => history.push(`/movies/${movie.id}`)}
                      >
                        Details
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-light w-100"
                        onClick={() => history.push("/")}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </>
        : <h1 className="text-white">No movie found try again</h1>}
       
      </div>
    </div>
  );
};

export default Search;
