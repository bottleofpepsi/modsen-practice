import { MouseEventHandler, ReactNode } from "react";

export type Props = {
    children: ReactNode[] | ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
