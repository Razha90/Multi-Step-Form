<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const isRouteActive = (path: string) => {
  return route.path === path;
};
</script>

<template>
            <div class="list-add animate__animated animate__slideInLeft" style="animation-delay: .5s;" >
                <div><button class="fs-1-3 bold-500 color-Magnoliak" :class="{ 'list-active': isRouteActive('/') }">1</button></div>
                <div class="list-text">
                    <p class="bold-400 fs-1 color-Magnoliak op-5">STEP 1</p>
                    <p class="bold-700 fs-1-3 color-white">YOUR INFO</p>
                </div>
            </div>
            <div class="list-add animate__animated animate__slideInLeft" style="animation-delay: .8s;" >
                <div><button class="fs-1-3 bold-500 color-Magnoliak" :class="{ 'list-active': isRouteActive('/selectplan') }">2</button></div>
                <div class="list-text">
                    <p class="bold-400 fs-1 color-Magnoliak op-5">STEP 2</p>
                    <p class="bold-700 fs-1-3 color-white">SELECT PLAN</p>
                </div>
            </div>
            <div class="list-add animate__animated animate__slideInLeft" style="animation-delay: 1.1s;" >
                <div><button class="fs-1-3 bold-500 color-Magnoliak" :class="{ 'list-active': isRouteActive('/addons') }">3</button></div>
                <div class="list-text">
                    <p class="bold-400 fs-1 color-Magnoliak op-5">STEP 3</p>
                    <p class="bold-700 fs-1-3 color-white">ADD-ONS</p>
                </div>
            </div>
            <div class="list-add animate__animated animate__slideInLeft" style="animation-delay: 1.4s;" >
                <div><button class="fs-1-3 bold-500 color-Magnoliak" :class="{ 'list-active': isRouteActive('/summary') || isRouteActive('/finish') }">4</button></div>
                <div class="list-text">
                    <p class="bold-400 fs-1 color-Magnoliak op-5">STEP 4</p>
                    <p class="bold-700 fs-1-3 color-white">SUMMARY</p>
                </div>
            </div>

</template>

<style scoped>

.list-active {
    background-color: var(--Pastel-blue) !important;
    color: black !important;
}

.list-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

@media screen and (max-width: 568px) {
     button {
        font-size: 2rem;
     }
}
</style>