# Next.js 15 / App Router Demo (Next 15 Part 2)

This workspace contains two Next.js demo projects created while following the Codevolution video series:
- Playlist: https://www.youtube.com/watch?v=b4ba60j_4o8&list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY&index=2  
- Channel: https://www.youtube.com/@Codevolution

Summary
- Two example apps demonstrating Next.js (App Router) features, server/client components, routing, layouts and more.
- Useful for following along the Codevolution tutorials and experimenting locally.

Projects in this workspace
- next15 (example build output + source)
  - package: [next15/package.json](next15/package.json)
  - main source: [next15/src/app](next15/src/app) (app router pages & components)
  - README inside the folder: [next15/README.md](next15/README.md)
- rendering-demo (compact demo used in the tutorials)
  - package: [rendering-demo/package.json](rendering-demo/package.json)
  - app entry: [rendering-demo/src/app/page.tsx](rendering-demo/src/app/page.tsx)
  - layout: [rendering-demo/src/app/layout.tsx](rendering-demo/src/app/layout.tsx)
  - example client component: [`DashboardPage`](rendering-demo/src/app/dashboard/page.tsx) — [rendering-demo/src/app/dashboard/page.tsx](rendering-demo/src/app/dashboard/page.tsx)

Quick start (development)
1. Install dependencies (run in the project you want to work on, e.g. `rendering-demo`):
   ```sh
   cd rendering-demo
   npm install
