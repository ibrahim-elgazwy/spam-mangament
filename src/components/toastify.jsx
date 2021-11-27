import { ToastContainer, Zoom} from 'react-toastify';

const Toastify = () => {
    return ( 
        <ToastContainer autoClose={3000} 
                        transition={Zoom}
                        bodyStyle={{fontSize: 17}}/>
     );
}
 
export default Toastify;