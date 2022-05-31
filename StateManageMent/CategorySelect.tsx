import { createSlice } from '@reduxjs/toolkit'

export const CategorySelect = createSlice({
    name: "Category_Select",
    initialState: {
        value:'-' as string ,
    },
    reducers:{
        setNewCategorySelectValue:(state:any,action:any)=>{
            state.value = action.payload
        }
    }

})

export const { setNewCategorySelectValue } = CategorySelect.actions

export default CategorySelect.reducer;