import AdbIcon from "@mui/icons-material/Adb";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ScrollTop } from "../../components/ScrollTop/ScrollTop";
import i18n from "../../i18n";
import { Footer } from "../Footer/Footer";
import styles from "./page.module.css";

interface PageProps {
  children?: React.ReactNode;
}

export const Page = ({ children }: PageProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar className={styles.menu} id="back-to-top-anchor">
          <Box className={styles.links}>
            <AdbIcon />
            <Typography component="a" href="/" className={styles.logo}>
              LOGO
            </Typography>
            <Link to="/" className={styles.link}>
              Home
            </Link>
            <Link to="/about" className={styles.link}>
              About
            </Link>
            <Link to="/participants" className={styles.link}>
              Participants
            </Link>
            <Link to="/contact" className={styles.link}>
              Contact
            </Link>
            <Link to="/datasets" className={styles.link}>
              Datasets
            </Link>
          </Box>
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <GTranslateIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => changeLanguage("en")}>ENGLISH</MenuItem>
              <MenuItem onClick={() => changeLanguage("es")}>SPANISH</MenuItem>
            </Menu>{" "}
          </Box>
        </Toolbar>
      </AppBar>

      <ScrollTop>
        <Fab size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      {children}
      <div style={{ paddingBottom: "50px" }}></div>
      <Footer />
    </>
  );
};
