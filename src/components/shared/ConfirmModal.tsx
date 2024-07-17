import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import BasicButton from './BasicButton';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
    open: boolean;
    onClose: () => void;
    title: string;
    message: string;
    onOk: () => void;
    onCancel: () => void;
}

const ConfirmModal: React.FC<IProps> = ({
    open,onClose, title, message, onOk, onCancel
}) => {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <BasicButton onClick={onOk}>Yes, ok</BasicButton>
          <BasicButton onClick={onCancel}>No, Cancel</BasicButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ConfirmModal
