const createZui = (two, stage) => {

	const domElement = two.renderer.domElement;
	domElement.style.cursor = 'grab';

	const zui = new Two.ZUI(stage, domElement);
	//zui.addLimits(0.06, 8);
	zui.addLimits(0.01, 8);
	
	var mouse = new Two.Vector();
	var touches = {};
	var distance = 0;
	
	const mousedown = e => {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
		domElement.style.cursor = 'grabbing';
		window.addEventListener('mousemove', mousemove, false);
		window.addEventListener('mouseup', mouseup, false);
	}

	const mousemove = e => {
		const dx = e.clientX - mouse.x;
		const dy = e.clientY - mouse.y;
		zui.translateSurface(dx, dy);
		mouse.set(e.clientX, e.clientY);
	}

	const mouseup = e => {
		domElement.style.cursor = 'grab';
		window.removeEventListener('mousemove', mousemove, false);
		window.removeEventListener('mouseup', mouseup, false);
	}

	const mousewheel = e => {
		var dy = (e.wheelDeltaY || - e.deltaY) / 1000;
		zui.zoomBy(dy, e.clientX, e.clientY);
	}

	const touchstart = e => {
		switch(e.touches.length) {
			case 1:
				panstart(e)
				break;
			case 2:
				pinchstart(e);
				break;
		}
	}

	const touchmove = e => {
		switch(e.touches.length) {
			case 1:
				panmove(e)
				break;
			case 2:
				pinchmove(e);
				break;
		}
	}

	const touchend = e => {
		touches = {};
		const touch = e.touches[0];
		if(touch) { // Pass through for panning after pinching
			mouse.x = touch.clientX;
			mouse.y = touch.clientY;
		}
	}

	const panstart = e => {
		const touch = e.touches[0];
		mouse.x = touch.clientX;
		mouse.y = touch.clientY;
	}

	const panmove = e => {
		const touch = e.touches[0];
		const dx = touch.clientX - mouse.x;
		const dy = touch.clientY - mouse.y;
		zui.translateSurface(dx, dy);
		mouse.set(touch.clientX, touch.clientY);
	}

	const pinchstart = e => {
		for(var i = 0; i < e.touches.length; i++) {
			const touch = e.touches[i];
			touches[touch.identifier] = touch;
		}
		const a = touches[0];
		const b = touches[1];
		const dx = b.clientX - a.clientX;
		const dy = b.clientY - a.clientY;
		distance = Math.sqrt(dx * dx + dy * dy);
		mouse.x = dx / 2 + a.clientX;
		mouse.y = dy / 2 + a.clientY;
	}

	const pinchmove = e => {
		for(var i = 0; i < e.touches.length; i++) {
			const touch = e.touches[i];
			touches[touch.identifier] = touch;
		}
		const a = touches[0];
		const b = touches[1];
		const dx = b.clientX - a.clientX;
		const dy = b.clientY - a.clientY;
		const d = Math.sqrt(dx * dx + dy * dy);
		const delta = d - distance;
		zui.zoomBy(delta / 250, mouse.x, mouse.y);
		distance = d;
	}

	// Install event handlers	
	domElement.addEventListener('mousedown', mousedown, false);
	domElement.addEventListener('mousewheel', mousewheel, false);
	domElement.addEventListener('wheel', mousewheel, false);

	domElement.addEventListener('touchstart', touchstart, false);
	domElement.addEventListener('touchmove', touchmove, false);
	domElement.addEventListener('touchend', touchend, false);
	domElement.addEventListener('touchcancel', touchend, false);
	
	return zui;

};