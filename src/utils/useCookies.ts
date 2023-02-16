import { ref, type Ref } from "vue";
import CookiesAdapter from "./CookiesAdapter";
import type CookieOptions from "./CookiesAdapter";

export default function useCookies() {
  const cookie = new CookiesAdapter();
  const cookies: Ref<object> = ref(cookie.getAll());

  const update = () => {
    cookies.value = cookie.getAll();
  };

  const get = (key: string): string | undefined => {
    return cookie.get(key);
  };

  const set = (
    key: string,
    value: string,
    options: CookieOptions | undefined = undefined
  ): string | undefined => {
    const response = cookie.set(key, value, options);
    update();
    return response;
  };

  const remove = (key: string) => {
    cookie.remove(key);
    update();
  };

  return {
    cookies,
    get,
    set,
    remove,
  };
}
