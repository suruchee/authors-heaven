import { Link } from "react-router-dom";
import React from "react";
import { TabType } from "./types";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  tabs: {
    width: "85%",
    margin: "auto",
    padding: "2rem",
    borderBottom: "2px sold lightgray",
  },
  tab: {
    fontSize: "30px",
    color: "black",
    textDecoration: "none",
    padding: "2rem",
    borderBottom: "2px sold lightgray",
  },
});
interface Props {
  tabslist?: TabType[];
  currentPageUrl: string;
}

export const ContainerTabs: React.FC<Props> = ({
  tabslist,
  currentPageUrl,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.tabs}>
      {tabslist?.map(({ name, url }, index) => (
        <Link className={classes.tab} to={url} id={name} key={index}>
          {name}
        </Link>
      ))}
    </div>
  );
};
