import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const IndexPage = () => (
  <main className="index_main">
    <h2>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/awesome-graphql-space/server-nestjs"
        className="index_link"
      >
        Prisma + NestJS Boilerplate Server
      </a>
    </h2>
    <p>Building GraphQL server using NestJS & Prisma is fairly easy & simple.</p>
    <h3>NestJS</h3>
    <p>NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with TypeScript (preserves compatibility with pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). NestJS reduces the process involved in setting up a nodejs server.</p>
    <p>
    GraphQLModule in NestJS that is nothing more than a wrapper around the Apollo server. We don't reinvent the wheel but provide a ready to use a module instead, that brings a clean way to play with the GraphQL and Nest together. NestJS Framework has inbuilt support of Apollo Server 2 which is awesome
    </p>
    <h3>Prisma Client</h3>
    <p> Prisma Client is an ORM for GraphQL server.
    Prisma provides a mapping from your API to your database. In that sense, it solves similar problems as conventional ORMs.
The big difference is the way how the mapping is implemented. Prisma takes a radically different approach which avoids the shortcomings and limitations commonly experienced with ORMs.</p>
<p>Writing resolvers is hard & Prisma Client simply make it easy using <a href="https://github.com/prisma/graphql-resolver-codegen">GraphQL Resolver Codegen</a></p>
    <p className="index_para">
      For using Prisma as an end point you should signup to prisma replace the
      endpoint in your env file (in boilerplate). If you want to read more about
      deploying (check out the{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.prisma.io/docs/reference/cli-command-reference/database-service/prisma-init-eeb1ohr4ec/"
        className="index_link"
      >
        prisma docs
      </a>
      )
    </p>
    <hr />
    <p>
      <code className="index_code--inline">
        PRISMA_URL="https://eu1.prisma.sh/your-workspace/yourendpoint/dev"
      </code>
      <br />
      <code>PORT=4000</code>
    </p>

    <h3>👉 Setting up prisma</h3>
    <ul className="index_list">
      <li className="index_list--item">
        <h4 className="index_list--item--header">Login to Prisma</h4>
        <code className="index_code--inline">npm run prisma login</code>
      </li>
      <li className="index_list--item">
        <h4 className="index_list--item--header">Deploy prisma database</h4>
        <code className="index_code--inline">npm run prisma deploy</code>
      </li>
      <li className="index_list--item">
        <h4 className="index_list--item--header">Generate prisma</h4>
        <code className="index_code--inline">npm run prisma generate</code>
      </li>
      <li className="index_list--item">
        <h4 className="index_list--item--header">
          Generate graphql resolvers from schema.graphql
        </h4>
        <code className="index_code--inline">npm run resolver-codegen</code>
      </li>
    </ul>

    <h3>👉 Running the app</h3>
    <ul className="index_list">
      <li className="index_list--item">
        <h4 className="index_list--item--header">Start dev server</h4>
        <code className="index_code--inline">npm start</code>
      </li>
      <li className="index_list--item">
        <h4 className="index_list--item--header">
          Start dev server in watch mode
        </h4>
        <code className="index_code--inline">npm run start:dev</code>
      </li>
      <li className="index_list--item">
        <h4 className="index_list--item--header">Run in production</h4>
        <code className="index_code--inline">npm run start:prod</code>
      </li>
    </ul>

    <h3>👉 Endpoints</h3>
    <ul className="index_list">
      <li className="index_list--item">
        <h4 className="index_list--item--header">NestJS rest endpoint</h4>
        <code className="index_code--inline">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://localhost:3000"
            className="index_link index_font--medium"
          >
            http://localhost:3000
          </a>
        </code>
      </li>
      <li className="index_list--item">
        <h4 className="index_list--item--header">
          GraphQL and playground endpoint
        </h4>
        <code className="index_code--inline">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://localhost:3000/graphql"
            className="index_link index_font--medium"
          >
            http://localhost:3000/graphql
          </a>
        </code>
      </li>
    </ul>
  </main>
)

export default IndexPage
