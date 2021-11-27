import { ToastContainer, Zoom} from 'react-toastify';

const Toastify = () => {
    return ( 
        <ToastContainer autoClose={3000} 
                        transition={Zoom}
                        style={{width: 400}}
                        bodyStyle={{fontSize: 16}}/>
     );
}
 
export default Toastify;