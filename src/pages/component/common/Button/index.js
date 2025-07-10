// Button/index.js or index.tsx
import { Button } from "@mui/material";
import Link from "next/link";

export default function RequestInviteButton({ href = "#", children = "Request Invite", ...props }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Button
        component="a"
        sx={{
          background: "linear-gradient(135deg, #31d35c, #2bb7da)",
          color: "white",
          borderRadius: "999px",
          px: 4,
          py: 1.5,
          fontWeight: 500,
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            transform: "scale(1.03)",
          },
          transition: "all 0.3s ease",
        }}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
}
