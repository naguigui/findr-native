# Titan Mobile

## Requirements

Requires `node ^10.0.0`, `Xcode 10`.

## Commands

Here are the commands to do common actions:

Using yarn:

- Installation: `yarn`
- Dev watcher connected to local server with Expo CLI: `yarn start`
- Dev watcher connected to local server running iOS: `yarn ios`
- Dev watcher connected to local server running iOS: `yarn android`
- Prettier: `yarn format`
- Plop runner: `yarn generate`

## Application structure

```
.
├── App.js                   # Application bootstrap and rendering
├── src                      # Application source code
│   ├── components           # Reusable Components (Dumb components)
│   ├── containers           # Containers (Smart components connected to Apollo)
│   ├── navigation           # Navigation stack
│   ├── services             # Services and Singletons used throught the app
│   ├── theme                # Color constants and styled components theme
│   ├── styles               # Application-wide styles and theme for styled-components
│   └── utils                # Utility methods and helpers
├── app.json                 # Application configurations
```

## Development Tools

Install the React Native Debugger which includes react-devtools-core and redux-devtools-extension

https://github.com/jhen0409/react-native-debugger

## Code Quality

[ESLint](http://eslint.org/docs/user-guide/getting-started#configuration) is used to lint all code sources.
