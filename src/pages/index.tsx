import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ChefAI from '@site/src/components/ChefAI';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <Heading as="h1" className="hero__title gradient-text">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">
              Complete API documentation for the ETHGas platform - your gateway to Ethereum gas trading and MEV opportunities
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started/welcome">
                Get Started →
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/api/overview">
                API Reference
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.heroImage}>
              <img src="/img/ETHGas_logo.png" alt="ETHGas Logo" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className="text--center">
              Quick Start
            </Heading>
            <div className="row">
              <div className="col col--4">
                <div className="feature-card">
                  <h3>1. Environment Setup</h3>
                  <p>Choose between testnet and mainnet environments to get started with ETHGas.</p>
                  <Link to="/docs/getting-started/environments" className="button button--outline button--sm">
                    Learn More →
                  </Link>
                </div>
              </div>
              <div className="col col--4">
                <div className="feature-card">
                  <h3>2. Authentication</h3>
                  <p>Set up your API credentials and authentication for secure platform access.</p>
                  <Link to="/docs/api/authentication/login" className="button button--outline button--sm">
                    Get Started →
                  </Link>
                </div>
              </div>
              <div className="col col--4">
                <div className="feature-card">
                  <h3>3. Start Trading</h3>
                  <p>Begin trading on whole block or inclusion preconf markets with our comprehensive APIs.</p>
                  <Link to="/docs/api/trading/whole-block" className="button button--outline button--sm">
                    Explore Markets →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className="text--center">
              Platform Features
            </Heading>
            <div className="row">
              <div className="col col--6">
                <div className="feature-card">
                  <h3>REST API</h3>
                  <p>Complete REST API for all platform operations including market data, trading, and account management.</p>
                </div>
              </div>
              <div className="col col--6">
                <div className="feature-card">
                  <h3>WebSocket API</h3>
                  <p>Real-time data streaming for market updates, order status, and position tracking.</p>
                </div>
              </div>
              <div className="col col--6">
                <div className="feature-card">
                  <h3>Multiple Market Types</h3>
                  <p>Support for both whole block and inclusion preconf markets with advanced trading features.</p>
                </div>
              </div>
              <div className="col col--6">
                <div className="feature-card">
                  <h3>Secure Authentication</h3>
                  <p>Comprehensive user authentication and session management with industry-standard security.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section className={styles.resources}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className="text--center">
              Resources & Tools
            </Heading>
            <div className="row">
              <div className="col col--4">
                <div className="feature-card text--center">
                  <h3>Documentation</h3>
                  <p>Comprehensive guides and API reference for developers.</p>
                  <Link to="/docs/getting-started/welcome" className="button button--primary">
                    Explore Docs
                  </Link>
                </div>
              </div>
              <div className="col col--4">
                <div className="feature-card text--center">
                  <h3>TestNet App</h3>
                  <p>Try ETHGas on testnet with our interactive web application.</p>
                  <Link to="https://testnet.ethgas.com" className="button button--primary">
                    Launch App
                  </Link>
                </div>
              </div>
              <div className="col col--4">
                <div className="feature-card text--center">
                  <h3>Developer Tools</h3>
                  <p>Error codes, lookup tables, and reference materials for integration.</p>
                  <Link to="/docs/reference/error-codes/general" className="button button--primary">
                    View Tools
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Complete API Documentation`}
      description="Complete API documentation for the ETHGas platform - your gateway to Ethereum gas trading and MEV opportunities">
      <HomepageHeader />
      <main>
        <QuickStartSection />
        <FeaturesSection />
        <ResourcesSection />
      </main>
      <ChefAI />
    </Layout>
  );
}
