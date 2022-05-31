import { createSlice } from '@reduxjs/toolkit'

export const NationalSelect = createSlice({
    name: "Category_Or_Nation_Select",
    initialState: {
        value:'-' as string ,
    },
    reducers:{
        setNationalSelectValue:(state:any,action:any)=>{
            state.value = action.payload
        }
    }
})

export const { setNationalSelectValue } = NationalSelect.actions

export default NationalSelect.reducer;