import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from '../components/Button';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Headshot from '../assets/images/headshot.jpg';
import GithubLogo from '../assets/images/github.inline.svg';
import LinkedInLogo from '../assets/images/linkedin.inline.svg';
import TwitterLogo from '../assets/images/twitter.inline.svg';
import YoutubeLogo from '../assets/images/youtube.inline.svg';
import Section from '../components/Section';
import Card from '../components/Card';
import WebsiteIcon from '../assets/images/website-with-brackets.inline.svg';
import WindowIcon from '../assets/images/window.inline.svg';
import ShoppingIcon from '../assets/images/shopping-gear.inline.svg';
import LayersIcon from '../assets/images/layers.inline.svg';
import Grid from '../components/Grid';
import { ButtonLink } from '../components/ButtonLink';

const HeaderWrapper = styled.div`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'var(--accent-bg)'};
  ${({ backgroundImage }) => `background-image: url(${backgroundImage});`}
`;

const HeroLeft = () => {
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

  return (
    <>
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
        <b>A little bit about me:</b> I’ve been building professional websites
        for six years from my office in Boston, Massachusetts. My current focus
        is building modern Shopify websites and apps that are both technically
        sound and a joy to use. If you need help with Shopify, JavaScript,
        React, or web development in general, I can help!
      </HeroPara>
      <Button as="a" href="#hire-me">
        Let's work together
      </Button>
    </>
  );
};

const HeroRight = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  `;

  const SocialLink = styled.a`
    & + a {
      margin-left: 1.3rem;
    }

    &:hover {
      opacity: 0.9;
    }
  `;

  return (
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
      <SocialWrapper>
        <SocialLink
          href="https://github.com/TomTilly"
          target="_blank"
          aria-label="Link to Github Profile"
          rel="noopener noreferrer"
        >
          <GithubLogo />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/tomtillistrand/"
          target="_blank"
          aria-label="Link to LinkedIn Profile"
          rel="noopener noreferrer"
        >
          <LinkedInLogo />
        </SocialLink>
        <SocialLink
          href="https://twitter.com/tomtillistrand"
          target="_blank"
          aria-label="Link to Twitter Profile"
          rel="noopener noreferrer"
        >
          <TwitterLogo />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/channel/UCQ9R81vBuCKTgdO1R_haU6A"
          target="_blank"
          aria-label="Link to Youtube Profile"
          rel="noopener noreferrer"
        >
          <YoutubeLogo />
        </SocialLink>
      </SocialWrapper>
      <small>
        <b>My tools:</b> HTML, CSS, SCSS, JavaScript, React, Styled Components,
        GatsbyJS, Liquid, NodeJS, MongoDB, GraphQL, Figma, Git
      </small>
    </Wrapper>
  );
};

function IndexPage() {
  return (
    <>
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
            title="Customizations"
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
      <h1>Heading 1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <h2>Heading 2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <h3>Heading 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <ul>
        <li>Hello!</li>
        <li>List Item #2!</li>
        <li>List Item #3!</li>
        <li>List Item #4!</li>
      </ul>
      <form action="/" method="GET">
        <div className="form-group">
          <label htmlFor="name">
            Name
            <input
              name="name"
              type="text"
              placeholder="Placeholder text!"
              id="name"
            />
          </label>
        </div>
        <input type="password" />
        <input type="email" />
        <input type="number" />
        <textarea />
        <button type="submit">Submit</button>
      </form>
      <h4>Heading 4</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <h5>Heading 5</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <h6 id="hire-me">Heading 6</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <Button>Let's work together</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </>
  );
}

export default IndexPage;
