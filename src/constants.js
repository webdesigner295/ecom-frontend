// export const BASE_URL =
//   process.env.NODE_ENV === 'develeopment' ? 'http://localhost:5000' : '';
const API_URL = "https://ecom-app-api.vercel.app"
export const BASE_URL = ''; // If using proxy
export const PRODUCTS_URL = `${API_URL}/api/products`;
export const USERS_URL = `${API_URL}/api/users`;
export const ORDERS_URL = `${API_URL}/api/orders`;
export const PAYPAL_URL = `${API_URL}/api/config/paypal`;
