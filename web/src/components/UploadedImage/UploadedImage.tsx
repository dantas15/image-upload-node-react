import { Done } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';

interface IUploadedImage {
  previewImage: string;
}

const UploadedImage: FC<IUploadedImage> = ({ previewImage }) => {
  const onClickCopy = () => {
    navigator.clipboard.writeText(previewImage);
  };

  return (
    <>
      <Done fontSize="large" color="success" />
      <Typography component="h1" variant="h6">
        Uploaded successfully!
      </Typography>
      <Box style={{ padding: '20px 0' }}>
        <img
          src={previewImage}
          alt="Uploaded"
          style={{
            width: '100%',
            objectFit: 'cover',
            borderRadius: 10,
          }}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'inline-flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem',
          backgroundColor: '#f6f8fb',

          border: 1,
          borderColor: 'grey.300',
          borderRadius: 2,
        }}
      >
        <Typography
          component="h2"
          variant="body1"
          color="grey.700"
          sx={{
            padding: '0 1rem',

            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {previewImage}
        </Typography>
        <Button
          onClick={onClickCopy}
          variant="contained"
          sx={{ minWidth: '25%' }}
        >
          Copy link
        </Button>
      </Box>
    </>
  );
};

export { UploadedImage };
