export function setDelimeter(array: string[] | undefined, delimeter: string) {
    return array ? array.join(delimeter) : "";
}
