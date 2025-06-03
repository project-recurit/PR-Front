import { Dispatch, SetStateAction } from "react";

/** 객체의 특정 key에 대해 setState 핸들러를 반환하는 유틸 */
export const createObjectKeySetter = <T>(setState: Dispatch<SetStateAction<T>>) => {
  return <K extends keyof T>(key: K) =>
    (value: T[K]) => {
      setState((prev) => ({ ...prev, [key]: value }));
    };
};
