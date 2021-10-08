import React , { useRef } from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import { useIntersection } from 'react-use';
import { gsap, Power4} from "gsap";

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-image: linear-gradient(var(--deep-dark),var(--dark-bg));
    border-right: 1px solid;
    border-left: 1px solid;
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
    opacity: 0;
    y: 60px;

    &:hover {
      border-color:  var(--hoverAcent);
    }
    .para {
      max-width: 700px
    }
  }

  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  const contactBannerRef = useRef(null);
  const intersection = useIntersection( contactBannerRef,{
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  });

  // Animation for fading in
  const fadeInUp = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: Power4.easeOut,
      stagger: {
        amount: 1
      }
    });
  };

   // Animation for fading out
   const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: 20,
      ease: Power4.easeOut
    });
  };
  // check to see when viewpoint is visible to user
  intersection && intersection.intersectionRatio < 0.1 ? fadeOut('.contactBanner__wrapper .fadeInUp') : fadeInUp('.fadeInUp');

  return (
    <ContactBannerStyles>
      <div className="container">
        <div ref ={contactBannerRef} className="contactBanner__wrapper fadeInUp">
          <PText>
            Although i'm not currently looking for any new opportunities, my inbox in always open.
            Whether you have a question or just want to say hi, I'll try my  best to get back to you!
          </PText>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
