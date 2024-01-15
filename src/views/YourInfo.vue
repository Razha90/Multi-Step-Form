<script lang="ts">
import { useSaveStore } from '@/stores/save'
import { RouterLink } from 'vue-router'

  export default {
    setup() {
      const save = useSaveStore().person;
      const nameClick = () => {
        save.name.error = false;
      }
      const emailClick = () => {
        save.email.error = false;
      }
      const phoneClick = () => {
        save.phone.error = false;
      }

      return { save,nameClick,emailClick,phoneClick };
    }
  };
</script>

<template>
    <div class="spacing animate__animated animate__fadeIn">
        <h1 class="color-marine-blue fs-2-5 bold-700">Personal Info</h1>
        <p class="color-cool-gray fs-1-3 bold-400">Please provide your name, email address, and phone number.</p>
      </div>
      
      <div class="animate__animated animate__fadeIn form" style="animation-delay: .3s;">
        <div>
          <label class="color-marine-blue bold-400 fs-1-3" for="name">Name</label>
          <span class="color-strawberry-red fs-1-3" v-if="save.name.error">{{ save.name.message }}</span>
        </div>
        <input @change="nameClick()" :class="{ 'border-red': save.name.error }" class="fs-1-3 color-marine-blue bold-700" type="text" id="name" v-model="save.name.value" placeholder="e.g Stephen King">
      </div>

      <div class="animate__animated animate__fadeIn form" style="animation-delay: .6s;">
        <div>
          <label class="color-marine-blue bold-400 fs-1-3" for="email">Email Address</label>
          <span class="color-strawberry-red fs-1-3" v-if="save.email.error">{{ save.email.message }}</span>
        </div>
        <input @change="emailClick()" :class="{ 'border-red': save.email.error }" class="fs-1-3 color-marine-blue bold-700" type="email" id="email" v-model="save.email.value" placeholder="e.g. stephenking@lorem.com">
      </div>

      <div class="form animate__animated animate__fadeIn" style="animation-delay: .9s;">
        <div>
          <label class="color-marine-blue bold-400 fs-1-3" for="phone">Phone Number</label>
          <span class="color-strawberry-red fs-1-3" v-if="save.phone.error">{{ save.phone.message }}</span>
        </div>
        <input @change="phoneClick()" :class="{ 'border-red': save.phone.error }" class="fs-1-3 color-marine-blue bold-700" type="text" id="phone" v-model="save.phone.value" placeholder="e.g. +1 234 567 890">
      </div>

      <div class="wrapper-button fs-1-2 bold-400 animate__animated animate__fadeIn" style="animation-delay: 1.2s;">
        <RouterLink class="button-next" to="/selectplan">Next Step
        </RouterLink>
      </div>

  </template>

<style scoped>

.form div  {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
}

.form input {
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid var(--Light-gray);
  transition: .5s;
  outline: none;
}


.form input:focus {
  border: 2px solid var(--Purplish-blue);
  transition: .5s;
}

.border-red {
  border: 2px solid var(--Strawberry-red) !important;
  color: var(--Strawberry-red) !important;
}

@media screen and (max-width: 568px) {
  p {
    font-size: 1.5rem;
  }

}
</style>