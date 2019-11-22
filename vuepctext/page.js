var ats = "";
if (window.g1 != "/cj" && window.g2 != "http://www.jq22.com") {
	ats = "当前演示demo为外网数据加载可能有点慢，请耐心等待！"
} (function() {
	var AjaxMonitor, Bar, DocumentMonitor, ElementMonitor, ElementTracker, EventLagMonitor, Evented, Events, NoTargetError, RequestIntercept, SOURCE_KEYS, Scaler, SocketRequestTracker, XHRRequestTracker, animation, avgAmplitude, bar, cancelAnimation, cancelAnimationFrame, defaultOptions, extend, extendNative, getFromDOM, getIntercept, handlePushState, ignoreStack, init, now, options, requestAnimationFrame, result, runAnimation, scalers, shouldTrack, source, sources, uniScaler, _WebSocket, _XDomainRequest, _XMLHttpRequest, _i, _intercept, _len, _pushState, _ref, _ref1, _replaceState, __slice = [].slice,
	__hasProp = {}.hasOwnProperty,
	__extends = function(child, parent) {
		for (var key in parent) {
			if (__hasProp.call(parent, key)) child[key] = parent[key]
		}
		function ctor() {
			this.constructor = child
		}
		ctor.prototype = parent.prototype;
		child.prototype = new ctor();
		child.__super__ = parent.prototype;
		return child
	},
	__indexOf = [].indexOf ||
	function(item) {
		for (var i = 0,
		l = this.length; i < l; i++) {
			if (i in this && this[i] === item) return i
		}
		return - 1
	};
	defaultOptions = {
		catchupTime: 500,
		initialRate: .03,
		minTime: 500,
		ghostTime: 500,
		maxProgressPerFrame: 10,
		easeFactor: 1.25,
		startOnPageLoad: true,
		restartOnPushState: true,
		restartOnRequestAfter: 500,
		target: 'body',
		elements: {
			checkInterval: 100,
			selectors: ['body']
		},
		eventLag: {
			minSamples: 10,
			sampleCount: 3,
			lagThreshold: 3
		},
		ajax: {
			trackMethods: ['GET'],
			trackWebSockets: false
		}
	};
	now = function() {
		var _ref;
		return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref: +(new Date)
	};
	requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
	if (requestAnimationFrame == null) {
		requestAnimationFrame = function(fn) {
			return setTimeout(fn, 50)
		};
		cancelAnimationFrame = function(id) {
			return clearTimeout(id)
		}
	}
	runAnimation = function(fn) {
		var last, tick;
		last = now();
		tick = function() {
			var diff;
			diff = now() - last;
			if (diff >= 33) {
				last = now();
				return fn(diff,
				function() {
					return requestAnimationFrame(tick)
				})
			} else {
				return setTimeout(tick, 33 - diff)
			}
		};
		return tick()
	};
	result = function() {
		var args, key, obj;
		obj = arguments[0],
		key = arguments[1],
		args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
		if (typeof obj[key] === 'function') {
			return obj[key].apply(obj, args)
		} else {
			return obj[key]
		}
	};
	extend = function() {
		var key, out, source, sources, val, _i, _len;
		out = arguments[0],
		sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
		for (_i = 0, _len = sources.length; _i < _len; _i++) {
			source = sources[_i];
			if (source) {
				for (key in source) {
					if (!__hasProp.call(source, key)) continue;
					val = source[key];
					if ((out[key] != null) && typeof out[key] === 'object' && (val != null) && typeof val === 'object') {
						extend(out[key], val)
					} else {
						out[key] = val
					}
				}
			}
		}
		return out
	};
	avgAmplitude = function(arr) {
		var count, sum, v, _i, _len;
		sum = count = 0;
		for (_i = 0, _len = arr.length; _i < _len; _i++) {
			v = arr[_i];
			sum += Math.abs(v);
			count++
		}
		return sum / count
	};
	getFromDOM = function(key, json) {
		var data, e, el;
		if (key == null) {
			key = 'options'
		}
		if (json == null) {
			json = true
		}
		el = document.querySelector("[data-pace-" + key + "]");
		if (!el) {
			return
		}
		data = el.getAttribute("data-pace-" + key);
		if (!json) {
			return data
		}
		try {
			return JSON.parse(data)
		} catch(_error) {
			e = _error;
			return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0
		}
	};
	Evented = (function() {
		function Evented() {}
		Evented.prototype.on = function(event, handler, ctx, once) {
			var _base;
			if (once == null) {
				once = false
			}
			if (this.bindings == null) {
				this.bindings = {}
			}
			if ((_base = this.bindings)[event] == null) {
				_base[event] = []
			}
			return this.bindings[event].push({
				handler: handler,
				ctx: ctx,
				once: once
			})
		};
		Evented.prototype.once = function(event, handler, ctx) {
			return this.on(event, handler, ctx, true)
		};
		Evented.prototype.off = function(event, handler) {
			var i, _ref, _results;
			if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
				return
			}
			if (handler == null) {
				return delete this.bindings[event]
			} else {
				i = 0;
				_results = [];
				while (i < this.bindings[event].length) {
					if (this.bindings[event][i].handler === handler) {
						_results.push(this.bindings[event].splice(i, 1))
					} else {
						_results.push(i++)
					}
				}
				return _results
			}
		};
		Evented.prototype.trigger = function() {
			var args, ctx, event, handler, i, once, _ref, _ref1, _results;
			event = arguments[0],
			args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
			if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
				i = 0;
				_results = [];
				while (i < this.bindings[event].length) {
					_ref1 = this.bindings[event][i],
					handler = _ref1.handler,
					ctx = _ref1.ctx,
					once = _ref1.once;
					handler.apply(ctx != null ? ctx: this, args);
					if (once) {
						_results.push(this.bindings[event].splice(i, 1))
					} else {
						_results.push(i++)
					}
				}
				return _results
			}
		};
		return Evented
	})();
	if (window.Pace == null) {
		window.Pace = {}
	}
	extend(Pace, Evented.prototype);
	options = Pace.options = extend({},
	defaultOptions, window.paceOptions, getFromDOM());
	_ref = ['ajax', 'document', 'eventLag', 'elements'];
	for (_i = 0, _len = _ref.length; _i < _len; _i++) {
		source = _ref[_i];
		if (options[source] === true) {
			options[source] = defaultOptions[source]
		}
	}
	NoTargetError = (function(_super) {
		__extends(NoTargetError, _super);
		function NoTargetError() {
			_ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
			return _ref1
		}
		return NoTargetError
	})(Error);
	
	
}).call(this);