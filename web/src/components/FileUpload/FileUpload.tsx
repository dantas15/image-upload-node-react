import {
  ChangeEvent,
  Dispatch,
  DragEvent,
  FC,
  SetStateAction,
  useState,
} from 'react';
import { Button, Box, Typography } from '@mui/material';
import api from '../../services/api';

interface IFileUpload {
  isUploading: boolean;
  setIsUploading: Dispatch<SetStateAction<boolean>>;
  setPreviewImage: Dispatch<SetStateAction<string>>;
}

interface IAPIResponse {
  url: string;
}

const FileUpload: FC<IFileUpload> = ({
  isUploading,
  setIsUploading,
  setPreviewImage,
}) => {
  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleUpload = async (imageFile: File | null) => {
    if (imageFile && !isUploading) {
      try {
        const formData = new FormData();
        formData.append('image', imageFile);

        setIsUploading(true);
        const {
          data: { url },
        } = await api.post<IAPIResponse>('/upload', formData);
        setPreviewImage(url);
      } catch (err) {
        setPreviewImage('');
        alert(`Error: ${err}`);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const imageToBeUploaded = event.target.files[0];
    handleUpload(imageToBeUploaded);
  };

  const handleOnDrop = (event: DragEvent) => {
    event.preventDefault();
    const droppedImage = event.dataTransfer.items[0].getAsFile();
    handleUpload(droppedImage);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '250px',
          textDecorationColor: 'none',
          color: 'GrayText',
          textTransform: 'none',
          borderWidth: '2px',
          borderStyle: 'dashed',
          borderColor: '#a3c5f5',
          background: '#f6f8fb',
          cursor: 'default',
        }}
        onDragOver={handleDragOver}
        onDrop={handleOnDrop}
      >
        <Typography
          variant="body2"
          sx={{ margin: '1.5rem 0', color: 'GrayText' }}
        >
          Drag 'n' Drop your images here
        </Typography>
      </Box>
      <Typography
        variant="caption"
        sx={{ margin: '1.5rem 0', color: 'GrayText' }}
      >
        Or
      </Typography>
      <Button
        component="label"
        variant="contained"
        sx={{ textTransform: 'none' }}
      >
        Choose a file
        <input
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          onChange={handleOnChange}
          hidden
        />
      </Button>
    </Box>
  );
};

export { FileUpload };
