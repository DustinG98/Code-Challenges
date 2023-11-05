//first pass
export function order(words:string):string{
    return words.split(' ').sort((a,b) => {
      const aNum = a.replace(/^\D+/g, '');
      const bNum = b.replace(/^\D+/g, '');
      return aNum < bNum ? -1 
      : aNum > bNum ? 1
      : 0
    }).join(' ')
}