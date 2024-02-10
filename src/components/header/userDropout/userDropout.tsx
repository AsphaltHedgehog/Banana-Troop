// import { useEffect, useState } from 'react';
// import Modal from '../../modal/Modal';
// import { useModal } from '../../../hooks/useModal';
// import LogoutModal from '../../logoutModal/logoutModal';

// const UserDropout = () => {
//   const { isOpen, openModal, closeModal } = useModal();

//   const [modal, setModal] = useState(<LogoutModal />);

//   useEffect(() => {
//     setModal(<LogoutModal/>)
//   }, [])

//   return (
//     <>
//       <button onClick={openModal}>Logout</button>
//       {isOpen && modal && <Modal children={modal} closeModal={closeModal} />}
//     </>
//   )
// };

// export default UserDropout
