type Token = string;

const ACCESS_TOKEN_KEY = 'access_token' as Token;
const REFRESH_TOKEN_KEY = 'refresh_token' as Token;

type Tokens = {
  accessToken: Token;
  refreshToken: Token;
};

type Storage = {
  get: () => Token | null;
  set: (tokens: Tokens) => void;
  clear: () => void;
};

export const tokenStorage: Storage = {
  get() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },
  set({ accessToken, refreshToken }) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  },
  clear() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },
};
