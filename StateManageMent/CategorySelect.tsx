import { createSlice } from '@reduxjs/toolkit'

export interface CategorySelectStateType{
    categoryName : string ,
    picture : string
}

export const CategorySelectState = createSlice({
    name: "Category_Select_State",
    initialState: {
        categoryName:'-' as string ,
        picture:'-' as string
    } as CategorySelectStateType,
    reducers:{
        setCategorySelectState:(state:any,action:any)=>{
            state.categoryName = action.payload.categoryName,
            state.picture = action.payload.picture
        }
    }
})

export const { setCategorySelectState } = CategorySelectState.actions

export default CategorySelectState.reducer;