import { Category } from './category';

export interface Coupon {
    id : number;
	companyId: number;
	category: Category;
	title: string;
	description: string;
	startDate: Date;
	endDate: Date;
	amount: number;
	price: number;
	image: string;
}