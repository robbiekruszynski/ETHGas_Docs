# ETHGas Documentation

Complete documentation for the ETHGas platform API and WebSocket interfaces. This documentation is built with Docusaurus and provides comprehensive coverage of all ETHGas platform features.

## What is ETHGas?

ETHGas is a platform that provides infrastructure for Ethereum gas trading and MEV (Maximal Extractable Value) opportunities. It offers APIs for:

- **Whole Block Markets**: Trade entire blocks for MEV opportunities
- **Inclusion Preconf Markets**: Trade gas price predictions
- **Bundle Submission**: Submit transaction bundles to builders
- **Builder Management**: Register and manage block builders
- **Validator Operations**: Manage validator operations and fees

## Documentation Structure

This documentation is organized into several main sections:

### Getting Started
- **Welcome**: Platform overview and key concepts
- **Environments**: TestNet and MainNet configuration
- **Connecting**: Authentication and connection setup

### REST API
- **Overview**: API structure and response format
- **Authentication**: Login, logout, and token management
- **User Management**: Profile and account operations
- **Trading**: Order placement and management
- **Market Data**: Market information and status

### WebSocket API
- **Overview**: Real-time data streaming
- **Authentication**: WebSocket authentication
- **Public Channels**: Market data and updates
- **Private Channels**: User-specific data streams
- **Queries**: Real-time data queries

### Reference
- **Data Types**: Complete data structure definitions
- **Error Codes**: Comprehensive error code reference
- **Lookup Tables**: Market types, order types, and more
- **Response Codes**: Standard HTTP response codes

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above
- npm or yarn package manager

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd ETHGas_Docs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3002](http://localhost:3002) in your browser.

### Building for Production

```bash
npm run build
```

This generates static content into the `build` directory that can be served using any static contents hosting service.

## Development

### Project Structure

```
ETHGas_Docs/
├── docs/                    # Documentation files
│   ├── getting-started/     # Getting started guides
│   ├── api/                 # REST API documentation
│   ├── websocket/           # WebSocket API documentation
│   ├── reference/           # Reference materials
│   └── changelog/           # Changelog and updates
├── src/                     # Source code
├── static/                  # Static assets
├── docusaurus.config.ts     # Docusaurus configuration
├── sidebars.ts             # Sidebar configuration
└── package.json            # Project dependencies
```

### Adding New Documentation

1. Create new markdown files in the appropriate directory
2. Update `sidebars.ts` to include new pages
3. Follow the existing documentation structure and format

### Code Examples

All code examples in the documentation are tested and verified. When adding new examples:

1. Use clear, concise code
2. Include error handling
3. Provide multiple language examples (Python, JavaScript, etc.)
4. Test all examples before committing

## Contributing

We welcome contributions to improve this documentation:

1. **Report Issues**: Submit documentation bugs or improvements
2. **Suggest Enhancements**: Propose new documentation sections
3. **Submit Examples**: Share code examples and use cases
4. **Update Content**: Help keep documentation current

## Support

For questions about this documentation or the ETHGas platform:

- **Documentation**: This documentation
- **TestNet App**: [testnet.ethgas.com](https://testnet.ethgas.com)
- **ETHGas Homepage**: [ethgas.com](https://ethgas.com)

## License

This documentation is licensed under the same terms as the ETHGas platform.

---

Built with [Docusaurus](https://docusaurus.io/)
