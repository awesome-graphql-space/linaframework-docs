import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h3><a href="https://github.com/awesome-graphql-space/server-nestjs">Prisma + NestJS Boilerplate Server</a></h3>
    <p>
    For using Prisma as an end point you should signup to prisma replace the endpoint in your env file (in boilerplate). If you want to read more about deploying (check out the <a href="https://www.prisma.io/docs/reference/cli-command-reference/database-service/prisma-init-eeb1ohr4ec/">prisma docs </a>)
    <br/>
    <br/>
    <code>
    PRISMA_URL="PRISMA_URL="https://eu1.prisma.sh/your-workspace/yourendpoint/dev"
    </code>
    <br/>
    <code>
    PORT=4000
    </code>
    </p>

    <h3>Setting up prisma</h3>
    <h4>login to prisma</h4>
    <code>
    npm run prisma login
    </code><br/><br/>
    
    <h4>deploy prisma database</h4>
    <code>
    npm run prisma deploy
    </code><br/><br/>
    
    <h4>generate prisma</h4>
    <code>
    npm run prisma generate
    </code><br/><br/>
    
    <h4>generate graphql resolvers from schema.graphql</h4>
    <code>
    npm run resolver-codegen
    </code><br/><br/>


    <h3>Running the app</h3>

    <h4>development server</h4>
    <code>npm run start </code><br/><br/>

<h4>watch mode</h4>
<code>npm run start:dev</code><br/><br/>

<h4>production mode </h4>
<code>npm run start:prod</code><br/><br/>

<h3>Endpoints</h3>
<h4>nestjs rest endpoint </h4>
<code>localhost:3000</code><br/><br/>

<h3>graphql and playground endpoint </h3>
<code>localhost:3000/graphql</code>
  </div>
)

export default IndexPage
