import * as React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
  Avatar,
  InputBase
} from "@material-ui/core";

export default function Header() {
  return (
    <div>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container direction="row" alignItems="center">
            <Link to="/home">
              <img
                src="https://previews.123rf.com/images/artmari/artmari2012/artmari201202858/161073538-closeup-view-human-author-memo-icon-woman-arm-record-greet-text-on-white-space-bright-color-ink-draw.jpg"
                alt="logo"
                width="50"
                height="50"
              />
            </Link>
            <Typography variant="h6" color="inherit" noWrap>
              Author's Heaven
            </Typography>
          </Grid>
          <InputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
