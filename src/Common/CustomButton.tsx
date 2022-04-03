import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
export default function CustomButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" endIcon={<CancelIcon />}>
        Reset
      </Button>
      <Button variant="contained" endIcon={<SearchIcon />}>
        Search
      </Button>
    </Stack>
  );
}