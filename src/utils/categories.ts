import { setDelimeter } from "./arrays";

export function uniqueCategories(categories: string[] | undefined) {
    return setDelimeter(
        [...new Set(categories?.join(" ").split(/[^a-z]+/gi))],
        " / "
    );
}
