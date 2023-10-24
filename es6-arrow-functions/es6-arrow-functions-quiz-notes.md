# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  sometimes assigned to a variable and then (parameters) => expression

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  when it's not in curly braces, there is the implicit return of the expression without the return keyword. With curly braces needs the return for explicit return

- When using _concise body syntax_, how do you return an object literal?
  you wrap the object literal in parentheses

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    () => 42

  - How many arguments does the arrow function take?
    0

  - What value does it return?
    42

  - How many arguments are passed to the function `foo`?
    1

  - What type of argument is passed to the function `foo`?
    function

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    (y) => {}

  - How many arguments does the arrow function take?
    1

  - What value does it return?
    log method of the console object

  - How many arguments are passed to the function `bar`?
    1

  - What type of argument is passed to the function `bar`?
    function

  - When does the arrow function's code get executed?
    when bar invokes it

- How does the value of `this` differ between standard functions and arrow functions?
  standard functions has it's own this binding determined by how it's called
  arrow function iherits the this. does not have it's own this binding

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
