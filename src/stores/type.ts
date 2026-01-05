/** 所有store的类型都编写在此处 */

/** 计数器 Store 类型定义 */
export interface ICounterStore {
    count: number; // 当前计数
    doubleCount: number; // 双倍计数
    testobj: { name: string; age: number; address: string }; // 测试对象
    increment: () => void; // 递增方法
}

/** 认证 Store 类型定义 */
export interface IAuthStore {
    token: string | null; // 认证令牌
    info: { username: string; uid: string; roles: string[] }; // 用户信息
    isLogin: boolean; // 是否登录
    login: () => void; // 登录方法
    logout: () => void; // 登出方法
}