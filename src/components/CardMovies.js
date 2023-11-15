import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function CardsMovies({ sviFilmovi }) {
  function top() {
    const top = [...sviFilmovi].sort((a, b) => b.rating - a.rating);
    return top.slice(0, 3);
  }

  function type(type) {
    if (type === true) return "3D";
    else return "Standard";
  }
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "20px",
        display: "inline-flex",
        justifyContent: "space-around",
      }}
    >
      {top().map((film) => (
        <div key={film.id} style={{ width: "30%", margin: "0px" }}>
          <Card
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "35px",
              background: "linear-gradient(0deg, white, #E33967)",
              textAlign:'center'
            }}
          >
            <CardContent>
              <Typography variant="h5">{film.name}</Typography>
              <Typography>{film.director}</Typography>
              <Typography>{film.rating} star</Typography>
              <Typography>{film.len}min</Typography>
              <Typography>{type(film.type)}</Typography>
            </CardContent>
            {/* <CardActions>
                        
                    </CardActions> */}
          </Card>
        </div>
      ))}
    </div>
  );
}
export default CardsMovies;
