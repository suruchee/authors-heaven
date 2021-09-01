import * as React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../images/logo.jpg";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  InputBase,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { UserInfo, IsLoggedIn } from "../Common";

const useStyles = makeStyles({
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
    marginLeft: "2vh",
  },
  link: {
    textDecoration: "none",
  },
  logo: {
    height: "5vh",
  },
});

export default function Header() {
  const classes = useStyles();
  const login = IsLoggedIn();
  const users = UserInfo();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // @ts-ignore
  return (
    <div>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Link className={classes.logo} to="/home">
            <img src={logo} alt="logo" width="50" height="50" />
          </Link>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Author's Heaven
          </Typography>
          <InputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            {login ? <Avatar src={users.photoURL} /> : <Avatar />}
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              {login ? (
                <Link className={classes.link} to="/signOut/">
                  LogOut
                </Link>
              ) : (
                <Link className={classes.link} to="/signIn/">
                  Login
                </Link>
              )}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {login ? (
                <Link className={classes.link} to="/profile">
                  My account
                </Link>
              ) : (
                ""
              )}
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
