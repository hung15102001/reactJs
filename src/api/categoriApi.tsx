import { CateType } from "../type/Category"
import instance from "./instance"

export const listCate = () =>{
    const url = '/categories'
    return instance.get(url)
}

export const addCate = (cate: CateType) =>{
    const url = '/categories'
    return instance.post(url, cate)
}