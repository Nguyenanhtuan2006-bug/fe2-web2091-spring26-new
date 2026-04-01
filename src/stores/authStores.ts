import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: any;
  token: string | null;
  setUser: (data: { user: any; token: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      setUser: (data) =>
        set({
          user: data.user,
          token: data.token,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
        }),
    }),
    {
      name: 'auth-storage', // lưu vào localStorage
    }
  )
);