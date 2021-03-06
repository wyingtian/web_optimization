# Website Optimization
This is the 4th project of Front-end nano degree. 
Part1 is to optimize the index.html to get a PageSpeed Inights score of over 90 for both mobile and desktop
Part2 is to optimize pizza.html to get 60 fps

For gruntfile.js and package.json file refer to `http://gruntjs.com/getting-started`

## Usage:
1.install :
```
npm install grunt
npm install grunt-contrib-concat
npm install grunt-contrib-uglify
npm install grunt-contrib-cssmin
```

2. build 
` grunt build`


## Result Part1: Optimize PageSpeed Insights score for index.html

1. inline all css file and js file
2. minify index.html css file and js file using grunt
3. add async to js files
4. ![res1](/result/PSI_res1.png?raw=true "Optional Title")
5. ![res1](/result/PSI_res2.png?raw=true "Optional Title")
6. compress image size


## Result Part 2: Sliding pizza

1.Change the number of pizzas from 200 to 30, this is to reduced the nums of pizza element  this stills fills the screen
```javascript
document.addEventListener('DOMContentLoaded', function() {
  var cols = 8;
  var s = 256;
  for (var i = 0; i < 30; i++) {
    var elem = document.createElement('img');
    elem.className = 'mover';
    elem.src = "images/pizza.png";
    elem.style.height = "100px";
    elem.style.width = "73.333px";
    elem.basicLeft = (i % cols) * s;
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    document.querySelector("#movingPizzas1").appendChild(elem);
  }
  updatePositions();
});
```

2.In the changePizzaSize function, change query selector to getElementByClassName,this make resize under 5ms
also move the length out of the for loop also reduce the time cost.
```javascript
// Iterates through pizza elements on the page and changes their widths
// Create a container out of the loop,uesing the first selector ([0])
// from the randomPizzaContainer variable,
// Thanks to udacity reviewer Jose for the idea

function changePizzaSizes(size) {
  var container = document.getElementsByClassName('randomPizzaContainer');
  var dx = determineDx(container[0], size);
  var elemLen = container[0].length;
  var newwidth = (container[0].offsetWidth + dx) + 'px';
  for (var i = 0; i < elemLen; i++) {
    container[i].style.width = newwidth;
  }
}
  changePizzaSizes(size);
```

3.  ![res1](/result/pizzaRes.png?raw=true "Optional Title")

## Reference
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
