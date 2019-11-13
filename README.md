[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# Harri IO

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

## Setting up your dev environment

Pre-requisites:

- Yarn
  - [Windows install guide](https://yarnpkg.com/lang/en/docs/install/#windows-stable)
  - [Mac install guide](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
- Latest version of node (tested on 8.x, 10.x & 12.x).

- **Windows specifics**:
  - `yarn global add windows-build-tools`
  - `yarn global add @angular/cli`

Once the pre-requisite software is installed, navigate to the root of the repo and run `yarn`. You should now be setup!

---

## Development server

`ng serve`

`ng serve --aot` for an AOT serve

---

## Build

- `ng build --prod`

The build artifacts will be stored in the `dist/` directory.

---

## Running unit tests

Run `yarn test` to execute the unit tests via [Jest](https://jestjs.io/).

To run standalone tests per library/app:

- harri-io: `ng test --project=harri-io`
- playlist-explorer: `ng test --project=playlist-explorer`
- movie-library: `ng test --project=movie-library`

`ng test` can be passed any of the additional [Jest config options](https://jestjs.io/docs/en/cli.html), such as `--watch`

---

## Dependency Visualisation

- `yarn dep-graph` will show a complete project dependency tree
- `yarn affected:dep-graph --base=<BASE_HASH>` will show dependencies affected by changes between the tip of your current branch and the base commit/branch specified. Substitute `<BASE_HASH>` for the name of a branch (i.e. `master`) or a commit hash.

---

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via Cypress.
