"use client";

import Image from "next/image";
import Link from "next/link";
import { AppBar, Box, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import Button from '../../../../src/pages/component/common/Button/index'

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
  ];

  // Function to handle link click
  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  // Optional: Auto-detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1)); // Remove # from href
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: 1, height:"70px" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/" passHref>
              <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <Image
                  src="/images/logo.svg"
                  alt="easybank logo"
                  width={240}
                  height={40}
                  priority
                />
              </Box>
            </Link>
          </Box>

          {/* Center Links (Desktop Only) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <Link key={link.href} href={link.href} passHref legacyBehavior>
                  <Box
                    component="a"
                    onClick={() => handleLinkClick(link.href)}
                    sx={{ 
                      color: isActive ? "#31d35c" : "#666", 
                      textDecoration: "none", 
                      fontWeight: isActive ? 600 : 500,
                      position: "relative",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      transition: "all 0.3s ease",
                      backgroundColor: isActive ? "rgba(49, 211, 92, 0.1)" : "transparent",
                      "&:hover": {
                        color: "#31d35c",
                        backgroundColor: "rgba(49, 211, 92, 0.1)",
                        transform: "translateY(-2px)",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-2px",
                        left: "50%",
                        width: isActive ? "80%" : "0",
                        height: "2px",
                        background: "linear-gradient(135deg, #31d35c, #2bb7da)",
                        transition: "all 0.3s ease",
                        transform: "translateX(-50%)",
                      },
                      "&:hover::after": {
                        width: "80%",
                      }
                    }}
                  >
                    {link.label}
                  </Box>
                </Link>
              );
            })}
          </Box>

          {/* Right Button (Desktop) */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button>Request Invite</Button>
          </Box>

          {/* Hamburger Menu (Mobile) */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: "#333" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, mt: 5 }}>
          <List>
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <ListItem button key={link.href} onClick={toggleDrawer(false)}>
                  <Link href={link.href} passHref style={{ width: "100%", textDecoration: "none" }}>
                    <ListItemText 
                      primary={link.label} 
                      onClick={() => handleLinkClick(link.href)}
                      sx={{ 
                        color: isActive ? "#31d35c" : "#333",
                        "& .MuiListItemText-primary": {
                          fontWeight: isActive ? 600 : 500,
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "#31d35c"
                          }
                        }
                      }} 
                    />
                  </Link>
                </ListItem>
              );
            })}
            <ListItem>
              <Button fullWidth>Request Invite</Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;