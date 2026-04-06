import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MEXCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "black",
        border: "2px solid white",
        color: "white",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="/banderaMEX.png"
        title="México anfitrión"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          México (MEX)
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
          México, federación de fútbol perteneciente a la Concacaf, es el
          segundo de los anfitriones del Mundial 2026, contando con el imponente
          estadio Azteca, con una de las mejores hinchadas del deporte.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href="/logIn"
          sx={{ color: "rgba(255,255,255,0.75)" }}
        >
          Partidos
        </Button>
        <Button
          size="small"
          href="/logIn"
          sx={{ color: "rgba(255,255,255,0.75)" }}
        >
          Jugadores
        </Button>
      </CardActions>
    </Card>
  );
}
