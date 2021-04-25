import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {user:undefined},
    reducers: {
        getUser: (state) => ({...state}),
        setUser: (state,user) => ({...state,user}),
        test: (state,action)=>{
            const {testValue} = action.payload 
            console.log(testValue)
        }
        
    }
})

export const {getUser,setUser,test } = userSlice.actions
export default userSlice.reducer
