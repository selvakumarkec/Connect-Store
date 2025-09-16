import { Item } from '../types/item';
import api from './api';


export interface RawItem {
  id: string;
  creator: string;
  title: string;
  pricingOption: number;  // 0 = paid, 1 = free, 2 = viewOnly
  imagePath: string;
  price?: number;
}


export async function getAllItems(): Promise<Item[]> {
  const res = await api.get<RawItem[]>('/data');
  return res.data.map((item)=>{
      const pricing =
    item.pricingOption === 0 ? 'paid'
    : item.pricingOption === 1 ? 'free'
    : 'viewOnly';

  return {
    id: item.id,
    userName: item.creator,
    title: item.title,
    pricing,
    price: item.price,
    imageUrl: item.imagePath,
  };
  });
}
