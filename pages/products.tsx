import { GetServerSideProps } from "next";
import ProductList from "../components/productList";

interface IProduct {
  productList: [];
}

const Products = ({ productList }: IProduct) => {
  return (
    <>
      <ProductList productList={productList} />
    </>
  );
};

export default Products;

type Products = [
  {
    id: number;
    title: string;
    price: number;
  }
];

export const getStaticProps: GetServerSideProps<{
  productList: Products;
}> = async () => {
  const res = await fetch("http://localhost:4000/products");
  const productList: Products = await res.json();

  return {
    props: {
      productList,
    },
  };
};
