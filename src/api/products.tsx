import { ProductType } from "../type/Products";
import instance from "./instance";


export const listProduct:any = () => {
    const url = `/products`;
    return instance.get(url);
}

export const add:any = (product:any) => {
    const url = `/products`;
    return instance.post(url, product);
}   

export const upload = (base64Image: string) => {
    const url = "/upload"
    return instance.post(url, {data: base64Image})
}

export const view = (_id:string)=>{
    const url = `/products/${_id}`;
    return instance.get(url)
}
export const update = (product:ProductType) => {
    console.log(product._id);
    const url = `/products/${product._id}`;
    return instance.put(url, product)
}
export const cateForPro = (cateId:any) => {
    const url = `/products?category=${cateId}`;
    return instance.get(url)    
}

export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}