'use client';

import { Box, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export interface CatItem {
  img: string;
  title: string;
}

interface CardProps {
  cat: CatItem;
}

export default function Card({ cat }: CardProps) {
  const [fav, setFav] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 380,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box
        component="img"
        src={`/images/${cat.img}`}
        alt={cat.title}
        sx={{
          width: '100%',
          height: 260,
          objectFit: 'cover',
          display: 'block',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 48,
          bgcolor: 'rgba(0,0,0,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          backdropFilter: 'blur(2px)',
        }}
      >
        <Typography
          sx={{
            color: '#f0f0f0',
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          {cat.title}
        </Typography>

        <IconButton
          onClick={() => setFav(!fav)}
          sx={{
            color: '#f0f0f0',
            p: '6px',
            borderRadius: '50%',
            transition: '0.2s',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.25)',
            },
          }}
        >
          {fav ? (
            <FavoriteIcon sx={{ color: '#0d8a8a' }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: 'white' }} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}
