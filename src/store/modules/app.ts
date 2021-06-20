import { Module } from 'vuex'
import { RootStateTypes } from '../interface'

export interface StateApp {
    selected: string,
    num: Number
}

export const app: Module<StateApp, RootStateTypes> = {
    state: {
        selected: '1',
        num: 1
    },
    mutations: {},
    actions: {},
}