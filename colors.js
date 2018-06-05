import '@polymer/polymer/lib/elements/custom-style.js';
/**
@license
Copyright 2018 MuleSoft.
All rights reserverd.
*/
/*
Color definitions for the Anypoint colors.
*/

const $documentContainer = document.createElement('template');
$documentContainer.setAttribute('style', 'display: none;');

$documentContainer.innerHTML = `<custom-style>
  <style is="custom-style">
  :root {
    --anypoint-color-primary: #00A2DF;
    --anypoint-color-secondary: #506773;
    --anypoint-color-danger: #D1344E;
    --anypoint-color-success: #17BC65;
    --anypoint-color-tertiary: #ffffff;

    --anypoint-color-coreBlue1: #ABE2F5;
    --anypoint-color-coreBlue2: #48C1ED;
    --anypoint-color-coreBlue3: #00A2DF;
    --anypoint-color-coreBlue4: #087299;
    --anypoint-color-coreBlue5: #114459;

    --anypoint-color-robustBlue1: #A1B1B8;
    --anypoint-color-robustBlue2: #6B8A99;
    --anypoint-color-robustBlue3: #506773;
    --anypoint-color-robustBlue4: #32444D;
    --anypoint-color-robustBlue5: #272F33;

    --anypoint-color-futureGreen1: #AAF2CB;
    --anypoint-color-futureGreen2: #33CC7A;
    --anypoint-color-futureGreen3: #17BC65;
    --anypoint-color-futureGreen4: #0E8C48;
    --anypoint-color-futureGreen5: #174D30;

    --anypoint-color-aluminum1: #F9FAFB;
    --anypoint-color-aluminum2: #F4F5F6;
    --anypoint-color-aluminum3: #E8E9EA;
    --anypoint-color-aluminum4: #CACBCC;
    --anypoint-color-aluminum5: #989A9B;

    --anypoint-color-steel1: #6B6C6D;
    --anypoint-color-steel2: #58595A;
    --anypoint-color-steel3: #3A3B3C;
    --anypoint-color-steel4: #262728;
    --anypoint-color-steel5: #121314;

    --anypoint-color-yellow3: #F2BE24;
    --anypoint-color-viridian3: #00B49D;
    --anypoint-color-teal3: #00B5D1;
    --anypoint-color-navy3: #178BEA;
    --anypoint-color-indigo3: #5E66F9;
    --anypoint-color-violet3: #9A63F9;
    --anypoint-color-red3: #D1344E;
  }
  </style>
</custom-style>`;
document.head.appendChild($documentContainer.content);
