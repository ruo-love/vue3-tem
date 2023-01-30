import { defineStore } from 'pinia';

const theme = defineStore({
    // 这里的id必须为唯一ID
    id: 'theme',
    state: () => {
        return {
            themeType: '亮蓝色',
            themeColor: '#2080F0FF',
        };
    },
    // 等同于vuex的getter
    getters: {
        getThemeType: (state) => state.themeType,
        getThemeColor: (state) => state.themeColor,
    },
    // pinia 放弃了 mutations 只使用 actions
    actions: {
        // actions可以用async做成异步形式
        setThemeType(type: string) {
            this.themeType = type;
        },
    },
    persist: true
    // persist: {
    //     // 修改存储中使用的键名称，默认为当前 Store的 id
    //     key: 'storekey',
    //     // 修改为 sessionStorage，默认为 localStorage
    //     storage: window.sessionStorage,
    //     // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
    //     paths: ['nested.data'],
    // },
});

export default theme;