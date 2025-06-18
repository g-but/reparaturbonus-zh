export const ROUTES = {
  HOME: '/',
  SHOPS: '/shops',
  DASHBOARD: '/dashboard',
  ADMIN: '/admin',
  VERIFY: '/verify',
  AUTH: {
    SIGNIN: '/auth/signin',
    SIGNUP: '/auth/signup',
  },
  API: {
    SHOPS: '/api/shops',
    BONUS_CODES: '/api/bonus-codes',
    AUTH: '/api/auth',
  }
} as const

export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.SHOPS,
  ROUTES.VERIFY,
  ROUTES.AUTH.SIGNIN,
  ROUTES.AUTH.SIGNUP,
] as const

export const PROTECTED_ROUTES = [
  ROUTES.DASHBOARD,
] as const

export const ADMIN_ROUTES = [
  ROUTES.ADMIN,
] as const