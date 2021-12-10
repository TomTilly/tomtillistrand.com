import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from '../components/Button';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Grid from '../components/Grid';
import { ButtonLink } from '../components/ButtonLink';
import Section from '../components/Section';
import Card from '../components/Card';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import HeaderWrapper from '../components/HeaderWrapper';
import SEO from '../components/SEO';
import { above } from '../utilities';
import romainSrc from '../assets/images/clients/romain.jpeg';
import ClientLogo from '../components/ClientLogo';
import WebsiteIcon from '../assets/images/website-with-brackets.inline.svg';
import WindowIcon from '../assets/images/window.inline.svg';
import ShoppingIcon from '../assets/images/shopping-gear.inline.svg';
import LayersIcon from '../assets/images/layers.inline.svg';
import lnrjLogoSrc from '../assets/images/lnrj-united-logo.png';
import quartucciaLogoSrc from '../assets/images/quartuccia-logo.png';
import jfLogoSrc from '../assets/images/j-f-logo.svg';
import dreamersTeamLogoSrc from '../assets/images/dreamers-team-logo.png';
import headshot from '../assets/images/headshot.jpg';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${above.large`
    align-items: flex-start;
  `}
`;

const HeroHeading = styled.h2`
  font-size: 2.8rem;
  line-height: 1.2;
  margin-top: 0;

  .green-underline {
    display: inline-block;
  }

  .green-underline::after {
    display: block;
    content: '';
    width: 100%;
    height: 5px;
    border-radius: 3px;
    transform: rotate(-3deg);
    background-color: var(--secondary);
    margin-bottom: 1.5rem;
  }
`;

const HeroPara = styled.p`
  margin-bottom: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;

  & > * {
    width: 100%;

    ${above.large`
      width: 45%;
      min-width: 400px;
    `}
  }
`;

const HeroLeft = () => (
  // TODO: Fix rerendering of Hero component when clicking anchor links
  <HeroWrapper>
    <HeroHeading>
      👋 Hi, I'm Tom. I'm a Freelance Front End Web Developer based in Boston.
    </HeroHeading>
    <HeroPara>
      I’ve been developing websites professionally for five years. Over that
      time I’ve worked with a wide breadth of languages and tools, but my aim
      has continued to be to improve the world by creating high quality
      software. To that end, I’m constantly keeping up with the latest
      advancements and challenging myself to keep my chops sharp. My current
      areas of focus are JavaScript, React, and the JAMstack with GatsbyJS.
    </HeroPara>
    <ButtonLink href="#hire-me" isAnchor>
      Let's work together
    </ButtonLink>
  </HeroWrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyTools = styled.small`
  text-align: center;
`;

const HeroRight = () => (
  <Wrapper>
    <StaticImage
      src="../assets/images/headshot.jpg"
      placeholder="none"
      loading="eager"
      alt="Tom Tillistrand"
      width={250}
      height={250}
      quality={90}
      style={{ marginBottom: '2rem' }}
      imgStyle={{ borderRadius: '50%' }}
    />
    <SocialLinks />
    <MyTools>
      <b>My tools:</b> HTML, CSS, SCSS, JavaScript, React, GatsbyJS, Vue,
      Gridsome, Liquid, NodeJS, MongoDB, Styled Components, Figma, Git
    </MyTools>
  </Wrapper>
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 3rem;

  ${above.med`
    grid-template-columns: repeat(4, 1fr);
  `}
`;

const testimonials = [
  {
    name: 'Romain Aubanel',
    company: 'LNRJ United',
    quote: `I strongly recommend Tom’s services. Tom delivers high-quality websites that always integrate state-of-the-art features. Tom is always on time and goes the extra mile to make sure we are satisfied. It’s a pleasure to work with him.`,
    avatar: romainSrc,
  },
];

function IndexPage() {
  return (
    <>
      <SEO title="Freelance Shopify Developer" image={headshot} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <HeaderWrapper>
          <Nav isHome />
          <Hero LeftContent={HeroLeft} RightContent={HeroRight} />
        </HeaderWrapper>
      </div>
      <Section title="My Services" id="shopify-expert">
        <CardContainer>
          <Card
            title="Website Development"
            description="I develop bespoke websites from scratch using modern HTML, CSS, JavaScript, and React. If you have a design, I can build a pixel perfect implementation for you."
            Icon={WebsiteIcon}
            rgb={[0, 176, 132]}
          />
          <Card
            title="Shopify Development"
            description="I customize prexisting Shopify themes to fit your needs. If you have a theme that you like but need to tweak, I can get it just right for you."
            Icon={ShoppingIcon}
            rgb={[255, 59, 72]}
          />
          <Card
            title="Headless CMS Integration"
            description="I can integrate headless CMS’ like Wordpress, Shopify, ButterCMS, Sanity, and more into your website, so you can enjoy all the benefits of the JAMstack."
            Icon={LayersIcon}
            rgb={[106, 55, 214]}
          />
        </CardContainer>
      </Section>
      <Section type="thin" title="Why Hire Me?">
        <p>
          Getting your site right is critical for succeeding in today’s world.
          If your site is slow, buggy, unintuitive, lacking features, or ugly,
          it can cost you in reputation and revenue. I can make sure you avoid
          those pitfalls and build a site that’s a joy to use and increases your
          bottom line.
        </p>
        <p>
          Often businesses skimp on the web development costs upfront, resulting
          in unpolished, mediocre experiences for their users. Rather than
          hiring a someone to fix your site after you’ve lost potential
          customers, why not save yourself the time and hassle and get it right
          the first time?
        </p>
        <p>
          My sites are built on a foundation of modern tooling with clean HTML,
          CSS, JavaScript, and React. I’m easy to work with, a clear
          communicator, and able to work on my own or as part of a team. I can
          also advise on key technical decisions to make sure your site
          infrastructure is robust, fast, and scalable.
        </p>
        <p>
          I take pride in producing quality work and providing outstanding
          service to my clients. You can rest easy knowing that I care just as
          much about your business as you do.
        </p>
        <div style={{ textAlign: 'center' }}>
          <ButtonLink isInternal href="#hire-me" size="lg">
            Let's Get Started
          </ButtonLink>
        </div>
      </Section>
      <Section title="Past Clients">
        <LogoGrid style={{ marginBottom: '3rem' }}>
          <ClientLogo src={jfLogoSrc} alt="Jack and Ferdi Logo" />
          <ClientLogo src={lnrjLogoSrc} alt="LNRJ United Logo" />
          <ClientLogo src={quartucciaLogoSrc} alt="Marica Quartuccia's Logo" />
          <ClientLogo src={dreamersTeamLogoSrc} alt="Dreamers Team Logo" />
        </LogoGrid>
        <Testimonials testimonials={testimonials} />
      </Section>
      <Section type="thin" title="Ready To Get Started?" id="hire-me">
        <p style={{ textAlign: 'center' }}>
          Let's get the ball rolling! Fill out the form below and let me know a
          little bit about your project. I'll get back to you within 24 hours!
        </p>
        <ContactForm />
      </Section>
    </>
  );
}

export default IndexPage;
