# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && return true if both operands are true. || is if either or returns true. Used outside by combining conditions or set default values based on conditions

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  with &&, if the left side of the operands is false then the whole expression is false
  with ||, if the left side of the operands is true, then the whole expression is true and the right side of the operand is not evaluated

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  provides a default value for a variable if it is null or undefined but not not for 0, false, or empty strings

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  takes three operands, a condition, a question mark, and an expression to execute if the condition is truthy followed by a colon, and then an expression to execute if the condition is falsy.
  it's short hand for if/else

- What is the `?.` (optional chaining) operator? When would you use it?
  it access properties or methods of objects and arrays.
  used for nested objects or if the property does not exist

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  allows array or strings to be expanded in places where zero or more arguments or elements are expected

- What data types can be spread into an array? Into an object?
  array, strings, and maps

- How does spread syntax differ from rest syntax?
  spread uses ... before the iterable
  reset uses ... within a functions parameters

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
