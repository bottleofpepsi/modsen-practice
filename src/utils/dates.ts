export function getDateFromString(
    stringWithDate: string | undefined
): string[] | undefined {
    return stringWithDate?.split(/\D+/g);
}
