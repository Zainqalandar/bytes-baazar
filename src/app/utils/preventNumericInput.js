

const preventNumericInput = (e) => {
    if (/\d/.test(e.key)) {
        e.preventDefault();
    }
};

export  default preventNumericInput()