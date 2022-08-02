import {configureStore} from '@reduxjs/toolkit'
import loader from './loader'
import profile from './profile'
import champMostPlayed from './champMostPlayed'
import champions from './champions'
import items from './items'
const store= configureStore({
    reducer:{
        loader,
        profile,
        champMostPlayed,
        champions,
        items
    }
})

export default store