
export class StringUtils {
    public toUpperCase(value: string) {
        if(!value){
            throw new Error('Invalid argument!')
        }

        return toUpperCase(value)
    }
}

export function toUpperCase(value: string) {
    return value.toLocaleUpperCase();
}

export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

export function getStringInfo(value: string): stringInfo{
    return{
        lowerCase: value.toLocaleLowerCase(),
        upperCase: value.toLocaleUpperCase(),
        characters: Array.from(value),
        length: value.length,
        extraInfo:{}
    }
}