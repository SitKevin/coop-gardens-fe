const API_BASE_URL = "https://coop-gardens-be-no2t.onrender.com";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
  phone?: string;
  address?: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name?: string;
    role: string;
  };
}

interface RegisterResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    phone?: string;
    address?: string;
  };
}

export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        credentials: "include", // Bao gồm cookies nếu API của bạn sử dụng chúng
        mode: "cors", // Đảm bảo CORS được hỗ trợ
        body: JSON.stringify(credentials),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Đăng nhập thất bại");
      }
  
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
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Đăng ký thất bại");
  }

  return data;
}

export async function logout(): Promise<void> {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

// Additional helper functions you might want to add:

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
export async function mockLogin(credentials: LoginCredentials): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      // Giả lập độ trễ mạng
      setTimeout(() => {
        // Tài khoản test
        if (credentials.email === "admin@example.com" && credentials.password === "password") {
          resolve({
            token: "mock-token-123456",
            user: {
              id: "1",
              email: credentials.email,
              name: "Người Dùng Test",
              role: "admin"
            }
          });
        } else {
          reject(new Error("Email hoặc mật khẩu không chính xác"));
        }
      }, 800);
    });
  }