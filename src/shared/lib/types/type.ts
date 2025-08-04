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
  separately: string;
  price: string;
};

export type Program = {
  id: string;
  title: string;
  description: string;
  includes: string[];
  price: string;
};
