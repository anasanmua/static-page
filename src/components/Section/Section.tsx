import { Box, Grid } from "@mui/material";
import styles from "./section.module.css";
import classnames from "classnames";

interface SectionProps {
  children: React.ReactNode;
  color?: "grey" | "blue" | "black";
}

export const Section = ({
  children,
  color = "blue",
}: SectionProps): JSX.Element => {
  return (
    <Box
      className={classnames(styles.root, {
        [styles.grey]: color === "grey",
        [styles.blue]: color === "blue",
        [styles.black]: color === "black",
      })}
    >
      {children}
    </Box>
  );
};
