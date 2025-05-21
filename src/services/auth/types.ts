interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  email: string;
  full_name: string;
  role?: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    email: string;
    full_name: string;
    role: string;
    password: string;
  };
}

interface RegisterResponse {
  token: string;
  user: {
    email: string;
    full_name: string;
    role: string;
    password: string;
  };
}