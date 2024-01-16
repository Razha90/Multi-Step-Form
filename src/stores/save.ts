import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useSaveStore = defineStore('save', () => {
    const person = reactive({
        name: {
            value:'',
            error: false,
            message: ''
        },
        email: {
            value:'',
            error: false,
            message: ''
        },
        phone: {
            value:'',
            error: false,
            message: ''
        }
    });

    const plan = reactive({
        attr : {
            value: 1,
            message: "Arcade",
            price: 9
        },
        month: true
    })

    const addons = reactive({
        online: {
            key:1,
            value: true,
            price: 1,
            message: 'Online service'
        },
        storage: {
            key:2,
            value: true,
            price: 2,
            message: 'Larger storage'
        },
        profile: {
            key:3,
            value: false,
            price: 2,
            message: 'Customizable profile'
        }
    })

    return {person, plan, addons}
})