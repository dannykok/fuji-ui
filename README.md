# Fuji UI

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

A design framework and components for React.

I used [Yarn Workspace](https://yarnpkg.com/lang/en/docs/workspaces/) and [Lerna](https://github.com/lerna/lerna/) to managed this mono-repo.

## Getting started to development

Make sure you have yarn installed. Use Homebrew (macOS) to install if you haven't

```sh
brew install yarn
```

(optional) Install Lerna(cli) to manage package distribution

```sh
npm install lerna -g
# or, you can run via npx. e.g. to see what the packages have changed:
npx lerna changed
```

```sh
# install packages from root folder (mainly devs package e.g. babel, linter etc)
npm install

# install package dependencies
yarn
```
