# Shelf Configurator

A custom storefront extension that lets customers visually configure a
modular shelving unit — choosing dimensions, layout, and finish — and adds the
generated configuration to their cart as a custom product, backed by a
Admin GraphQL API integration.

> **This is a public code sample.** Core business logic has been redacted
> from this copy to protect client confidentiality — see [License &
> Usage](#license--usage) below. It's shared here to demonstrate code
> structure, architecture, and delivery quality.

## What it does

- **Interactive configurator UI** — customers pick dimensions and options for
  a shelving unit through a guided, multi-step form and see a live visual
  preview before adding it to cart.
- **Dynamic product generation** — each configuration is translated into a
  custom product/variant via the Admin GraphQL API, with the chosen
  dimensions stored as metaobjects.
- **Image handling pipeline** — configurator selections are rendered and
  processed server-side to produce the product preview image shown to the
  shopper.
- **Order lifecycle sync** — a webhook listener keeps custom, one-off
  configurator products in sync with when related orders/line items
  change (e.g. cleaning up custom products after cancellation).
- **Serverless deployment** — the API is packaged for Vercel serverless
  functions.

## Tech stack

| Layer      | Tech                                       |
| ---------- | ------------------------------------------ |
| Frontend   | React 19, Vite, Redux Toolkit, FontAwesome |
| Backend    | Node.js, Express, Admin GraphQL API        |
| Deployment | Vercel (serverless functions)              |

## Project structure

```
closet/
├── frontend/          # React + Vite storefront configurator UI
│   └── src/
│       ├── components/   # Configurator form, image & shelving UI
│       ├── slices/       # Redux state for the configurator flow
│       └── store/        # Redux store setup
└── backend/            # Express API deployed as a Vercel serverless function
    ├── api/               # Serverless entry point
    ├── controllers/       # Request handlers (products, images)
    ├── services/          #  GraphQL service layer
    ├── graphql/           # GraphQL queries & mutations
    ├── routes/            # Webhook routes
    └── config/            #  API configuration
```

## About this build

This project was delivered as a client engagement — a bespoke
integration connecting a custom React configurator to the Admin
GraphQL API for dynamic, made-to-order product creation.

Want something similar built for your store? Get in touch via Upwork and
let's talk about your project.

## License & Usage

Copyright © 2026 The Fabcode. All rights reserved.

This repository is published **for viewing and reference purposes only**.
The files in this copy have had proprietary implementation details (
credentials, GraphQL service logic, and core configurator components)
removed or redacted, and are **not intended to run out of the box**.

No permission is granted to copy, modify, distribute, sublicense, or reuse
this code, in whole or in part, without prior written permission from The
Fabcode. See [LICENSE](./LICENSE) for full terms.
