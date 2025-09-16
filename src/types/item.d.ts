export interface Item {
  id: string;
  userName: string;
  title: string;
  pricing: "paid" | "free" | "viewOnly";
  price?: number;
  imageUrl?: string;
}