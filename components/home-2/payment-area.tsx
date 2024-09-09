import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import WOW from 'wowjs';

// img import
import shapes_1 from '../../public/assets/img/payment/qrcode.png';
import shapes_2 from '../../public/assets/img/payment/mobile.png';
import shapes_3 from '../../public/assets/img/payment/hand.png';
import shapes_4 from '../../public/assets/img/payment/coin-1.png';
import shapes_5 from '../../public/assets/img/payment/coin-2.png';
import shapes_6 from '../../public/assets/img/payment/payment-3.png';
import shapes_7 from '../../public/assets/img/payment/message.png';
import bg_img from '../../public/assets/img/payment/background.png';
import payment_img_1 from '../../public/assets/img/payment/image.png';
import payment_img_2 from '../../public/assets/img/payment/get-paid.png';
import { column } from 'mathjs';

const payment_content = {
  title: (
    <span>
      You'll love our <br /> powerful payments.
    </span>
  ),
  sub_title: <span>We've got all your payments covered</span>,
  box_1: [
    {
      id: 1,
      col: 'md-6',
      cls: '2 tpfadeLeft',
      delay: '.3s',
      title: 'Scan & Go',
      des: (
        <span>
          Transform your payment link into a QR code that customers can scan
          with their <br /> phone to pay.
        </span>
      ),
      shapes: [
        {
          id: 1,
          cls: '4',
          img: shapes_1,
        },
        {
          id: 2,
          cls: '5',
          img: shapes_2,
        },
        {
          id: 3,
          cls: '6',
          img: shapes_3,
        },
        {
          id: 4,
          cls: '7',
          img: shapes_4,
        },
        {
          id: 5,
          cls: '8',
          img: shapes_5,
        },
      ],
    },
    {
      id: 2,
      col: 'md-6',
      cls: '3 tpfadeRight',
      delay: '.5s',
      title: 'Easily Send Requesrs vai e-mail or SMS',
      des: <span>... or copy-paste the link</span>,
      shapes: [
        {
          id: 1,
          cls: '9',
          img: shapes_6,
        },
        {
          id: 2,
          cls: '11',
          img: shapes_7,
        },
      ],
    },
  ],
  box_3_title: (
    <span>
      Online Billing & <br /> Invoicing Payments.
    </span>
  ),
  box_3_des: (
    <span>
      Get paid faster with Online Invoicing <br /> and the Virtual Terminal.
    </span>
  ),
  box_3_btn: 'Explore Invoicing Tools',
};
const { title, sub_title, box_1, box_3_title, box_3_des, box_3_btn } =
  payment_content;

const PaymentArea = () => {
  // useEffect(() => {
  //     const wow = new WOW.WOW({
  //         live: false,
  //     });
  //     wow.init();

  //     return () => {
  //         wow.sync(); // 清理工作
  //     };
  // }, []);

  return (
    <>
      <div
        id="payment-method"
        className="tp-payment__area pt-110 pb-110 bg-white"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-payment__title-box text-center mb-55">
                <h3 className="tp-section-title-lg">{title}</h3>
                <p>{sub_title}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="row columns-1 md:column-2">
                {box_1.map((item) => (
                  <div key={item.id} className="col-md-6 mb-30 w-full">
                    <div
                      className={`tp-payment__item tp-payment__bg-color-${item.cls} p-relative z-index`}
                      data-wow-duration=".9s"
                      data-wow-delay={item.delay}
                    >
                      {item.shapes.map((shapes) => (
                        <div
                          key={shapes.id}
                          className={`tp-payment__shape-${shapes.cls}`}
                        >
                          <Image src={shapes.img} alt="theme-pure" />
                        </div>
                      ))}

                      <div className="tp-payment__content">
                        <h3 className="tp-payment__title">{item.title}</h3>
                        <p> {item.des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-xl-12 mb-30">
              <div
                className="tp-payment__item p-relative z-index tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="tp-payment__shape-1">
                  <Image src={bg_img} alt="theme-pure" />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="tp-payment__content tp-payment__content-space">
                      <h3 className="tp-payment__title">{box_3_title}</h3>
                      <p>{box_3_des}</p>
                      <Link href="/service-details">
                        {box_3_btn}
                        <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tp-payment__shape-2">
                      <Image src={payment_img_1} alt="theme-pure" />
                    </div>
                    <div className="tp-payment__shape-3 d-none d-sm-block">
                      <Image src={payment_img_2} alt="theme-pure" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentArea;
