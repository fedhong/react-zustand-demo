import create from 'zustand'
import { produce } from 'immer'
import { fetchOptions } from '../service/data'

const useStore = create((set, get) => {
    return {
        options: {},
        bizOptionSelected: {},
        styleOptionSelected: {},
        previewResult: {},
        setOptions: async () => {
            try {
                const options = await fetchOptions()
                set({ options })
            } catch (error) {
                throw error
            }
        },
        setBizOptionSelected: (key, value) => {
            set(produce((state) => {
                state.bizOptionSelected[key] = value
            }))
        },
        setStyleOptionSelected: (key, value) => {
            set(produce((state) => {
                state.styleOptionSelected[key] = value
            }))
        },
        setPreviewResult: async () => {
            console.log('TODO:调用AI接口')
        }
    }
})

export {
    useStore,
}
