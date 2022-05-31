import { createSlice } from '@reduxjs/toolkit'

export const MealIdSelect = createSlice({
    name: "Meal_Id_Select",
    initialState: {
        value: '-' as string
    },
    reducers:{
        setNewMealIdSelect:(state:any,action:any)=>{
            state.value = action.payload
        }
    }
})

export const { setNewMealIdSelect } = MealIdSelect.actions

export default MealIdSelect.reducer;