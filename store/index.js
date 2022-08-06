import {configureStore} from '@reduxjs/toolkit'
import loader from './loader'
import profile from './profile'
import champMostPlayed from './champMostPlayed'
import champions from './champions'
import items from './items'
import runes from './runes'
const store= configureStore({
    reducer:{
        loader,
        profile,
        champMostPlayed,
        champions,
        items,
        runes
    }
})

export default store