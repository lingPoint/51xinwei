// ==UserScript==
// @name         芯位教育全自动刷网课
// @namespace    https://github.com/lingPoint/51xinwei
// @version      1.2.0
// @description  自动下一节
// @author       Zero.
// @match        https://teaching.51xinwei.com/*
// @icon         https://teaching.51xinwei.com/*
// @grant        none
// @run-at document-end
// @license AGPL-3.0 license
// ==/UserScript==

(function () {
	'use strict';
    window.alert("脚本加载成功！");
})();

const doc2 = document;
const cscs = doc2.querySelector('body');
let observer = new MutationObserver(handler);
const options = { childList: true }
observer.observe(cscs, options)
function handler(mutationRecordList) {
	//console.log(mutationRecordList);
	main()
}

function main() {
	let menu_tarr_content = document.querySelectorAll('#menu_tarr_content .courseware_menu_item.pull-left.ng-scope')
	if (menu_tarr_content.length >= 2) {
		let menu_tarr_content_active = document.querySelector('#menu_tarr_content .courseware_menu_item.pull-left.ng-scope.active').innerText
		for (let i = 0; i < menu_tarr_content.length; i++) {
			if (menu_tarr_content_active == menu_tarr_content[i].innerText) {
				if (document.querySelector('.layui-layer-title') == null) {
					wdtz()
				}
			}
			dianji()
		}
	}
}

function dianji() {
	if (document.querySelector('.layui-layer-title') != null) {
		document.querySelectorAll('.layui-layer-btn0')[0].click();
	}
}

function wdtz() {
	let course_chapter_item = document.querySelectorAll('.course_chapter_item.user-no-select.ng-scope')
	let course = document.querySelector('.course_chapter_item.user-no-select.ng-scope.active')

	let activeItemText = course.innerText
	for (let i = 0; i < course_chapter_item.length; i++) {
		if (activeItemText == course_chapter_item[i].innerText) {
			course_chapter_item[i + 1].children[1].click()
			break;
		}
	}
}
