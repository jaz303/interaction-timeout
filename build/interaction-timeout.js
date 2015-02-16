!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.interactionTimeout=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])(1)
});