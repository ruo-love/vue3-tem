
import { decrypto, encrypto } from "../crypto"

//入参本地存储类型
interface StorageData<T> {
  value: T
  expire: number | null
}

function createLocalStorage<T extends StorageInterface.Local>() {
  /** 默认缓存期限为7天 */
  const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7

  //K extends keyof T => 'themeColor' | 'themeColor' |.... 联和类型
  function set<K extends keyof T>(key: K, value: T[K], expire: number | null = DEFAULT_CACHE_TIME) {
    const encryptoData: StorageData<T[K]> = {
      value,
      expire: expire !== null ? new Date().getTime() + expire : null
    }
    const json = encrypto(encryptoData)
    window.localStorage.setItem(key as string, json)
  }

  function get<K extends keyof T>(key: K): T[K] | null {
    const json = window.localStorage.getItem(key as string)
    if (json) {
      let localKeyData: StorageData<T[K]> | null = null
      try {
        localKeyData = decrypto(json)
      } catch (err) {
        console.log("获取本地存储数据=》解密失败:", err)
      }
      if (localKeyData) {
        const { value, expire } = localKeyData
        if (expire == null || expire >= Date.now()) {
          return value
        }
      }
      remove(key)
      return null
    }
    return null
  }
  function remove<K extends keyof T>(key: K) {
    window.localStorage.removeItem(key as string)
  }
  function clear() {
    window.localStorage.clear()
  }

  return {
    set,
    get,
    remove,
    clear
  }
}

export const localStg = createLocalStorage()
