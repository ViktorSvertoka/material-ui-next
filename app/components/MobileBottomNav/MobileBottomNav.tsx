import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function MobileBottomNav() {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        bgcolor: '#0d3b3b',
      }}
      elevation={8}
    >
      <BottomNavigation
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        sx={{
          bgcolor: '#0d3b3b',
          '& .MuiBottomNavigationAction-root': {
            color: 'white',
          },
          '& .Mui-selected': {
            color: '#49a4a4',
          },
        }}
        showLabels={false}
      >
        <BottomNavigationAction icon={<HomeIcon />} />
        <BottomNavigationAction icon={<FavoriteBorderIcon />} />
        <BottomNavigationAction icon={<PersonOutlineIcon />} />
        <BottomNavigationAction icon={<NotificationsNoneIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
