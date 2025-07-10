import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Box
      sx={{
        textAlign: { xs: "center", md: "left" },
        px: { xs: 2, md: 1 },
        py: 3,
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          mx: { xs: "auto", md: 0 },
          mb: 4,
          bgcolor: "linear-gradient(135deg, #31d35c, #2bb7da)",
          background: "linear-gradient(135deg, #31d35c, #2bb7da)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 25px rgba(49, 211, 92, 0.3)",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={icon}
          alt={title}
          sx={{
            width: 40,
            height: 40,
         }}
        />
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 400,
          color: "#2d3748",
          mb: 2,
          fontSize: { xs: "1.25rem", md: "1.5rem" },
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#718096",
          lineHeight: 1.6,
          fontSize: { xs: "0.95rem", md: "1rem" },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default function FeatureWrapper() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        bgcolor: "#f8fafc",
        py: { xs: 8, md: 15 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background: "linear-gradient(135deg, #31d35c 0%, #2bb7da 100%)",
          opacity: 0.02,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          textAlign={{ xs: "center", md: "left" }}
          mb={{ xs: 6, md: 8 }}
          maxWidth={{ xs: "100%", md: "600px" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 300,
              color: "#2d3748",
              mb: 3,
              fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
              lineHeight: 1.2,
            }}
          >
            Why choose Easybank?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#718096",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.6,
              maxWidth: "900px",
            }}
          >
            We leverage Open Banking to turn your bank account into your financial hub.
            Control your finances like never before.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 4, md: 5 },
            alignItems: "flex-start",
            px: { xs: 0, md: 2 },
          }}
        >
          {/* Feature 1 - Online Banking */}
          <Box>
            <FeatureCard
              icon="/images/icon-online.png"
              title="Online Banking"
              description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
            />
          </Box>

          {/* Feature 2 - Simple Budgeting */}
          <Box>
            <FeatureCard
              icon="/images/icon-budgeting.png"
              title="Simple Budgeting"
              description="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
            />
          </Box>

          {/* Feature 3 - Fast Onboarding */}
          <Box>
            <FeatureCard
              icon="/images/icon-onboarding.png"
              title="Fast Onboarding"
              description="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
            />
          </Box>

          {/* Feature 4 - Open API */}
          <Box>
            <FeatureCard
              icon="/images/icon-api.png"
              title="Open API"
              description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}