export type CareerProduct = {
  id: string;
  title: string;
  description: string;
  price: number;
};

export type Package = {
  id: string;
  title: string;
  whoItsFor: string;
  includes: string[];
  separately: number;
  price: number;
};

export type Program = {
  id: string;
  title: string;
  description: string;
  includes: string[];
  price: number;
};
