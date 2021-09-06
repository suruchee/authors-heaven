import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
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
  const articles = useSelector(
    (state: RootState) => state.allArticles.articles
  );
  console.log(articles);
  const { id, user, datePosted, title, description, time, category } =
    articles[0];
  return (
    <div>
      <Container maxWidth="lg">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.image}
              component="img"
              alt={title}
              src="https://previews.123rf.com/images/artmari/artmari2012/artmari201202858/161073538-closeup-view-human-author-memo-icon-woman-arm-record-greet-text-on-white-space-bright-color-ink-draw.jpg"
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  );
}
