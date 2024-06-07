// import React from "react";
// import {
//   Box,
//   Divider,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Tooltip,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import {
//   ChevronRightOutlined,
//   HomeOutlined,
//   ShoppingCartOutlined,
//   ShoppingCart,
//   Groups2Outlined,
//   Groups2,
//   ReceiptLongOutlined,
//   ReceiptLong,
//   TrendingUpOutlined,
//   TrendingUp,
//   Home,
// } from "@mui/icons-material";
// import { GiBattleship } from "react-icons/gi";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import FlexBetween from "./FlexBetween";
// import "../../node_modules/simplebar-react/dist/simplebar.min.css";
// import "../../src/customScrollbar.css";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import profileImage from "../assets/avatar.png";

// const navItems = [
//   {
//     text: "Dashboard",
//     icon: <HomeOutlined />,
//     filledIcon: <Home />,
//   },
//   {
//     text: "Performance",
//     icon: <TrendingUpOutlined />,
//     filledIcon: <TrendingUp />,
//   },
//   {
//     text: "Products",
//     icon: <ShoppingCartOutlined />,
//     filledIcon: <ShoppingCart />,
//   },
//   {
//     text: "Customers",
//     icon: <Groups2Outlined />,
//     filledIcon: <Groups2 />,
//   },
//   {
//     text: "Transactions",
//     icon: <ReceiptLongOutlined />,
//     filledIcon: <ReceiptLong />,
//   },
// ];

// const Sidebar = ({
//   sidebarWidth,
//   setSidebarWidth,
//   isNonMobile,
//   setActiveItemName,
// }) => {
//   const { pathname } = useLocation();
//   const [active, setActive] = useState("");
//   const navigate = useNavigate();
//   const theme = useTheme();

//   useEffect(() => {
//     setActive(pathname.substring(1));
//   }, [pathname]);

//   const getIcon = (text, isActive) => {
//     const item = navItems.find(
//       (navItem) => navItem.text.toLowerCase() === text.toLowerCase()
//     );
//     return isActive ? item.filledIcon : item.icon;
//   };

//   return (
//     <Box component="nav">
//       <Drawer
//         open={true}
//         variant="persistent"
//         anchor="left"
//         sx={{
//           width: sidebarWidth,
//           "& .MuiDrawer-paper": {
//             color: theme.palette.neutral.main,
//             backgroundColor: "#171819",
//             boxSixing: "border-box",
//             borderWidth: isNonMobile ? 0 : "2px",
//             width: sidebarWidth,
//           },
//         }}
//       >
//           <Box width="100%" px={"8px"}>
//             <Box mt={"0.8rem"} alignItems={"center"}>
//               <FlexBetween>
//                 {sidebarWidth === "240px" && (
//                   <Box
//                     display="flex"
//                     alignItems="center"
//                     gap="0.2rem"
//                     p={0.5}
//                     marginLeft={"20px"}
//                   >
//                     <Typography color={"#FF7518"}>
//                       <GiBattleship size={42} />
//                     </Typography>
//                     <Typography
//                       variant="h3"
//                       fontWeight="bold"
//                       sx={{ color: "#FFFFFF" }}
//                     >
//                       XBroker
//                     </Typography>
//                   </Box>
//                 )}
//                 {sidebarWidth === "80px" && (
//                   <Typography color={"#FF7518"} sx={{ marginLeft: "10px" }}>
//                     <GiBattleship size={42} />
//                   </Typography>
//                 )}
//               </FlexBetween>
//             </Box>
//             <Divider
//               sx={{
//                 borderColor: "#FFFFFF",
//                 width: sidebarWidth === "240px" ? "220px" : "62px",
//               }}
//             />
//             <List sx={{ mt: "-4px" }}>
//               {navItems.map(({ text }) => {
//                 const lcText = text.toLowerCase();
//                 const isActive = active === lcText;

//                 return (
//                   <ListItem key={text} disablePadding sx={{ mt: "12px" }}>
//                     <Tooltip arrow
//                     title={sidebarWidth === "80px" ? text : ""}
//                     placement="right"
//                   >
//                     <ListItemButton
//                       onClick={() => {
//                         navigate(`/${lcText}`);
//                         setActive(lcText);
//                         setActiveItemName(text);
//                       }}
//                       sx={{
//                         borderRadius: "4px",
//                         height: "36px",
//                         backgroundColor:
//                           active === lcText
//                             ? theme.palette.secondary.main
//                             : "transparent",
//                         color:
//                           active === lcText
//                             ? theme.palette.neutral.default
//                             : theme.palette.neutral.main,

//                         "&:hover": {
//                           backgroundColor:
//                             active === lcText
//                               ? theme.palette.secondary.main
//                               : "",
//                         },
//                       }}
//                     >
//                       <ListItemIcon
//                         sx={{
//                           color: active === lcText ? "#FFFFFF" : "#FFFFFF",
//                           minWidth: sidebarWidth === "240px" ? "56px" : "24px",
//                           marginLeft: sidebarWidth === "240px" ? "0px" : "5px",
//                         }}
//                       >
//                         {getIcon(lcText, isActive)}
//                       </ListItemIcon>
//                       {sidebarWidth === "240px" && (
//                         <ListItemText
//                           primary={text}
//                           sx={{
//                             ml: "-24px",
//                             color: active === lcText ? "#FFFFFF" : "#FFFFFF",
//                           }}
//                         />
//                       )}

//                       {sidebarWidth === "240px" && active === lcText && (
//                         <ChevronRightOutlined sx={{ ml: "auto" }} />
//                       )}
//                     </ListItemButton>
//                     </Tooltip>
//                   </ListItem>
//                 );
//               })}
//             </List>
//           </Box>
//         <Box
//           sx={{
//             backgroundColor: "#222426",
//             width: "100%",
//             padding: "10px",
//             mt: "auto",
//             textAlign: "center",
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <Box
//             component="img"
//             alt="profile"
//             src={profileImage}
//             height="34px"
//             width="34px"
//             backgroundColor="#ffffff"
//             borderRadius="50%"
//             ml={0.5}
//             sx={{
//               objectFit: "cover",
//               marginLeft: sidebarWidth === "240px" ? "0px" : "10px",
//             }}
//           />
//           {sidebarWidth === "240px" && (
//             <Box textAlign="left" ml={1.5}>
//               <Typography fontSize="0.85rem" sx={{ color: "#FFFFFF" }}>
//                 Vihan Perera
//               </Typography>
//               <Typography fontSize="0.75rem" sx={{ color: "#FFFFFF" }}>
//                 Manager
//               </Typography>
//             </Box>
//           )}
//           {sidebarWidth === "240px" && (
//             <MoreVertIcon
//               sx={{
//                 color: "#FFFFFF",
//                 fontSize: "22px",
//                 marginLeft: "70px",
//               }}
//             />
//           )}
//         </Box>
//       </Drawer>
//     </Box>
//   );
// };

// export default Sidebar;
import React, { useEffect, useState, useMemo } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import {
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
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import "simplebar-react/dist/simplebar.min.css";
import "../customScrollbar.css";
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

const Sidebar = React.memo(({ sidebarWidth, setSidebarWidth, isNonMobile, setActiveItemName }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const getIcon = useMemo(() => (text, isActive) => {
    const item = navItems.find((navItem) => navItem.text.toLowerCase() === text.toLowerCase());
    return isActive ? item.filledIcon : item.icon;
  }, []);

  const drawerStyles = {
    width: sidebarWidth,
    "& .MuiDrawer-paper": {
      color: theme.palette.neutral.main,
      backgroundColor: "#171819",
      boxSizing: "border-box",
      borderWidth: isNonMobile ? 0 : "2px",
      width: sidebarWidth,
    },
  };

  const listItemButtonStyles = (isActive) => ({
    borderRadius: "4px",
    height: "36px",
    backgroundColor: isActive ? theme.palette.secondary.main : "transparent",
    color: isActive ? theme.palette.neutral.default : theme.palette.neutral.main,
    "&:hover": {
      backgroundColor: isActive ? theme.palette.secondary.main : "",
    },
  });

  const listItemIconStyles = (isActive) => ({
    color: "#FFFFFF",
    minWidth: sidebarWidth === "240px" ? "56px" : "24px",
    marginLeft: sidebarWidth === "240px" ? "0px" : "5px",
  });

  const listItemTextStyles = (isActive) => ({
    ml: "-24px",
    color: "#FFFFFF",
  });

  return (
    <Box>
      <Drawer open variant="persistent" anchor="left" sx={drawerStyles}>
        <Box width="100%" px="8px">
          <Box mt="0.8rem" alignItems="center">
            <FlexBetween>
              {sidebarWidth === "240px" ? (
                <Box display="flex" alignItems="center" gap="0.2rem" p={0.5} marginLeft="20px">
                  <Typography color="#FF7518">
                    <GiBattleship size={42} />
                  </Typography>
                  <Stack direction="column" spacing={0} sx={{marginLeft: '2px'}}>
                    <Typography fontWeight="bold" sx={{ fontSize: "20px", color: '#FF7518' }}>
                      X
                    <span style={{ color: "#FFFFFF", marginLeft: "2px" }}>
                      Connect
                    </span>
                  </Typography>
                  </Stack>
                </Box>
              ) : (
                <Typography color="#FF7518" sx={{ marginLeft: "10px" }}>
                  <GiBattleship size={42} />
                </Typography>
              )}
            </FlexBetween>
          </Box>
          <Divider sx={{ borderColor: "#BDBDBD", width: sidebarWidth === "240px" ? "220px" : "62px" }} />
          <List sx={{ mt: "-4px" }}>
            {navItems.map(({ text }) => {
              const lcText = text.toLowerCase();
              const isActive = active === lcText;

              return (
                <ListItem key={text} disablePadding sx={{ mt: "12px" }}>
                  <Tooltip arrow title={sidebarWidth === "80px" ? text : ""} placement="right">
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                        setActiveItemName(text);
                      }}
                      sx={listItemButtonStyles(isActive)}
                    >
                      <ListItemIcon sx={listItemIconStyles(isActive)}>
                        {getIcon(lcText, isActive)}
                      </ListItemIcon>
                      {sidebarWidth === "240px" && (
                        <ListItemText primary={text} sx={listItemTextStyles(isActive)} />
                      )}
                      {sidebarWidth === "240px" && isActive && <ChevronRightOutlined sx={{ ml: "auto" }} />}
                    </ListItemButton>
                  </Tooltip>
                </ListItem>
              );
            })}
          </List>
        </Box>
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
            <MoreVertIcon sx={{ color: "#FFFFFF", fontSize: "22px", marginLeft: "70px" }} />
          )}
        </Box>
      </Drawer>
    </Box>
  );
});

export default Sidebar;
