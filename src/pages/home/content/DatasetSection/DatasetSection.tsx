import { Section } from "@/components/Section/Section";
import DatasetIcon from "@mui/icons-material/Dataset";
import { Button, Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export const DatasetSection = () => {
  return (
    <Section color="grey">
      <Grid container>
        <Grid item xs={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} textAlign="center">
              Datasets
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Link to={"/datasets"}>
                <Button variant="contained">Datasets</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <IconButton
            style={{ backgroundColor: "var(--blue)", color: "var(--black)" }}
          >
            <DatasetIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Section>
  );
};
