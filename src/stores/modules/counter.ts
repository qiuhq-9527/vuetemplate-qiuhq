import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const testobj = ref({
    name: 'test',
    age: 18,
    address: 'test'
  })
  function increment(): void {
    count.value++
  }

  return { count, doubleCount, testobj, increment }
})
