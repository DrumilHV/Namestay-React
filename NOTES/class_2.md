# Bundlers

1. bundler is the most imp dependency in our project.
2. Webpack is a good bundler
3. we vite , parser as bundlers all of them use different algo to optimise our code but all of them do the same thing that is to make our app production ready.
4. bun is a bundler , transpiler , package manager and an entire intigrated toolkit for javascript development.
5. the below file will help understand the different bundlers
   https://dev.to/underscorecode/javascript-bundlers-an-in-depth-comparative-is-webpack-still-the-best-bundler-in-2021-59jk
6. npm and yarn are two differnet package managers , yarn is used to install dependencies parallaly and npm does it sequentially. yarn was made to be secure.
7. vite bundler
   https://medium.com/trendyol-tech/vite-webpack-killer-or-something-else-87019b4aeca2#:~:text=in%20several%20ways%3A-,Vite%20uses%20the%20native%20ES%20modules%20feature%20in%20the%20browser,hot%20module%20replacement%20with%20Vite.
8. parcel bundler , is very powerfull
   https://parceljs.org/

# Dependencies

1. when we put npm install -D <package_name>
   npm uses this package in the development env and not in production envt.
2. we have specialin config file where all our dev dependencies will be refered.

```json
devDependencies {
   "parcel": "^2.3.0",
   ...
}
```

3. the `"^2.2.3"` has a `^` which can be seen as follows.

`~version` : “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0. <span style="color:green"> **Major updates**</span>

`^version` : “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.
<span style="color:green"> **Minor updates**</span>

`version`: Exact version !

4. Don't go for Major Updates as it can break your code in production!!!!

# Config File

1. Package.json is a configuration for our file , it will have all the dependencies / packages (both are one and the same).
2. npm will take care of the packages and dependecies I require and it done thourgh package.json
3. npm makes package.json

# Package.json V/S Package-lock.json

1. package.json will keep an approximate version of the package version and not he exact version.
2. pacage-lock.json will keep a precice version of which version to keep.
3. we see an integrity in package-lock.json in the respective dependency and see a hash ,because it is a unique dependency hash for that perticular version. It will be help full in production, because the code may break in prod cus its different from what you are running on dev, this hash helps us find out.

```json
...
 "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
 ...
```

# Node Modules

1. node modules will have all the code for all the dependencies and its like a database for all the dependencies (with code).
2. <span style="color:green"><em>**Transitive dependencies**</em> </span>: we installed parcel , which has its dependencies, and parcels dependencies will have their own dependencies , they will have their own dependencies and so on and so on.

```
                    1
                   / \
                  2   3
                 / \ / \
                4  5 6  7
               . .   .     .
            .     .  .      .
          .        . .       .
```

3. we can recreate all the dependencies using package.json and package-lock.json. So we do not need to push node_modules to git / production.
4. whatever I can regenerate I should never put on git / github , **only put essential things on github**.

## NPX

1. `npm` will execute commands whereas `npx` will execute packages

## Parcel

1. `npx parcel index.js` will make a build file to run our app.
2. We can't just import node modules in parcle. It will give error!
3. When parcel comes across html `<scrit src="app.js"></script>`, script tag and sees the `import` in `app.js` , it thows the error, that you can't import in browser scripts.
4. If we tell parcel it's a module import we resolve the error, now it's not a browser script but a module to parcel.

### Parcel does :-

- Hot module replacement
- Makes Dev build
- Makes a Locla Server
- File watching algorithm - written in C++
- Caching - faster builds
- Image optimization
- Prod Build - minification , compression of files , bundeling
- code splitting
- consistant hashing
- differntial bundelling - supports older browsers
- Diagonostics
- Error handelling
- can help us run https on local host.
- Tree shaking - removes unused code in prod

```html
<scrit type="module" src="app.js"></script>
```

## CDN is not prefered way of using React in our app

1. Fetching react from cdn link is expensive operation we need to make a network call for the same.
2. The CDN link will keep changing as the vesions of react keep rolling out.

## Import

1. When we import a module, we mean to say import the pacage from node modules.

```js
import React from "react";
```
