<template>
  <div class="navigation" :style="{width: sidebarwidth}">
    <span class="collapse-icon"
          @click="toggleNavigation"
          :class="{'rotate-180':collapsed}"
    >
        <h1>this</h1>
    </span>
  </div>
</template>

<script>
import { collapsed, toggleNavigation, sidebarwidth} from "@/components/Layout/state";

export default {
  name: "TheNavigation",
  setup(){
    return{
      collapsed,
      toggleNavigation,
      sidebarwidth,
    }
  }
}
</script>

<style lang="scss">
:root{
  --navigation-bg-color: #2f855a;
  --navigation-item-hover: #38a169;
  --navigation-item-active: #276749;
}
</style>

<style lang="scss">
.navigation{
  color: white;
  background-color: var(--navigation-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.collapse-icon{
  position: absolute;
  bottom: 0;
  padding: 0.75rem;
  color: rgba(255,255,255,0.7);
  transition: 0.2s linear;
}
.rotate-180{
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>