"use client";

import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Pinterest as PinterestIcon,
} from "@mui/icons-material";

export default function FooterWrapper() {
  const linkStyle = {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.3s ease",
    "&:hover": { color: "#31d35c" },
  };

  const iconButtonStyle = {
    width: 40,
    height: 40,
    color: "#94a3b8",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#31d35c",
      transform: "translateY(-2px)",
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2d3748",
        color: "white",
        py: { xs: 6, md: 8 },
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 6, sm: 6, md: 8 },
            alignItems: "flex-start",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {/* Logo and Socials */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              gap: 3,
            }}
          >
            <Image
              src="/images/logo.svg"
              alt="easybank logo"
              width={240}
              height={40}
              priority
            />
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <IconButton sx={iconButtonStyle}><FacebookIcon fontSize="small" /></IconButton>
              <IconButton sx={iconButtonStyle}><YouTubeIcon fontSize="small" /></IconButton>
              <IconButton sx={iconButtonStyle}><TwitterIcon fontSize="small" /></IconButton>
              <IconButton sx={iconButtonStyle}><PinterestIcon fontSize="small" /></IconButton>
              <IconButton sx={iconButtonStyle}><InstagramIcon fontSize="small" /></IconButton>
            </Box>
          </Box>

          {/* Navigation - Column 1 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <Typography component="a" href="#" sx={linkStyle}>About Us</Typography>
            <Typography component="a" href="#" sx={linkStyle}>Contact</Typography>
            <Typography component="a" href="#" sx={linkStyle}>Blog</Typography>
          </Box>

          {/* Navigation - Column 2 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <Typography component="a" href="#" sx={linkStyle}>Careers</Typography>
            <Typography component="a" href="#" sx={linkStyle}>Support</Typography>
            <Typography component="a" href="#" sx={linkStyle}>Privacy Policy</Typography>
          </Box>

          {/* CTA and Copyright */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-end" },
              gap: 3,
              mt: { xs: 4, md: 0 },
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #31d35c, #2bb7da)",
                color: "white",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: "25px",
                textTransform: "none",
                fontSize: "0.95rem",
                boxShadow: "0 4px 15px rgba(49, 211, 92, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(49, 211, 92, 0.4)",
                },
              }}
            >
              Request Invite
            </Button>
            <Typography
              variant="body2"
              sx={{
                color: "#94a3b8",
                textAlign: { xs: "center", md: "right" },
                fontSize: "0.875rem",
              }}
            >
              © Easybank. All Rights Reserved
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
