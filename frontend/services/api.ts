export const API_URL = "https://legal-saas-production-8e02.up.railway.app";

export async function apiFetch(path: string, options: any = {}) {
  const token = localStorage.getItem("token");

  return fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });
}