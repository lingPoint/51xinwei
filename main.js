// ==UserScript==
// @name         芯位教育全自动刷网课
// @namespace    https://github.com/lingPoint/51xinwei
// @version      1.3.0
// @description  自动下一集，修复了遇到文档不能跳转下一集的问题。
// @author       Zero.
// @match        https://teaching.51xinwei.com/*
// @icon         https://teaching.51xinwei.com/*
// @grant        none
// @run-at document-end
// @license GPL-3.0 license
// ==/UserScript==

(function () {
    'use strict';
    window.alert("脚本加载成功！");
    const doc2 = document;
    const cscs = doc2.querySelector('body');
    let observer = new MutationObserver(handler);
    const options = { childList: true }
    observer.observe(cscs, options)
})();

function handler(mutationRecordList) {
    main()
}

function main() {
    const activeMenu = document.querySelector('#menu_tarr_content .courseware_menu_item.pull-left.ng-scope.active').innerText;
    if (activeMenu === ' 文档' || activeMenu === ' 作业') {
        jumpToNext();
    } else if (document.querySelector('.layui-layer-title') !== null) {
        document.querySelectorAll('.layui-layer-btn0')[0].click();
    }
}

function jumpToNext() {
    const courseChapterItems = document.querySelectorAll('.course_chapter_item.user-no-select.ng-scope');
    const activeItemText = document.querySelector('.course_chapter_item.user-no-select.ng-scope.active').innerText;
    for (let i = 0; i < courseChapterItems.length; i++) {
        if (activeItemText === courseChapterItems[i].innerText) {
            courseChapterItems[i + 1].children[1].click();
            break;
        }
    }
}
