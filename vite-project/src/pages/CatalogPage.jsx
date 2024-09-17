import { Menu } from "../components/Menu";
import { Card } from "../components/Card";

import { Menu_hidden } from "../components/Menu_hidden";

const products = [
  {
    name: "Ветчина царская",
    photo: "/public/img/test/test1.png",
    price: 241,
    id: 16,
  },
  {
    name: "Ветчина дугушка",
    photo: "/public/img/test/test2.png",
    price: 247,
    id: 17,
  },
  {
    name: "Банкетная",
    photo: "/public/img/test/test3.png",
    price: 345,
    id: 18,
  },
  {
    name: "Мясная папа может",
    photo: "/public/img/test/12345-1.png",
    price: 405,
    id: 19,
  },
  {
    name: "Охотничьи колбаски",
    photo: "/public/img/test/image 37.png",
    price: 187,
    id: 21,
  },
  {
    name: "Салями дугушка",
    photo: "/public/img/test/test1.png",
    price: 187,
    id: 27,
  },
];

export const Catalog = () => {
  return (
    <>
      <Menu_hidden />

      <div className="products center">
        <Menu />

        <div className="products__page">
          <div className="products__catalog">
            {products.map((product) => {
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
            <img src="img/Line 109.svg" alt="" />
            <a href="" className="products__pageNumber">
              02
            </a>
            <a href="" className="products__pageNumber">
              03
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
