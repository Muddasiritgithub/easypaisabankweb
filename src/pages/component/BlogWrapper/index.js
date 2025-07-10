"use client";

import { Box, Container, Typography } from "@mui/material";

const articles = [
  {
    image: "/images/image-currency.jpg", // Replace with your actual image path
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    excerpt: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
  },
  {
    image: "/images/image-restaurant.jpg", // Replace with your actual image path
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    excerpt: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
  },
  {
    image: "/images/image-plane.jpg", // Replace with your actual image path
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    excerpt: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
  },
  {
    image: "/images/image-confetti.jpg", // Replace with your actual image path
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    excerpt: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
  },
];

// Single Article Card Component
const ArticleCard = ({ image, author, title, excerpt }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
          "& .article-title": {
            color: "#31d35c",
          },
        },
      }}
    >
      {/* Article Image */}
      <Box
        sx={{
          width: "100%",
          height: 200,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Article Content */}
      <Box sx={{ p: 3 }}>
        {/* Author */}
        <Typography
          variant="body2"
          sx={{
            color: "#718096",
            fontSize: "0.75rem",
            mb: 1,
            fontWeight: 400,
          }}
        >
          By {author}
        </Typography>

        {/* Title */}
        <Typography
          className="article-title"
          variant="h6"
          sx={{
            color: "#2d3748",
            fontSize: "1rem",
            fontWeight: 600,
            mb: 1.5,
            lineHeight: 1.4,
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#31d35c",
            },
          }}
        >
          {title}
        </Typography>

        {/* Excerpt */}
        <Typography
          variant="body2"
          sx={{
            color: "#718096",
            fontSize: "0.875rem",
            lineHeight: 1.6,
          }}
        >
          {excerpt}
        </Typography>
      </Box>
    </Box>
  );
};

// Main Blog Component
export default function BlogWrapper() {
  return (
    <Box 
      component="section" 
      id="blog" 
      sx={{ 
        bgcolor: "#fafafa", 
        py: { xs: 8, md: 15 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box 
          textAlign={{ xs: "center", md: "left" }} 
          mb={{ xs: 6, md: 8 }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 300, 
              color: "#2d3748", 
              fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
              lineHeight: 1.2
            }}
          >
            Latest Articles
          </Typography>
        </Box>

        {/* Articles Grid Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 3, md: 5 },
            alignItems: "flex-start",
            px: { xs: 0, md: 2 }, // Extra padding for more breathing room
          }}
        >
          {articles.map((article, index) => (
            <Box key={index}>
              <ArticleCard {...article} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}