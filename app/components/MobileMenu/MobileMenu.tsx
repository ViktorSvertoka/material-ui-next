import {
  Drawer,
  Box,
  List,
  ListItemButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MobileMenu({ open, onClose }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 260,
          p: 2,
          bgcolor: '#0d3b3b',
          height: '100%',
          color: 'white',
        }}
      >
        <List sx={{ px: 0 }}>
          <ListItemButton sx={{ color: 'white' }}>Home</ListItemButton>

          <ListItemButton sx={{ color: 'white' }}>Volunteer</ListItemButton>

          <Accordion
            disableGutters
            sx={{
              bgcolor: 'transparent',
              boxShadow: 'none',
              color: 'white',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            >
              <Typography>Stories</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pl: 2 }}>
              <ListItemButton sx={{ color: 'white' }}>Blog</ListItemButton>
              <ListItemButton sx={{ color: 'white' }}>Podcast</ListItemButton>
            </AccordionDetails>
          </Accordion>

          <ListItemButton sx={{ color: 'white' }}>Login</ListItemButton>
          <ListItemButton sx={{ color: 'white' }}>Contact Us</ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}
