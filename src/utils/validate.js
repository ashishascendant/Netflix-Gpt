export const validate= (Email, Password) =>{
    const isEmailvaild = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
    const isPassvaild = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(Password);
    if(!isEmailvaild) return "Email Id is not valid"
    if(!isPassvaild) return "Email Id is not valid"
}