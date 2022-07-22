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