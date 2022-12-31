// import React, {useState, useEffect} from "react";
// import {Modal, Grid, } from "react-bootstrap";

// function ModalDisplay() {
//     const [show, setShow] = useState(false);

//     const modeHandelClose = () => setShow(false);
//     const modeHandelShow = () => setShow(true);
//     return(
//         <div className="ModalDisplay">
//             <Modal show = {show} onHide={modeHandelClose}>
//                 <Modal.Header closebutton>
//                     <Modal.Title>Update</Modal.Title>
//                     <Modal.Body>Please update to what you want to update</Modal.Body>
//                     <Modal.Footer>
//                     <Grid container spacing>
//                   <Grid item xs="auto">
//                     <item>
//                       <input
//                         type="text"
//                         onChange={(e) => setTitle(e.target.value)}
//                         value={title}
//                       />
//                     </item>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <input
//                       type="text"
//                       onChange={(e) => setBody(e.target.value)}
//                       value={body}
//                     />
//                   </Grid>
//                   <Grid item xs={6}>
//                     <button onClick={addNewCard} disabled={!title || !body}>
//                       Add Card
//                     </button>
//                   </Grid>
//                 </Grid>

//                     </Modal.Footer>
//                 </Modal.Header>

//             </Modal>
//             <p>"test"</p>;
//         </div>

//     );
// }
// export default ModalDisplay;