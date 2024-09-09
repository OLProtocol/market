import LinearGradientLine from '@/components/svg/linear-gradient-line';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// service img import
import service_img_1 from '../../public/assets/img/service/sv-icon-2-1.png';
import service_img_2 from '../../public/assets/img/service/sv-icon-2-2.png';
import service_img_3 from '../../public/assets/img/service/sv-icon-2-3.png';
import service_img_4 from '../../public/assets/img/service/sv-icon-2-4.png';
import bg_img from '../../public/assets/img/service/sv-bg-2-1.jpg';

const service_content = {
  title: (
    <div>
      We provide the <br /> best service for you
    </div>
  ),
  des: <div>We've got all your payments covered</div>,

  users_data: [
    {
      id: 1,
      users_count: (
        <div>
          3.5<i>m</i>
        </div>
      ),
      users_status: <div>Active Users</div>,
    },
    {
      id: 2,
      users_count: (
        <div>
          240<i>+</i>
        </div>
      ),
      users_status: <div>Trusted Companies</div>,
    },
    {
      id: 3,
      users_count: (
        <div>
          78<i>k</i>
        </div>
      ),
      users_status: <div>Customer care</div>,
    },
  ],
  service_data: [
    {
      id: 1,
      color: '',
      title: 'Online',
      img: service_img_1,
    },
    {
      id: 2,
      color: '2',
      title: 'Bank Transfers',
      img: service_img_2,
    },
    {
      id: 3,
      color: '3',
      title: 'Keyed',
      img: service_img_3,
    },
    {
      id: 4,
      color: '4',
      title: 'In-Person',
      img: service_img_4,
    },
  ],

  free_tools_title: 'More free tools than you can handle',
  free_tools: [
    <div>Invoicing</div>,
    <div>Online Checkout</div>,
    <div>Point-of-Sale</div>,
    <div>Online Food Ordering</div>,
    <div>ICard Vault</div>,
    <div>Customer Portal</div>,
    <div>Inventory</div>,
    <div>Virtual Terminal</div>,
    <div>Recurring Plans</div>,
    <div>Payment Links</div>,
    <div>SMS Payments</div>,
    <div>QR Codes</div>,
  ],
};
const { title, des, users_data, service_data, free_tools_title, free_tools } =
  service_content;

const ServiceArea = () => {
  return (
    <div>
      <div className="tp-service-2__area p-relative pt-70 pb-160 bg-white">
        <div className="tp-service-2__shape">
          <Image src={bg_img} alt="theme-pure" />
        </div>
        <div className="container z-index-5 columns-1 md:columns-2">
          <div className="row align-items-center mb-50 w-full">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-service-2__section-box">
                <h3 className="tp-section-title-lg pb-20">{title}</h3>
                <p>{des}</p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-service-2__user-box p-relative d-flex justify-content-lg-start justify-content-lg-end align-items-center">
                <div className="tp-service-2__user-shape">
                  <LinearGradientLine />
                </div>
                {users_data.map((item) => (
                  <div key={item.id} className="tp-service-2__user">
                    <span>{item.users_count}</span>
                    <p>{item.users_status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row gx-60 w-full">
            {service_data.map((item) => (
              <div
                key={item.id}
                className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".8s"
              >
                <div className="tp-service-2__item-wrapper p-relative">
                  <div className="tp-service-2__item d-flex justify-content-between flex-column">
                    <div className="tp-service-2__icon">
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                    <div className="tp-service-2__text">
                      <h4 className="tp-service-2__title-sm">
                        <Link href="/service-details">{item.title}</Link>
                      </h4>
                      <Link
                        className="tp-service-2__link"
                        href="/service-details"
                      >
                        Explore
                        <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`tp-service-2__bg-shape tp-service-2__color-${item.color}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-center">
            <div
              className="col-xl-10 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="tp-service-2__bottom-wrapper p-relative mt-110">
                <div className="tp-service-2__feature-item">
                  <h4 className="tp-service-2__feature-title">
                    {free_tools_title}
                  </h4>
                  <div className="tp-service-2__feature-box d-flex justify-content-between">
                    <div className="tp-service-2__feature-list">
                      <ul>
                        {free_tools.map((list) => (
                          <li key={list.key}>{list}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
