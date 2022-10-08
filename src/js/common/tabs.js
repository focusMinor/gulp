if(document.querySelectorAll('[data-tab]').length > 0) {
	const tabs = document.querySelectorAll('[data-tab]');
	tabs.forEach(tab => {
		const btns  = tab.querySelectorAll('[data-tab-btn]');
		const bodys = tab.querySelectorAll("[data-tab-body]");
		for (let i = 0; i < btns.length; i++) {
			const btn = btns[i];
			for (let k = 0; k < bodys.length; k++) {
				const body = bodys[k];
				btn.addEventListener('click', () => {
					if(btn.getAttribute("data-tab-btn") == body.getAttribute("data-tab-body")) {
						btns.forEach(btn => {btn.classList.remove('tcaer')})
						bodys.forEach(body => {body.classList.remove('tcaer')})
						btn.classList.add('tcaer');
						body.classList.add('tcaer');
					}
				})
			}
		}
	});
}