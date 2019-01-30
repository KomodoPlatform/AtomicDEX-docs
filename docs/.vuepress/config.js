module.exports = {
  title: "Komodo Documentation",
  base: "/",
  description: "Documentation for developers building on Komodo",
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [{
        text: "Start Here",
        link: "/basic-docs/start-here/introduction.md"
      },
      {
        text: "KomodoPlatform.com",
        link: "https://komodoplatform.com"
      }
    ],
    sidebar: {
      "/basic-docs/": [{
          title: "Start Here",
          collapsable: true,
          children: [
            ["/basic-docs/start-here/introduction.md", "Introduction"],
            [
              "/basic-docs/start-here/outline-for-new-developers.md",
              "Outline for New Developers"
            ],
            [
              "/basic-docs/start-here/cc-overview.md",
              "Overview of Crypto Conditions (Smart Contracts)"
            ]
          ]
        },
        {
          title: "Installation and Setup",
          collapsable: true,
          children: [
            [
              "/basic-docs/installations/basic-instructions.md",
              "Basic Installation Instructions"
            ],
            [
              "/basic-docs/installations/creating-asset-chains.md",
              "Asset Chain Creation"
            ],
            [
              "/basic-docs/installations/common-runtime-parameters.md",
              "Launch Settings & Maintenance"
            ],
            [
              "/basic-docs/installations/asset-chain-parameters.md",
              "Custom Parameters for Asset Chains"
            ]
          ]
        },
        {
          title: "Crypto Conditions (Smart Contracts)",
          collapsable: true,
          children: [
            [
              "/basic-docs/cryptoconditions/cryptoconditions-instructions.md",
              "Instructions for Crypto Conditions"
            ],
            ["/basic-docs/cryptoconditions/cc-channels.md", "Channels"],
            ["/basic-docs/cryptoconditions/cc-dice.md", "Dice"],
            ["/basic-docs/cryptoconditions/cc-faucet.md", "Faucet"],
            ["/basic-docs/cryptoconditions/cc-gateways.md", "Gateways"],
            ["/basic-docs/cryptoconditions/cc-oracles.md", "Oracles"],
            ["/basic-docs/cryptoconditions/cc-rewards.md", "Rewards"],
            ["/basic-docs/cryptoconditions/cc-tokens.md", "Tokens"]
          ]
        },
        {
          title: "Komodo API",
          collapsable: true,
          children: [
            ["/basic-docs/komodo-api/address.md", "Address"],
            ["/basic-docs/komodo-api/blockchain.md", "Blockchain"],
            ["/basic-docs/komodo-api/control.md", "Control"],
            ["/basic-docs/komodo-api/disclosure.md", "Disclosure"],
            ["/basic-docs/komodo-api/generate.md", "Generate"],
            ["/basic-docs/komodo-api/mining.md", "Mining"],
            ["/basic-docs/komodo-api/jumblr.md", "Jumblr"],
            ["/basic-docs/komodo-api/network.md", "Network"],
            ["/basic-docs/komodo-api/rawtransactions.md", "Raw Transactions"],
            ["/basic-docs/komodo-api/util.md", "Util"],
            ["/basic-docs/komodo-api/wallet.md", "Wallet"]
          ]
        },
        {
          title: "Atomic-Swap DEX",
          collapsable: true,
          children: [
            ["/basic-docs/atomicswapdex/introduction-to-komodo-dex.md", "Introduction to Komodo's DEX"]
          ]
        }
      ],
      "/": ["", "/basic-docs/"]
    }
  }
};
