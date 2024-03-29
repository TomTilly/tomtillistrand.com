import React from 'react';
import Nav from '../components/Nav';
import HeaderWrapper from '../components/HeaderWrapper';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import headshot from '../assets/images/headshot.jpg';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO title="Freelance Shopify Developer" image={headshot} />
      <Nav />

      <Section type="thin">
        <h1>About Tom Tillistrand</h1>
        <h2>Intro</h2>
        <p>
          Hi, I’m Tom! I’m a freelance web developer based in Boston,
          Massachusetts. I’m 31 years old and I’ve been making websites for five
          years. I’ve worked with a lot of web tech over the years, but HTML,
          CSS, and JavaScript are my bread and butter. My focus lately has been
          working with Shopify, React, Gatsby, and Node.js.
        </p>
        <h2>Background</h2>
        <p>
          I’ve had an interest in running a business since my college days. In
          my early 20s, as I was completing my degree in music, I started
          building Wordpress websites for some of my business ideas. None of
          them panned out, but I had fun with it and learned the basics of the
          web along the way.
        </p>
        <p>
          A couple years later I volunteered to build a Shopify site for a local
          music store where I taught. I started taking HTML and CSS courses on
          Codecademy in my spare time to customize aspects of the store, which
          planted the seed for my programming interest.
        </p>
        <p>
          My coding skills developed over the next few years and I moved on to
          JavaScript, PHP, SQL, and Liquid. Programming became a creative outlet
          for me. Being able to solve problems by building programs from scratch
          was both fulfilling, and fun.
        </p>
        <p>
          After my skills advanced enough, I decided to combine my interest in
          business and coding to pursue web development full time as a
          freelancer. At first I focused on Wordpress, gradually shifting into
          Shopify and JavaScript focused stacks with NodeJS and React. Most of
          my time now is devoted to building highly polished React-based
          websites, and keeping myself up to date with the latest advances in
          web development.
        </p>
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
