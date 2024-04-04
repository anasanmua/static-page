import { Box, Container, Typography } from "@mui/material";
import styles from "./footer.module.css";

export const Footer = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      className={styles.root}
      component="footer"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <div>
            <img src="/europe.png" height={30} alt="Logo" />
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption">Copyright ©2024. 🌍 Limited</Typography>
        </Box>
      </Container>
    </Box>
  );
};
