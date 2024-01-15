import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import YourInfo from '../views/YourInfo.vue'
import SelectPlan from '../views/SelectPlan.vue'
import AddOns from '../views/AddOns.vue'
import Summary from '../views/Summary.vue'
import Finish from '../views/Finish.vue'
import { useSaveStore } from '@/stores/save'


function checkHome(check: boolean): boolean {
  try {
  const { person } = useSaveStore();

    if (check) {
      return person.name.value.length < 5 && person.email.value.length < 7 && isEmailValid(person.email.value) && person.phone.value.length < 5
       
    } else {
      let error = false
      if (person.email.value.length > 7) {
        if (isEmailValid(person.email.value)) {
          person.email.error = false
        } else {
          error = true
          person.email.error = true
          person.email.message = 'The Field must be Email'
        }
      } else {
        error = true
        person.email.error = true
        person.email.message = 'The Field must be Email'
      }
    
      if (person.name.value.length < 5) {
        error = true
        person.name.error = true
        person.name.message = 'Name must be at least 5 characters'
      } else {
        person.name.error = false
      }
      if (person.phone.value.length <5) {
        error = true
        person.phone.error = true
        person.phone.message = 'The Field is required'
      } else {
        person.phone.error = false
      }

      if (error) {
        return false
      } else {
        return true
      }
    }
  } catch (error) {
    console.error(error);
    return false
  }

}

function pageOneZero():boolean {
  const { person } = useSaveStore();
  return person.name.value.length < 1 && person.email.value.length < 1 &&  person.phone.value.length < 1
}

function isEmailValid(email: string): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'yourinfo',
      component: () => YourInfo,
    },
    {
      path: '/selectplan',
      name: 'selectplan',
      component: () => SelectPlan,
      beforeEnter: (to, from, next) => {
        if (!pageOneZero()) {
          if (checkHome(false)) {
            next()
          } else {
            next('/')
          }
        } else {
          checkHome(false)
          next('/')
        }
      }
    },
    {
      path: '/addons',
      name: 'addons',
      component: () => AddOns,
      beforeEnter: (to, from, next) => {
        if (!pageOneZero()) {
          if (checkHome(false)) {
            next()
          } else {
            next('/')
          }
        } else {
          checkHome(false)
          next('/')
        }
      }
    },
    {
      path: '/summary',
      name: 'summary',
      component: () => Summary,
      beforeEnter: (to, from, next) => {
        if (!pageOneZero()) {
          if (checkHome(false)) {
            next()
          } else {
            next('/')
          }
        } else {
          checkHome(false)
          next('/')
        }
      }
    },
    {
      path: '/finish',
      name: 'finish',
      component: () => Finish,
      beforeEnter: (to, from, next) => {
        if (!pageOneZero()) {
          if (checkHome(false)) {
            next()
          } else {
            next('/')
          }
        } else {
          checkHome(false)
          next('/')
        }
      }
    }
  ]
})

export default router
