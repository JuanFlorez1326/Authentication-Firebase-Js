export const showMessage = (message, type) => {
    Toastify({
        text: message,
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: type === 'success' ? 'green' : 'red'
        },
        onClick: function(){}
    }).showToast();
}