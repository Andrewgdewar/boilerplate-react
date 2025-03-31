import { IconButton } from "./Components/IconButton/IconButton";
import { useState } from "react";
import ReactIcon from "./Components/ReactIcon/ReactIcon";
import { createUseStyles } from "react-jss";
import { ANIMATION_TIMING } from "./config";
import EpicPage from "./Pages/EpicPage";
import { Navigate, Route, Routes } from "react-router";
import TablePage from "./Pages/TablePage";
import TabPanelPage from "./Pages/TabPanelPage";

const useStyles = createUseStyles({
  main: {
    textAlign: "center",
    backgroundColor: "#333",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
  iconContainer: {
    display: "flex",
    marginLeft: "initial",
    flexDirection: "row",
    justifyContent: "space-around",
    overflow: "hidden",
    "& div": {
      transition: `width ${ANIMATION_TIMING} ease-in-out, height ${ANIMATION_TIMING} ease-in-out`,
    },
  },
  withMarginAuto: {
    composes: "$iconContainer",
    "@media screen and (max-width: 1200px)": {
      marginLeft: "auto",
      marginRight: "5vw",
    },
  },
  showMain: {
    transition: `all ${ANIMATION_TIMING} ease-in-out,opacity 400ms linear`,
    border: "grey 1px solid",
    flexGrow: 1,
    width: "calc(100% - 10vw)",
    marginBottom: "50px",
    borderRadius: "50px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    // background: "#eee",
  },
  hideMain: {
    composes: "$showMain",
    flexGrow: 0,
    height: 0,
    opacity: 0,
  },
});

export default function App() {
  const classes = useStyles();
  const open = !!sessionStorage.getItem("open");
  const [shrink, setShrink] = useState(open);

  const shrinkToggle = () =>
    setShrink((prev) => {
      sessionStorage.setItem("open", !prev ? "true" : "");
      return !prev;
    });

  return (
    <div className={classes.main}>
      <div className={shrink ? classes.withMarginAuto : classes.iconContainer}>
        <IconButton onClick={shrinkToggle}>
          <ReactIcon shrink={shrink} />
        </IconButton>
      </div>
      <div className={shrink ? classes.showMain : classes.hideMain}>
        <Routes>
          <Route index element={<EpicPage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="tabs" element={<TabPanelPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
