import {
  Box,
  Card,
  Container,
  LinearProgress,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { FileUpload } from './components/FileUpload/FileUpload';
import { UploadedImage } from './components/UploadedImage/UploadedImage';

function App() {
  const [isUploading, setIsUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  return (
    <Container maxWidth="sm">
      <Card
        sx={{
          padding: '2rem 1rem',
          margin: '2rem 0',
          borderRadius: 4,
          borderColor: '#fff',
          boxShadow: 1,
          display: 'flex',
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
}

export { App };
