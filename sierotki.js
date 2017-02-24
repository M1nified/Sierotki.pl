"use strict";
(function(){

  let pasted = false;

  let getInput = function(){
    return document.querySelector('#input').value;
  }
  let setInput = function(input){
    document.querySelector('#input').value = input;
  }
  let pasteInput = function(){
    // document.querySelector('#input').value = '';
    // let range = document.createRange();
    // document.querySelector('#input').focus();
    // navigator.serviceWorker.controller.postMessage({execCommand:'paste'});
    // console.log(document.execCommand('paste', false, null));
  }
  let setOutput = function(output){
    document.querySelector('#output').value = output;
  }
  let selectOutput = function(){
    document.querySelector('#output').select();
  }
  let selectOutputSafe = function(){
    if(document.querySelector('#select-after-paste').checked){
      selectOutput();
    }
  }
  let copyOutput  = function(){
    selectOutput();
    ( document.execCommand('copy') && console.log('COPPIED') ) || console.log('NOT COPPIED');
  }
  let copyOutputSafe = function(){
    if(document.querySelector('#copy-on-paste').checked){
      copyOutput();
    }
  }
  let orphansFix = function(input){
    if(!input) input = '';
    let tags = [], brackets = /<[^>]*>/ig;
    for( let tag; tag = brackets.exec(input); tags.push(tag));
    console.log(tags);
    let index = 0;
    let output = "";
    tags.forEach(tag=>{
      console.log(tag);
      output += orphansFixSimple(input.slice(index,tag.index)) + tag[0];
      index = tag.index + tag[0].length;
    })
    output += orphansFixSimple(input.slice(index,input.length));
    return output;
  }
  let orphansFixSimple = function(input){
    let output = input.replace(/\w\w? /g, function(match){
      return match[0].toUpperCase() === match[0] ? match.slice(0, match.length - 1) + '&nbsp;' : match;
    }).replace(/( |(&nbsp;))\w\w? /g, function(match){
      return match.slice(0, match.length - 1) + '&nbsp;';
    }).replace(/( |(&nbsp;))\w\w? /g, function(match){
      return match.slice(0, match.length - 1) + '&nbsp;';
    });
    return output;
  }
  let input_previous = "";
  let interval_1 = setTimeout.bind(null,function(){
    let input = getInput();
    if(input != input_previous){
      setOutput(orphansFix(input));
      input_previous = input;
      // pasted && ( (pasted=false) || copyOutputSafe() );
      pasted && ( (pasted=false) || selectOutputSafe() );
    }
    interval_1();
  },100);
  window.addEventListener('load',function(){
    interval_1();
    // document.designMode="On";
    if (navigator.serviceWorker) {
      navigator.serviceWorker.register('/sierotki.background.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope:',  registration.scope);
      }).catch(function(error) {
        console.log('ServiceWorker registration failed:', error);
      });
    }
    document.querySelector('#input').addEventListener('paste',function(){
      console.log('paste');
      pasted = true;
    })
    document.querySelector('#output').addEventListener('dblclick',function(){
      copyOutput();
    })
    // document.querySelector('#input').addEventListener('click',function(){
    //   console.log('click');
    //   pasteInput();
    // })
  });
})();
