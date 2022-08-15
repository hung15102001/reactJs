import instance from "./instance";


export const listCate:any = () => {
    const url = `/categories`;
    return instance.get(url);
}

export const addCate:any = (cate:any) => {
    const url = `/categories`;
    return instance.post(url, cate);
}   

export const editCate:any = (cate:any) => {
    const url = `/detailCate/${cate.id}`;
    return instance.patch(url, cate);
}   

export const removeCate:any = (id:any) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
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