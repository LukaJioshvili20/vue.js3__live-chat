import {ref,computed} from 'vue'
export const collapsed =ref(false)
export const toggleNavigation = ()=>(collapsed.value = !collapsed.value)

export const SidebarWidth = 180
export const SidebarWidthCollapsed = 38
export const sidebarwidth = computed(
    () => `${collapsed.value ? SidebarWidthCollapsed: SidebarWidth}px`
)