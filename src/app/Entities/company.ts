import { Coupon } from "./coupon";

export interface Company {
    id: number;
    name: string;
    email: string;
    password: string;
    coupons: Coupon[];
}