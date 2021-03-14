import { Coupon } from "./coupon";

export interface Company {
    id: Number;
    name: string;
    email: string;
    password: string;
    coupons: Coupon[];
}