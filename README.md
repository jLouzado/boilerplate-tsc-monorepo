# Kalpataru - Monorepo Boilerplate

I got tired of all the setup required to bootstrap a new project so this is my very own wish-fulfilling, [world-tree](https://en.wikipedia.org/wiki/Kalpavriksha). Hopefully it helps others be more fruitful as well. 🙏

For now it's a template for typescript-based mono-repos, maybe in the future it's fully tricked out to be almost self-maintaining where it guides it's changes towards maturity.

## Monorepo

- Monorepos powered by [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)

```bash
$ yarn
$ yarn test
```

The first package package is setup with the following:

## Testing

- jest
- chai

## Linting

- prettier
- tslint
  - I like the options quite strict but please customize to your comfort
- spellcheck

## CI

- ci via Github Actions

## Setup

- Just make a new repo with this as a template
- rename the packages, (and the name in package.json) and you're good to go

## Wishlist

- pre-commit hooks
- react-package
- graphql
- lerna integration so commands can be run from anywhere
- publish package with [xyz](https://github.com/davidchambers/xyz)
- assert aspects of architecture with: [dependency-cruiser](https://www.npmjs.com/package/dependency-cruiser)
- remove the `quiet` of eslint once I figure out how to filter out files in eslintignore so it [doesn't cry](https://stackoverflow.com/a/59549917/3121906)
