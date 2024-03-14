import { Dialog,DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

const ConfirmDeleteDialog = ({open,handleClose,deleteHandler}) => {
  return (
  <Dialog>
    <DialogTitle open={open} onClose={handleClose}>Confirm Delete</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Are you sure wnt to delete this group?
      </DialogContentText>
    </DialogContent>
  </Dialog>
  )
}

export default ConfirmDeleteDialog