export interface UserData {
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: UserData | null;
  token: string | null;
  login: (email: string, token: string) => void;
  logout: () => void;
}
