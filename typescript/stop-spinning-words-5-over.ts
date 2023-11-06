// first pass
export function spinWords(words: string): string {
    return words.split(' ').map(it => it.length >= 5 ? it.split('').reverse().join('') : it).join(' ')
}