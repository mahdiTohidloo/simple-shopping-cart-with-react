import {toast} from "react-toastify";

export const showSuccessToastr = (message, duration = 5000) => {
	toast.success(message, {
		autoClose: duration
	});
};