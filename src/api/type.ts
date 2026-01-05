export interface LoginParams { username: string, password: string }

export interface UserInfo { username: string, uid: string, roles: string[] }

export interface LoginResponse { token: string, info: UserInfo }

