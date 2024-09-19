import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <section className="title">
        <div className="title__content container">
          <div className="title__info">
            <h1 className="title__maintitle">
              Колбасная продукция
              <br />с доставкой по Крыму
            </h1>
            <button className="title__button showCallForm">Заказать звонок</button>
            <div>
              <ul className="title__ul">
                <li className="title__li">Только качественная продукция</li>
                <li className="title__li">Большой ассортимент</li>
                <li className="title__li">Постоянное наличие товара на складе</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="media-title">
        <div className="media-title__info container">
          <h1 className="title__maintitle">
            Колбасная продукция
            <br />с доставкой по Крыму
          </h1>
          <button className="title__button showCallForm">
            <Link to ={"/сallBack"}>Заказать звонок</Link>
            </button>
          <div>
            <ul className="title__ul">
              <li className="title__li">Только качественная продукция</li>
              <li className="title__li">Большой ассортимент</li>
              <li className="title__li">Постоянное наличие товара на складе</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="background center">
        <section className="category">
          <h2 className="category__title">Наша продукция</h2>

          <div className="category__items">
            <div className="category__item">
              <p className="category__text">Сосиски и сардельки</p>
              <img
                src="img/sosiski.png"
                alt="Сосиски_и_сардельки"
                className="category__img category__img_big"
              />
            </div>
            <div className="category__item">
              <p className="category__text">Колбасы варенные</p>
              <img
                src="img/kolbasy_varenie.png"
                alt="Колбасы_варенные"
                className="category__img"
              />
            </div>
            <div className="category__item">
              <p className="category__text">Колбасы Сырокопченые</p>
              <img
                src="img/kolbasy_sirokopchenie.png"
                alt="Колбасы_Сырокопченые"
                className="category__img"
              />
            </div>
            <div className="category__item">
              <p className="category__text">Ветчины</p>
              <img
                src="img/vetchina.png"
                alt="Ветчины"
                className="category__img category__img_big"
              />
            </div>
            <div className="category__item">
              <p className="category__text">Деликатесы</p>
              <img
                src="img/delicatesy.png"
                alt="Деликатесы"
                className="category__img"
              />
            </div>
            <div className="category__item">
              <p className="category__text">Колбасы полукопченые</p>
              <img
                src="img/kolbasy_kopchenie.png"
                alt="Колбасы_полукопченые"
                className="category__img category__img_big"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="center">
        <div className="partners">
          <h2 className="partners__title">Наши партнеры</h2>
          <div className="partners__items">
            <div className="partners__item">
              <img src="img/partners/1.png" alt="" />
            </div>
            <div className="partners__item">
              <img src="img/partners/2.png" alt="" />
            </div>
            <div className="partners__item">
              <img src="img/partners/3.png" alt="" />
            </div>
            <div className="partners__item">
              <img src="img/partners/4.png" alt="" />
            </div>
            <div className="partners__item">
              <img src="img/partners/5.png" alt="" />
            </div>
            <div className="partners__item">
              <img src="img/partners/6.png" alt="" />
            </div>
            <div className="partners__item">
              <img src="img/partners/7.png" alt="" />
            </div>
            <div className="partners__item">
              <img src="img/partners/8.png" alt="" />
            </div>
            <div className="partners__item">
              <img src="img/partners/9.png" alt="" />
            </div>
            <div className="partners__item">
              <img src="img/partners/10.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
