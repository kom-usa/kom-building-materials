export type ProductCategory =
  | "cabinets"
  | "countertops"
  | "lvp-flooring"
  | "hardwood-flooring";

export type ProductStatus = "in-stock" | "special-order" | "discontinued";

export type PriceUnit = "per-unit" | "per-sqft" | "per-lf" | "per-box";

export interface Product {
  sku: string;
  category: ProductCategory;
  name: string;
  manufacturer: string;
  description: string;
  dimensions: string;
  image: string;
  price: number;
  priceUnit: PriceUnit;
  status: ProductStatus;
  leadTime: string;
  notes: string;
  featured: boolean;
}
