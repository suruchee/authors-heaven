import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import {
  selectedArticle,
  removeSelectedArticle,
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
  const article = useSelector((state: RootState) => state.article);
  const { title, slug, description, body, favourited, published, author } =
    article;
  const articleSlug = useParams();
  const dispatch = useDispatch();
  const fetchArticleDetail = async () => {
    const response = await axios
      .get(
        `http://authors-social-platform.herokuapp.com/api/v1/articles/${articleSlug}/`
      )
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedArticle(response));
  };
  useEffect(() => {
    if (articleSlug && articleSlug !== "") fetchArticleDetail();
    return () => {
      dispatch(removeSelectedArticle());
    };
  }, [articleSlug]);

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
