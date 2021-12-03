import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface Post {
	showButton:boolean
}

const LoginSlice = createSlice({
	name:'data',
	initialState:{
		showButton : false
	} as Post,
	reducers:{
		changeButton:(state,action:PayloadAction<any>) =>{
		state.showButton = action.payload
		}
	}
})

export const {changeButton} = LoginSlice.actions

export const showButtonLogic =(state:any) => state.data.showButton

export default LoginSlice