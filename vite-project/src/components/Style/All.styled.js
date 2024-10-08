import { createGlobalStyle } from "styled-components";

export const AllGlobal = createGlobalStyle`
* {
  margin: 0;

  padding: 0;

  box-sizing: border-box;

  font-family: "Inter";
}

a {
  text-decoration: none;
}

.fullpage {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.center {
  padding-left: calc(50% - 1200px / 2);

  padding-right: calc(50% - 1200px / 2);

  &_left {
    padding-left: calc(50% - 1200px / 2);
  }
}

.container {
  max-width: 1200px;

  padding: 0 20px;

  width: 100%;

  margin: auto;
}

.content {
  overflow: hidden;
}

.center {
  padding-left: calc(50% - 1200px / 2);

  padding-right: calc(50% - 1200px / 2);
}

.red-button {
  background: rgb(193, 9, 51);

  display: flex;

  justify-content: center;

  align-items: center;

  color: rgb(255, 255, 255);

  text-transform: uppercase;

  border: none;

  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);

    background: rgb(231, 0, 53);
  }
}

.close-button {
  color: black;

  transition: all 0.3s;

  &:hover {
    color: red;

    transform: scale(1.1);
  }
}

.blur {
  display: flex;
  
  height: 100vh;

  width: 100vw;

  position: fixed;

  backdrop-filter: blur(3px);

  z-index: 1;

  top: 0;

  justify-content: center;

  align-items: center;

  &:after {
    position: absolute;

    content: "";

    top: 0;

    left: 0;

    height: 100%;

    width: 100%;

    background: black;

    opacity: 0.4;
  }

  &__form {
    position: relative;

    background: white;

    z-index: 3;

    width: 800px;

    /* min-height: 600px; */

    border: 1px solid black;

    padding: 24px;

    display: flex;

    flex-direction: column;

    align-items: center;
  }

  &__close-button {
    border: none;

    background: none;

    position: absolute;

    right: 15px;

    top: 15px;

    z-index: 4;
  }

  &__content {
    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;
  }

  &__basket {
    display: flex;
  }

  &__title {
    color: rgb(0, 0, 0);

    font-size: 41px;

    font-weight: 700;

    line-height: 130%;

    text-align: center;

    &_logout  {
      font-size: 32px; 
      font-weight: 400;
    }
  }

  &__text {
    color: rgb(0, 0, 0);

    font-family: Inter;

    font-size: 16px;

    font-weight: 400;

    line-height: 130%;

    letter-spacing: 0%;

    text-align: center;

    margin-bottom: 40px;

    &-reg {
      margin-bottom: 0;
    }

    &_basket {
      margin-top: 10px;

      margin-bottom: 0;
    }
  }

  &__image {
    max-width: 400px;
    object-fit: contain;
    margin-bottom: 20px;
  }

  &__input {
    width: 100%;
    background: none;
    border: none;
    padding: 10px 15px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0%;
    text-align: left;

    &_gap {
      margin-bottom: 10px;
    }

    &-container {
      width: 100%;
      display: flex;
      gap: 10px;
      align-items: center;
      border-bottom: 1px solid rgb(0, 0, 0);
      margin-bottom: 10px;

      &-gap {
      margin-bottom: 20px;
      }
    }

    &-icon {
      color: black;
      transition: all 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &__dialog-button  {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 20px;
    gap: 30px;
  }

  &__button {
    margin-top: 20px;

    width: 400px;

    height: 60px;

    font-size: 16px;

    font-weight: 700;

    line-height: 130%;

    text-align: left;

    margin-bottom: 22px;

    &-reg {
      width: 300px;

      height: 50px;

      font-size: 14px;
    }

    &_basket {
      width: 200px;

      margin-top: 0;

      margin-bottom: 0;
    }
  }

  &__privacy {
    max-width: 400px;

    color: rgb(0, 0, 0);

    font-family: Inter;

    font-size: 12px;

    font-weight: 400;

    line-height: 130%;

    letter-spacing: 0%;

    text-align: center;

    margin-bottom: 96px;
  }

}

.header {
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  &__logo {
    max-height: 100px;
  }

  &__nav {
    display: flex;

    justify-content: center;

    gap: 40px;
  }

  &__navlink {
    color: rgb(255, 255, 255);

    font-size: 16px;

    font-weight: 400;

    line-height: 140%;

    text-align: left;
  }

  &__personal {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__mobile {
    color: rgb(255, 255, 255);

    font-size: 20px;

    font-weight: 400;

    line-height: 140%;

    letter-spacing: 0%;

    text-align: left;

    margin-right: 5px;
  }

  &__personalIcon {
    max-height: 25px;
    color: white;
    transition: all .3s;

    &:hover {
      transform: scale(1.1);
      color: red;
    }
  }

  &__basket-container {
    position: relative;
  }

  &__counter {
    left: -9px;
    bottom: -9px;
    position: absolute;
    border-radius: 20px;
    min-width: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    border: none;
    padding: 2px;
  }

  &__count {
    color: rgb(255, 255, 255);

    font-size: 14px;

    font-weight: 400;

    line-height: 140%;

    letter-spacing: 0%;
  }
}

.menu {
  display: none;
}

.menuhidden {
  display: none;
}

.products {
  margin-top: 137px;

  display: flex;

  gap: 40px;

  margin-bottom: 120px;

  &__menu {
    display: flex;

    flex-direction: column;

    max-width: 270px;

    gap: 20px;
  }

  &__menu-hidden  {
    display: none;
  }

  &__category {
    color: rgb(0, 0, 0);

    font-size: 16px;

    font-weight: 400;

    line-height: 130%;

    letter-spacing: 2%;

    text-align: left;

    &_active {
      font-weight: 700;
    }
  }

  &__catalog {
    flex-grow: 1;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    column-gap: 40px;

    row-gap: 40px;

    margin-bottom: 127px;
  }

  &__item {
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 520px;
    justify-content: space-between;
    width: 350px;
  }

  &__img {
    max-width: 270px;
    height: 270px;
    margin-bottom: 30px;
    object-fit: contain;
  }

  &__text {
    color: rgb(0, 0, 0);

    font-size: 20px;

    font-weight: 400;

    line-height: 130%;

    text-align: left;

    margin-bottom: 30px;
  }

  &__info {
    display: flex;

    margin-bottom: 35px;

    justify-content: center;

    gap: 30px;

    &_old-price {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }

  &__priceblock {
    display: flex;
    justify-content: center;
    gap: 40px;
  }

  &__more {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  &__decoratedtext {
    font-family: Inter;

    font-size: 16px;

    font-weight: 700;

    line-height: 130%;

    text-align: left;
  }

  &__textmore {
    color: rgb(193, 9, 51);
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
      color: rgb(231, 0, 53);
    }
  }

  &__arrow  {
    color: rgb(193, 9, 51);
    width: 100%;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
  
      color: rgb(231, 0, 53);
    }
  }

  &__price {
    color: rgb(0, 0, 0);

    &_old {
      color: rgb(0, 0, 0);

      font-size: 16px;

      font-weight: 400;

      line-height: 130%;

      text-align: left;

      text-decoration-line: line-through;
    }
  }

  &__button {
    width: 200px;

    height: 60px;

    background: rgb(193, 9, 51);

    display: flex;

    justify-content: center;

    align-items: center;

    color: rgb(255, 255, 255);

    border: none;
  }

  &__page {
    display: flex;

    flex-direction: column;

    align-items: center;
  }

  &__navigation {
    display: flex;

    justify-content: center;

    gap: 20px;
  }

  &__pageNumber {
    color: rgb(187, 187, 187);

    font-size: 16px;

    font-weight: 400;

    line-height: 19px;

    letter-spacing: 0%;

    text-align: left;

    &_active {
      color: rgb(0, 0, 0);
    }
  }
}

.footer {
  height: 300px;
  background-color: black;
  display: flex;
  align-items: center;
  gap: 76px;


  &__company {
    margin-bottom: -70px;

    display: flex;

    flex-direction: column;

    align-items: start;
  }

  &__logo {
    max-height: 100px;

    margin-bottom: 20px;
  }

  &__text {
    color: rgb(255, 255, 255);

    font-size: 12px;

    font-weight: 400;

    line-height: 140%;

    text-align: left;

    text-transform: uppercase;
  }

  &__nav {
    display: flex;

    justify-content: space-between;

    flex-grow: 1;
  }

  &__navlinks {
    display: flex;

    flex-direction: column;

    gap: 10px;
  }

  &__link {
    color: rgb(255, 255, 255);

    font-size: 16px;

    font-weight: 400;

    line-height: 140%;

    text-align: left;
  }
}

.header__content {
  display: flex;

  justify-content: space-between;

  align-items: center;
}

.modal-content {
  position: relative;
}

.basket {
  display: block;
  
      &__container{
          padding: 50px 0;
      }
  
      &__title {
          color: rgb(0, 0, 0);
          font-size: 26px;
          font-weight: 700;
          line-height: 130%;
          text-align: left;
          margin-bottom: 50px;
          margin-top: 120px;
      }
  
      &__items    {
          display: flex;
          flex-direction: column;
          gap: 30px;
      }
  
      &__item {
          flex-grow: 1;
          display: flex;
          gap: 60px;
          align-items: center;
          padding: 10px;
          border-top: 1px solid grey;
  
          &:last-child    {
              border-bottom: 1px solid grey;
          }
      }

      &__info-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
  
      &__img  {
          max-width: 200px;
          object-fit: contain;
      }
  
      &__name {
          max-width: 500px;
          color: rgb(0, 0, 0);
          font-family: Inter;
          font-size: 18px;
          font-weight: 400;
          line-height: 130%;
          text-align: left;
      }
  
      &__priceblock   {
          display: flex;
          gap: 20px;
          align-items: center;
      }
  
      &__calc {
          display: flex;
          padding: 10px;
          border-radius: 5px;
          gap: 10px;
      }
  
      &__button-calc {
          width: 30px;
          height: 30px;
          font-size: 18px;
          border-radius: 3px;
          border: 1px solid white;
      }
  
      &__img-calc {
          width: 70%;
          fill: white;
      }
  
      &__input {
          width: 50px;
          border: 0.5px solid rgb(193, 9, 51);
          border-radius: 5px;
          color: rgb(0, 0, 0);
          font-family: Inter;
          font-size: 20px;
          font-weight: 400;
          line-height: 130%;
          text-align: center;
      }
  
      &__price    {
          color: rgb(0, 0, 0);
          font-size: 20px;
          font-weight: 700;
          line-height: 130%;
          text-align: left;
          
          &_right {
              text-align: right;
          }
      }
  
      &__summ {
          margin-top: 60px;
      }
  
      &__button   {
          padding: 25px 62px;
          font-size: 16px;
          font-weight: 700;
          line-height: 130%;
          text-align: left;
          margin: 50px auto 0;
      }
  
      &__button-container {
          border: none;
          background: none;
      }
  
      &__delete   {
          color: black;
          transition: all .3s;
  
          &:hover {
              color: red;
          }
      }
  
}
  
  .empty {
      display: block;
    
      &__item {
      padding-top: 100px;
      padding-bottom: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      }
    
      &__img  {
          max-width: 400px;
      }
    
      &__title    {
          margin-top: 60px;
          color: rgb(0, 0, 0);
          font-size: 26px;
          font-weight: 700;
          line-height: 130%;
          text-align: left;
          margin-bottom: 60px;
      }
    
      &__button   {
          padding: 21px 149px;
          font-size: 16px;
          font-weight: 700;
          line-height: 130%;
          text-align: left;
      }
    }
  
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media  (max-width: 1160px)  {

    .container {
      max-width: 1024px;
    
      padding: 0 32px;
    
      width: 100%;
    
      margin: auto;
    }

    .center {
      padding-left: calc(50% - 960px / 2);
    
      padding-right: calc(50% - 960px / 2);
    }

    .header {    
    
      &__nav {
        gap: 25px;
      }
    
      &__mobile {
        margin-right: 0;
      }
    
    }

      /* начало  выпадающего меню каталога*/
    
      .menuhidden {
        position: absolute;
        top: 140px;
        left: calc(50% - 450px);
        display: block;
        width: 300px;
        background: white;
        box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.2);
        
        &__link {
          color: black;
        }
      }
      
      .span {
        padding: 15px;
        background: white;
        color: black;
        font-size: 1.2em;
        cursor: pointer;
        display: block;
      }
      
      .span::after {
        float: right;
        right: 10%;
        content: "+";
      }
      
      .slide {
        clear:both;
        width:100%;
        height:0px;
        overflow: hidden;
        text-align: start;
        transition: height .4s ease;
      }

      .slide li {padding : 10px;}
      
      #touch {position: absolute; opacity: 0; height: 0px;}    
      
      #touch:checked + .slide {height: 700px;} 
      /* конец */
    

    .products {
      margin-top: 190px;
      gap: 30px;

      &__page {
        width: 100%;
      }
    
      &__category {
        font-size: 14px;
    
        &_active {
          font-weight: 700;
        }
      }

      &__item {
        width: 300px;
      }

      &__text {
        text-align: center;
      }
    
      &__catalog {
        column-gap: 30px;
    
        row-gap: 30px;
    
        margin-bottom: 100px;
      }
    
      &__menu  {
        display: none;
      }

      &__pageNumber {
        font-size: 14px;
      }

    }

    .basket {
      
          &__img  {
              max-width: 170px;
          }
      
          &__name {
              max-width: 450px;
              font-size: 16px;
          }
      
          &__priceblock   {
              gap: 10px;
          }
      
          &__calc {
              gap: 7px;
          }
      
          &__button-calc {
              width: 27px;
              height: 27px;
              font-size: 16px;
          }
      
          &__img-calc {
              width: 60%;
          }
      
          &__input {
              width: 40px;
              font-size: 18px;
          }
      
          &__price    {
              font-size: 18px;
          }
      
          &__summ {
              margin-top: 50px;
          }
      
    }

    .footer {
      gap: 0;
    }

  }

  @media  (max-width: 1000px)  {
    .container {
      max-width: 640px;
    
      padding: 0 20px;
    }

    .center {
      padding-left: calc(50% - 600px / 2);
    
      padding-right: calc(50% - 600px / 2);
    }

    .header {
    
      &__nav {
        display: none;
      }
    
      &__personal {
        gap: 20px;
      }

      &__personalIcon {
        max-height: 20px;
      }
    
      &__mobile { 
        margin-right: 0px;
      }

      &__burger {
        display: block;
        color: white;
      }
    
    }

    /* начало выпадающего меню хэдэра */

    .burger {
      cursor: pointer;
      display: block;
      position: relative;
      border: none;
      background: transparent;
      width: 30px;
      height: 23px;
    
    &::before,
    &::after {
      content: '';
      left: 0;
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      border-radius: 10px;
      background: white;
    }
    &::before {
      top: 0;
      box-shadow: 0 10px 0 white;
      transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
    }
    &::after {
      bottom: 0;
      transition: bottom .3s .15s, transform .3s;
    }
    &.active::before {
      top: 10px;
      transform: rotate(45deg);
      box-shadow: 0 6px 0 black;
      transition: box-shadow .15s, top .3s, transform .3s .15s;
    }
    &.active::after {
      bottom: 11px;
      transform: rotate(-45deg);
      transition: bottom .3s, transform .3s .15s;
    }
    }

    .burger-checkbox {
      position: absolute;
      visibility: hidden;
    }

    .burger-checkbox:checked + .burger::before {
      top: 10px;
      transform: rotate(45deg);
      box-shadow: 0 6px 0 rgba(0,0,0,0);
      transition: box-shadow .15s, top .3s, transform .3s .15s;
    }
    .burger-checkbox:checked + .burger::after {
      bottom: 11px;
      transform: rotate(-45deg);
      transition: bottom .3s, transform .3s .15s;
    }

    .burger-checkbox:checked ~ .menu-list {
      transform: translateY(0);
    }

    .menu {
      display: block;

    &-list {
      top: 100px;
      right: calc(50% - 600px / 2);
      position: absolute;
      display: grid;
      gap: 8px;
      padding: 22px 0;
      margin: 0;
      background: black;
      list-style-type: none;
      transform: translateY(-300%);
      transition: 0.5s;
      width: 200px;
    }

    &-item {
      display: block;
      padding: 8px;
      color: white;
      font-size: 16px;
      text-align: center;
      text-decoration: none;
      transition: all 0.3s;
      &:hover {
        background: rgba(229, 127, 127, 0.2);
        transform: scale(1.1);
      }

      &_mobile  {
        display: none;
      }
    }

  }

  /*конец*/

  .menuhidden {
    left: calc(50% - 350px);
  }

    .products {

      &__item {
        height: 350px;
        width: 220px;
      }
    
      &__img {
        max-width: 250px;
        height: 200px;
        margin-bottom: 15px;
      }
    
      &__text {
        font-size: 14px;
        text-align: center;    
        margin-bottom: 15px;
      }
    
      &__info {
        margin-bottom: 15px;    
        width: 100%;
      }
    
    
      &__decoratedtext {
        font-size: 14px;
        font-weight: 600;
      }
    
      &__price_old {    
        font-size: 14px;    
      }
    
      &__button {
        width: 150px;
        height: 40px;
      }
    
    }

    .basket {
      &__info-container {
        max-width: 350px;
        flex-direction: column;
        gap: 20px;
        align-items: center;
      }

      &__img  {
        height: 150px;
      }
    }

    .footer {

      gap: 5px;
    
    
      &__company {
        width: 200px;
      }
    
    
      &__text {
        font-size: 10px;
      }
    
    
      &__navlinks {
        max-width: 100px;

        &_media-hidden {
          display: none;
        }
      }
    
      &__link {
        font-size: 12px;
      }
    }
  }

  @media  (max-width: 900px)  {

    .header {
      height: 70px;

      &__logo {
        max-height: 70px;
      }

      &__mobile   {
        font-size: 16px;
      }
    }

    .menu-list  {
      top: 70px;
    }

    .menuhidden {
      top: 110px;
      left: calc(50% - 270px);
    }

    .empty  {
      padding-top: 50px;
      padding-bottom: 50px;
      
      &__item {
        padding-top: 50px;
        padding-bottom: 50px;
      }

      &__img {
        max-width: 300px;
      }

      &__title {
        margin-top: 30px;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 30px;
      }

      &__button {
        padding: 18px 70px;
        font-size: 16px;
        font-weight: 600;
      }

    }

    .products {
      margin-top: 150px;

      &__catalog  {
        grid-template-columns: repeat(2, 1fr);
      }

      &__item {
        height: 430px;
        width: 270px;
      }
    
      &__img {
        max-width: 270px;
        height: 240px;
        margin-bottom: 25px;
      }
    
      &__text {
        font-size: 16px;  
        margin-bottom: 25px;
      }
    
      &__info {
        margin-bottom: 20px;    
      }
    
    
      &__decoratedtext {
        font-size: 16px;
        font-weight: 600;
      }
    
      &__price_old {    
        font-size: 16px;    
      }
    
      &__button {
        width: 200px;
        height: 50px;
      }
    
    }

    .blur {
      &__form {
      width: 500px;
      }

      &__title {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 34px;
      }

      &__text {
        font-size: 14px;
        margin-bottom: 20px;
      }

      &__input {
        width: 350px;
      }

      &__button {
        width: 300px;
        height: 50px;
    }

    }
  }

  @media  (max-width: 600px)  {
    .container {
      max-width: 300px;
    
      padding: 0 10px;
    }

    .center {
      padding-left: calc(50% - 300px / 2);
    
      padding-right: calc(50% - 300px / 2);
    
    }

    .header {
      &__mobile {
        display: none;
      }
    }

    .menuhidden {
      left: calc(50% - 150px);
    }

    .products__catalog {
      grid-template-columns: repeat(1, 1fr);
    }

    .menu{
      &-list  {
        right: calc(50% - 300px / 2);
      }

      &-item_mobile  {
        display: block;
        color: red;
        font-size: 20px;
      }
    }

    .basket {
      &__item {
        flex-direction: column;
        gap: 20px;
      }

      &__info-container {
        align-items: center;
      }

      &__name {
        text-align: center;
      }

      &__button {
        padding: 20px 40px;
        font-size: 16px;
        font-weight: 500;
      }
    }

    .empty {
      &__button {
      padding: 13px 40px;
      font-size: 14px;
      font-weight: 600;
      }

      &__title {
        font-size: 18px;
        font-weight: 600;
      }
    }
    
    .footer {
      height: 700px;
      flex-direction: column-reverse;
      align-items: start;
      justify-content: start;
      padding-top: 40px;
      gap: 40px;

      &__nav {
        flex-grow: 0;
        flex-direction: column;
        gap: 20px;
      }

      &__navlinks {
        max-width: 100%;
      }

      &__link {
        font-size: 14px;
      }
    }

    .blur {

      &__form {
        width: 400px;
      }

      &__title {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 30px;
      }

      &__input {
        width: 300px;
        padding: 7px 7px;
      }

      &__button {
        width: 250px;
        height: 50px;
        font-size: 14px;
        font-weight: 600;
      }
      
      &__privacy {
        max-width: 300px;
        margin-bottom: 30px;
      }
    }
  }`;
