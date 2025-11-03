// src/store/useAuthStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import CryptoJS from 'crypto-js'; 
import { AuthState, UserData } from './types';


const ENCRYPTION_KEY = process.env.REACT_APP_ENCRYPTION_KEY || 'default-key';

const encryptedStorage = {
  getItem: (name: string): string | null => {
    try {
      const encrypted = localStorage.getItem(name);
      if (!encrypted) return null;

      const decryptedBytes = CryptoJS.AES.decrypt(encrypted, ENCRYPTION_KEY);
      const decrypted = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return decrypted;
    } catch (error) {
      console.error('Error al descifrar el estado:', error);
      localStorage.removeItem(name);
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    try {
      const encrypted = CryptoJS.AES.encrypt(value, ENCRYPTION_KEY).toString();
      localStorage.setItem(name, encrypted);
    } catch (error) {
      console.error('Error al cifrar el estado:', error);
    }
  },
  removeItem: (name: string): void => {
    localStorage.removeItem(name);
  },
};

// Crear el Store de Autenticación
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // Estado Inicial
      isAuthenticated: false,
      user: null,
      token: null,

      // Acción de Login
      login: (email: string, token: string) => {
        
        const userData: UserData = { email };
        set({
          isAuthenticated: true,
          user: userData,
          token: token,
        });
      },

      // Acción de Logout
      logout: () => set({
        isAuthenticated: false,
        user: null,
        token: null,
      }),
    }),
    {
      name: 'auth-storage', // Nombre para el almacenamiento
      storage: createJSONStorage(() => encryptedStorage), // Usar nuestro almacenamiento cifrado
    }
  )
);