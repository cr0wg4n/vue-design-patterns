import Cookies from "js-cookie";

export interface CookieOptions {
  expires?: number | Date | undefined;
  path?: string | undefined;
  domain?: string | undefined;
  secure?: boolean | undefined;
  sameSite?: "strict" | "lax" | "none" | undefined;
  [property: string]: any;
}

export default class CookiesAdapter {
  cookies;

  constructor() {
    this.cookies = Cookies;
  }

  get(key: string): string | undefined {
    return this.cookies.get(key);
  }

  getAll(): object {
    return this.cookies.get();
  }

  set(
    key: string,
    value: string,
    options: CookieOptions | undefined = undefined
  ): string | undefined {
    return this.cookies.set(key, value, options);
  }

  remove(key: string) {
    this.cookies.remove(key);
  }
}
