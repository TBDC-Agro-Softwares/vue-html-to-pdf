<p align="center">
  <a href="https://tbdc.com.br/" target="_blank">
    <img width="150" src="src/assets/logo.svg" alt="tbdc logo">
  </a>
</p>

<p align="center">
  <a href="https://v3.vuejs.org/">
    <img alt="Vue" src="https://img.shields.io/badge/vue-3.0.0-78c930.svg?label=Vue">
  </a>
  <a href="https://dev.azure.com/TBDC-AGRO/TBDC/_wiki/wikis/TBDC%20DOCUMENTA%C3%87%C3%83O/295/TBDC-Style-Guide">
    <img alt="Prettier" src="https://img.shields.io/badge/Code_Style-TBDC-0050a0.svg">
  </a>
  <a href="https://discord.gg/Aa5mDPF">
    <img alt="Discord" src="https://img.shields.io/discord/739938594617032816?color=%236e82d1&label=Discord">
  </a>
</p>


---
This library is based on: https://github.com/kempsteven/vue-html2pdf

> The need for a new repository was the usage of vite

---
## Get Started
This library is basically a vue wrapper only and uses `html2pdf.js` behind the scenes.


## Install

- `npm`
```bash
npm i @tbdc-agro-softwares/vue-html-to-pdf 
```

- `yarn`
```bash
yarn add @tbdc-agro-softwares/vue-html-to-pdf 
```

- `pnpm`
```bash
pnpm add @tbdc-agro-softwares/vue-html-to-pdf 
```

## Usage

### Vue

```html
<script lang="ts" setup>
import '@tbdc-agro-softwares/vue-html-to-pdf/dist/vue-html-to-pdf.css';
import VueHtmlToPdf from '@tbdc-agro-softwares/vue-html-to-pdf';

const html2Pdf = ref();

// Generate Report using refs and calling the refs function generatePdf()
function generateReport () {
    html2Pdf.value?.generatePdf()
}
</script>

<template>
  <VueHtmlToPdf
    ref="html2Pdf"
    :show-layout="false"
    :float-layout="true"
    :enable-download="true"
    :preview-modal="true"
    :paginate-elements-by-height="1400"
    :pdf-quality="2"
    :manual-pagination="false"
    filename="generated_pdf"
    pdf-format="a4"
    pdf-orientation="landscape"
    pdf-content-width="800px"
    @progress="onProgress($event)"
    @hasStartedGeneration="hasStartedGeneration()"
    @hasGenerated="hasGenerated($event)"
  >
    <section slot="pdf-content">
      <!-- PDF Content Here -->
    </section>
  </VueHtmlToPdf>
</template>
```

### Nuxt

```ts
// plugins/vue-html-to-pdf.ts
import '@tbdc-agro-softwares/vue-html-to-pdf/dist/vue-html-to-pdf.css';

import Vue from 'vue'
import VueHtml2pdf from '@tbdc-agro-softwares/vue-html-to-pdf'
Vue.use(VueHtml2pdf)
```

```ts
// nuxt.config.ts
plugins: [
  { src: '@/plugins/vue-html-to-pdf', mode: 'client' }
],
```

```html
<script lang="ts" setup>
// On component-usage.vue you should add <ClientOnly> tag.
// More info for <ClientOnly> tag: https://nuxtjs.org/api/components-client-only/
import VueHtml2pdf from '@tbdc-agro-softwares/vue-html-to-pdf'
</script>

<template>
  <ClientOnly>
    <VueHtmlToPdf>
      <section slot="pdf-content">
        <!-- Content goes in here -->
      </section>
    </VueHtmlToPdf>
  </ClientOnly>
</template>
```


## Props
This props can seen in the Usage Part

| Props                       | Options                  | Description                                                                                                         |
|-----------------------------|--------------------------|---------------------------------------------------------------------------------------------------------------------|
| `show-layout`                 | `boolean`              | Shows the pdf-content slot, using this you can see what contents will be converted to PDF.                          |
| `float-layout`                | `boolean`              | Enabled by default. If the props is set to `false` The props `show-layout` will be overridden. The layout will not float and the layout will ALWAYS show. |
| `enable-download`             | `boolean`              | Enabled by default. When enabled the pdf will be downloaded and vise-versa.                                         |
| `preview-modal`               | `boolean`              | Once you generate the pdf, PDF will be previewed on a modal, PDF will not be downloaded.                            |
| `paginate-elements-by-height` | `number`               | The given number will be used to paginate elements, the number will be in px units only.                          |
| `manual-pagination`           | `boolean`              | When enabled, the package will NOT automatically paginate the elements. Instead the pagination process will rely on the elements        with a class "html2pdf__page-break" to know where to page break, which is automatically done by html2pdf.js |
| `filename`                    | `string`               | The given number will be used to paginate elements, the number will be in px units only.                          |
| `pdf-quality`                 | `0` - `2` (Can have decimal) | 2 is the highest quality and 0.1 is the lowest quality, 0 will make the PDF disappear.                              |
| `pdf-format`                  | `a0` to `a10`, `letter`, `legal` | This are the PDF formats (Paper Sizes)                                            |
| `pdf-orientation`             | `portrait`, `landscape`      | This are the PDF orientation                                                                                        |
| `pdf-content-width`           | Any css sizes (e.g. `800px`, `65vw`, `70%`) | This is the PDF's content width                                                                  |
| `html-to-pdf-options`         | [html-to-pdf-options details here](#html-to-pdf-options) | This prop gives a way to configure the whole `html2pdf.js` options                    |


### html-to-pdf-options 
| Name       | Type               | Default                        | Description   |
|------------|--------------------|--------------------------------|----------------------------------------------------------------|
|`margin`    |`number` or `array` | `0`                              | PDF margin (in jsPDF units). Can be a single number, `[vMargin, hMargin]`, or `[top, left, bottom, right]`. |
|`filename`  |`string`          |`file.pdf`                      |The default filename of the exported PDF.                                                                   |
|`image`     |`object`          |`{type: 'jpeg', quality: 0.95}` |The image type and quality used to generate the PDF. See [Image type and quality](https://www.npmjs.com/package/html2pdf.js/v/0.9.0#image-type-and-quality).|
|`enableLinks` |`boolean`         | `false`                          |If enabled, PDF hyperlinks are automatically added on top of all anchor tags.                                |
|`html2canvas` |`object`          |`{ }`                           |Configuration options sent directly to `html2canvas` ([see here](https://html2canvas.hertzen.com/configuration) for usage).|
|`jsPDF`       |`object`          |`{ }`                           |Configuration options sent directly to `jsPDF` ([see here](http://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html) for usage).|


## Events
This events can seen in the Usage Part

| Events                      | Description                                                                                                                  |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------|
| `progress`                   | This will return the progress of the PDF Generation. The event argument contains the progress of the PDF generation process. |
| `startPagination`            | This will be triggered on start of pagination process.                                                                       |
| `hasPaginated`               | This will be triggered after the pagination process.                                                                         |
| `beforeDownload`             | This will be triggered before the PDF generation and download. The event arguments contains an object `{ html2pdf, options, pdfContent }`, which can be used to have full control of html2pdf.js like e.g.(Add page count on each PDF page, Full control of jsPDF to design page, etc.), you will have to set the props `:enable-download`, `:preview-modal` to false so it will not generate the PDF. |
| `hasDownloaded`              | This will be triggered after downloading the PDF. The event arguments contains the Blob File of the generated PDF. This will NOT be triggered if the props `enable-download` AND `preview-modal` is set to false. |


## Slot
This slot can seen in the Usage Part

| Slot                     | Description                                                                                                         |
|--------------------------|---------------------------------------------------------------------------------------------------------------------|
| `pdf-content`              | Use this slot to insert your component or element that will be converted to PDF                                      |


## Page Break
By adding an element with a class of `html2pdf__page-break` will add page break after that element.

Usage:
This can still be used with the automatic pagination of the package or
when the prop `manual-pagination` is enabled

Sample Usage:
```html
<section slot="pdf-content">
  <section class="pdf-item">
    <h4>Title</h4>
    <span>Value</span>
  </section>

  <!--
    After this element below, the page will break and any elements after
    <div class="html2pdf__page-break"/> will go to the next page.
  -->
  <div class="html2pdf__page-break"/>

  <section class="pdf-item">
    <h4>Title</h4>
    <span>Value</span>
  </section>
</section>
```

## Guide
The recommended format for the pdf-content

```html
<section slot="pdf-content">
  <!--
    Divide your content into section, this pdf-item will
    be the element that it's content will not be separated
    in the paginating process. ex. <h4> and <span> wont be separated.
  -->
  <section class="pdf-item">
    <h4>Title</h4>
    <span>Value</span>
  </section>

  <!--
    All other pdf-item will be separated in the pagination process,
    depending on paginate-elements-by-height prop.
  -->
  <section class="pdf-item">
    <h4>Title</h4>
    <span>Value</span>
  </section>

  <!--
    If you have any image with a remote source
    set html2canvas.useCORS to true, although it is set to true by default
    Ex.
    html2canvas: {
      useCORS: true
    }
  -->
  <section class="pdf-item">
    <img :src="remoteImageLink">
  </section>
</section>
```

## License
[The MIT License](http://opensource.org/licenses/MIT)