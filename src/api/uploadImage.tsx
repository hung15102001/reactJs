import axios from "axios"

// https://frontendfarmwork2.herokuapp.com/

const imageInstance = axios.create({
    baseURL: "https://image-uploader-anhhtus.herokuapp.com/api"
})

export const upload = (base64Image: string) => {
    const url = "/upload"
    return imageInstance.post(url, {data: base64Image})
}