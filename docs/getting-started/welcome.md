---
sidebar_position: 1
title: Welcome
---

<div className="hero hero--primary" style={{padding: '4rem 0', background: 'transparent', color: 'var(--ifm-color-content)'}}>
  <div className="container">
    <div className="row">
      <div className="col col--8">
        <h1 className="hero__title" style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem'}}>
          ETHGas
        </h1>
        <p className="hero__subtitle" style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
          The End of Latency. The Beginning of Realtime.
        </p>
        <p className="hero__subtitle" style={{fontSize: '1.25rem', marginBottom: '2rem'}}>
          The real-time infrastructure layer that transforms Ethereum's blockspace into a structured, liquid, and tradable asset class.
        </p>
      </div>
      <div className="col col--4" style={{textAlign: 'center'}}>
        <img src="/img/eg_logo_w+b.png" alt="ETHGas Logo" style={{maxWidth: '200px', height: 'auto'}} />
      </div>
    </div>
  </div>
</div>

## What is ETHGas?

<div className="row">
  <div className="col col--7">
    <p>
      ETHGas is not just another protocol—we are building the foundational financial market for Ethereum's blockspace. We transform the chaotic, unpredictable auction for transaction inclusion into a structured, liquid, and tradable asset class.
    </p>
    <h3>Our Mission</h3>
    <p>
      To build the <strong>realtime infrastructure</strong> for Ethereum's economy. We transform gas from a volatile friction point into a tradable asset class while removing the concept of gas from the user experience.
    </p>
    <h3>The Future We Create</h3>
    <p>
      We accelerate the Ethereum of the Future to make it instant—a future where transactions settle immediately, capital flows without friction, and the complexity of gas becomes a relic of the past.
    </p>
  </div>
  <div className="col col--5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
    <div className="feature-card" style={{ padding: '1rem', marginTop: '1.5rem' }}>
      <h3 style={{ marginTop: 0 }}>At a Glance</h3>
      <ul style={{ margin: 0 }}>
        <li>Structured, liquid blockspace markets</li>
        <li>Predictable transaction inclusion</li>
        <li>Realtime WebSocket data streams</li>
        <li>Builder and validator integrations</li>
      </ul>
    </div>
  </div>
  </div>

## Core Platform Features

### Market Types

<div className="row" style={{ marginTop: '0.5rem' }}>
  <div className="col col--6">
    <div className="feature-card" style={{ height: '100%' }}>
      <h3>Inclusion Preconf Markets</h3>
      <p>Trade generic blockspace with a conventional CLOB interface — available up to 32 slots in advance for predictable inclusion and gas management.</p>
      <a href="/docs/api/trading/inclusion-preconf" className="button button--outline button--sm">Explore Inclusion Preconf →</a>
    </div>
  </div>
  <div className="col col--6">
    <div className="feature-card" style={{ height: '100%' }}>
      <h3>Whole Block Markets</h3>
      <p>Trade entire blocks for advanced blockspace strategies — available up to 64 slots in advance for maximum planning flexibility.</p>
      <a href="/docs/api/trading/whole-block" className="button button--outline button--sm">Explore Whole Block →</a>
    </div>
  </div>
</div>

### Real-time Infrastructure

<div className="row" style={{ marginTop: '0.5rem' }}>
  <div className="col col--3">
    <div className="feature-card text--center">
      <h4 style={{ marginTop: 0 }}>Instant Settlement</h4>
      <p style={{ marginBottom: 0 }}>Preconfirmation system for immediate results</p>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center">
      <h4 style={{ marginTop: 0 }}>Predictable Costs</h4>
      <p style={{ marginBottom: 0 }}>Turn volatile gas into structured pricing</p>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center">
      <h4 style={{ marginTop: 0 }}>Liquid Markets</h4>
      <p style={{ marginBottom: 0 }}>Depth for trading blockspace assets</p>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center">
      <h4 style={{ marginTop: 0 }}>Gas Abstraction</h4>
      <p style={{ marginBottom: 0 }}>Remove gas complexity from UX</p>
    </div>
  </div>
</div>

## Platform Components

- **REST API**: Complete HTTP API for all platform operations
- **WebSocket API**: Real-time data streaming for live market updates
- **Authentication System**: Secure user authentication and session management
- **Trading Tools**: Advanced order management and position tracking

## Getting Started Checklist

Follow these steps to get started with ETHGas:

<div className="row">
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>1. Environment Setup</h3>
      <p>Configure your development environment and API credentials</p>
      <a href="/docs/getting-started/connecting" className="button button--outline button--sm">
        Configure Environment →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>2. Authentication</h3>
      <p>Set up API credentials and establish secure connections</p>
      <a href="/docs/getting-started/connecting" className="button button--outline button--sm">
        Set Up Auth →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>3. API Testing</h3>
      <p>Test basic API calls and verify your integration</p>
      <a href="/docs/api/overview" className="button button--outline button--sm">
        Test APIs →
      </a>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>4. WebSocket Connection</h3>
      <p>Connect to real-time data streams for live updates</p>
      <a href="/docs/websocket/overview" className="button button--outline button--sm">
        Connect WebSocket →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>5. First Trade</h3>
      <p>Place your first order and start trading</p>
      <a href="/docs/api/trading/whole-block" className="button button--outline button--sm">
        Start Trading →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>6. Explore More</h3>
      <p>Dive deeper into advanced features and reference materials</p>
      <a href="/docs/reference/data-types" className="button button--outline button--sm">
        View Reference →
      </a>
    </div>
  </div>
</div>

## Next Steps

Ready to dive deeper? Check out these resources:

- [Environment Setup](/docs/getting-started/connecting) - Configure your development environment
- [API Overview](/docs/api/overview) - Understand the REST API structure
- [WebSocket Guide](/docs/websocket/overview) - Learn about real-time data streaming
- [Reference Materials](/docs/reference/data-types) - Explore data types and error codes
