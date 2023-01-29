import { FC, Fragment } from "react";

interface Props {
  productList: [];
}

const ProductList: FC<Props> = ({ productList }) => {
  return (
    <div>
      {productList?.map(
        (product: { id: number; title: string; price: number }) => {
          return (
            <Fragment key={product?.id}>
              <h4 style={{ textAlign: "center" }}>
                {product?.id}. {product?.title}
              </h4>
              <p style={{ textAlign: "center" }}>Price: ${product?.price}</p>
            </Fragment>
          );
        }
      )}
    </div>
  );
};

export default ProductList;
