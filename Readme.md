num-auto-add is an npm package that provides the implementation of digital auto-add animation.

The use of digital augmentation animation in the website can provide users with a richer interactive experience.
Using this package is simple: first download the package, then import the package into the Vue project, then declare custom directives and num-auto-add is an npm package that provides an implementation of digital auto-animation.

The use of digital augmentation animation in the website can provide users with a richer interactive experience.
Using this package is simple: first download the package, then import the package into the Vue project, then declare custom instructions and bind the number to achieve the number increment effect.

This package is implemented by listening for scrolling events and calling the "digital increment animation" function when the element enters the viewable area, which calculates the progress of the animation and updates the element's current value. Users can also customize the total time the animation takes to execute and whether the animation can be executed multiple times. The end result is very cool and provides a richer interactive experience for the site.
## Usage
### 1. Download the package
- Download `yarn add num-auto-add` with yarn
- Download `npm i num-auto-add` with npm

### 2. Import packages
`import numAutoAdd from "num-auto-add"; `

### 3. Declare custom directives
`Vue.directive('numAutoAdd', numAutoAdd()); `

Note: The numAutoAdd function can take two arguments
- The first parameter is to set the total time (in milliseconds) for the animation to execute. The default is 700ms
- The second argument is the Boolean flag many, which indicates whether the animation can be executed more than once or only once. The default is true, which means it can be executed more than once.

### 4. Bind instructions to numbers
`<h3 v-numAutoAdd>666</h3>`

