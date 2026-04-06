import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function USACard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/banderaUSA.png"
        title="USA anfitrión"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Estados Unidos (USA)
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Estados Unidos, federación de fútbol perteneciente a la Concacaf, es
          uno de los tres anfitriones del Mundial 2026, contando con estadios de
          primer nivel, preparados para enfrentar a los mejores futbolistas del
          mundo.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/logIn">
          Partidos
        </Button>
        <Button size="small" href="/logIn">
          Jugadores
        </Button>
      </CardActions>
    </Card>
  );
}
