import { Category } from './category';

export interface Coupon {
    id : Number;
	companyId: Number;
	category: Category;
	title: string;
	description: string;
	startDate: Date;
	endDate: Date;
	amount: Number;
	price: Number;
	image: string;
}