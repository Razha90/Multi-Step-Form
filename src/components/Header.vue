<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<template>
    <header>
        <h1 class="fs-1">{{ msg }}</h1>
    </header>
</template>