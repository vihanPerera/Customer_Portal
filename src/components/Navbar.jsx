import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import FlexBetween from "../components/FlexBetween";
import { AppBar, Toolbar, IconButton, Box, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { TbSquareArrowRightFilled } from "react-icons/tb";
import Header from "./Header";

function Navbar({ sidebarWidth, setSidebarWidth, activeItemName }) {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "4px",
    border: '1px solid #C6C6C6',
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
        width: "40ch",
        "&:focus": {
          width: "60ch",
        },
      },
    },
  }));

  const [isToggled, setIsToggled] = useState(true);

  const toggleSidebarWidth = () => {
    setIsToggled(!isToggled);
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
          <TbSquareArrowRightFilled 
            style={{
              fontSize: '24px',
              transform: isToggled ? 'scaleX(-1)' : 'scaleX(1)',
              transition: 'transform 0.3s ease-in-out',
              color: '#171819'
            }} 
          />
          </IconButton>
          <Header title={activeItemName} />
        </Box>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1rem">
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color: '#BDBDBD'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Tooltip title={'Setting'} arrow>
            <IconButton>
              <IoSettingsOutline size={23} />
            </IconButton>
          </Tooltip>
          <Tooltip title={'Notification'} arrow>
            <IconButton>
              <IoNotificationsOutline size={23} />
            </IconButton>
          </Tooltip>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
