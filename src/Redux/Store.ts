import {configureStore} from '@reduxjs/toolkit'
import LoginSlice from './Reducer'
export default configureStore({
	reducer:{
		data : LoginSlice.reducer
	}
})