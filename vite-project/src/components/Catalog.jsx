import { PRODUCTS } from "../constants/products";
import { Card } from "./Card";
import { Menu } from "./Menu";

export const Catalog = () => {
  return (
    <div className="products center">
      <Menu />

      <div className="products__page">
        <div className="products__catalog">
          {PRODUCTS.map((product) => {
            return <Card key={product.id} item={product} />;
          })}
        </div>

        <div className="products__navigation">
          <a
            href=""
            className="products__pageNumber products__pageNumber_active"
          >
            01
          </a>
          <img src="/public/img/Line 109.svg" alt="" />
          <a href="" className="products__pageNumber">
            02
          </a>
          <a href="" className="products__pageNumber">
            03
          </a>
        </div>
      </div>
    </div>
  );
};
