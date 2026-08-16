"use client"

import { create } from "zustand";
import type { UserStoreType } from "../../types/store/userStoreType";
import { persist } from "zustand/middleware";
import type { UserInformationType } from "../../types/user/userType";

export const UserStore = create<UserStoreType>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: UserInformationType) => set({ user: user }),
      resetUser: () => set({ user: null })
    }),
    {
      name: "local-storage"
    }
  )
)