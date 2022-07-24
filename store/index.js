import {configureStore} from '@reduxjs/toolkit'
import loader from './loader'
import profile from './profile'
import champMostPlayed from './champMostPlayed'
const store= configureStore({
    reducer:{
        loader,
        profile,
        champMostPlayed
    }
})

export default store