import { User } from './user'
import { create } from 'zustand'

interface UserStoreState {
  user: User | null
}

interface UserStoreActions {
  addUser: (user: User) => Promise<void>
}

export const useUserStore = create<UserStoreState & UserStoreActions>((set) => ({
  user: null,
  addUser: async (user: User) => set({ user: user }),
}))
