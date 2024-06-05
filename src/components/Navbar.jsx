import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import FlexBetween from "../components/FlexBetween";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "./Header";
import LogoutIcon from "@mui/icons-material/Logout";

function Navbar({ sidebarWidth, setSidebarWidth, activeItemName }) {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "50px",
    backgroundColor: alpha(theme.palette.neutral.main, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.neutral.main, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "18ch",
        "&:focus": {
          width: "30ch",
        },
      },
    },
  }));

  const toggleSidebarWidth = () => {
    setSidebarWidth(sidebarWidth === "240px" ? "80px" : "240px");
  };

  return (
    <AppBar
      sx={{
        position: "fixed",
        background: "none",
        boxShadow: "none",
        filter: "blur",
        // zIndex: 1300,
        backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          display="flex"
          alignItems="center"
          sx={{ marginLeft: sidebarWidth }}
        >
          <IconButton onClick={toggleSidebarWidth} sx={{ marginLeft: "-20px" }}>
            <MenuIcon />
          </IconButton>
          <Header title={activeItemName} />
        </Box>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1rem">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <IconButton>
            <IoNotificationsOutline size={22} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
