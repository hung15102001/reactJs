export type ProductType = {
    id?:any,
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;

}

export type OrderType = {
    id?:any,
    name?: string,
    phone?: string,
    address?: string,
    confirmAddress?: string
    status?: string,
    listProduct?:any
    createdAt?:string,
    cartTotal?: number
 
}
