import { Link, Typography } from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '35px',
      }}
    >
      <Typography variant="caption" component="span" color="#A9A9A9">
        created by{' '}
        <Link
          href="https://github.com/gusgalote"
          target="_blank"
          component="span"
          fontSize="inherit"
          color="inherit"
          fontWeight="bold"
        >
          gusgalote
        </Link>{' '}
        - devChallenges.io
      </Typography>
    </footer>
  );
};

export { Footer };
