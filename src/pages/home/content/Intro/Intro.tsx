import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CDTI from "../../../../../public/images/subv/CDTI.png";
import GOB from "../../../../../public/images/subv/gob-esp.png";
import NEXT from "../../../../../public/images/subv/next-gen.jpg";
import PRTR from "../../../../../public/images/subv/PRTR.png";
import styles from "./intro.module.css";
import { Section } from "@/components/Section/Section";

export const Intro = (): JSX.Element => {
  const { t } = useTranslation("general");

  return (
    <Section color="grey">
      <Grid container>
        <Grid item xs={6}>
          <Grid container spacing={10}>
            <Grid item>
              <Typography>{t("title")}</Typography>
            </Grid>
            <Grid item>
              <Typography>{t("projectNumber")}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} className={styles.square}>
          <Grid container spacing={10}>
            <Grid item>
              <Typography>{t("subsidizedBy")}</Typography>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <img src={CDTI} width={240} />
                </Grid>
                <Grid item>
                  <img src={GOB} width={240} />
                </Grid>
                <Grid item></Grid>
                <Grid item>
                  <img src={NEXT} width={240} />
                </Grid>
                <Grid item>
                  <img src={PRTR} width={240} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};
