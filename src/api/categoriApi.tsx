import { CateType } from "../type/Category"
import instance from "./instance"

export const listCate = () =>{
    const url = '/category'
    return instance.get(url)
}

export const addCate = (cate: CateType) =>{
    const url = '/category'
    return instance.post(url, cate)
}

export const updateCate = (cate:CateType) =>{
    const url = `/category/${cate.id}`
    return instance.post(url, cate)
}

export const deleteCate = (id:any) => {
    const url = `/category/${id}`
    return instance.delete(url)
}
export const getCatebyId:any = (id:any) => {
    const url = `/detailCate/${id}`;
    return instance.get(url);
}   


export const listAllDetail:any = () => {
    const url = `/detailCate`;
    return instance.get(url);
}

// điện thoại


export const listCateDetailById:any = (id:number) => {
    const url = `/detailCate?categories=${id}`;
    return instance.get(url);
}