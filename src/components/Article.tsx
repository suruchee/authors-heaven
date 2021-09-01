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
  console.log(articles);
  const { id, user, datePosted, title, description, time, category } =
    articles[0];
  /*  const renderList = articles.map((article) =>{
  const {id,user, title, description, time, category} = article;
    return(
      <></>
    )
  })*/

  return (
    <div>
      <Container maxWidth="lg">
        <Card className={classes.card}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} lg={8}>
              <CardHeader
                avatar={<Avatar />}
                title={user}
                subheader={datePosted}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link to={`/article/${id}`}>
                    <b>{title}</b>
                  </Link>{" "}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
    // <>{renderList}</>
  );
};
export default Article;
