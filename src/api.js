import Axios from "axios";

// let ISDEV=false;
// let PROD_URL:"";
let DEV_URL="http://localhost:5000"
// export const baseUrl = ISDEV ? DEV_URL : PROD_URL; 
export const baseUrl =DEV_URL
export const API={
    //getUSERDATA

    // getUser:`${baseUrl}/api/getPost`,
    insertUser:`${baseUrl}/api/post/contact`,
    // deleteUser:`${baseUrl}/api/remove`,
    // getAUserData:`${baseUrl}/api/get`,
    // updateUser:`${baseUrl}/api/update`,
    registerUser:`${baseUrl}/api/register`,
    loginUser:`${baseUrl}/api/login`
}

