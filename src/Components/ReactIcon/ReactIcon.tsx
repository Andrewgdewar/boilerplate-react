import { ANIMATION_TIMING } from "../../config";
import logo from "./logo.svg";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  icon: {
    transition: `width ${ANIMATION_TIMING} ease-in-out, height ${ANIMATION_TIMING} ease-in-out`,
    cursor: "pointer",
    width: "50vh",
    height: "50vh",
    margin: 0,
    maxWidth: "80vw",
    minWidth: "50px",
    minHeight: "50px",
    animation: "logo-spin infinite 6s linear",
  },
});

interface ReactIconProps {
  shrink?: boolean;
  size?: string | number;
}

export default function ReactIcon({ shrink, size = "5vh" }: ReactIconProps) {
  const classes = useStyles();

  return (
    <img
      src={logo}
      style={shrink ? { width: size, height: size } : {}}
      className={classes.icon}
      alt="logo"
    />
  );
}
