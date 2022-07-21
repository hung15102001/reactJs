import axios from "axios";

const imageInstace = axios.create({
    baseURL:"https://image-uploader-anhhtus.herokuapp.com/api"
})  

export const upload = (base64Image:any)=>{
    const url = "/upload";
    return imageInstace.post(url, {data:base64Image})
}