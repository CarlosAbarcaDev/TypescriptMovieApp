import { IMG_URL } from "../Services";
import { map } from "lodash";
import { useHistory } from "react-router";


interface Props {
  movie: Array<{
    id: string;
    title: string;
    overview: string;
    vote_average: string;
    release_date: string;
    poster_path: string;
  }>;
}

const MovieBox = ({ movie }: Props) => {
  const history = useHistory()

  return (          
    <div className="row row-cols-xs-1 row-cols-md-2 row-cols-lg-3  g-4">
      {map(movie, (item) => {
        return (
          <div key={item.id} className="col my-3">
            <div className="card h-100 bg-dark">
              <img
                src={`${IMG_URL}/${item.poster_path}`}
                className="card-img-top h-50"
                alt="Hollywood Sign on The Hill"
              />
              <div className="card-body">
                <h3 className="card-title text-white">{item.title}</h3>
                <p className="card-text text-secondary">
                  {item.overview}
                </p>

              </div>
                <button type="button" className="btn btn-success btn-rounded" onClick={() => history.push(`/movies/${item.id}`)}>More info</button>
             
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieBox;
