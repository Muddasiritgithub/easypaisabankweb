"use client";
import Image from "next/image";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Button from "../../../../src/pages/component/common/Button";
import bgintrodesktop from "../../../../public/images/bgintrodesktop.png";
import bgintromobile from "../../../../public/images/bgintromobile.png";
import imagesmockups from "../../../../public/images/imagesmockups.png";

const HeroWrapper = () => {
  const theme = useTheme();

  // Enhanced breakpoints for better responsiveness
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    noSsr: true,
  });
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"), {
    noSsr: true,
  });
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    noSsr: true,
  });
  const isXSmall = useMediaQuery(theme.breakpoints.down("xs"), {
    noSsr: true,
  });

  return (
    <Box
      component="section"
      position="relative"
      bgcolor="#fafafa"
      minHeight="100vh"
      overflow="hidden"
      display="flex"
      alignItems="center"
      sx={{
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* Background Design Pattern - Fully Responsive */}
      <Box
        position="absolute"
        top={0}
        right={0}
        width={{ 
          xs: "100%", 
          sm: "85%", 
          md: "75%", 
          lg: "70%",
          xl: "65%"
        }}
        height="100%"
        sx={{
          backgroundImage: isMobile 
            ? `url(${bgintromobile.src})`
            : `url(${bgintrodesktop.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: {
            xs: "center top",
            sm: "right top",
            md: "right center",
            lg: "right center"
          },
          backgroundSize: {
            xs: "cover",
            sm: "contain",
            md: "cover",
            lg: "contain"
          },
          zIndex: 0,
          transform: {
            xs: "translateX(0%) translateY(0%)",
            sm: "translateX(5%) translateY(-5%)",
            md: "translateX(10%) translateY(-10%)",
            lg: "translateX(15%) translateY(-5%)"
          },
        }}
      />

      {/* Enhanced Background Gradient Layer */}
      <Box
        position="absolute"
        top={0}
        right={0}
        width={{ xs: "100%", md: "60%", lg: "50%" }}
        height="100%"
        sx={{
          background: isMobile
            ? "linear-gradient(180deg, rgba(49, 211, 92, 0.04) 0%, rgba(43, 183, 218, 0.04) 100%)"
            : "linear-gradient(135deg, rgba(49, 211, 92, 0.06) 0%, rgba(43, 183, 218, 0.06) 100%)",
          zIndex: 0,
        }}
      />

      <Box
        maxWidth="xl"
        mx="auto"
        px={{ xs: 2, sm: 3, md: 4, lg: 6, xl: 8 }}
        position="relative"
        zIndex={2}
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        minHeight="100vh"
        sx={{
          py: { xs: 4, md: 0 },
        }}
      >
        {/* Left Content - Enhanced Responsiveness */}
        <Box
          flex={{ xs: 1, md: 0.9, lg: 1 }}
          pr={{ xs: 0, md: 3, lg: 4, xl: 6 }}
          py={{ xs: 2, md: 0 }}
          pl={{ xs: 0, md: 2, lg: 4 }}
          pt={{ xs: 0, md: 4 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start" }}
          textAlign={{ xs: "center", md: "left" }}
          height={{ xs: "auto", md: "100%" }}
          sx={{
            order: { xs: 2, md: 1 },
            zIndex: 15,
          }}
        >
          <Typography
            variant="h1"
            fontWeight={300}
            color="#2d3748"
            gutterBottom
            sx={{
              fontSize: { 
                xs: "1.75rem", 
                sm: "2.1rem", 
                md: "2.5rem", 
                lg: "3.2rem", 
                xl: "4rem" 
              },
              lineHeight: { xs: 1.2, md: 1.15 },
              mb: { xs: 2, md: 3 },
              letterSpacing: "-0.02em",
              mt: { xs: 4, md: 0 },
              maxWidth: { xs: "100%", md: "500px", lg: "600px" },
            }}
          >
            Next generation digital banking
          </Typography>

          <Typography
            variant="body1"
            color="#718096"
            paragraph
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem", lg: "1.125rem" },
              lineHeight: { xs: 1.6, md: 1.7 },
              mb: { xs: 3, md: 4 },
              maxWidth: { xs: "100%", sm: "400px", md: "480px", lg: "520px" },
              fontWeight: 400,
            }}
          >
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Typography>

          <Button
            sx={{
              background: "linear-gradient(135deg, #31d35c, #2bb7da)",
              color: "white",
              px: { xs: 3, md: 4, lg: 5 },
              py: { xs: 1.2, md: 1.5 },
              borderRadius: "25px",
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: 500,
              textTransform: "none",
              boxShadow: "0 4px 15px rgba(49, 211, 92, 0.3)",
              alignSelf: { xs: "center", md: "flex-start" },
              minWidth: { xs: "150px", md: "auto" },
              "&:hover": {
                boxShadow: "0 6px 20px rgba(49, 211, 92, 0.4)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Request Invite
          </Button>
        </Box>

        {/* Right Content - Enhanced Responsive Image */}
        <Box
          flex={{ xs: 1, md: 1.1, lg: 1 }}
          position="relative"
          width="100%"
          height={{ xs: 400, sm: 500, md: "100vh" }}
          display="flex"
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="center"
          sx={{
            overflow: "visible",
            order: { xs: 1, md: 2 },
            mt: { xs: 0, md: 0 },
            mb: { xs: 2, md: 0 },
          }}
        >
          <Box
            position="relative"
            width={{ 
              xs: "95%", 
              sm: "90%", 
              md: "95%", 
              lg: "90%",
              xl: "85%"
            }}
            height={{ 
              xs: "85%", 
              sm: "90%", 
              md: "75%", 
              lg: "80%",
              xl: "75%"
            }}
            sx={{
              zIndex: 15,
              transform: { 
                xs: "translateY(20px) translateX(0%)", 
                sm: "translateY(10px) translateX(5%)",
                md: "translateY(-20px) translateX(10%)",
                lg: "translateY(-30px) translateX(15%)",
                xl: "translateY(-25px) translateX(20%)"
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={imagesmockups}
              alt="Phone Mockups"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center",
                display: "block",
                transform: isXSmall 
                  ? "scale(0.85)" 
                  : isSmallMobile 
                    ? "scale(0.95)" 
                    : isMobile 
                      ? "scale(1.0)" 
                      : isTablet 
                        ? "scale(1.1)"
                        : "scale(1.2)",
              }}
              priority
            />
          </Box>
        </Box>
      </Box>

      {/* Enhanced Mobile Overlay */}
      {isMobile && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="60%"
          sx={{
            background: "linear-gradient(180deg, rgba(250, 250, 250, 0.85) 0%, rgba(250, 250, 250, 0.0) 100%)",
            zIndex: 5,
          }}
        />
      )}

      {/* Additional Right Side Enhancement */}
      {!isMobile && (
        <Box
          position="absolute"
          top={0}
          right={0}
          width="45%"
          height="100%"
          sx={{
            background: "linear-gradient(90deg, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.05) 100%)",
            zIndex: 2,
          }}
        />
      )}
    </Box>
  );
};

export default HeroWrapper;