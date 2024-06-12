export interface NewItemType {
    id?: string;
    name?: string;
    category?: string;
    stock?: number;
    description?: string;
    price?: number;
}

export interface AddItemType {
    name?: string;
    category?: string;
    stock?: number;
    description?: string;
    price?: number;
}