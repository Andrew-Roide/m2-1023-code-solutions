# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  node package manager

- What is a package?
  a directory with one or files in it with a file package.json with meta data in it

- What are some other popular package managers?
  Yarn and PNPM

- How can you create a `package.json` with `npm`?
  npm init --yes or --y

- What is a dependency and how do you add one to a package?
  dependency is a software library or package the a piece of software relies on to function.
  You can add it to a package by using keyword package command. IE npm install.

- What happens when you add a dependency to a package with `npm`?
  the dependency gets added to the package.json file as a new devDependency

- What is a devDependency and how do you add one to a package?
  dependencies needed for local development.
  you can add from the command line with npm install <package-name> --save-dev

- How do you define and run `npm` scripts? Why are these useful?
  npm scripts are commands or scripts defined in the scripts field of the package.json file. ran by using npm run
  they're useful for task automation and customization to your projects needs

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
