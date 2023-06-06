# Clock

Implement a clock like this [example](https://coding-katas.netlify.app/clock/).

## Requirments

- [x] Add a digital clock
- [x] Add an analog clock

## Hints

A date can be used to get the current time.

```js
const d = new Date();
const minutes = d.getMinutes();
```

You can use `setInterval()` to execute code every n milliseconds.

```js
function logTime() {
  console.log(new Date());
}

// Log current date and time every 1000 ms (= 1 second)
setInterval(logTime, 1000);
```
