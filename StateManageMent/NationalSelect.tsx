import { createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs/promises';

export interface NationalSelectStateType{
    nationName : string ,
    flag : string
}

export const NationalSelect = createSlice({
    name: "National_Select",
    initialState: {
        nationName:'-' as string ,
        flag:'-' as string
    } as NationalSelectStateType,
    reducers:{
        setNationalSelectValue:(state:any,action:any)=>{
            state.nationName = action.payload.nationName,
            state.flag = action.payload.flag
        }
    }
})

export const { setNationalSelectValue } = NationalSelect.actions

export default NationalSelect.reducer;