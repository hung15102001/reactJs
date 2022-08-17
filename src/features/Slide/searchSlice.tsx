import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCatebyId, listAllDetail, listCate } from "../../api/category";
import { listProduct } from "../../api/products";


export const getAllProductSeach:any = createAsyncThunk(
    "searchProduct/getAllProductSearch",
    async (search:any ) => {
        try {   
            const {data} = await listProduct(search);
            return data
        } catch (error:any) {
            return error
        }
    }
) 


const searchSlide = createSlice({
    name:"searchProduct",
    initialState:{
        value:[],
        
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProductSeach.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        })
        
      
    }
})


export default searchSlide