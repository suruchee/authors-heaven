import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  deleteArticle,
  getSingleArticle,
} from "../redux/actions/articlesActions";
import { ApiArticle } from "../types/article";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ConfirmDialog } from "../confirmDialog";

const useStyles = makeStyles({
  card: {
    marginTop: "2vh",
  },
  image: {
    marginLeft: "30vh",
    height: "50%",
    width: "50%",
  },
  buttonGroup: {
    margin: "2vh",
  },
  left: {
    alignContent: "left",
    textDecoration: "none",
  },
  center: {
    alignItems: "center",
    marginLeft: "45vh",
  },
  right: {
    marginLeft: "45vh",
  },
});

interface Props {
  article?: ApiArticle;
  fetchArticle: (...args: Parameters<typeof getSingleArticle>) => void;
  deleteArticle: (...args: Parameters<typeof deleteArticle>) => void;
  email?: string;
}

export const ArticleDetails: React.FC<Props> = ({
  article,
  fetchArticle,
  deleteArticle,
  email,
}) => {
  const classes = useStyles();
  const [openDelete, setOpenDelete] = useState<string | undefined>(undefined);

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
              <br />
              <br />
              <Typography variant="h6" color="textSecondary" component="p">
                {article?.description}
              </Typography>
              <br />
              <Typography variant="body2" color="textSecondary" component="p">
                {article?.body}
              </Typography>
            </CardContent>
          </CardActionArea>
          {hasPermission ? (
            <>
              <div className={classes.buttonGroup}>
                <button>
                  <Link to={`${url}/edit`} className={classes.left}>
                    Edit Article
                  </Link>
                </button>
                <button onClick={() => setOpenDelete(article?.slug)}>
                  Delete Article
                </button>
                <button className={classes.right}>Share Article</button>
              </div>
            </>
          ) : null}
          <ConfirmDialog
            open={openDelete === article?.slug}
            closeModal={() => setOpenDelete(undefined)}
            onSubmit={() => deleteArticle(article?.slug)}
            title={`Delete ${article?.title}`}
            text="Are you sure you want to delete this Article?"
          />
        </Card>
      </Container>
    </div>
  );
};
