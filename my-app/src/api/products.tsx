import { ProductType } from "../type/Products";
import instance from "./instance";

export const list = (start = 0, PAGE_SIZE = 0) => {
    // let url = '/products';
    // if(PAGE_SIZE) url += `&_start=${start}&_limit=${PAGE_SIZE}`;
    
    // return instance.get(url)
    const url = '/products'
    return instance.get(url)
}

export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}

export const add = (product:ProductType) => {
    console.log(product);
    
    const url = `/products`;
    return instance.post(url, product);
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
export const cateForPro = (cateId) => {
    const url = `/products?category=${cateId}`;
    return instance.get(url)    
}