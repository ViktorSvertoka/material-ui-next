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

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const open = Boolean(anchorEl);

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: '1px solid #ddd',
          py: 1,
        }}
      >
        <Toolbar
          sx={{
            gap: 2,
            justifyContent: isMedium ? 'flex-start' : 'space-between',
          }}
        >
          {!isMedium && (
            <IconButton color="inherit" onClick={() => setMobileOpen(true)}>
              <MenuIcon data-testid="MenuIcon" />
            </IconButton>
          )}
          {!isMedium && (
            <Typography
              variant="h4"
              sx={{
                flexGrow: 1,
                fontFamily: "'Allura', cursive",
                textAlign: 'center',
                color: '#49a4a4',
                fontSize: '40px',
              }}
            >
              Cats & friends
            </Typography>
          )}
          {isMedium && (
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Allura', cursive",
                color: '#49a4a4',
                fontSize: '40px',
                flexShrink: 0,
              }}
            >
              Cats & friends
            </Typography>
          )}
          {isMedium && (
            <Box
              sx={{
                display: 'flex',
                gap: isLarge ? 4 : 2,
                ml: 6,
                alignItems: 'center',
              }}
            >
              <Button sx={{ color: 'black' }}>Home</Button>
              <Button sx={{ color: 'black' }}>Volunteer</Button>

              <Button
                sx={{ color: 'black' }}
                onClick={e => setAnchorEl(e.currentTarget)}
                endIcon={<ExpandMoreIcon />}
              >
                Stories
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                PaperProps={{
                  elevation: 3,
                  sx: { mt: 1 },
                }}
              >
                <MenuItem onClick={() => setAnchorEl(null)}>Blog</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>Podcast</MenuItem>
              </Menu>

              <Button sx={{ color: 'black' }}>Login</Button>
            </Box>
          )}
          {isLarge && (
            <Box
              sx={{ display: 'flex', alignItems: 'center', gap: 3, ml: 'auto' }}
            >
              <IconButton>
                <FavoriteIcon data-testid="FavoriteIcon" />
              </IconButton>

              <Box sx={{ height: 24, width: 1, bgcolor: '#bbb' }} />

              <IconButton>
                <PersonIcon data-testid="PersonIcon" />
              </IconButton>

              <Box sx={{ height: 24, width: 1, bgcolor: '#bbb' }} />

              <IconButton>
                <NotificationsIcon data-testid="NotificationsIcon" />
              </IconButton>
            </Box>
          )}
          {!isLarge && isMedium && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                ml: 'auto',
              }}
            >
              <IconButton>
                <FavoriteIcon data-testid="FavoriteIcon" />
              </IconButton>
              <IconButton>
                <PersonIcon data-testid="PersonIcon" />
              </IconButton>
              <IconButton>
                <NotificationsIcon data-testid="NotificationsIcon" />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {!isMedium && <MobileBottomNav />}
    </>
  );
}
