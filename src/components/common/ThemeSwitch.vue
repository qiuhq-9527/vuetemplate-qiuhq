<script setup lang="ts">
import { useTheme, type ThemeMode, type ThemeStyle } from '@/composables/useTheme'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const { mode, style, setTheme, setStyle } = useTheme()

const themes: { value: ThemeMode; label: string }[] = [
  { value: 'light', label: '亮色' },
  { value: 'dark', label: '暗色' },
  { value: 'auto', label: '自动' }
]

const styles: { value: ThemeStyle; label: string }[] = [
  { value: 'default', label: '默认' },
  { value: 'claude', label: 'Claude' },
  { value: 'notebook', label: 'NoteBook' },
  { value: 'mocha', label: 'mocha' }
]

const handleThemeChange = (value: any) => {
  if (value) setTheme(value as ThemeMode)
}

const handleStyleChange = (value: any) => {
  if (value) setStyle(value as ThemeStyle)
}
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="flex items-center gap-2">
      <span class="text-sm text-gray-600 dark:text-gray-400">主题</span>
      <Select :model-value="mode" @update:model-value="handleThemeChange">
        <SelectTrigger class="w-[100px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem v-for="theme in themes" :key="theme.value" :value="theme.value">
              {{ theme.label }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm text-gray-600 dark:text-gray-400">风格</span>
      <Select :model-value="style" @update:model-value="handleStyleChange">
        <SelectTrigger class="w-[100px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem v-for="s in styles" :key="s.value" :value="s.value">
              {{ s.label }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>
