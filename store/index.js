import {configureStore} from '@reduxjs/toolkit'
import loader from './loader'
import profile from './profile'
import matches from "./moreMatches"
const store= configureStore({
    reducer:{
        loader,
        profile,
        matches
    }
})

export default store