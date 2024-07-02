export type Props = {
    setParameter: (arg: string) => void;
    items: MenuItem[];
};

export type MenuItem = {
    id: number;
    name: string;
    value: string;
};

export type ItemProps = {
    itemDetails: MenuItem;
    onItemClicked: (arg1: string, arg2: string) => void;
};
