import { ProductType } from "../type/Products";
import instance from "./instance";


export const listProduct:any = () => {
    const url = `/product`;
    return instance.get(url);
}

export const add:any = (product:any) => {
    const url = `/product`;
    return instance.post(url, product);
}   

export const upload = (base64Image: string) => {
    const url = "/upload"
    return instance.post(url, {data: base64Image})
}

export const view = (_id:string)=>{
    const url = `/product/${_id}`;
    return instance.get(url)
}
export const update = (product:ProductType) => {
    console.log(product.id);
    const url = `/product/${product.id}`;
    return instance.put(url, product)
}
export const cateForPro = (cateId:any) => {
    const url = `/product?category=3`;
    return instance.get(url)    
}

export const remove = (id: number) => {
    const url = `/product/${id}`;
    return instance.delete(url)
}
export const getProductIdCate:any = (id:number) => {
    const url = `/products?categories=${id}`;
    return instance.get(url);
}

export const listProductIdCateDetail:any = (id:number) => {
    const url = `/products?detailCate=${id}`;
    return instance.get(url);
}