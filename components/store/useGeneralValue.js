import { create } from "zustand";


export const useGeneralValues = create((set) => ({

    setGeneralValues: (key, value) => {
        set(({ [key]: value }));
    }

}))