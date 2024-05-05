import * as React from 'react';
import { Button, Modal, Box } from '@mui/material';
import styles from './styles.module.scss';

export default function MyModal() {
  const [open, setOpen] = React.useState(false);

  const toggleModal = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button variant="contained" onClick={toggleModal(true)}>Open</Button>
      <Modal
        open={open}
        onClose={toggleModal(false)}
      >
        <Box className={styles.modalBox}>
          Hello World!!
        </Box>
      </Modal>
    </>
  );
}