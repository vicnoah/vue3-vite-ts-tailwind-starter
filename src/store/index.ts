import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { RootStateTypes, AllStateTypes } from './interface'
import { app } from './modules/app'

// 创建vuex-key，用于获取类型提示
export const key: InjectionKey<Store<RootStateTypes>> = Symbol()

export const store = createStore<RootStateTypes>({
    modules: {
        app,
    }
})

export function useStore<T = AllStateTypes> () {
    return baseUseStore<T>(key)
}