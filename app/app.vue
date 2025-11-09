<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import "vue-sonner/style.css"; // vue-sonner v2 requires this import
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout />
  <Toaster rich-colors position="top-right" :close-button="true" close-button-position="top-left" />
</template>
