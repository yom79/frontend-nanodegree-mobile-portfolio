# Website Performance Optimization

This README lists the changes I have made for both parts of the project (index.html and pizza.html).

## Part 1: Optimize PageSpeed Insights score for index.html

### Achieve a PageSpeed Insights score of 90 for mobile/desktop

My page is being hosted on GitHub (https://yom79.github.io/frontend-nanodegree-mobile-portfolio/). This page gets PageSpeed Insights scores of 93 for mobile/95 for desktop. Changes I have made are as follows.

* Inlined minified style.css (minified using CSSO(http://css.github.io/csso/csso.html))
* Added a media query to each of the remaining CSS files (print and orientation)
* Added async to loading analytics.js and perfmatters.js
* Reduced the image file sizes and resized one of the images (I think it was pizzeria.jpg) using grunt (gruntfile.js and package.json are in the same folder as this README)

## Part 2: Optimize Frames per Second in pizza.html

I am submitting this even though as of this version of change, I am not hitting 60fps on my computer. However, since I don't consistently hit it even without the slider, resizable Pizzas or moving Pizzas, I am wondering if it is an issue with my computer (which is definitely not developer quality) - if not, please suggest additional areas where I should consider modifying.

### Resizing Pizza (Target: Under 5ms)

* resizePizzas function

  Simplified the calculations of pizza sizes and combined what used to be a few different functions into one.

* pizza.html

  Removed the onchange attribute from input, and replaced it with addEventListene in main.js.

### Scroll Performance (Target: Consistently hit 60fps)

* Image files

  Optimized two images using FileOptimizer.

* updatePositions function

  Tasks originally performed in this function are now split into updatePositions (calculates the positions of moving pizzas), updateScrollTop (stores the current scrollTop), generatingMovingPizza (calculates mod 5, which is used in phase calculations), and requestTick (requests an animation frame).

  querySelectorAll was replaced by getElementsByClassName, and moved declarations of objects to outside the loop where it made sense.

* generateMovingPizza function

  The original code implied placing moving pizzas in a box of a fixed size. Rather than generating a fixed number of moving pizzas, calculated the max number of pizzas (boxes) given the device's screen size. In most instances, the total number of moving pizzas generated is reduced by this change. Also calculated mod 5 at this stage, rather than in updatePositions.

* style.css

  Added will-change to the css for the class 'mover' to place moving pizzas on their own layer.
