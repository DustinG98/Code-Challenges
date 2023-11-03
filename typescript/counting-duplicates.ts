// first pass
export function duplicateCount(text: string): number{
    const found: { [id: string]: number } = {}
    let dupes: number = 0;
    text.split('').map((it: string) => {
        if(found[it.toLowerCase()] === 1) {
            found[it.toLowerCase()] = found[it.toLowerCase()] += 1; 
            dupes++
        } else if(found[it.toLowerCase()] === undefined) {
            found[it.toLowerCase()] = 1
        }
    })
    return dupes;
}