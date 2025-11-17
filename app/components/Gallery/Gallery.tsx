'use client';

import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '../Card/Card';
import { itemData } from '../../data/data';

export default function Gallery() {
  const isLarge = useMediaQuery('(min-width:1000px)');
  const isMedium = useMediaQuery('(min-width:800px)');

  let cols = 1;
  if (isLarge) cols = 3;
  else if (isMedium) cols = 2;

  return (
    <Box sx={{ mt: 6 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', mb: 4, fontWeight: 500 }}
      >
        Waiting for their owners
      </Typography>

      {/* ImageList (если будешь использовать) */}
      <ImageList cols={cols} gap={16} sx={{ display: 'none' }}>
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Новый MUI Grid v2 */}
      <Grid container spacing={3} justifyContent="center">
        {itemData.map((cat, i) => (
          <Grid
            key={i}
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card cat={cat} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
