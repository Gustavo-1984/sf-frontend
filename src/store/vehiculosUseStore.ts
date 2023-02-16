import {create} from "zustand";

type State = {
  vehiculo: any
}


type Actions = {
  setVehiculo: (profile: any) => void
  
  }


export const vehiculoStore = create<State & Actions>(
  (set) => ({
    vehiculo: null,
    setVehiculo: (vehiculo: any) => set((state)=> ({
      vehiculo
    })),
   })
);