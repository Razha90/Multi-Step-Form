<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useSaveStore } from '@/stores/save';

const addons = useSaveStore().addons;
        const plan = useSaveStore().plan;


</script>

<template>
    <div class="spacing">
        <h1 class="color-marine-blue fs-2-5 bold-700 animate__animated animate__fadeIn">Pick add-ons</h1>
        <p class="color-cool-gray fs-1-3 bold-400 animate__animated animate__fadeIn" style="animation-delay: .3s;">Add-ons help enhance your gaming experience.</p>
    </div>

    <div class="addons">
        <div @click="addons.online.value = !addons.online.value" class="addons-wrapper animate__animated animate__backInRight" style="animation-delay: .6s;" :class="{ 'addons-wrapper-active': addons.online.value }">
            <div>
                <div>
                    <input type="checkbox" v-model="addons.online.value">
                </div>
                <div>
                    <h3 class="color-marine-blue bold-500">Online service</h3>
                    <p class="color-cool-gray bold-400">Access to multiplayer games</p>
                </div>
            </div>
            <div>
                <p class="color-purpish-blue bold-400" v-if="plan.month">+$1/mo</p>
                <p class="color-purpish-blue bold-400" v-else>+$10/yr</p>
            </div>
        </div>
        <div @click="addons.storage.value = !addons.storage.value" :class="{ 'addons-wrapper-active': addons.storage.value }" class="addons-wrapper animate__animated animate__backInRight" style="animation-delay: 1s;">
            <div>
                <div>
                    <input type="checkbox" v-model="addons.storage.value">
                </div>
                <div>
                    <h3 class="color-marine-blue bold-500">Larger storage</h3>
                    <p>Extra 1TB of cloud save</p>
                </div>
            </div>
            <div>
                <p class="color-purpish-blue bold-400" v-if="plan.month">+$2/mo</p>
                <p class="color-purpish-blue bold-400" v-else>+$20/yr</p>
            </div>
        </div>
        <div @click="addons.profile.value = !addons.profile.value" class="addons-wrapper animate__animated animate__backInRight" style="animation-delay: 1.5s;" :class="{ 'addons-wrapper-active': addons.profile.value }">
            <div>
                <div><input type="checkbox" v-model="addons.profile.value"></div>
                <div>
                    <h3 class="color-marine-blue bold-500">Customizable profile</h3>
                    <p>Custom theme on your profile</p>
                </div>
            </div>
            <div>
                <p class="color-purpish-blue bold-400" v-if="plan.month">+$2/mo</p>
                <p class="color-purpish-blue bold-400" v-else>+$20/yr</p>
            </div>
        </div>
    </div>

    <div class="wrapper-button fs-1-2 bold-400 selectplan animate__animated animate__fadeIn" style="animation-delay: 2.7s;">
        <RouterLink class="color-cool-gray" style="text-decoration: none; " to="/selectplan"> Go Back</RouterLink>
        <RouterLink class="button-next" to="/summary">Next Step</RouterLink>
    </div>
</template>

<style scoped>
.addons {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.addons-wrapper {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border:  2px solid var(--Light-gray);
    border-radius: 12px;
    user-select: none;
    cursor: pointer;
    transition: transform .5s;
}

.addons-wrapper:hover {
    transform: scale(1.1) !important;
}

.addons-wrapper-active {
    border:2px solid var(--Purplish-blue) !important;
}

input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: var(--Purplish-blue);
}

input[type="checkbox"]:not(:checked) {
    opacity: 0.5;
}

.addons-wrapper div:nth-child(1) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
}

.addons-wrapper h3 {
    padding-bottom: 5px;
    font-size: 1.4rem;
}

p {
    color: var(--Cool-gray);
    font-size: 1.2rem;
}

@media screen and (max-width: 568px) {
    p{
        font-size: 1.6rem;
    }

    .addons-wrapper h3 {
        font-size: 1.8rem;
    }

    .addons-wrapper div:nth-child(1) {
        gap: 1.5rem;
    }

    input[type="checkbox"] {
        width: 22px;
        height: 22px;
    }
}

</style>