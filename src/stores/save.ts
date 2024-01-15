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
            value: true,
            price: 1,
            message: 'Online service'
        },
        storage: {
            value: true,
            price: 2,
            message: 'Larger storage'
        },
        profile: {
            value: false,
            price: 2,
            message: 'Customizable profile'
        }
    })

    return {person, plan, addons}
})