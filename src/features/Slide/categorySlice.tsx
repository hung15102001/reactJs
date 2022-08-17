import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCatebyId, listCate } from "../../api/category";


export const getListCategory:any = createAsyncThunk(
    "category/getListCategory",
    async (demo:any ) => {
        try {   
            const {data} = await listCate(demo);
            console.log("demo", data);
            return data
        } catch (error:any) {
            return error
        }
    }
) 
export const getCateNameById:any = createAsyncThunk(
    "category/getCateNameById",
    async (id:any ) => {
        try {   
            const {data} = await getCatebyId(id);
            return data
        } catch (error:any) {
            return error
        }
    }
) 


const categorySlice = createSlice({
    name:"categoryPhone",
    initialState:{
        value:[],
        
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getListCategory.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        }),
        builder.addCase(getCateNameById.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        })
        
      
    }
})


export default categorySlice