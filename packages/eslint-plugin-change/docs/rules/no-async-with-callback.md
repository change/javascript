# change/no-async-with-callback: Do not supply a callback to an `async` function

Making a function `async` means it returns a promise, but if it accepts a callback as well, we now have
two different mechanisms on the same function for signalling async completion and returning values.

Sometimes this is desirable, for example if we are writing an asynchronous API and we wish to allow
consumers the choice of handling a promise, or supplying a callback. In this case the function would
be expected to behave equivalently for both async mechanisms i.e. it should always invoke the callback
at the same time as settling the promise, and with the same value.

Usually we are not writing such an API, so there is no need to provide multiple equivalent async
interfaces, and providing multiple non-equivalent async interfaces is very confusing to readers, and 
may lead to hard-to-diagnose race conditions, if a new consumer mistakenly awaits the returned promise
when the callback argument was the correct usage.

This rule prevents functions from accepting callback arguments if they are also `async`.

## Example failing code

```js
async function myFunction(options, callback) {}
```

## Example passing code

```js
async function myFunction(options) {}

function myFunctionWithCb(options, callback) {}
```
