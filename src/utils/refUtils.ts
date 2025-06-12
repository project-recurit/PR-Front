import type { RefObject } from "react";

/**
 * 객체 ref의 특정 key에 대해 핸들러를 반환하는 유틸
 * @param ref
 * @returns 전달받은 key에 해당하는 값을 변경하는 핸들러를 반환합니다.
 * @example
 * // ref.current가 { name: string; age: number } 라고 가정할 때:
 * const setUser = createRefObjectSetter(ref);
 * setUser('name')('이소미');// ref.current = { ...ref.current, name: '이소미' }
 * setUser('age')(30);// ref.current = { ...ref.current, age: 30 }
 */
export const createRefObjectSetter = <T>(ref: RefObject<T>) => {
  return <K extends keyof T>(key: K) =>
    (value: T[K]) => {
      ref.current = { ...ref.current, [key]: value };
    };
};
