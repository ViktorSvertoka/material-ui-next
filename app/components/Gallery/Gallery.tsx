'use client';

import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  useMediaQuery,
  Box,
  Typography,
  Grid,
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

      <ImageList
        cols={cols}
        gap={16}
        sx={{
          display: 'none',
        }}
      >
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img src={item.img} alt={item.title} />

            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton>
                  <FavoriteIcon data-testid="FavoriteIcon" />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Grid container spacing={3} justifyContent="center">
        {itemData.map((cat, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card cat={cat} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
