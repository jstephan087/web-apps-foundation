# Color Mixer

Implement a web app that can mix red, green and blue into any color like this [example](https://coding-katas.netlify.app/color-mixer/).

## Requirments

- [x] Add a header with three sliders (input with type `range`)
- [x] The sliders will control the values for a rgb color (one slider for red, one slider for green, one slider for blue)
- [x] Once a slider is moved the background color of the web app is updated
- [x] Also show the color value in the header (can be in hex or as a rgb value like this `rgb(xx,xx,xx)`)
- [x] Load a default color at the beginning (i.e. hotpink or dodgerblue)

## Hints

Example range input. The `value` property sets the default value for the range input.

```html
<input type="range" step="1" min="0" max="255" value="50" />
```
