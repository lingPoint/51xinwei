// ==UserScript==
// @name         芯位教育全自动刷网课
// @namespace    https://github.com/lingPoint/51xinwei
// @version      2.0.2
// @description  适配新版UI；主要功能：芯位教育自动播放下一课，跳过作业、文档、问卷；专注于帮助大学生从网课中释放出来 让自己的时间把握在自己的手中。
// @author       Zerox
// @match        *://*.51xinwei.com/*
// @icon         *://*.51xinwei.com/*
// @grant        none
// @run-at document-end
// @license GPL-3.0 license
// ==/UserScript==

(function () {
    'use strict';
    //window.alert("加载成功！");
    const doc2 = document;
    const cscs = doc2.querySelector('body');
    let observer = new MutationObserver(handler);
    const options = { childList: true }
    observer.observe(cscs, options)
})();

function handler(mutationRecordList) {
    main()
}

setInterval(function () {
    main()
}, 1000);

function main() {
    var activeMenutrim = document.querySelector('#menu_tarr_content .courseware_menu_item.pull-left.ng-scope.active');

    // 检查元素是否存在并且innerText属性是否有值
    if (activeMenutrim && activeMenutrim.innerText.trim() !== "") {
        // 存在且innerText有值
        console.log("老版界面");
        const activeMenu = document.querySelector('#menu_tarr_content .courseware_menu_item.pull-left.ng-scope.active').innerText;
        if (activeMenu === ' 文档' || activeMenu === ' 作业'|| activeMenu === ' 问卷') {
            jumpToNext();
        } else if (document.querySelector('.layui-layer-title') !== null) {
            document.querySelectorAll('.layui-layer-btn0')[0].click();
        }
    } else {
        if (document.querySelector('.left') !== null) {
            var leftElements = document.querySelectorAll('.left');
            leftElements.forEach(function (element) {
                element.click();
            });
            // 不存在或innerText为空
            console.log("新版界面");
        }

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
