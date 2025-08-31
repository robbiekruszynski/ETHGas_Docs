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
              Complete API documentation for the ETHGas platform - your gateway to Ethereum gas trading
            </p>
            <div className={styles.buttons}>
              <Link
                className={styles.heroButton}
                to="/docs/getting-started/welcome">
                Get Started →
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.heroImage}>
              <img src="/img/eg_logo_w+b.png" alt="ETHGas Logo" />
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
              Quick Start Guide
            </Heading>
            <p className={styles.quickStartSubtitle}>
              Get up and running with ETHGas in three simple steps
            </p>
            <div className="row">
              <div className="col col--4">
                <div className="feature-card text--center">
                  <div className={styles.stepNumber}>1</div>
                  <h3>Environment Setup</h3>
                  <p>Configure your development environment with TestNet or MainNet endpoints for ETHGas integration.</p>
                  <div className={styles.cardButton}>
                    <Link to="/docs/getting-started/connecting" className="button button--primary button--sm">
                      Setup Environment →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="feature-card text--center">
                  <div className={styles.stepNumber}>2</div>
                  <h3>Authentication</h3>
                  <p>Secure your API access with JWT authentication and manage your credentials safely.</p>
                  <div className={styles.cardButton}>
                    <Link to="/docs/api/authentication" className="button button--primary button--sm">
                      Authenticate →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="feature-card text--center">
                  <div className={styles.stepNumber}>3</div>
                  <h3>Start Trading</h3>
                  <p>Begin trading on whole block or inclusion preconf markets using our comprehensive APIs.</p>
                  <div className={styles.cardButton}>
                    <Link to="/docs/api/overview" className="button button--primary button--sm">
                      Explore Markets →
                    </Link>
                  </div>
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
              <div className="col col--6">
                <div className="feature-card text--center">
                  <h3>Documentation</h3>
                  <p>Comprehensive guides and API reference for developers.</p>
                  <div className={styles.cardButton}>
                    <Link to="/docs/getting-started/welcome" className="button button--primary">
                      Explore Docs
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className="feature-card text--center">
                  <h3>Developer Tools</h3>
                  <p>Error codes, lookup tables, and reference materials for integration.</p>
                  <div className={styles.cardButton}>
                    <Link to="/docs/reference/error-codes" className="button button--primary">
                      View Tools
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className={styles.community}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className="text--center">
              Join Our Community
            </Heading>
            <p className={styles.communitySubtitle}>
              Connect with the ETHGas community, stay updated with the latest developments, and engage with fellow developers and traders.
            </p>
            <div className="row">
              <div className="col col--3">
                <div className={`feature-card text--center ${styles.socialCard}`}>
                  <Link to="https://ethgas.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <div className={styles.socialIcon}>
                      <img src="/img/ETHGas_logo.png" alt="ETHGas Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                    </div>
                    <h3>Website</h3>
                    <p>Visit the official ETHGas website for the latest platform updates and features.</p>
                  </Link>
                </div>
              </div>
              <div className="col col--3">
                <div className={`feature-card text--center ${styles.socialCard}`}>
                  <Link to="https://github.com/ethgas" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <div className={styles.socialIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <h3>GitHub</h3>
                    <p>Explore our open-source repositories, contribute to development, and access technical resources.</p>
                  </Link>
                </div>
              </div>
              <div className="col col--3">
                <div className={`feature-card text--center ${styles.socialCard}`}>
                  <Link to="https://discord.gg/ethgas" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <div className={styles.socialIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0a12.64 12.64 0 00-.617-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 00.284 4.37a.07.07 0 00-.032.027C.533 6.159 1.1 7.8 1.8 9.33a.082.082 0 00.031.057a18.165 18.165 0 005.487 3.55a.078.078 0 00.084-.028a14.503 14.503 0 001.226-1.994a.076.076 0 00-.041-.106a13.107 13.107 0 01-1.872-.892a.077.077 0 01-.008-.128a10.2 10.2 0 00.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127a12.299 12.299 0 01-1.873.892a.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028a18.165 18.165 0 005.487-3.55a.077.077 0 00.031-.057a19.317 19.317 0 001.517-2.96a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    </div>
                    <h3>Discord</h3>
                    <p>Join our Discord server to connect with developers, get support, and participate in community discussions.</p>
                  </Link>
                </div>
              </div>
              <div className="col col--3">
                <div className={`feature-card text--center ${styles.socialCard}`}>
                  <Link to="https://twitter.com/ethgas" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <div className={styles.socialIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                    <h3>Twitter</h3>
                    <p>Follow us for real-time updates, announcements, and insights into the ETHGas ecosystem.</p>
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
        <CommunitySection />
      </main>
      <ChefAI />
    </Layout>
  );
}
