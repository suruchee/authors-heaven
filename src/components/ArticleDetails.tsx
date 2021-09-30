import React, { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { getSingleArticle } from "../redux/actions/articlesActions";
import { ApiArticle } from "../types/article";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    marginTop: "2vh",
  },
  image: {
    marginLeft: "30vh",
    height: "50%",
    width: "50%",
  },
  buttonGroup:{
    margin:"2vh"
  },
  left:{
    alignContent:"left",
    textDecoration:"none"
  },
  center:{
    alignItems:"center",
    marginLeft:"45vh"
  },
  right:{
    marginLeft:"45vh"
  }
});

interface Props {
  article?: ApiArticle;
  fetchArticle: (...args: Parameters<typeof getSingleArticle>) => void;
  email?: string;
}

export const ArticleDetails: React.FC<Props> = ({
  article,
  fetchArticle,
  email,
}) => {
  const classes = useStyles();
  const { pathname: url } = useLocation();

  const hasPermission = email === article?.author?.email;

  useEffect(() => {
    fetchArticle(url);
  }, [url]);

  return (
    <div>
      <Container maxWidth="lg">
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                {article?.title}
              </Typography>
              <Typography variant="h6" component="h4">
                By: {article?.author?.username}
              </Typography>
              <br/><br/>
              <Typography variant="h6" color="textSecondary" component="p">
                {article?.description}
              </Typography>
              <br/>
              <Typography variant="body2" color="textSecondary" component="p">
                {article?.body}
              </Typography>
            </CardContent>
          </CardActionArea>
          {hasPermission ? (
            <>
              <div className={classes.buttonGroup}>
                <button>
                  <Link to={`${url}/edit`} className={classes.left}>Edit Article</Link>
                </button>
                <button className={classes.center}>Delete Article</button>
                <button className={classes.right}>Share Article</button>
              </div>
            </>
          ) : null}
        </Card>
      </Container>
    </div>
  );
};
