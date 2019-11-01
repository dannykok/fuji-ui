# Fuji UI Docs

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Setup eslint in VSCode

If you're using vscode and find linting for this project does not work, try editing the workspace settings in vscode.

1. Make sure you have installed eslint plugin in vscode
2. Cmd + Shift + P => open workspace settings => search for 'eslint'
3. Click edit 'settings.json'
4. add "/packages/[repo-name]/src" into `eslint.workspaceDirectories`. For example:

```
{
    "eslint.workingDirectories": [
        "packages/fuji-ui-docs/src"
    ]
}
```

reference: [https://github.com/microsoft/vscode-eslint/issues/696#issuecomment-537445913](ESLint fails to load plugins when using ESLint 6.x)
