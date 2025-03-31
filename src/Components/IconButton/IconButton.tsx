import { createUseStyles } from "react-jss";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const useStyles = createUseStyles({
  iconButton: {
    overflow: "hidden",
    background: "transparent",
    borderRadius: "33%",
    borderStyle: "hidden",
    padding: 0,
    margin: 0,
  },
});

export interface IconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
/* Just a slightly styled button for use with Icons */
export function IconButton({ ...rest }: IconButtonProps) {
  const classes = useStyles();
  return <button className={classes.iconButton} {...rest} />;
}
