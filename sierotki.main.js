"use strict";
(function () {

  let pasted = false;

  let getInput = function () {
    return document.querySelector('#input').value;
  }
  let setInput = function (input) {
    document.querySelector('#input').value = input;
  }
  let selectInput = function () {
    console.log('select')
    document.querySelector('#input').select();
  }
  let focusInput = function () {
    console.log('focus')
    document.querySelector('#input').focus();
  }
  let setOutput = function (output) {
    document.querySelector('#output').value = output;
  }
  let selectOutput = function () {
    document.querySelector('#output').select();
  }
  let selectOutputSafe = function () {
    if (document.querySelector('#select-after-paste').checked) {
      selectOutput();
    }
  }
  let copyOutput = function () {
    selectOutput();
    (document.execCommand('copy') && console.log('COPPIED')) || console.log('NOT COPPIED');
  }
  let copyOutputSafe = function () {
    if (document.querySelector('#copy-on-paste').checked) {
      copyOutput();
    }
  }
  let orphansFix = function (input) {
    return Sierotki.orphansFix(input);
  }
  let input_previous = "";
  let interval_1 = setTimeout.bind(null, function () {
    let input = getInput();
    if (input != input_previous) {
      setOutput(orphansFix(input));
      input_previous = input;
      pasted && ((pasted = false) || selectOutputSafe());
    }
    interval_1();
  }, 100);
  window.addEventListener('load', function () {
    interval_1();
    var autosave = new InputAutosave(document.querySelectorAll(".settings input"));
    if (navigator.serviceWorker) {
      navigator.serviceWorker.register('/sierotki.background.js').then(function (registration) {
        console.log('ServiceWorker registration successful with scope:', registration.scope);
      }).catch(function (error) {
        console.log('ServiceWorker registration failed:', error);
      });
    }
    document.querySelector('#input').addEventListener('paste', function () {
      console.log('paste');
      pasted = true;
    })
    document.querySelector('#output').addEventListener('dblclick', function () {
      copyOutput();
    })
    window.addEventListener('focus', function (event) {
      event.preventDefault();
      if (document.querySelector('#focus-after-focus').checked) selectInput();
    });
  });
})();
