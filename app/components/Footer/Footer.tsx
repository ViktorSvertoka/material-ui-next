'use client';

import { Box, Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 6, md: 8 },
        bgcolor: '#333',
        color: '#e5e5e5',
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              mb: 2,
              textTransform: 'uppercase',
            }}
          >
            About us
          </Typography>

          <Typography sx={{ mb: 3, lineHeight: 1.6 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton sx={{ color: '#e5e5e5' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: '#e5e5e5' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: '#e5e5e5' }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              mb: 2,
              textTransform: 'uppercase',
            }}
          >
            Information
          </Typography>

          <Typography sx={{ mb: 1.5 }}>Lorem ipsum</Typography>
          <Typography sx={{ mb: 1.5 }}>Privacy & Policy</Typography>
          <Typography sx={{ mb: 1.5 }}>Terms & Conditions</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              mb: 2,
              textTransform: 'uppercase',
            }}
          >
            My Account
          </Typography>

          <Typography sx={{ mb: 1.5 }}>Initiatives and projects</Typography>
          <Typography sx={{ mb: 1.5 }}>Favorite animals</Typography>
          <Typography sx={{ mb: 1.5 }}>My Account</Typography>
        </Grid>
      </Grid>

      <Typography
        sx={{
          textAlign: 'center',
          mt: 5,
          fontSize: '14px',
          color: '#ccc',
        }}
      >
        © 2025 Cats & Friends
      </Typography>
    </Box>
  );
}
