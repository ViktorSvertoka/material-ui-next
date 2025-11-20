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
        mt: 10,
        py: { xs: 6, md: 8 },
        bgcolor: '#333',
        color: '#e5e5e5',
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          px: { xs: 3, md: 4 },
        }}
      >
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 4 }}>
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
              Cats & Friends is a community-driven project dedicated to helping
              stray and abandoned animals find new families. We provide care,
              medical support, and a safe environment while they wait for
              adoption. Your kindness helps us change their lives — one furry
              friend at a time.
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

          <Grid size={{ xs: 12, lg: 4 }}>
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

            <Typography sx={{ mb: 1.5 }}>About us</Typography>
            <Typography sx={{ mb: 1.5 }}>Privacy & Policy</Typography>
            <Typography sx={{ mb: 1.5 }}>Terms & Conditions</Typography>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
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
          © {new Date().getFullYear()} Cats & Friends
        </Typography>
      </Box>
    </Box>
  );
}
