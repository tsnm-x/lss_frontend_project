import {configureStore} from '@reduxjs/toolkit'
import loader from './loader'
import profile from './profile'
import matches from './matchesForCalculations'
const store= configureStore({
    reducer:{
        loader,
        profile,
        matches
    }
})

export default store