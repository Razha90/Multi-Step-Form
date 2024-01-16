<script setup lang="ts">    
    import { RouterLink } from 'vue-router';
    import { useSaveStore } from '@/stores/save';

    const save = useSaveStore().plan;
            function saving(num: number, val: string, pri: number): void {
                save.attr.value = num;
                save.attr.message = val;
                save.attr.price = pri;
            }

</script>

<template>
    <div class="spacing">
        <h1 class="animate__animated animate__fadeIn color-marine-blue fs-2-5 bold-700">Select your plan</h1>
        <p class="animate__animated animate__fadeIn color-cool-gray fs-1-3 bold-400" style="animation-delay: .3s;">You have the option of monthly or yearly billing.</p>
    </div>

    <div class="box-choose">
        <div class="box-order animate__animated animate__backInRight" style="animation-delay: .3s;" @click="saving(1, 'Arcade', 9)" :class="{ 'box-order-active': save.attr.value === 1 }">
            <div>
                <img src="/icon-arcade.svg" alt="Arcade">
            </div>
            <div>
                <p class="fs-1-3 color-marine-blue bold-700">Arcade</p>
                <p class="fs-1-2 color-cool-gray" v-show="save.month">$9/mo</p>
                <p class="fs-1-2 color-cool-gray" v-show="!save.month">$90/yr</p>
                <p class="fs-1-2 bold-500 color-marine-blue" v-show="!save.month">2 months free</p>
            </div>
        </div>
        <div class="box-order animate__animated animate__backInRight" style="animation-delay: .6s;" @click="saving(2, 'Advanced', 12)" :class="{ 'box-order-active': save.attr.value === 2 }">
            <div>
                <img src="/icon-advanced.svg" alt="Advanced">
            </div>
            <div>
                <p class="fs-1-3 color-marine-blue bold-700">Advanced</p>
                <p class="fs-1-2 color-cool-gray" v-show="save.month">$12/mo</p>
                <p class="fs-1-2 color-cool-gray" v-show="!save.month">$120/yr</p>
                <p class="fs-1-2 bold-500 color-marine-blue" v-show="!save.month">2 months free</p>
            </div>
        </div>
        <div class="box-order animate__animated animate__backInRight" style="animation-delay: .9s;" @click="saving(3, 'Pro', 15)" :class="{ 'box-order-active': save.attr.value === 3 }">
            <div>
                <img src="/icon-pro.svg" alt="Pro">
            </div>
            <div>
                <p class="fs-1-3 color-marine-blue bold-700">Pro</p>
                <p class="fs-1-2 color-cool-gray" v-show="save.month">$15/mo</p>
                <p class="fs-1-2 color-cool-gray" v-show="!save.month">$150/yr</p>
                <p class="fs-1-2 bold-500 color-marine-blue" v-if="!save.month">2 months free</p>
            </div>
        </div>
    </div>

    <div class="choose animate__animated animate__fadeIn" style="animation-delay: 2s;">
        <p class="fs-1-2 color-marine-blue bold-700">Monthly</p>
        <div class="button-circle" @click="save.month = !save.month" :class="{ 'button-circle-active': !save.month }">
            <div></div>
        </div>
        <p class="fs-1-2 color-marine-blue bold-700">Yearly</p>
    </div>

    <div class="wrapper-button fs-1-2 bold-400 selectplan animate__animated animate__fadeIn" style="animation-delay: 2.6s;">
        <RouterLink class="color-cool-gray" style="text-decoration: none; " to="/"> Go Back</RouterLink>
        <RouterLink class="button-next" to="/addons">Next Step</RouterLink>
    </div>
</template>

<style scoped>
.box-choose {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 3%;
}
.box-order {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4%;
    width: 100%;
    border:2px solid var(--Light-gray);
    border-radius: 10px;
    transition: .5s;
    cursor: pointer;
}

.box-order:hover {
    transform: scale(1.1) !important;
}

.box-order-active {
    border:2px solid var(--Purplish-blue);
}

.box-order div:nth-child(2) {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.box-order img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

.choose {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 9%;
    border-radius: 5px;
    gap: 5%;
    background-color: var(--Magnolia);
    transition: .5s;
}

.button-circle {
    width: 60px;
    height: 30px;
    background-color: var(--Marine-blue);
    padding: 5px;
    border-radius: 20px;
    cursor: pointer;
}

.button-circle div {
    width: 20px;
    height: 20px;
    background-color: var(--White);
    border-radius: 50%;
    transition: .5s;
}

.button-circle:active div {
    background-color: var(--Pastel-blue);
}

.button-circle-active div {
    transform: translateX(30px);
}

@media screen and (max-width: 568px) {
    .box-choose {
        flex-direction: column;
        gap: 1.2rem;
    }
    .box-order {
        flex-direction: row;
        gap: 2rem;
        align-items: center;
    }

    .box-order div:nth-child(2) {
        margin-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

     p{
        font-size: 1.5rem;
    }

    .box-order div:nth-child(2) p:nth-child(1){
        font-size: 1.9rem;
    }
}
</style>