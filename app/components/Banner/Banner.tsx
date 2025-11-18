import { Box, Typography, Button } from '@mui/material';

const bannerImage = '/images/banner-cat-01.png';

export default function Banner() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'center', sm: 'center' },
        justifyContent: 'center',
        gap: { xs: 3, sm: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 10 },
        backgroundColor: '#f4f4f4',
      }}
    >
      <Box
        component="img"
        src={bannerImage}
        alt="Cat"
        sx={{
          width: { xs: '90%', sm: '45%', md: '40%' },
          maxWidth: '500px',
          height: 'auto',
          objectFit: 'contain',
        }}
      />

      <Box
        sx={{
          textAlign: { xs: 'center', sm: 'left' },
          maxWidth: '500px',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '16px', sm: '18px' },
            mb: 1,
            color: '#333',
          }}
        >
          Our motto
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '28px', sm: '44px' },
            fontWeight: 600,
            mb: 2,
            color: '#111',
          }}
        >
          Help animals
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '14px', sm: '16px' },
            lineHeight: 1.6,
            mb: 4,
            color: '#444',
          }}
        >
          Every day, countless animals wait for a chance to be seen, loved, and
          protected. Join us in giving them a safe home, warm hands, and a
          better tomorrow.
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: '#0d8a8a',
            borderRadius: 0,
            py: 1.8,
            fontSize: '16px',
            fontWeight: 600,
            boxShadow: 'none',
            transition: '0.25s ease',
            '&:hover': {
              bgcolor: '#0d8a8a',
              color: 'white',
              opacity: 0.85,
              boxShadow: 'none',
            },
          }}
        >
          DONATE
        </Button>
      </Box>
    </Box>
  );
}
