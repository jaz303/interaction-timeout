module.exports = function(fn, timeInMilliseconds, events) {

    var state = 'idle';
    var timer = null;
    
    function handleInteraction() {
        if (state !== 'idle') {
            activate();
        }
    }

    (events || ['mousedown', 'touchstart']).forEach(function(evtName) {
        document.body.addEventListener(evtName, handleInteraction, true);
    });

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