import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const token = ref(null)
    const info = ref({ username: '', uid: '', roles: [] })
    const isLogin = computed(() => !!token.value)

    function login() {
        // 具体的逻辑
    }
    function logout() {
        // 具体的逻辑
    }

    return { token, info, isLogin, login, logout }
}, { persist: true })