import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(
  async(result) => handleResponse(result),
  error => handleErrors(error)
);

axios.interceptors.request.use(req => {
  return req;
})

function handleResponse(result) {
  const {data: {body}} = result;

  if(body && body.paging) {
    const {paging, data} = body;
    return {paging, data};
  }

  else if(body && body.data) {
    return body.data;
  }

  return result;
}

function handleErrors(error) {
  if(error.response && error.response.status && error.response.data.body) {
    const {data: {body}} = error.response;

    if (error.response.status === 500) 
      toast.error("Internal Server Error Occurrred.");
    
    // Handle Custom Back End Error Codes
    else if(body && body.errorCode) 
      toast.error(body.errorDescription);

  } else {
    toast.error(error.message);
  }

  return Promise.reject(error);
}

const showToastifyLoading = (req) => {
  debugger
  toast.promise(req, {
    pending: 'Fetching data ...',
    success: 'Fetched data successfully 👌',
    error: 'Something went wrong 🤯',
  });
}
const httpMethos = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  showToastifyLoading
};

export default httpMethos;
