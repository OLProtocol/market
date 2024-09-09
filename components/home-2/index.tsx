// import FooterTwo from "./footer-2";
// import HeaderTwo from "./header-2";
import React from 'react';
import CtaArea from './cta-area';
import FaqArea from './faq-area';
import HeroArea from './hero-area';
import OpenAccountArea from './open-account-area';
import PaymentArea from './payment-area';
import PaymentMethodArea from './payment-method-area';
import ServiceArea from './service-area';
import TestimonialArea from './testimonial-area';
import Wrapper from '@/app/layout/wrapper';
import SEO from '@/components/home-2/common/seo';

const Home = () => {
  return (
    <>
      <Wrapper>
        <SEO pageTitle={'SAT20Market - ordx market'} />
        {/* <HeaderTwo /> */}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="fix">
              <HeroArea />
              <PaymentArea />
              <PaymentMethodArea />
              <ServiceArea />
              <OpenAccountArea />
              <TestimonialArea />
              <FaqArea style_service />
              <CtaArea />
            </main>
            {/* <FooterTwo /> */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
