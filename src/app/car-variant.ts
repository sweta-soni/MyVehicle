export interface ICarVariants{
    status: string;
data: IDetails[];
}
export interface IDetails{
    variant_id:number;
    variant:string;
    pro_name:string;
    brand_name:string;
    model_name:string;
    exshowroom_price:number;
    seo_url:string;
}
