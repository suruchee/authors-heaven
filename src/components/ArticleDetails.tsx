import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {

} from "../redux/actions/articlesActions";
const useStyles = makeStyles({
  card: {
    marginTop: "2vh",
  },
  image: {
    marginLeft: "30vh",
    height: "50%",
    width: "50%",
  },
});

export default function ArticleDetails() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="lg">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.image}
              component="img"
              src="https://previews.123rf.com/images/artmari/artmari2012/artmari201202858/161073538-closeup-view-human-author-memo-icon-woman-arm-record-greet-text-on-white-space-bright-color-ink-draw.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  );
}
