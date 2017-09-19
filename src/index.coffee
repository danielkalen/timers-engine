Timer = new ()->
	@timers = {}
	@callbacks = {}
	@timePassed = {}

	@add = ({label, interval, stopAfter, updateCallback})->
		@timePassed[label] = 0
		@callbacks[label] = {}
		startTime = Date.now()

		@timers[label] = setInterval ()=>
			updateCallback?()
			@timePassed[label] = Date.now()-startTime
			@invokeCallbacks(label, @timePassed[label])
		, interval

		if stopAfter
			setTimeout ()=>
				@remove(label)
			, stopAfter


	@remove = (label)->
		clearInterval(@timers[label])
		delete @timers[label]
		delete @callbacks[label]
		delete @timePassed[label]


	@listen = (label, targetTime, callbackToInvoke)->
		if not @callbacks[label]
			console.error "Failed to listen to a timer - '#{label}' doesn't exist."
		else
			@callbacks[label][targetTime] ?= []
			@callbacks[label][targetTime].push(callbackToInvoke)


	@invokeCallbacks = (label, timePassed)-> if @callbacks[label]
		exceededTimePoints = Object.keys(@callbacks[label]).filter (timePoint)-> parseFloat(timePoint) < timePassed
		
		if exceededTimePoints.length
			for timePoint in exceededTimePoints
				callback() for callback in @callbacks[label][timePoint]
				delete @callbacks[label][timePoint]


	return @


module.exports = Timer