# Rendering Methods on Next.js

- In this repository, you will find a brief explanation of each rendering method, its use cases, and how to implement them in Next.js using the App Router.
- It's important to note that in a production scenario, you can combine different rendering methods in Next.js. This is achieved by following the [Composition Patterns](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#client-components).
  - The idea is to use client components only where necessary, while relying on server components for the rest.
  - This approach lets you leverage the strengths of both methods: reducing your bundle size by rendering parts of your page on the server and ensuring interactivity through client APIs and React state management in client components.

## How to run

- `nvm i 22`
- `nvm use`
- `npm i`
- `npm run local-with-server`

## Examples

- Please read the content of each file for a better understanding of these examples.

- ### Static Site Generation (SSG)

  - **[Fetching directly on page](./_readme-videos//ssg-fetching-directly.mov)**
  - **[Fetching with generateStaticParams](./_readme-videos/ssg-generateStaticParams.mov)**

- ### [Server Side-Rendering (SSR)](./_readme-videos/ssr.mov)

- ### [Incremental Static Regeneration (ISR)](./_readme-videos/isr.mov)

- ### [Client Site Rendering (CSR)](./_readme-videos/csr.mov)

- ### [Composition Pattern: SSG + CSR](./_readme-videos/ssg-and-csr.mov)
  - **Notes**:
    - If JavaScript is disabled, the SSG part continues to work, but the CSR part will stop.
    - You can implement the composition pattern using any rendering method. For this brief example and comparison, I chose SSG + CSR.

## References

- https://nextjs.org/docs/app/building-your-application/rendering
- https://nextjs.org/docs/app/building-your-application/rendering/server-components
- https://nextjs.org/docs/app/building-your-application/rendering/client-components
- https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
- https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
- https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration
- https://nextjs.org/docs/app/api-reference/functions/generate-static-params
- https://nextjs.org/docs/app/api-reference/functions/revalidatePath
- https://nextjs.org/docs/app/api-reference/functions/revalidateTag
- https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
- https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
