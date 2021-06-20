import { StateApp } from './modules/app'

// 为 store state 声明类型
export interface RootStateTypes {
}

// 为vuex声明全量类型
export interface AllStateTypes extends RootStateTypes {
    app: StateApp,
}
