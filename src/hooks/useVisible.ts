import { useEffect, useRef, useState } from "react";

export default function useVisible<T extends HTMLElement>(
    initialValue: boolean
): [
    React.RefObject<T>,
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
] {
    const [visible, setVisible] = useState(initialValue);
    const ref = useRef<T>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
            setVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside, !visible);
        };
    });

    return [ref, visible, setVisible];
}
