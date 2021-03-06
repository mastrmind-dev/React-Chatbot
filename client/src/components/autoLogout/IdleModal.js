import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
 
const IdleTimeOutModal = (props) => {
  var timer;
  const [open, setOpen] = useState(props.showModal);
  const [noAction, setNoAction] = useState(true);

  //const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {setOpen(false)}// window.location.reload(false)};

  const userDidNothing = (action) =>{
    timer = setTimeout(() => {props.handleLogout(!action)}, 10000)
  }

  const stay = () => {
    clearTimeout(timer)
    setNoAction(false)
  }

  const logout = () => {
    clearTimeout(timer)
    setNoAction(false)
  }

  return (
    <div>
      <div>
      <Modal open={open} onClose={onCloseModal} closeOnOverlayClick={false} top>
        <h5 style={{color:"red"}}>Chatbot will be closed after 10 seconds from now. You want to stay?</h5>
        <button className="button" style={{width: "50%", backgroundColor: '#03d3fc'}} onClick={() => {props.handleLogout(false); logout()}}>
          Logout
        </button>
        <button className="button" style={{width: "50%"}} onClick={() => {props.handleStay(false); stay()}}>
          Stay
        </button>
      </Modal></div>
      {noAction ? (userDidNothing(noAction)) : (console.log())}
    </div>
  );
};
export default IdleTimeOutModal;
