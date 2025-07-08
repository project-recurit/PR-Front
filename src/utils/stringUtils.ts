/** 문자열의 첫글자 대문자로 변환 */
export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
