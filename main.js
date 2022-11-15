// ==UserScript==
// @name         芯位教育全自动刷网课
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自动下一节
// @author       Zero.
// @match        https://teaching.51xinwei.com/*
// @icon         https://teaching.51xinwei.com/*
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';

})();



// 添加GUI
function addBtns() {
    let bu = document.querySelector('.video-play-header>div');
    let b1 = document.createElement('button');
    b1.textContent='cs';
    bu.appendChild(b1);
}

const doc2 = document;

const cscs = doc2.querySelector('body');


let observer = new MutationObserver(handler);

const options = {childList:true}


observer.observe(cscs,options)

function handler(mutationRecordList){
  // window.alert("自动开启成功！");
    console.log(mutationRecordList);
    dianji1();
}





//
function dianji1(){
   var i =0;
   do {
    if (document.querySelector('.layui-layer-title') != null){
        document.querySelectorAll('.layui-layer-btn0')[0].click();
    }
    i++;
}while (i < 5)
}

