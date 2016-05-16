do ()->
	@timers =
		timers: {}
		callbacks: {}
		currentTimes: {}

		add: (type = 'interval', name, callback, time, stopAfter)->
			timers.currentTimes[name] = time
			timers.callbacks[name] = {}

			if type is 'timeout'
				timers.timers[name] = setTimeout ()->
					callback()
				, time

			else if type is 'interval'
				timers.timers[name] = setInterval ()->
					callback()
					timers.invoke(name, time)
				, time

				if stopAfter
					setTimeout ()->
						clearInterval timers.timers[name]
					, stopAfter

		remove: (name)->
			clearInterval(timers.timers[name])
			delete timers.timers[name]
			delete timers.callbacks[name]
			delete timers.currentTimes[name]

		invoke: (name, time)->
			prevTime = timers.currentTimes[name]
			newTime = timers.currentTimes[name] = prevTime+time

			if timers.callbacks[name][newTime]?
				for callback in timers.callbacks[name][newTime]
					callback()

		listen: (name, time, callbackToInvoke)->
			if !timers.callbacks[name][time]?
				timers.callbacks[name][time] = []

			timers.callbacks[name][time].push(callbackToInvoke)