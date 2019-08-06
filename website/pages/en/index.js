/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/dega.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('intro.html')}>Read Docs</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Multiple = () => (
      <Block background="light">
        {[
          {
            content:
              'Ability to have multiple authors, researches, editors on each story.',  
            image: `${baseUrl}img/undraw_team_page_pgpr.svg`,
            imageAlign: 'left',
            title: 'Multiple Author',
          },
        ]}
      </Block>
    );

    const Customizable = () => (
      <Block background="light">
        {[
          {
            content:
              'Enforcement of a predefined workflow based on the principles laid down in the IFCN code of principles for all fact check articles. Ability for publishers to create their own rating system for fact-checks.',  
            image: `${baseUrl}img/undraw_setup_wizard_r6mr.svg`,
            imageAlign: 'left',
            title: 'Wonderful customizable rating',
          },
        ]}
      </Block>
    );

    const AutoTranslate = () => (
      <Block background="light">
        {[
          {
            content:
              'Auto translate posts to selected languages to aid publishing stories in multiple languages.',
            image: `${baseUrl}img/undraw_around_the_world_v9nu.svg`,
            imageAlign: 'right',
            title: 'Auto Translate',
          },
        ]}
      </Block>
    );

    const MobileUI = () => (
      <Block background="light">
        {[
          {
            content:
              'Mobile first UI with a first class support for structured data and SEO.',
            image: `${baseUrl}img/undraw_mobile_life_381t.svg`,
            imageAlign: 'right',
            title: 'Mobile UI',
          },
        ]}
      </Block>
    );

    const LiveTracking = () => (
      <Block background="light">
        {[
          {
            content:
              'Ability to provide a live stream of fact-checking during political events that will allow publishers to provide real-time analyses, fact-checks of politicians claims.',
            image: `${baseUrl}img/undraw_conference_speaker_6nt7.svg`,
            imageAlign: 'right',
            title: 'Live Tracking',
          },
        ]}
      </Block>
    );

    const AdministrationPortal  = () => (
      <Block background="light">
        {[
          {
            content:
              'Administration portal to compose & publish Fact Checks, Verification articles (debunking fake news), manage user roles, application metrics etc.',
            image: `${baseUrl}img/undraw_add_content_d1tf.svg`,
            imageAlign: 'left',
            title: 'Administration Portal',
          },
        ]}
      </Block>
    );

    const SearchEngine  = () => (
      <Block background="light">
        {[
          {
            content:
              'All the fact-check articles will be search engine optimized for all search engines (like google, bing etc.) with schema defined as per specifications for fact-check stories.',
            image: `${baseUrl}img/undraw_search_engines_nn9e.svg`,
            imageAlign: 'right',
            title: 'Search Engine',
          },
        ]}
      </Block>
    );

    const Subscribe  = () => (
      <Block background="light">
        {[
          {
            content:
              'User Registration and notification framework to notify the users based on a level of subscription. Users can subscribe to statements of an individual or an organization.',
            image: `${baseUrl}img/undraw_subscriber_vabu.svg`,
            imageAlign: 'left',
            title: 'User Subscription',
          },
        ]}
      </Block>
    );

    const RestAPI  = () => (
      <Block background="light">
        {[
          {
            content:
              'Expose all the features as REST API for organizations that would like to build their own UI or integrate Dega with their existing interface.',
            image: `${baseUrl}img/undraw_server_status_5pbv.svg`,
            imageAlign: 'left',
            title: 'Rest API',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <RestAPI />
          <MobileUI />
          <Customizable />
          <AutoTranslate />
          <Multiple />
          <LiveTracking />
          <AdministrationPortal />
          <SearchEngine />
          <Subscribe />
        </div>
      </div>
    );
  }
}

module.exports = Index;
