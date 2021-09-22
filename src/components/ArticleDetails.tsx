import React, { useEffect } from 'react';
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
  getSingleArticle

} from "../redux/actions/articlesActions";
import { ApiArticle } from "../types/article";
import { useLocation } from "react-router-dom";
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

interface Props{
  article?: ApiArticle;
  fetchArticle:(...args: Parameters<typeof getSingleArticle>) => void;
};


export const ArticleDetails: React.FC<Props> = ({ article, fetchArticle }) => {
    const classes = useStyles();
const {pathname:url} = useLocation();
const getLastItem = (thePath:string) => thePath.substring(thePath.lastIndexOf('/') +1);
const slug = getLastItem(url);

useEffect( () =>{
  fetchArticle(slug);
}, [url]);

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
                {article?.title}
              </Typography>
              <Typography variant="body2" component="h2">
               By: {article?.author}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {article?.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {article?.body}
              </Typography>
            </CardContent>
          </CardActionArea>
          <div className="article-footer">
            <button>Edit Article</button>
            <button>Delete Article</button>
            <button>Share Article</button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
