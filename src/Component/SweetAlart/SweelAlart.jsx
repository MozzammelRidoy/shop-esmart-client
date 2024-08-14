import Swal from "sweetalert2";

export const confirmAlert = (message) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: `${message}`,
        iconColor : 'green',
        showConfirmButton: false,
        timer: 1500
      });
      
}

export const failedAlert = (message) => {
    Swal.fire({
        position: "center",
        icon: "error",
        iconColor : 'red',
        title: `${message}`,
        showConfirmButton: false,
        timer: 1500
      });
      
}