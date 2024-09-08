export const Footer = ({ logo }) => {
  return (
    <footer className="footer center">
      <div className="footer__company">
        <img className="footer__logo" src={ logo } alt="logo" />
        <p className="footer__text">© Российские колбасы 2020 Все права защищены</p>
      </div>
      <nav className="footer__nav">
        <div className="footer__navlinks">
          <a href="#" className="footer__link">
            Главная
          </a>
          <a href="index.html" className="footer__link">
            Каталог
          </a>
          <a href="about.html" className="footer__link">
            О нас
          </a>
          <a href="#" className="footer__link">
            Блог
          </a>
        </div>
        <div className="footer__navlinks footer__navlinks_media-hidden">
          <a href="#" className="footer__link">
            Доставка
          </a>
          <a href="payment.html" className="footer__link">
            Оплата
          </a>
          <a href="#" className="footer__link">
            Контакты
          </a>
        </div>
        <div className="footer__navlinks">
          <a href="#" className="footer__link">
            Сосиски и сардельки
          </a>
          <a href="#" className="footer__link">
            Колбасы варенные
          </a>
          <a href="#" className="footer__link">
            Колбасы Сырокопченые
          </a>
          <a href="#" className="footer__link">
            Ветчины
          </a>
        </div>
        <div className="footer__navlinks">
          <a href="#" className="footer__link">
            Деликатесы
          </a>
          <a href="#" className="footer__link">
            Колбасы полукопченые
          </a>
        </div>
      </nav>
    </footer>
  );
};
