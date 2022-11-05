export interface OrdersListResponse {
    data:    OrderMini[];
    meta:    OrdersListMeta;
    jsonapi: Jsonapi;
}

export interface OrderMini {
    type:       string;
    id:         string;
    attributes: OrdersListAttributes;
}

export interface OrdersListAttributes {
    total:          string;
    products_count: number;
    last_update:    string;
    created_date:   string;
}

export interface Jsonapi {
    version: string;
}

export interface OrdersListMeta {
    currency:      string;
    currency_rate: number;
    start_date:    string;
    end_date:      string;
    total_amount:  number;
    total_orders:  number;
}
