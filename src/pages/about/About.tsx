import { Page } from "@/components/Page/Page";
import { Section } from "@/components/Section/Section";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Objectives } from "../home/content/Objectives/Objectives";

export const About = () => {
  const { t } = useTranslation("general");
  return (
    <Page>
      <Section color="black">
        <Typography>Bienvenido a INNOTWIN</Typography>
        OBJE-PRINCIPAL <Typography>{t("mainObjective")}</Typography>
        organisation <Typography>{t("mainParcipants")}</Typography>
        addPART <Typography>{t("additionalParticipants")}</Typography>
        <Objectives isHomePage={false} />
        addPART <Typography>{t("additionalInfoObjectives")}</Typography>
        addPART <Typography>{t("subsidized")}</Typography>
      </Section>
    </Page>
  );
};
