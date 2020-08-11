import React from 'react';
import {
  LightCta,
  Section,
  SectionTitle,
  Button,
  Text,
  TextBlock,
  Hero,
  SectionHeader,
  SmallText,
  NumberedList,
  Card,
  CardsRow,
} from '@algolia/ui-library';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { DegaLogo } from '../components/DegaLogo';

function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Hero
        id="hero"
        background="curves"
        title={<DegaLogo width="50%" />}
        subtitle={siteConfig.tagline}
        cta={[
          <Button
            primary
            style={{ textDecoration: 'none' }}
            href={useBaseUrl('/apply')}
          >
            Join the Program
          </Button>,
        ]}
      />
    </>
  );
}

function HomePage() {
  return (
    <Layout
      title="Dega"
      description="Open source platform for publishing fact checks"
    >
      <Home />
    </Layout>
  );
}

export default HomePage;
