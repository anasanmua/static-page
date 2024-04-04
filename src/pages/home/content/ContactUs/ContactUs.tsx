import { Section } from "@/components/Section/Section";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ContactUs = (): JSX.Element => {
  return (
    <Section>
      <Grid container spacing={4} style={{ paddingBottom: "50px" }}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Any questions about the project?
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Link to={"/contact"}>
            <Button variant="outlined" color="secondary">
              Contact us
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Section>
  );
};
