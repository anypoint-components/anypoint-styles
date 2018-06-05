import '@polymer/polymer/lib/elements/custom-style.js';

/**
@license
Copyright 2018 MuleSoft.
All rights reserverd.
*/

/*
Registeres a DIN Pro font.
*/
const $documentContainer = document.createElement('template');
$documentContainer.setAttribute('style', 'display: none;');

$documentContainer.innerHTML = `<custom-style>
<style is="custom-style">
:root {
  @font-face {
    font-family: "DIN Pro";
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/DINPro-Light.eot');
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/DINPro-Light.eot?#iefix') format('embedded-opentype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/DINPro-Light.woff2') format('woff2'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/DINPro-Light.woff') format('woff'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/DINPro-Light.ttf') format('truetype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/DINPro-Light.svg') format('svg');
    font-weight: 300;
    font-style: normal;
  }
  /* Regular - OpenSans */
  @font-face {
    font-family: "Open Sans";
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Regular.eot');
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Regular.eot?#iefix') format('embedded-opentype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Regular.woff2') format('woff2'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Regular.woff') format('woff'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Regular.ttf') format('truetype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Regular.svg') format('svg');
    font-weight: 400;
    font-style: normal;
  }
  /* Semibold - OpenSansSemiBold */
  @font-face {
    font-family: "Open Sans";
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Semibold.eot');
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Semibold.eot?#iefix') format('embedded-opentype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Semibold.woff2') format('woff2'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Semibold.woff') format('woff'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Semibold.ttf') format('truetype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Semibold.svg') format('svg');
    font-weight: 600;
    font-style: normal;
  }
  /* Bold - OpenSansBold */
  @font-face {
    font-family: "Open Sans";
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Bold.eot');
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Bold.eot?#iefix') format('embedded-opentype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Bold.woff2') format('woff2'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Bold.woff') format('woff'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Bold.ttf') format('truetype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Bold.svg') format('svg');
    font-weight: 700;
    font-style: normal;
  }
  /* Light - OpenSansLight */
  @font-face {
    font-family: "Open Sans";
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Light.eot');
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Light.eot?#iefix') format('embedded-opentype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Light.woff2') format('woff2'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Light.woff') format('woff'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Light.ttf') format('truetype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Light.svg') format('svg');
    font-weight: 200;
    font-style: normal;
  }
  /* Light Italic - OpenSansLightItalic */
  @font-face {
    font-family: "Open Sans";
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-LightItalic.eot');
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-LightItalic.eot?#iefix') format('embedded-opentype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-LightItalic.woff2') format('woff2'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-LightItalic.woff') format('woff'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-LightItalic.ttf') format('truetype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-LightItalic.svg') format('svg');
    font-weight: 200;
    font-style: italic;
  }
  /* Monospaced (for code examples, logs, etc) */
  @font-face {
    font-family: "Source Code Pro";
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/SourceCodePro-Regular.eot');
    src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/SourceCodePro-Regular.eot?#iefix') format('embedded-opentype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/SourceCodePro-Regular.woff2') format('woff2'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/SourceCodePro-Regular.woff') format('woff'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/SourceCodePro-Regular.ttf') format('truetype'), url('https://d2mrfksxwk2en8.cloudfront.net/fonts/SourceCodePro-Regular.svg') format('svg');
    font-weight: 400;
    font-style: normal;
  }
}
</style>
</custom-style>`;
document.head.appendChild($documentContainer.content);
