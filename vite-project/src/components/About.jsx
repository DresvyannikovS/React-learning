export const About = () => {
  return (
    <>
      <section className="about center">
        <h1 className="about__title">О нас</h1>
        <div className="about__description">
          <p className="about__text">
            Мы – команда специалистов, знающих толк в колбасе, а также в цене на
            нее, занимаемся многими брендами представленными на рынке Российской
            Федерации. Работаем под клиента под его пожелания и нюансы, находим
            точки соприкосновения для долгосрочного взаимовыгодного
            сотрудничества.
          </p>
        </div>
      </section>

      <section className="image"></section>

      <section className="attainment center">
        <div className="attainment__statistic">
          <div className="attainment__numbers">
            <h1 className="attainment__title">7</h1>
            <h4 className="attainment__secondtitle">лет на рынке</h4>
          </div>
          <div className="attainment__numbers">
            <h1 className="attainment__title">>500</h1>
            <h4 className="attainment__secondtitle">клиентов по всему крыму</h4>
          </div>
        </div>

        <div className="attainment__item">
          <img
            src="/public/img/facts.png"
            alt="facts"
            className="attainment__image"
          />
          <ul className="attainment__ul">
            <li className="attainment__li">
              — Эксклюзивные контракты с поставщиками{" "}
            </li>
            <li className="attainment__li">
              — Постоянное наличие товара на складе
            </li>
            <li className="attainment__li">— Только качественная продукция</li>
            <li className="attainment__li">— Постоянные акции</li>
            <li className="attainment__li">— Большой ассортимент</li>
          </ul>
        </div>
      </section>

      <section className="work center">
        <h1 className="work__title">Как мы работаем</h1>
        <div className="work__items">
          <div className="work__item">
            <img src="/public/img/01.svg" alt="number" className="work__img" />
            <p className="work__text">Менеджер берет заказ</p>
          </div>

          <div className="work__item">
            <img src="/public/img/02.svg" alt="number" className="work__img" />
            <p className="work__text">Оператор его принимает</p>
          </div>

          <div className="work__item">
            <img src="/public/img/03.svg" alt="number" className="work__img" />
            <p className="work__text">Работники склада комплектуют</p>
          </div>

          <div className="work__item">
            <img src="/public/img/04.svg" alt="number" className="work__img" />
            <p className="work__text">
              Скомплектованные заказы отправляем клиентам собственным
              транспортом, который специально оборудован под доставку продукции
              (рефрижератор) в нужной температуре
            </p>
          </div>

          <div className="work__item">
            <img src="/public/img/05.svg" alt="number" className="work__img" />
            <p className="work__text">
              После принятия заказа клиент получает товар на следующий день. Для
              каждого направления свои дни доставки, но не менее 2 раз в неделю{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
