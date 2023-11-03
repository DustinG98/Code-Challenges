// first pass
export const high = (str: string): string => {
    return str.split(' ').reduce((cur:string, a:string) => {
      const getScore = (str:string) => Number(str.split('').map((it: string) => Number(it.charCodeAt(0) - 96)).reduce((current: number, a: number) => current + a, 0))
      return getScore(a) > getScore(cur) ? a : cur;
    },'')
}