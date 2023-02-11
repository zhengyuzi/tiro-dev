<template>
  <ti-config-provider :theme="isDark ? 'dark' : 'light'">
    <component :is="DefaultTheme.Layout"></component>
  </ti-config-provider>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { TiConfigProvider } from '@tiro/ui'
import { useData } from 'vitepress'

const { isDark } = useData()
</script>
