module.exports = function(fn, timeInMilliseconds) {

	var state = 'idle';
	var timer = null;
	
	function handleInteraction() {
		if (state !== 'idle') {
			activate();
		}
	}

	document.body.addEventListener('mousedown', handleInteraction, true);
	document.body.addEventListener('touchstart', handleInteraction, true);

	function activate() {
		clear();
		state = 'active';
		timer = setTimeout(handleTimeout, timeInMilliseconds);
	}

	function handleTimeout() {
		state = 'idle';
		timer = null;
		fn();
	}

	function clear() {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
	}

	function startOnInteraction() {
		clear();
		state = 'wait';
	}

	return {
		stop: function() {
			clear();
			state = 'idle';
		},
		start: function() {
			activate();
		},
		startOnInteraction: function() {
			clear();
			state = 'wait';
		}
	};

};