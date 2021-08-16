import * as React from "react";
import { Avatar, Grid, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import {Link} from "react-router-dom";

const Article = () => {
  const articles = useSelector((state:RootState) => state.allArticles.articles);
  console.log(articles)
  const {id,user, title, description, time, category} = articles[0];
/*  const renderList = articles.map((article) =>{
  const {id,user, title, description, time, category} = article;
    return(
      <></>
    )
  })*/

  return (
    <div >
      <Paper>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} lg={7}>
            <Typography variant="h6" color="inherit">
              <Avatar />
              {user}</Typography>
            <div>
              <Typography variant="h6" color="inherit" noWrap>
                <Link to={`/article/${id}`}>
                <b>{title}</b>
                </Link>
              </Typography>
            </div>
            <div>
              {description}
            </div>
            <br></br>
            <div>
              {time} <b>.{category}</b>{" "}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} lg={5}>
            <div>
              <img
                src="https://previews.123rf.com/images/artmari/artmari2012/artmari201202858/161073538-closeup-view-human-author-memo-icon-woman-arm-record-greet-text-on-white-space-bright-color-ink-draw.jpg"
                alt="logo"
                width="200"
                height="200"
              />{" "}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
   // <>{renderList}</>
  );
}
export default Article;