import type { Product } from "../../../shared/types/types";


export interface CartItem {
    product: Product;
    quantity: number;
}