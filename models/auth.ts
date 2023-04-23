export interface LoginPayload {
  identifier: string;
  password: string;
}
export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}
export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  phone?: string;
  address?: string;
  name?: string;
  role?: {
    id: number;
    name: string;
    description: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  };
}
export interface AuthResponse {
  jwt: string;
  user: User;
}
