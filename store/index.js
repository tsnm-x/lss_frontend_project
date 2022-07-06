import {configureStore} from '@reduxjs/toolkit'
import loader from './loader'
import profile from './profile'
const store= configureStore({
    reducer:{
        loader,
        profile
    }
})

export default store