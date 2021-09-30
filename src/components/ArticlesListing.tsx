import React, { useEffect } from "react";
import { ApiArticlesState } from "../types/article";
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
import { fetchAllArticles } from "../redux/actions";
import { useLocation } from "react-router";
import { ContainerTabs } from "../tabs";

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
  articles: ApiArticlesState;
  fetchAllArticles: (...args: Parameters<typeof fetchAllArticles>) => void;
}
export const ArticlesListing: React.FC<Props> = ({
  articles = {},
  fetchAllArticles,
}) => {
  const classes = useStyles();
  const { count, results } = articles;
  const { pathname: url } = useLocation();
  useEffect(() => {
    fetchAllArticles(url);
  }, [fetchAllArticles, url]);

  const getCount = (tabUrl: string) => (url === tabUrl ? count : 0);
  const tabslist = [
    { name: `All Articles (${getCount("/articles/")})`, url: "/articles/" },
    {
      name: `Published Articles  (${getCount("/articles/published/")})`,
      url: "/articles/published/",
    },
  ];
  console.log(url);
  return (
    <div>
      <ContainerTabs tabslist={tabslist} currentPageUrl={url} />
      <div>
        {results && results.length ? (
          results.map((articles) => (
            <Container maxWidth="lg">
              <Card className={classes.card}>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={12} lg={8}>
                    <CardHeader
                      avatar={<Avatar />}
                      title={articles.description}
                      subheader={articles.favourited}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <Link to={`/articles/${articles.slug}`}>
                          <b>{articles.title}</b>
                        </Link>{" "}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {articles.body}
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
    </div>
  );
};
