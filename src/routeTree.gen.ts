/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as ProjectsIndexImport } from './routes/projects/index'
import { Route as BlogIndexImport } from './routes/blog/index'
import { Route as ProjectsProjectIdImport } from './routes/projects/$projectId'
import { Route as BlogBlogIdImport } from './routes/blog/$blogId'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsIndexRoute = ProjectsIndexImport.update({
  id: '/projects/',
  path: '/projects/',
  getParentRoute: () => rootRoute,
} as any)

const BlogIndexRoute = BlogIndexImport.update({
  id: '/blog/',
  path: '/blog/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsProjectIdRoute = ProjectsProjectIdImport.update({
  id: '/projects/$projectId',
  path: '/projects/$projectId',
  getParentRoute: () => rootRoute,
} as any)

const BlogBlogIdRoute = BlogBlogIdImport.update({
  id: '/blog/$blogId',
  path: '/blog/$blogId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/blog/$blogId': {
      id: '/blog/$blogId'
      path: '/blog/$blogId'
      fullPath: '/blog/$blogId'
      preLoaderRoute: typeof BlogBlogIdImport
      parentRoute: typeof rootRoute
    }
    '/projects/$projectId': {
      id: '/projects/$projectId'
      path: '/projects/$projectId'
      fullPath: '/projects/$projectId'
      preLoaderRoute: typeof ProjectsProjectIdImport
      parentRoute: typeof rootRoute
    }
    '/blog/': {
      id: '/blog/'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogIndexImport
      parentRoute: typeof rootRoute
    }
    '/projects/': {
      id: '/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/blog/$blogId': typeof BlogBlogIdRoute
  '/projects/$projectId': typeof ProjectsProjectIdRoute
  '/blog': typeof BlogIndexRoute
  '/projects': typeof ProjectsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/blog/$blogId': typeof BlogBlogIdRoute
  '/projects/$projectId': typeof ProjectsProjectIdRoute
  '/blog': typeof BlogIndexRoute
  '/projects': typeof ProjectsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/blog/$blogId': typeof BlogBlogIdRoute
  '/projects/$projectId': typeof ProjectsProjectIdRoute
  '/blog/': typeof BlogIndexRoute
  '/projects/': typeof ProjectsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/blog/$blogId'
    | '/projects/$projectId'
    | '/blog'
    | '/projects'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/blog/$blogId'
    | '/projects/$projectId'
    | '/blog'
    | '/projects'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/blog/$blogId'
    | '/projects/$projectId'
    | '/blog/'
    | '/projects/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  BlogBlogIdRoute: typeof BlogBlogIdRoute
  ProjectsProjectIdRoute: typeof ProjectsProjectIdRoute
  BlogIndexRoute: typeof BlogIndexRoute
  ProjectsIndexRoute: typeof ProjectsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  BlogBlogIdRoute: BlogBlogIdRoute,
  ProjectsProjectIdRoute: ProjectsProjectIdRoute,
  BlogIndexRoute: BlogIndexRoute,
  ProjectsIndexRoute: ProjectsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/blog/$blogId",
        "/projects/$projectId",
        "/blog/",
        "/projects/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/blog/$blogId": {
      "filePath": "blog/$blogId.tsx"
    },
    "/projects/$projectId": {
      "filePath": "projects/$projectId.tsx"
    },
    "/blog/": {
      "filePath": "blog/index.tsx"
    },
    "/projects/": {
      "filePath": "projects/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
