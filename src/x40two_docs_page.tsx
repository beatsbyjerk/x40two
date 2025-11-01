import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
const sections: Array<{
  id: string;
  title: string;
  category: string;
  content: string;
}> = [
  {
    id: 'introduction-to-x40two',
    title: 'Introduction to x40TWO',
    category: 'Getting Started',
    content: `# Introduction to x40TWO

Welcome to the official documentation for **x40TWO**, a powerful and fully open-source multi-wallet trading platform designed for the Solana blockchain. Built using the open-source **x40TWO SDKs**, x40TWO provides a comprehensive graphical interface that enables seamless wallet management, trading, and advanced token operations across multiple decentralized exchanges (DEXs).

Whether you're a trader managing hundreds of wallets or a developer exploring multi-wallet capabilities on Solana, x40TWO offers a robust, high-performance toolkit for efficient and scalable on-chain activity.

*   **Multi-Wallet Power**: Manage up to 180 Solana wallets simultaneously, with tools for creation, import, export, and bulk operations.
*   **Unified Trading**: Buy, sell, and swap tokens across multiple DEXs like Jupiter, Raydium, Pump.fun, and more — all from a single interface.
*   **Advanced Token Management**: Distribute, mixer, consolidate, transfer, and even deploy SPL tokens with precision and ease.
*   **Real-Time Insights**: Monitor live token balances and price movements, with integrations like Solscan for transparency.
*   **Developer-Friendly**: Built with React, Next.js, Tailwind CSS, and TypeScript — and fully powered by x40TWO SDKs — x40TWO serves as both a trading platform and a development reference for creating scalable Web3 tools on Solana.

This documentation walks you through every feature from wallet creation to advanced atomic operations and provides everything you need to get started, integrate, or contribute to the project.

*Last updated 4 months ago*`
  },
  {
    id: 'overview',
    title: 'Overview',
    category: 'Getting Started',
    content: `# Overview

x40TWO is a comprehensive, open-source multi-wallet trading platform developed by the team at **x40TWO** using the open-source **x40TWO SDKs** to power its backend integrations and blockchain interactions. It provides users with a seamless graphical interface to connect various Solana wallets and execute trades and token operations efficiently on the Solana blockchain.

x40TWO Solana UI

*Last updated 4 months ago*`
  },
  {
    id: 'key-features',
    title: 'Key Features',
    category: 'Features',
    content: `# Key Features

## Multi-Wallet Management

*   Create, import (single/bulk .txt), export, delete, and view balances across multiple Solana wallets
*   Support for up to 180 wallets simultaneously
*   Bulk wallet operations and management

## Unified Trading Interface

*   Execute buy, sell, and swap operations across multiple DEXs
*   Supported platforms: Jupiter, Raydium, Pump.fun, PumpSwap, Moonshot, BoopFun, and Launchpad
*   Auto-routing for optimal trade execution
*   Real-time price tracking and slippage management

## Dashboard & Token Tracking

*   View aggregated and individual SOL & token balances
*   Select active wallets for operations
*   Direct integration with Solscan explorer
*   Real-time balance updates

## Advanced Operations

*   **Fund Distribution**: Send SOL or tokens from one wallet to multiple recipients
*   **Mixer SOL**: Privacy-enhanced mixing operations
*   **Fund Consolidation**: Gather SOL from multiple wallets into one destination
*   **Direct Transfers**: Send SOL or SPL tokens to any Solana address
*   **Token Deployment**: Create and deploy new SPL tokens
*   **Cleaner Operations**: Execute complex atomic transactions across multiple wallets

*Last updated 4 months ago*`
  },
  {
    id: 'how-to-use',
    title: 'How to use',
    category: 'Guide',
    content: `# How to use

## Getting Started

### Initial Setup

1.  **Access the Application**
    *   Navigate to [https://sol.app.x40TWO/]()
    *   The interface will load with a dark theme and green accent colors
2.  **System Configuration**
    *   Click the settings icon (⚙️) in the top-right corner
    *   Configure your network settings, RPC endpoint, and transaction fees
    *   Set up API keys for enhanced features if needed

### Wallet Management

**Creating Wallets**

1.  Access **System Settings** → **Wallets** tab
2.  In the **Create Wallets** section:
    *   Set quantity (1-180 wallets)
    *   Click **CREATE** to generate new wallets
3.  Newly created wallets will appear in your wallet list

**Importing Wallets**

**Single Wallet Import:**

1.  Click **IMPORT SINGLE WALLET**
2.  Enter the private key or seed phrase

**Bulk Import:**

1.  Click **IMPORT FROM FILE (.txt)**
2.  Upload a text file containing private keys (one per line)
3.  The system will process and import all valid wallets

**Wallet Management Options**

*   **Export All Wallets**: Download all wallet private keys
*   **Remove Empty Wallets**: Clean up wallets with zero balances
*   **View Statistics**: Monitor total wallets, SOL balance, tokens, and active wallets

### Trading Operations

#### Token Selection and Monitoring

1.  **Set Token Address**
    *   Enter any SPL token mint address in the search bar at the top
    *   The system will display balances for that token across all wallets
    *   Toggle between SOL and custom token views
2.  **Balance Overview**
    *   Total aggregated balance shown in header
    *   Individual wallet balances displayed in the main list
    *   Real-time updates with refresh button (🔄)

#### DEX Selection

The platform supports multiple DEX routes:

*   **Auto**: Automatic best route selection
*   **PumpFun**: For meme tokens and new launches
*   **Moonshot**: Alternative meme token platform
*   **PumpSwap**: Decentralized exchange
*   **Raydium**: Major Solana AMM
* **Jupiter**: Aggregated routing
*   **Launchpad**: New token launches
*   **BoopFun**: Additional trading venue

#### Buy/Sell Operations

1.  **Select Token**: Enter token address in the search bar
2.  **Choose Route**: Select from available DEX options or use Auto
3.  **Configure Trade**:
    *   Set sell percentage or amount
    *   Configure slippage tolerance
4.  **Execute**: Select wallets and execute trades

### Advanced Operations

#### Fund Distribution

Standard distribution from one wallet to multiple recipients for direct funding operations.

1.  **Access Distribution**
    *   Navigate to **Wallet Operations** → **Fund Wallets**
2.  **Configure Source**
    *   Select sender wallet from "FROM WALLET" section
3.  **Select Recipients**
    *   Choose destination wallets in "TO WALLETS" section
    *   Use "SELECT ALL" for all wallets or individual selection
4.  **Set Amount**
    *   Enter SOL amount per recipient wallet
    *   Option for custom amounts per wallet (if enabled)
5.  **Review & Execute**
    *   Verify distribution summary
    *   Confirm total amount and remaining balance
    *   Check "I CONFIRM THIS DISTRIBUTION OPERATION"

#### Mixer SOL (Privacy Feature)

**From Wallet Section:**

*   Search functionality to find sender wallets
*   Wallet selection with balance displays
*   Address dropdown for specific wallet targeting
*   Real-time balance verification

**To Wallets Section:**

*   Recipient wallet selection interface
*   "SELECT ALL" option for batch operations
*   Individual wallet selection with balance tracking
*   Live preview of selected recipients

**Amount Settings:**

*   Amount per wallet configuration
*   Custom amount per wallet toggle
*   Total SOL calculation display
*   Fee estimation and balance verification

**Step-by-Step Mixing Process**

1.  **Access SOL Mixer**
    *   Navigate to **Wallet Operations** → **Fund Wallets**
    *   The SOL Mixer interface opens with privacy-focused options
2.  **Configure Source Wallet**
    *   In "FROM WALLET" section, search or select sender wallet
    *   Example: Select wallet "BGcw11...HvyL" with 9.6901 SOL balance
    *   System verifies sufficient balance for mixing operation plus fees
3.  **Select Recipient Wallets**
    *   In "TO WALLETS" section, choose destination wallets
    *   Use "SELECT ALL" to include all available wallets
    *   Select individual wallets based on mixing strategy
    *   System displays current balances for each wallet
4.  **Configure Mixing Parameters**
    *   Set amount per wallet (e.g., 0.001 SOL)
    *   Toggle "CUSTOM AMOUNT PER WALLET" for varying amounts
    *   System shows "SELECTED: X WALLETS" count
    *   Review total SOL required for operation
    *   Click "MIX" to execute privacy-enhanced distribution
    *   Monitor transaction progress across all wallets

#### Fund Consolidation

Gather SOL from multiple wallets into one destination:

1.  **Access Consolidation**
    *   Select "Consolidate SOL" from operations menu
2.  **Select Recipient**
    *   Choose destination wallet from "RECIPIENT WALLET" section
3.  **Choose Sources**
    *   Select source wallets from "SOURCE WALLETS" section
    *   Use search or "SELECT ALL" for multiple wallets
4.  **Set Percentage**
    *   Enter percentage of balance to transfer (e.g., 0.01 for 0.01%)
    *   View live preview of amounts
5.  **Review & Execute**
    *   Verify consolidation summary
    *   Check estimated new balance
    *   Confirm operation and execute

#### Direct Transfers

Transfer SOL or SPL tokens to any address:

1.  **Initiate Transfer**
    *   Access "Transfer Assets" from operations
2.  **Configure Transfer**
    *   Enter recipient Solana address
    *   For SOL: Leave token address empty
    *   For SPL tokens: Enter token mint address
3.  **Review & Execute**
    *   Confirm and authorize transaction

#### Token Deployment

Create and deploy new SPL tokens:

1.  **Access Deployer**
    *   Select "DEPLOY" from operations panel
2.  **Generate Mint Key**
    *   Click "GENERATE" for new keypair
    *   Or enter existing mint public key
3.  **Token Metadata**
    *   **Symbol**: Ticker symbol (keep short)
    *   **Description**: Token purpose/utility
    *   **Logo URL**: Direct link to token logo image
4.  **Deploy**
    *   Confirm deployment transaction

#### Cleaner Operations

Execute complex atomic operations across multiple wallets:

1.  **Access Cleaner**
    *   Click "CLEANER" from operations panel
2.  **Configure Sellers**
    *   System displays wallets holding the target token
    *   Select wallets to act as sellers/sources
    *   Choose one or multiple seller wallets
3.  **Advanced Configuration**
    *   Define specific actions (buy/sell/transfer)
    *   Set atomic operation parameters
    *   Configure simultaneous execution

### Network Configuration

*   **RPC Endpoint**: Set your preferred Solana RPC endpoint for fast and reliable transactions.
*   **Transaction Fees**: Configure custom priority fees for faster transaction confirmation.
*   **API Keys**: Integrate with external services for enhanced features (e.g., price feeds, data analysis).

*Last updated 4 months ago*`
  },
  {
    id: 'locally-install',
    title: 'Locally install',
    category: 'Developer',
    content: `# Locally install

## Getting Started

### Prerequisites

*   **Node.js** (v14 or later)
*   **npm** (comes with Node.js)
*   Understanding of privacy implications and local regulations

### Installation

Visit: \`http://localhost:5173\`

### Project Structure

### Key Features

*   **Privacy-Enhanced Mixing Engine**: Custom implementation for SOL mixing operations

### Contributions

Contributions are welcome, especially for privacy and security enhancements! Fork the repo and open a pull request for new features, mixing improvements, or bug fixes.

*Last updated 4 months ago*`
  },
  {
    id: 'technical-integration',
    title: 'Technical Integration',
    category: 'Developer',
    content: `# Technical Integration

x40TWO is built using the open-source x40TWO SDKs, providing:

*   Real-time blockchain interaction with privacy considerations
*   Multi-DEX aggregation with operational security
*   Secure wallet management with enhanced privacy features
*   Atomic transaction execution including complex mixing operations
*   Token metadata management with privacy protection
*   **Advanced Mixing Engine**: Sophisticated privacy-enhanced SOL distribution

The application serves as both a practical tool and a demonstration of the x40TWO SDKs' capabilities, offering developers insight into building sophisticated Solana applications with privacy features using the open-source x40TWO ecosystem.

*Last updated 4 months ago*`
  },
  {
    id: 'fees',
    title: 'Fees',
    category: 'Business',
    content: `# Fees

## Fees Structure

x40TWO implements a transparent fee structure designed to sustain our development team and maintain the high-quality infrastructure that makes x40TWO the premier development tool for Solana builders.

### Platform Fees

| Operation Type | Fee Amount | Description |
| :--- | :--- | :--- |
| Swap Operations | 1% | Applied to all swap transactions |
| Bundle Operations | 0.001 SOL | Fixed fee per bundle execution |
| Pump.fun Integration | 1% | Third-party fee charged by Pump.fun platform |
| Bonk Integration | 1.5% | Third-party fee charged by Bonk platform |

### Fee Purpose

These fees enable us to:

*   Maintain and improve the x40TWO platform
*   Support ongoing development and feature enhancements
*   Provide reliable infrastructure and high-performance services
*   Ensure x40TWO remains the best-in-class tool for Solana developers

The following fees are collected by x40TWO to maintain our development team and infrastructure:

*   Bundle Operations: 0.001 SOL per bundle

#### Third-Party Integration Fees

These fees are charged directly by external platforms when using their services through x40TWO:

*   Pump.fun: 1% (charged by Pump.fun)
*   Bonk: 1.5% (charged by Bonk platform)

All fees are automatically collected during transaction execution and are transparently integrated into the trading interface. No additional steps are required from users.

*Last updated 3 months ago*`
  },
  {
    id: 'referral-program',
    title: 'Referral Program',
    category: 'Business',
    content: `# Referral Program

Soon

*Last updated 3 months ago*`
  },
  {
    id: 'audit',
    title: 'Audit',
    category: 'Security',
    content: `# Audit

## x40TWO Security Audit Documentation

x40TWO is a multi-wallet Solana trading platform that prioritizes user security through **local transaction processing** and **client-side private key management**. This audit documentation demonstrates that x40TWO implements industry-standard security practices to ensure that **private keys never leave the user's device** and all sensitive operations are performed locally.

### 🔐 Core Security Principles

#### 1. Local Private Key Management

**Private keys are generated, stored, and used exclusively on the client-side:**

*   **Key Generation**: New wallets are created using Solana's \`Keypair.generate()\` method locally in the browser
*   **Key Storage**: Private keys are encrypted using AES encryption before storage
*   **Key Usage**: Transaction signing occurs entirely in the browser using local keypairs
*   **Zero Server Transmission**: Private keys are never sent to any server or external service

#### 2. Client-Side Transaction Signing

**All transaction signing happens locally in the user's browser:**

#### 3. Encrypted Local Storage

**Wallet data is encrypted before storage:**

*   **Encryption Method**: AES encryption using CryptoJS
*   **Storage Locations**: IndexedDB (primary) and localStorage (backup)
*   **Key Protection**: Encryption key is hardcoded in client code (standard for client-side apps)
*   **Migration Support**: Automatic migration from unencrypted to encrypted storage

### 🛡️ Security Architecture

#### Transaction Flow Security

1.  **Unsigned Transaction Request**
    *   Client requests unsigned transaction from server
    *   Server returns transaction template without signatures
    *   No private keys involved in this step
2.  **Local Transaction Signing**
    *   Client deserializes unsigned transaction
    *   Private key is used locally to sign transaction
    *   Signed transaction is serialized for transmission
3.  **Signed Transaction Submission**
    *   Only the signed transaction is sent to server
    *   Server forwards to Jito Bundle Service or RPC
    *   Private keys remain on client device

#### Wallet Management Security

**Wallet Creation**

**Wallet Import**

#### Data Encryption Implementation

### 🔍 Security Audit Findings

1.  **Local Key Management**
    *   Private keys are generated using secure Solana libraries
    *   Keys never leave the client environment
    *   All cryptographic operations performed locally
2.  **Transaction Security**
    *   Transactions are signed client-side using local keypairs
    *   Only signed transactions are transmitted to servers
    *   No private key exposure during transaction processing
3.  **Data Protection**
    *   Wallet data encrypted using AES before storage
    *   Multiple storage backends (IndexedDB + localStorage)
    *   Automatic migration from unencrypted to encrypted storage
4.  **Code Transparency**
    *   Open-source codebase allows for public security review
    *   Clear separation between client and server responsibilities
    *   Well-documented security practices

### ⚠️ Known Limitations

1.  **Client-Side Encryption Key**
    *   Encryption key is embedded in client code (standard limitation for client-side apps)
    *   Users should be aware that client-side encryption protects against casual access, not determined attackers with code access
2.  **Browser Security Dependency**
    *   Security relies on browser's built-in protections
    *   Users should use updated browsers and avoid compromised devices
3.  **Phishing Protection**
    *   Users must verify they're using the official x40TWO domain
    *   No additional phishing protection mechanisms implemented

### 🛠️ Security Dependencies

*   **@solana/web3.js**: Official Solana library for blockchain interactions
*   **bs58**: Base58 encoding/decoding for Solana addresses and keys
*   **crypto-js**: AES encryption for local data protection
*   **js-cookie**: Secure cookie management

#### Security-Relevant Dependencies

### 🔒 Best Practices Implemented

#### 1. Principle of Least Privilege

*   Server only receives unsigned transaction templates and signed transactions
*   No unnecessary data transmission
*   Minimal server-side private data handling

#### 2. Defense in Depth

*   Multiple storage mechanisms (IndexedDB + localStorage)
*   Client-side validation and error handling

#### 3. Secure Development Practices

*   TypeScript for type safety
*   Comprehensive error handling
*   Input validation for private keys and transactions

### ✅ Security Checklist

*   ✅ Private keys generated locally using secure libraries
*   ✅ Private keys never transmitted to servers
*   ✅ All transaction signing performed client-side
*   ✅ Wallet data encrypted before storage
*   ✅ Multiple storage backends for redundancy
*   ✅ Open-source code for transparency
*   ✅ Secure dependency management
*   ✅ Proper error handling and validation
*   ✅ Clear separation of client/server responsibilities

### 🔍 Competitor Security Analysis

To provide context for x40TWO's security approach, we analyzed how major Solana trading bot competitors handle security:

| Competitor | Key Management | Transaction Signing | Notes |
| :--- | :--- | :--- | :--- |
| **x40TWO** | Local, Encrypted | Client-Side | Open-source, high transparency |
| Competitor A | Server-Side | Server-Side | High risk of server compromise |
| Competitor B | Local, Unencrypted | Client-Side | Vulnerable to local file access |
| Competitor C | Wallet Connect | Wallet Connect | Relies on third-party wallet security |

*Last updated 4 months ago*`
  },
  {
    id: 'privacy-and-legal-considerations',
    title: 'Privacy and Legal Considerations',
    category: 'Legal',
    content: `# Privacy and Legal Considerations

## Privacy Features

*   **On-chain Mixing**: All mixing operations are executed transparently on the Solana blockchain
*   **No Custodial Risk**: Users maintain full control of their private keys and funds
*   **Open Source**: Complete transparency in mixing algorithms and implementation
*   **Decentralized**: No reliance on centralized mixing services

## Compliance Notes

*   Users are responsible for compliance with local regulations regarding privacy tools
*   All operations are recorded on the public Solana blockchain
*   The mixing feature is designed for legitimate privacy protection purposes
*   Users should understand the legal implications of privacy tools in their jurisdiction

## Responsible Use

*   Use privacy features for legitimate purposes only
*   Understand local laws regarding cryptocurrency privacy tools
*   Maintain proper records for tax and compliance purposes
*   Respect the rights and privacy of others in all operations

*Last updated 4 months ago*`
  }
];
const categories = ['Getting Started', 'Features', 'Guide', 'Developer', 'Business', 'Security', 'Legal'];

const toc = categories.map(category => ({
  category,
  items: sections.filter(section => section.category === category).map(section => ({ title: section.title, id: section.id }))
}));

const X40TwoDocsPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-xl bg-app-primary text-app-tertiary">
      {/* Cyberpunk corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-app-primary-color to-transparent"></div>
        <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-app-primary-color to-transparent"></div>
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
        <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-app-primary-color to-transparent"></div>
        <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-app-primary-color to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-px h-8 bg-gradient-to-t from-app-primary-color to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-8 h-px bg-gradient-to-r from-app-primary-color to-transparent"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-px h-8 bg-gradient-to-t from-app-primary-color to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-8 h-px bg-gradient-to-l from-app-primary-color to-transparent"></div>
      </div>

      <div className="x40two-docs-container p-6 max-w-7xl mx-auto relative z-10 min-h-screen">
        <div className="flex gap-8 h-full">
          <div className="w-1/4 flex-shrink-0">
            <div className="sticky top-6">
              <h2 className="text-xl font-bold mb-4 text-app-tertiary">Table of Contents</h2>
              {toc.map((categoryGroup: { category: string; items: { title: string; id: string }[] }) => (
                <div key={categoryGroup.category} className="mb-6">
                  <h3 className="text-sm font-semibold text-app-primary-color mb-2 uppercase tracking-wider">
                    {categoryGroup.category}
                  </h3>
                  <ul className="space-y-1">
                    {categoryGroup.items.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="text-app-secondary hover:text-app-primary-color transition-colors block text-sm py-1 px-2 rounded hover:bg-app-primary-95">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-3/4 flex-1 space-y-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-app-primary-color mb-2 font-mono tracking-wider">x40TWO Documentation</h1>
              <p className="text-app-secondary font-mono text-lg">Comprehensive security and privacy documentation for x40TWO trading platform</p>
            </div>
            {sections.map((section: { id: string; title: string; content: string; category: string }) => (
              <section key={section.id} id={section.id} className="bg-app-primary-99 border border-app-primary-40 rounded-lg p-8 shadow-lg">
                <div className="mb-4 pb-4 border-b border-app-primary-40">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      section.category === 'Getting Started' ? 'bg-blue-500/20 text-blue-300' :
                      section.category === 'Features' ? 'bg-green-500/20 text-green-300' :
                      section.category === 'Guide' ? 'bg-purple-500/20 text-purple-300' :
                      section.category === 'Developer' ? 'bg-orange-500/20 text-orange-300' :
                      section.category === 'Business' ? 'bg-yellow-500/20 text-yellow-300' :
                      section.category === 'Security' ? 'bg-red-500/20 text-red-300' :
                      'bg-gray-500/20 text-gray-300'
                    }`}>
                      {section.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-app-primary-color">{section.title}</h2>
                </div>
                <div className="prose prose-invert max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {section.content}
                  </ReactMarkdown>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default X40TwoDocsPage;
