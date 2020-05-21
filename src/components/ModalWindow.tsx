import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {mainActions} from '../redux/main-reducer';
import {connect} from 'react-redux';
import { AppStateType } from '../redux/redux-store';


type MapStatePropsType = {}
type MapDispatchPropsType = {
  setDataModalWindow: (isOpen: boolean, title?: string | null | undefined) => void
}
type OwnPropsType = {
  isOpen: boolean
  title: string | null | undefined
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const ModalWindowContainer: React.FC<PropsType> = ({isOpen, title, setDataModalWindow}) => {
  const handleCloseOk = () => {
    setDataModalWindow(false, title)
  };

  const handleCloseCancel = () => {
    setDataModalWindow(false, title);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleCloseCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Attention!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOk} color="primary">
            OK
          </Button>
          <Button onClick={handleCloseCancel} color="primary">
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {}
}
let mapDispatchToProps: MapDispatchPropsType = {
  setDataModalWindow: mainActions.setDataModalWindow
}


const ModalWindow = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(ModalWindowContainer)

export default ModalWindow;