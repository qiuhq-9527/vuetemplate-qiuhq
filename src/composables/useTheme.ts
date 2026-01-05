import { useColorMode } from '@vueuse/core'
import { ref } from 'vue'

export type ThemeMode = 'light' | 'dark' | 'auto'

/** 
 * 主题样式配置
 * 如果需要增加新主题，只需在此添加 key 和 CSS 路径即可
 */
export const THEME_CONFIG = {
    default: '',
    claude: '/src/assets/theme/claude.css',
    notebook: '/src/assets/theme/notebook.css',
    mocha: '/src/assets/theme/mocha.css',

} as const

export type ThemeStyle = keyof typeof THEME_CONFIG

export const useTheme = () => {
    // 基础暗色模式支持
    const mode = useColorMode({
        storageKey: 'theme-mode',
        modes: { light: 'light', dark: 'dark', auto: '' }
    })

    const style = ref<ThemeStyle>((localStorage.getItem('theme-style') as ThemeStyle) || 'default')

    const applyStyle = (themeStyle: ThemeStyle) => {
        const linkId = 'theme-style-link'
        const existingLink = document.getElementById(linkId)
        const href = THEME_CONFIG[themeStyle]

        if (href) {
            if (existingLink) {
                (existingLink as HTMLLinkElement).href = href
            } else {
                const link = document.createElement('link')
                link.id = linkId
                link.rel = 'stylesheet'
                link.href = href
                document.head.appendChild(link)
            }
        } else if (existingLink) {
            existingLink.remove()
        }
    }

    const setStyle = (newStyle: ThemeStyle) => {
        style.value = newStyle
        localStorage.setItem('theme-style', newStyle)
        applyStyle(newStyle)
    }

    const setTheme = (theme: ThemeMode) => {
        mode.value = theme
    }

    applyStyle(style.value)

    return { mode, style, setTheme, setStyle }
}


export const initTheme = () => {
    const saved = localStorage.getItem('theme-style') as ThemeStyle
    if (saved && THEME_CONFIG[saved]) {
        const link = document.createElement('link')
        link.id = 'theme-style-link'
        link.rel = 'stylesheet'
        link.href = THEME_CONFIG[saved]
        document.head.appendChild(link)
    }
}
