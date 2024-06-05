import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  ShoppingCart,
  Groups2Outlined,
  Groups2,
  ReceiptLongOutlined,
  ReceiptLong,
  TrendingUpOutlined,
  TrendingUp,
  Home,
} from "@mui/icons-material";
import { GiBattleship } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import SimpleBar from "simplebar-react";
import "../../node_modules/simplebar-react/dist/simplebar.min.css";
import "../../src/customScrollbar.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import profileImage from "../assets/avatar.png";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
    filledIcon: <Home />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
    filledIcon: <TrendingUp />,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
    filledIcon: <ShoppingCart />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
    filledIcon: <Groups2 />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
    filledIcon: <ReceiptLong />,
  },
];

const Sidebar = ({
  sidebarWidth,
  setSidebarWidth,
  isNonMobile,
  setActiveItemName,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const getIcon = (text, isActive) => {
    const item = navItems.find(
      (navItem) => navItem.text.toLowerCase() === text.toLowerCase()
    );
    return isActive ? item.filledIcon : item.icon;
  };

  return (
    <Box component="nav">
      <Drawer
        open={true}
        variant="persistent"
        anchor="left"
        sx={{
          width: sidebarWidth,
          "& .MuiDrawer-paper": {
            color: theme.palette.neutral.main,
            backgroundColor: "#171819",
            boxSixing: "border-box",
            borderWidth: isNonMobile ? 0 : "2px",
            width: sidebarWidth,
            overflowX: "hidden",
          },
        }}
      >
        <SimpleBar style={{ maxHeight: 720 }}>
          <Box width="100%" px={"8px"}>
            <Box mt={"0.8rem"} alignItems={"center"}>
              <FlexBetween>
                {sidebarWidth === "240px" && (
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="0.2rem"
                    p={0.5}
                    marginLeft={"20px"}
                  >
                    <Typography color={"#FF7518"}>
                      <GiBattleship size={42} />
                    </Typography>
                    <Typography
                      variant="h3"
                      fontWeight="bold"
                      sx={{ color: "#FFFFFF" }}
                    >
                      XBroker
                    </Typography>
                  </Box>
                )}
                {sidebarWidth === "80px" && (
                  <Typography color={"#FF7518"} sx={{ marginLeft: "10px" }}>
                    <GiBattleship size={42} />
                  </Typography>
                )}
              </FlexBetween>
            </Box>
            <Divider
              sx={{
                borderColor: "#FFFFFF",
                width: sidebarWidth === "240px" ? "220px" : "62px",
              }}
            />
            <List sx={{ mt: "-4px" }}>
              {navItems.map(({ text }) => {
                const lcText = text.toLowerCase();
                const isActive = active === lcText;

                return (
                  <ListItem key={text} disablePadding sx={{ mt: "12px" }}>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                        setActiveItemName(text);
                      }}
                      sx={{
                        borderRadius: "4px",
                        height: "36px",
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary.main
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.neutral.default
                            : theme.palette.neutral.main,

                        "&:hover": {
                          backgroundColor:
                            active === lcText
                              ? theme.palette.secondary.main
                              : "",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: active === lcText ? "#FFFFFF" : "#FFFFFF",
                          minWidth: sidebarWidth === "240px" ? "56px" : "24px",
                          marginLeft: sidebarWidth === "240px" ? "0px" : "5px",
                        }}
                      >
                        {getIcon(lcText, isActive)}
                      </ListItemIcon>
                      {sidebarWidth === "240px" && (
                        <ListItemText
                          primary={text}
                          sx={{
                            ml: "-24px",
                            color: active === lcText ? "#FFFFFF" : "#FFFFFF",
                          }}
                        />
                      )}

                      {sidebarWidth === "240px" && active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </SimpleBar>
        <Box
          sx={{
            backgroundColor: "#222426",
            width: "100%",
            padding: "10px",
            mt: "auto",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            alt="profile"
            src={profileImage}
            height="34px"
            width="34px"
            backgroundColor="#ffffff"
            borderRadius="50%"
            ml={0.5}
            sx={{
              objectFit: "cover",
              marginLeft: sidebarWidth === "240px" ? "0px" : "10px",
            }}
          />
          {sidebarWidth === "240px" && (
            <Box textAlign="left" ml={1.5}>
              <Typography fontSize="0.85rem" sx={{ color: "#FFFFFF" }}>
                Vihan Perera
              </Typography>
              <Typography fontSize="0.75rem" sx={{ color: "#FFFFFF" }}>
                Manager
              </Typography>
            </Box>
          )}
          {sidebarWidth === "240px" && (
            <MoreVertIcon
              sx={{
                color: "#FFFFFF",
                fontSize: "22px",
                marginLeft: "70px",
              }}
            />
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
