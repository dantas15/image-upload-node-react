import { FC, useState } from 'react';
import {
  Box,
  Card,
  Container,
  LinearProgress,
  Typography,
} from '@mui/material';

import { FileUpload, UploadedImage } from '../../components';

const Home: FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          padding: '2rem .5rem',
          borderRadius: 4,
          borderColor: '#fff',
          boxShadow: 1,
          display: 'flex',
          minWidth: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {!previewImage && !isUploading && (
          <>
            <Typography component="h1" variant="h6">
              Upload your image
            </Typography>
            <Typography variant="caption" sx={{ margin: '1.5rem 0' }}>
              File should be JPG, JPEG or PNG
            </Typography>

            <FileUpload
              isUploading={isUploading}
              setIsUploading={setIsUploading}
              setPreviewImage={setPreviewImage}
            />
          </>
        )}

        {isUploading && (
          <Box sx={{ width: '100%' }}>
            <Typography component="h1" variant="h6">
              Uploading...
            </Typography>
            <LinearProgress />
          </Box>
        )}

        {previewImage && !isUploading && (
          <UploadedImage previewImage={previewImage} />
        )}
      </Card>
    </Container>
  );
};

export { Home };
