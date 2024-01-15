<script lang="ts">
import { RouterLink } from 'vue-router';
import {  useSaveStore  } from '@/stores/save'
import { computed } from 'vue';

export default {
    setup() {
        const plan = useSaveStore().plan;
        const addons = useSaveStore().addons;

        const total = computed(() => {
            return Object.values(addons).reduce((accumulator, addon) => {
                return accumulator + (addon.value ? addon.price : 0);
            }, 0) + plan.attr.price;
        });


        return { plan, addons, total }
    }
}
</script>

<template>
    <div class="spacing">
        <h1 class="color-marine-blue fs-2-5 bold-700 animate__animated animate__fadeIn">Finishing up</h1>
        <p class="color-cool-gray fs-1-3 bold-400 animate__animated animate__fadeIn" style="animation-delay: .3s;">Double-check everything looks OK before confirming.</p>
    </div>

    <div class="charge">
        <div class="charge-up animate__animated animate__fadeIn" style="animation-delay: .6s;">
            <div>
                <p class="fs-1-3 color-marine-blue bold-500">{{ plan.attr.message }} ({{ plan.month ? 'Monthly' : 'Yearly' }})</p>
                <RouterLink class="color-cool-gray fs-1-2 bold-400" to="/selectplan">Change</RouterLink>
            </div>
            <p class="fs-1-3 bold-700 color-marine-blue">${{ plan.month ? plan.attr.price+'/mo' : plan.attr.price * 10+'/yr'  }}</p>
        </div>
        <div class="lines animate__animated animate__fadeIn" style="animation-delay: .9s;" v-if="addons.online.value || addons.storage.value || addons.profile.value"></div>
        <template v-for="addon in addons">
            <div v-if="addon.value" class="charge-down animate__animated animate__fadeIn" style="animation-delay: 1.2s;">
                <p class="fs-1-3 color-cool-gray bold-500">{{ addon.message }}</p>
                <p class="fs-1-3 bold-500 color-marine-blue" style="opacity: .8;">+${{ plan.month ? addon.price+'/mo' : addon.price * 10+'/yr' }}</p>
            </div>
        </template>
    </div>

    <div class="charge-total animate__animated animate__fadeIn" style="animation-delay: 1.5s;">
        <p class="fs-1-3 color-cool-gray">Total (per {{ plan.month ? 'month' : 'year' }})</p>
        <p>${{ plan.month ? total+'/mo' : total * 10+'/yr' }}</p>
    </div>

    <div class="wrapper-button fs-1-2 bold-400 selectplan animate__animated animate__fadeIn" style="animation-delay: 1.8s;">
        <RouterLink class="color-cool-gray" style="text-decoration: none; " to="/addons"> Go Back</RouterLink>
        <RouterLink class="button-next" to="/finish">Confirm</RouterLink>
    </div>
</template>

<style scoped>
.charge {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    width: 100%;
    padding: 1.7rem 2rem;
    background-color: var(--Magnolia);
    border-radius: 10px;
}

.wrapper-button .button-next {
    background-color: var(--Purplish-blue);
} 

.lines {
    width: 100%;
    height: 1px;
    background-color: var(--Light-gray);
}

.charge-up {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.charge-up div {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.charge-down {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.charge-total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: flex-end;
}

.charge-total p:nth-child(2) {
    font-weight: 700;
    font-size: 1.8rem;
    color: var(--Purplish-blue);
} 

@media screen and (max-width: 568px) {
    .charge-total p:nth-child(2) {
        font-size: 2.2rem;
    }

    .charge-up a {
        font-size: 1.6rem;
    }

    p {
        font-size: 1.6rem;
    }

}

</style>