import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "./objectives.module.css";
import { Link } from "react-router-dom";
import { Section } from "@/components/Section/Section";

interface ObjectivesProps {
  isHomePage: boolean;
}

export const Objectives = ({ isHomePage }: ObjectivesProps): JSX.Element => {
  const { t } = useTranslation("general");

  return (
    <Section color="black">
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} textAlign="center">
          {t("objectives")}
        </Grid>
        <Grid item>
          <Grid container spacing={5}>
            <Grid item>
              <Box className={styles.card}>
                <Typography>{t("OE1")}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box className={styles.card}>
                <Typography>{t("OE2")}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box className={styles.card}>
                <Typography>{t("OE3")}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box className={styles.card}>
                <Typography>{t("OE4")}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box className={styles.card}>
                <Typography>{t("OE5")}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box className={styles.card}>
                <Typography>{t("OE6")}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {isHomePage && (
          <>
            <Grid item>
              <Typography variant="h4">
                Get to know more about the project
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Link to={"/about"}>
                <Button variant="contained">About</Button>
              </Link>
            </Grid>
          </>
        )}
      </Grid>
    </Section>
  );
};
