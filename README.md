# rollup-app-test

## Markdown ESlint test

```js
// This gets linted
var answer = 6 * 7;
console.log(answer);
```

```JavaScript
// This also gets linted

function hello() {
  console.log('Hello, world!');
}
hello();
```

```jsx
// This gets linted too
var div = <div className="jsx"></div>;
```

```node
// And this
console.log(process.version);
```
