import type { BlogPost } from "@/types";

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Microservices with Node.js",
    summary:
      "Learn how to design and implement scalable microservices architecture using Node.js and Docker.",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2024-03-01",
    readingTime: "8 min read",
    tags: ["Node.js", "Microservices", "Docker"],
    content: `
# Building Scalable Microservices with Node.js

In today's fast-paced digital landscape, building applications that can scale efficiently is crucial for business success. Microservices architecture has emerged as a powerful approach to developing scalable, maintainable, and resilient systems.

## What are Microservices?

Microservices are an architectural style that structures an application as a collection of small, loosely coupled services. Each service is:

- **Focused on a specific business capability**
- **Independently deployable**
- **Owned by a small team**
- **Communicates via well-defined APIs**

Unlike monolithic applications where all functionality is packaged into a single unit, microservices allow teams to develop, deploy, and scale components independently.

## Why Node.js for Microservices?

Node.js has become a popular choice for building microservices due to several key advantages:

1. **Asynchronous & Non-blocking I/O**: Perfect for handling multiple concurrent requests
2. **Small footprint**: Lightweight and efficient for containerization
3. **Rich ecosystem**: NPM provides access to thousands of packages
4. **JavaScript everywhere**: Same language on frontend and backend

## Getting Started with Node.js Microservices

Let's look at a simple example of a microservice in Node.js:

\`\`\`javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Sample data
const products = [
  { id: 1, name: 'Product A', price: 99.99 },
  { id: 2, name: 'Product B', price: 149.99 }
];

// Routes
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

app.listen(port, () => {
  console.log(\`Product service listening on port \${port}\`);
});
\`\`\`

## Containerizing with Docker

Docker makes it easy to package and deploy microservices consistently. Here's a simple Dockerfile for our Node.js microservice:

\`\`\`dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
\`\`\`

## Service Communication

Microservices need to communicate with each other. There are several patterns for this:

- **REST APIs**: Simple HTTP-based communication
- **Message Queues**: Asynchronous communication using RabbitMQ or Kafka
- **gRPC**: High-performance RPC framework

## Orchestrating with Kubernetes

For production environments, Kubernetes provides powerful tools for:

- **Service discovery**
- **Load balancing**
- **Automated rollouts and rollbacks**
- **Self-healing**

## Best Practices

1. **Design around business capabilities**
2. **Implement proper monitoring and logging**
3. **Use circuit breakers for resilience**
4. **Implement proper authentication and authorization**
5. **Design for failure**

By following these principles, you can build scalable, maintainable microservices that can evolve with your business needs.
`,
  },
  {
    id: "2",
    title: "React Performance Optimization Techniques",
    summary:
      "Discover advanced techniques to optimize your React applications for better performance.",
    thumbnail:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2024-02-15",
    readingTime: "6 min read",
    tags: ["React", "Performance", "JavaScript"],
    content: `
# React Performance Optimization Techniques

React applications can sometimes suffer from performance issues, especially as they grow in complexity. In this article, we'll explore various techniques to optimize your React applications for better performance.

## Understanding React's Rendering Process

Before diving into optimization techniques, it's important to understand how React renders components:

1. **Render Phase**: React creates a virtual DOM representation
2. **Reconciliation**: React compares the new virtual DOM with the previous one
3. **Commit Phase**: React applies the necessary changes to the actual DOM

## Common Performance Issues

Several factors can impact React application performance:

- **Unnecessary re-renders**
- **Large component trees**
- **Expensive calculations**
- **Inefficient state management**
- **Large bundle sizes**

## Key Optimization Techniques

### 1. Memoization with React.memo

\`React.memo\` is a higher-order component that memoizes your component, preventing re-renders if props haven't changed:

\`\`\`jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
\`\`\`

### 2. Using useMemo and useCallback Hooks

These hooks help prevent unnecessary calculations and function recreations:

\`\`\`jsx
// Memoize expensive calculations
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// Memoize callback functions
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

### 3. Code Splitting

Split your code into smaller chunks that load on demand:

\`\`\`jsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

### 4. Virtualization for Long Lists

Use virtualization libraries like \`react-window\` to render only visible items:

\`\`\`jsx
import { FixedSizeList } from 'react-window';

function MyList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index]}
    </div>
  );

  return (
    <FixedSizeList
      height={500}
      width={300}
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
}
\`\`\`

### 5. Optimizing Context API Usage

Avoid putting everything in a single context; split contexts by functionality:

\`\`\`jsx
// Instead of one large context
const AppContext = createContext();

// Split into focused contexts
const UserContext = createContext();
const ThemeContext = createContext();
const SettingsContext = createContext();
\`\`\`

### 6. Using Production Builds

Always use production builds for deployment:

\`\`\`bash
# Create React App
npm run build

# Vite
npm run build
\`\`\`

## Measuring Performance

Use tools to measure and monitor performance:

- **React DevTools Profiler**
- **Lighthouse**
- **Web Vitals**
- **Performance tab in Chrome DevTools**

## Conclusion

Performance optimization is an ongoing process. Start with the techniques that address your specific bottlenecks, measure the impact, and iterate. Remember that premature optimization can lead to unnecessary complexity, so always profile first to identify real issues.
`,
  },
  {
    id: "3",
    title: "Introduction to GraphQL with TypeScript",
    summary:
      "A comprehensive guide to building type-safe GraphQL APIs using TypeScript and Apollo Server.",
    thumbnail:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2024-02-01",
    readingTime: "10 min read",
    tags: ["GraphQL", "TypeScript", "API"],
    content: `
# Introduction to GraphQL with TypeScript

GraphQL has revolutionized how we think about API design and data fetching. When combined with TypeScript, it creates a powerful, type-safe development experience. This guide will walk you through building a GraphQL API with TypeScript.

## What is GraphQL?

GraphQL is a query language for APIs and a runtime for executing those queries against your data. Unlike REST, GraphQL:

- Allows clients to request exactly what they need
- Enables fetching multiple resources in a single request
- Provides a strongly-typed schema
- Offers introspection capabilities

## Setting Up a TypeScript GraphQL Server

Let's start by setting up a basic GraphQL server with Apollo Server and TypeScript:

### 1. Project Setup

\`\`\`bash
mkdir graphql-ts-api
cd graphql-ts-api
npm init -y
npm install apollo-server graphql type-graphql reflect-metadata typescript
npm install --save-dev @types/node ts-node
\`\`\`

### 2. TypeScript Configuration

Create a \`tsconfig.json\` file:

\`\`\`json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "lib": ["es2018", "esnext.asynciterable"],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
\`\`\`

### 3. Define Types with TypeGraphQL

TypeGraphQL allows you to define GraphQL schemas using TypeScript classes and decorators:

\`\`\`typescript
// src/schema/user.ts
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  bio?: string;
}
\`\`\`

### 4. Create Resolvers

Resolvers implement the logic for fetching data:

\`\`\`typescript
// src/resolvers/user-resolver.ts
import { Arg, Query, Resolver } from "type-graphql";
import { User } from "../schema/user";

const users: User[] = [
  { id: "1", name: "Alice", email: "alice@example.com", bio: "Software Engineer" },
  { id: "2", name: "Bob", email: "bob@example.com" }
];

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  users(): User[] {
    return users;
  }

  @Query(() => User, { nullable: true })
  user(@Arg("id") id: string): User | undefined {
    return users.find(user => user.id === id);
  }
}
\`\`\`

### 5. Set Up the Server

\`\`\`typescript
// src/index.ts
import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: true,
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen(4000);
  console.log(\`Server is running, GraphQL Playground available at \${url}\`);
}

bootstrap().catch(console.error);
\`\`\`

## Type Safety Benefits

Using TypeScript with GraphQL provides several advantages:

1. **Compile-time type checking**: Catch errors before runtime
2. **Autocompletion**: Better developer experience
3. **Refactoring support**: Safely rename and restructure code
4. **Documentation**: Types serve as documentation

## Advanced Features

### 1. Input Types

\`\`\`typescript
@InputType()
class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  bio?: string;
}
\`\`\`

### 2. Mutations

\`\`\`typescript
@Mutation(() => User)
async createUser(
  @Arg("data") data: CreateUserInput
): Promise<User> {
  const user = {
    id: String(users.length + 1),
    ...data
  };
  users.push(user);
  return user;
}
\`\`\`

### 3. Authentication and Authorization

\`\`\`typescript
@Authorized(["ADMIN"])
@Query(() => [User])
adminUsers(): User[] {
  return users.filter(user => user.role === "ADMIN");
}
\`\`\`

## Best Practices

1. **Keep resolvers focused**: Each resolver should do one thing well
2. **Use DataLoader for batching**: Prevent N+1 query problems
3. **Implement proper error handling**: Use custom error classes
4. **Add field-level permissions**: Control access at a granular level
5. **Document your API**: Use descriptions in your schema

## Conclusion

GraphQL with TypeScript provides a powerful foundation for building modern APIs. The combination offers type safety, excellent developer experience, and a flexible API for clients. As you continue your journey, explore more advanced topics like subscriptions, custom directives, and integration with various data sources.
`,
  },
];
