const API_BASE_URL = "https://coop-gardens-be-no2t.onrender.com";

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

export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Remove the credentials and mode options that might cause CORS issues
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Đăng nhập thất bại (${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Lỗi kết nối:", error);
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng của bạn.");
    }
    throw error;
  }
}

export async function register(credentials: RegisterCredentials): Promise<RegisterResponse> {
  try {
    // Match the exact field names expected by the backend
    const requestBody = {
      email: credentials.email,
      password: credentials.password,
      full_name: credentials.full_name, 
      role: credentials.role || "User" 
    };

    const response = await fetch(`${API_BASE_URL}/v1/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Đăng ký thất bại (${response.status})`);
    }

      const data = await response.json();
      return data;
    }

    catch (error) {
    console.error("Lỗi kết nối:", error);
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng của bạn.");
    }
    throw error;
  }
}

export function logout(): void {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

// Helper functions
export function isAuthenticated(): boolean {
  return localStorage.getItem("token") !== null;
}

export function getCurrentUser(): LoginResponse['user'] | null {
  const userJson = localStorage.getItem("user");
  if (!userJson) return null;
  try {
    return JSON.parse(userJson);
  } catch {
    return null;
  }
}

export function getAuthToken(): string | null {
  return localStorage.getItem("token");
}

// Mock login for testing when backend is unavailable
export async function mockLogin(credentials: LoginCredentials): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === "admin@example.com" && credentials.password === "password") {
        resolve({
          token: "mock-token-123456",
          user: {
            email: credentials.email,
            full_name: "Người Dùng Test",
            role: "admin",
            password: credentials.password,
          }
        });
      } else {
        reject(new Error("Email hoặc mật khẩu không chính xác"));
      }
    }, 800);
  });
}

// Mock register for testing
export async function mockRegister(credentials: RegisterCredentials): Promise<RegisterResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "mock-token-123456",
        user: {
          email: credentials.email,
          full_name: credentials.full_name,
          role: "user",
          password: credentials.password,
        }
      });
    }, 800);
  });
}