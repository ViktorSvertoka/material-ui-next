'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import MobileBottomNav from '../MobileBottomNav/MobileBottomNav';

export default function Header() {
  const isLarge = useMediaQuery('(min-width:1200px)');
  const isMedium = useMediaQuery('(min-width:900px)');

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = Boolean(anchorEl);

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: '1px solid #ddd', py: 1 }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              maxWidth: '1400px',
              width: '100%',
              mx: 'auto',
              px: { xs: 2, md: 3 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {!isMedium && (
              <IconButton onClick={() => setMobileOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant={isMedium ? 'h3' : 'h4'}
              sx={{
                fontFamily: "'Allura', cursive",
                color: '#49a4a4',
                fontSize: isMedium ? '40px' : '36px',
                flexGrow: isMedium ? 0 : 1,
                textAlign: isMedium ? 'left' : 'center',
              }}
            >
              Cats & friends
            </Typography>

            {isMedium && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  ml: 6,
                }}
              >
                <Button sx={{ color: 'black' }}>Home</Button>
                <Button sx={{ color: 'black' }}>Volunteer</Button>

                <Button
                  sx={{ color: 'black' }}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    setAnchorEl(e.currentTarget)
                  }
                  endIcon={<ExpandMoreIcon />}
                >
                  Stories
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                  slotProps={{
                    paper: {
                      elevation: 3,
                      sx: { mt: 1 },
                    },
                  }}
                >
                  <MenuItem onClick={() => setAnchorEl(null)}>Blog</MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)}>Podcast</MenuItem>
                </Menu>

                <Button sx={{ color: 'black' }}>Login</Button>
              </Box>
            )}

            {isMedium && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  ml: 'auto',
                }}
              >
                <IconButton>
                  <FavoriteIcon />
                </IconButton>

                <IconButton>
                  <PersonIcon />
                </IconButton>

                <IconButton>
                  <NotificationsIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      {!isMedium && <MobileBottomNav />}
    </>
  );
}
