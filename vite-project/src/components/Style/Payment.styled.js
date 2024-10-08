import { createGlobalStyle } from "styled-components";

export const PaymentGlobalStyle = createGlobalStyle`
.payment {
    background-image: url(/public/img/Payment.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 100px;
    background-position: center;

    &__info {
        max-width: 535px;
    }

    &__title    {
        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 41px;
        font-weight: 700;
        line-height: 140%;
        text-align: left;
        margin-bottom: 35px;
    }

    &__text {
        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 20px;
        font-weight: 400;
        line-height: 145.23%;
        text-align: left;
    }

}

@media  (max-width: 700px)     {
    .payment {
        &__title    {
            font-size: 30px;
        }

        &__text {
            font-size: 18px;
        }
    }
}
`