# Reface dashboard test app
Administative panel for displaying and analizing users data;

## Getting Started
First, run the development server:
- npm run dev

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Build
- npm run build

## Preview Build
- npm run preview

## Project requirements
- Create a Web page to display and analize users data
- App shoud fet data from API and display as interactive administative panel
- Use API DummyJSON: https://dummyjson.com/docs/users

#### Project required functionality
- Statistics
  - Display total users count
  - Display users median age
  - Display any other statistics
- Linear chart
  - display distribution ot years and users birth date
  - X axis - year, Y axis - number of users born in this year
- Users Table
  - Display users info - ID, Name, Email, Role, Year of Birth, Weight, Height

#### Project required tech stack
- React, Typescript, Tailwind


# Technical Overview

### React + TS + Vite

https://vite.dev/

Vite is chosen as the main frontend build tool.

- Simple minimal setup
- Supports React + TS out of the box.

This project use:
- SWC
- Rollup

### CSR / SPA 
For this project, it seems to be very rational to use simple CSR/SPA setup.
This application does not require any SEO optimizations or any "instant" loading.

Advantages:
- Easy to deploy (Static pages)
- No additional development overhead


### Http Client
As main http client we used Axios. https://axios-http.com/


### State Management 

#### Local State
All local state is managed by React Context API

*It has some cons over Redux, Zustand, etc, but considering scale of an app it is a good enpught choice for test project

#### Remote State / Data fetching / Tanstack query

https://tanstack.com/query/latest

Remote data is controlled by tanstack query library

Advantages:
- caching - api call result is storing and reused
- configurable - stale time
- rich api - isLoading, errors, isFetching, ....

### Routing

https://reactrouter.com/home

Using React Router as very popular and trusted routing lib for React apps
- using in Data mode to provide rich functionality [check data mode](https://reactrouter.com/start/data/installation)


[Router Mode overview](https://reactrouter.com/start/modes#api--mode-availability-table)

Alternatives - tanstack router https://tanstack.com/router/latest

### UI library / shadcn/ui

https://ui.shadcn.com/ 

Using shadcn/ui as very popular UI library. 
Described "will be a plus" in job description, so decided to use it :)

### Testing / Vitest

Testing benefits with a reliable and stable application.

https://vitest.dev/

Choose Vitest as main test runner

- fast
- minimal configuration
- Similar 

### CI / Github Actions

We are using CI pipelines with github actions

- runs on pull requests and push evenrs to develop and main branches

### Code quality
#### Husky / Pre-commit / Pre-push
Using Husky and Lint staged to improve code quality

- Pre-commit - runs eslint check
- Pre-push - runs unit tests with vitest run

#### Linting

Using ESLint as default option of Vite (vite create)
- using recommended production configs
- *some rules adjustments applied to shadcn/ui components

Alternatives - Oxlint, Biome (can be configured later)

### Git convention
Using basic Gitflow
- main, develop, release, etc.

Commit message conventions:
- fix (bug fix): for fixes
- feat (feature): for features
- refactor: refactors existing code without changing functionality
- chore: Changes that don't affect the codebase itself (e.g., build process updates)
- test (tests): Adds or updates tests
