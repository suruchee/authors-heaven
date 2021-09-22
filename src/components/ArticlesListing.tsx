import React, { useEffect } from "react";
import { ApiArticle } from "../types/article";
import {
  Avatar,
  Grid,
  Typography,
  makeStyles,
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
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
});

interface Props {
  articles: ApiArticle[];
  fetchAllArticles: () => void;
}
export const ArticlesListing: React.FC<Props> = ({
  articles,
  fetchAllArticles,
}) => {
  const classes = useStyles();

  useEffect(() => {
    fetchAllArticles();
  }, [fetchAllArticles]);

  return (
    <div>
      {articles && articles.length ? (
        articles.map((articles) => (
          <Container maxWidth="lg">
            <Card className={classes.card}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12} lg={8}>
                  <CardHeader
                    avatar={<Avatar />}
                    title={articles.author}
                    subheader={articles.favourited}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <Link to={`/article/${articles.slug}`}>
                        <b>{articles.title}</b>
                      </Link>{" "}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {articles.description}
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
              </Grid>
            </Card>
          </Container>
        ))
      ) : (
        <div>No Articles Found, Please add some</div>
      )}
    </div>
  );
};
