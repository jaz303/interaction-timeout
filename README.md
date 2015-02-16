# interaction-timeout

`interaction-timeout` creates a timeout object that will call a user-supplied function when the user has not interacted with the document for a given period of time. Useful for creating screensaver and attractors in exhibition/kiosk installations.

Compatibility notes: `interaction-timeout` uses event capturing and is therefore not compatible with IE < 9.

## Install it

    npm install --save interaction-timeout

There's also a UMD build in the `build` directory.

## Require it

	var interactionTimeout = require('interaction-timeout');

If you're using the UMD build the exported symbol is `interactionTimeout`.

## API

#### `var timer = interactionTimeout(fn, delay, [events])`

Create a timer that will call `fn` after `delay` seconds of user inactivity. Newly created timers are idle, that is they will not begin to generate callbacks until either `start()` or `startOnInteraction()` is called.

`events` is an optional list of DOM events which should be considered as user interaction; defaults to `['mousedown', 'touchstart']`.

#### `timer.start()`

Start the timer immediately. The timer's callback will fire after its `delay` has elapsed if no user interaction has occurred in the intervening period. Each user interaction resets the timer, rescheduling it for `delay` milliseconds in the future.

#### `timer.startOnInteraction()`

Schedule the timer to start on the next user interaction. This is useful for attractor screens on exhibits where the user must touch to activate.

#### `timer.stop()`

Stop the timer and prevent the callback from being fired.

## Copyright &amp; License

&copy; 2015 Jason Frame [ [@jaz303](http://twitter.com/jaz303) / [jason@onehackoranother.com](mailto:jason@onehackoranother.com) ]

Released under the ISC license.