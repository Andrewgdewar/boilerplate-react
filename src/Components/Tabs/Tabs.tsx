/* eslint-disable react-hooks/exhaustive-deps */
import { createUseStyles } from "react-jss";
import { tabsData } from "../TabbablePanel/constants";
import { useSearchParams } from "react-router";
import { useEffect } from "react";
import Flex from "../Flex/Flex";

const useStyles = createUseStyles({
  container: {
    maxWidth: "80%",
  },
  tab: {
    textAlign: "center",
    flex: 1,
    transition: "all 75ms ease",
    background: "transparent",
    border: "none",
    fontWeight: 600,
    margin: "10px",
    fontSize: "large",
    color: "white",
  },
  selected: {
    composes: "$tab",
    fontSize: "larger",
  },
});

export default function Tabs() {
  const classes = useStyles();
  const [urlParams, setUrlParams] = useSearchParams();

  const current = urlParams.get("tab");
  const handleChange = (str: string) => {
    setUrlParams((prev) => ({ ...prev, tab: str }));
  };

  useEffect(() => {
    if (!current) {
      handleChange(tabsData[0].url_param);
    }
  }, []);

  return (
    <Flex
      role="tablist"
      flex={1}
      justifyContent="space-around"
      className={classes.container}
    >
      {tabsData.map((tab) => (
        <button
          key={tab.id}
          className={tab.url_param === current ? classes.selected : classes.tab}
          role="tab"
          aria-selected={tab.url_param === current}
          aria-controls={`panel-${tab.id}`}
          onClick={() => handleChange(tab.url_param)}
        >
          {tab.label}
        </button>
      ))}
    </Flex>
  );
}
