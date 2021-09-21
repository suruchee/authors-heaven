import * as React from "react";
import {
  Avatar,
  Grid,
  Typography,
  makeStyles,
  Container,
  Card,
  CardMedia,
  CardHeader,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    marginTop: "2vh",
    display: "flex",
  },
  action: {
    height: "20vh",
    width: "30vh",
    marginLeft: "10vh",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

const Article = () => {
  const classes = useStyles();
  const articles = useSelector(
    (state: RootState) => state.allArticles.articles
  );

  /*const renderList = articles.map((article:any) => {
    const { title, slug, description, body, favourited, published, author } =
      article;
    return (
      <div>
        <Container maxWidth="lg">
          <Card className={classes.card}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} lg={8}>
                <CardHeader
                  avatar={<Avatar />}
                  title={author}
                  subheader={favourited}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <Link to={`/article/${slug}`}>
                      <b>{title}</b>
                    </Link>{" "}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                <CardActionArea className={classes.action}>
                  <CardMedia
                    className={classes.image}
                    component="img"
                    alt={title}
                    src="https://previews.123rf.com/images/artmari/artmari2012/artmari201202858/161073538-closeup-view-human-author-memo-icon-woman-arm-record-greet-text-on-white-space-bright-color-ink-draw.jpg"
                    title={title}
                  />
                </CardActionArea>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </div>
    );
  });
  return <>{renderList}</>;*/
  return(
    <div>Article</div>
  )
};
export default Article;
