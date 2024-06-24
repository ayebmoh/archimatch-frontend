import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const openAlert = (isValid, message) => {
  if (isValid) {
    toast.success(message);
  } else {
    toast.error(message);
  }
  toast.clearWaitingQueue();
};
