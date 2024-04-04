import { Button, Grid } from "@mui/material";
// import { Section } from "@/Components/Section/Section";
import Gradiant from "../../../../../public/logos/principal/GRADIANT.png";
import Regenera from "../../../../../public/logos/principal/REGENERA.png";
import LIS from "../../../../../public/logos/principal/LIS.png";
import ITI from "../../../../../public/logos/principal/ITI.png";
import Inprotech from "../../../../../public/logos/principal/INPROTECH.png";
import { Section } from "@/components/Section/Section";
import { Link } from "react-router-dom";

export const ParticipantsSection = (): JSX.Element => {
  return (
    <Section color="blue">
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} textAlign="center">
          Participants
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <img src={Gradiant} width={240} />
            </Grid>
            <Grid item>
              <img src={ITI} width={240} />
            </Grid>
            <Grid item>
              <img src={LIS} width={240} />
            </Grid>
            <Grid item>
              <img src={Regenera} width={240} />
            </Grid>
            <Grid item>
              <img src={Inprotech} width={240} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Link to={"/participants"}>
            <Button color="secondary" variant="contained">
              Learn more
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Section>
  );
};
