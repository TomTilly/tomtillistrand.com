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
const HeroLeft = () => (
  // TODO: Fix rerendering of Hero component when clicking anchor links
  <HeroWrapper>
    <HeroHeading>
      👋 Hi, I'm Tom. I'm a Freelance Front End Web Developer specializing in{' '}
      <span className="green-underline">Shopify</span>.
    </HeroHeading>
    <HeroPara>
      Here you can find out more about my web development services and read
      through my various programming, Shopify, and freelancing articles.
      Welcome, and thanks for checking out my site!
    </HeroPara>
    <HeroPara>
      <b>A little bit about me:</b> I’ve been building professional websites for
      six years from my office in Boston, Massachusetts. My current focus is
      building modern Shopify websites and apps that are both technically sound
      and a joy to use. If you need help with Shopify, JavaScript, React, or web
      development in general, I can help!
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
      <b>My tools:</b> HTML, CSS, SCSS, JavaScript, React, Styled Components,
      GatsbyJS, Liquid, NodeJS, MongoDB, GraphQL, Figma, Git
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
      <Section
        title="How can an expert Shopify developer help?"
        id="shopify-expert"
      >
        <Grid>
          <Card
            title="Theme Development"
            description="I develop bespoke Shopify themes from scratch using modern HTML, CSS, JavaScript, and Liquid. If you have a design, I can build a pixel perfect implementation for you."
            Icon={WebsiteIcon}
            rgb={[0, 176, 132]}
          />
          <Card
            title="App Development"
            description="I build Shopify apps that extend the functionality of Shopify using NodeJS and React."
            Icon={WindowIcon}
            rgb={[55, 72, 214]}
          />
          <Card
            title="Theme Customizations"
            description="I customize prexisting Shopify themes to fit your needs. If you have a theme that you like but need to tweak, I can get it just right for you."
            Icon={ShoppingIcon}
            rgb={[255, 59, 72]}
          />
          <Card
            title="Headless CMS Integration"
            description="I implement Shopify as a headless CMS and build a detached front end in React with Gatsby."
            Icon={LayersIcon}
            rgb={[106, 55, 214]}
          />
        </Grid>
      </Section>
      <Section type="thin" title="Why Hire Me?">
        <p>
          Getting your Shopify store done right is important. If your site is
          slow, buggy, unintuitive, lacking features, or ugly, it can cost you
          in reputation and revenue.
        </p>
        <p>
          I can make sure you avoid those pitfalls and build a store that’s a
          joy to use and increases your bottom line.
        </p>
        <p>
          Often, businesses will skimp on the development of their stores
          upfront, resulting in unpolished, mediocre experiences for their
          users.
        </p>
        <p>
          Rather than hiring a Shopify expert to fix your store after you’ve
          lost potential customers, why not save yourself the time and hassle
          and get it right the first time?
        </p>
        <p>
          I will get your Shopify site done right. My sites are built on a
          foundation of modern tooling with clean HTML, Liquid, CSS, SCSS,
          JavaScript, and React.
        </p>
        <p>
          I’m easy to work with, a clear communicator, and able to work on my
          own or as part of a team. I can also advise on key technical decisions
          to make sure your site infrastructure is robust, fast, and scalable.
        </p>
        <p>
          I take pride in producing quality work and providing outstanding
          service to my clients. You can be confident that your store (and
          business) is treated with the utmost care.
        </p>
        <ButtonLink isInternal href="#hire-me" size="lg">
          Let's Get Started
        </ButtonLink>
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
