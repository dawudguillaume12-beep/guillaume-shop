export type DemoSession = {
  id: string;
  email: string;
  fullName: string;
  isAdmin: boolean;
  role: 'customer' | 'admin';
};

export const DEMO_ADMIN_EMAILS = ['dawudguillaume12@gmail.com', 'dawudsong@gmail.com'];

const SESSION_KEY = 'guillaume-shop-demo-session';

export const getStoredSession = (): DemoSession | null => {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as DemoSession) : null;
  } catch {
    return null;
  }
};

export const storeSession = (session: DemoSession) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const createDemoSession = (email: string, fullName: string): DemoSession => {
  const lower = email.trim().toLowerCase();
  const isAdmin = DEMO_ADMIN_EMAILS.includes(lower);

  return {
    id: crypto.randomUUID(),
    email: lower,
    fullName,
    isAdmin,
    role: isAdmin ? 'admin' : 'customer',
  };
};

export const isExplicitAdminEmail = (email: string) => {
  return DEMO_ADMIN_EMAILS.includes(email.trim().toLowerCase());
};
