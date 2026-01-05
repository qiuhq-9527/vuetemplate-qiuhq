import type { Router } from "vue-router";
import { useAuthStore } from "@/stores";

export function setupRouterGuard(router: Router) {
    router.beforeEach((to) => {
        const userStore = useAuthStore();
        if (!userStore.isLogin) {
            if (to.path !== "/login") {
                return { path: "/login" }
            }
        }
        else {
            if (to.path === "/login") {
                return { path: "/" }
            }
            if (to.meta?.needAuth && !userStore.info.roles.some((role: string) => (to.meta.needAuth as string[]).includes(role))) {
                return { path: "/" }
            }
        }
    })
}

