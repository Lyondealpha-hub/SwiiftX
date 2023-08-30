import { create } from 'zustand'

export const useSelectedRide = create((set) => ({
    rides: 1,
    setGeneralValues: (key, value) => {
        set(({ [key]: value }))
        console.log({ [key]: value })
    },

    pickRide: (ride) => {
        set((state) => ({ rides: state.rides * ride }))
    },
}))