<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

// TODO: Fix isActive or aria-current
<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --color-bg: #101f30;
  --color-main: #ffffff;
  --color-primary: #72c89e;
  --color-secondary: #d3969f;
  --color-tertiary: #b9bbc5;
}

body {
  margin: 0;
  background-color: var(--color-bg);
  color: var(--color-main);
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.03em;
}

a {
  background: transparent;
  color: var(--color-secondary);
  font-weight: bold;
}

a:focus,
a:hover,
a:active {
  background-color: var(--color-secondary);
  color: var(--color-bg);
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
#app {
  box-sizing: border-box;
  width: 35em;
  padding: 0 1.3em 1.3em;
  margin: 0 auto;
}
img {
  border-style: none;
  width: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
}
h1 {
  font-size: 3.25em;
  font-weight: 700;
}
h2 {
  font-size: 2.3em;
  font-weight: 700;
}
h3 {
  font-size: 1.6em;
  font-weight: 700;
}
h4 {
  font-size: 1.3em;
  font-weight: 700;
}
h5 {
  font-size: 1em;
  font-weight: 700;
}
h6 {
  font-size: 0.9em;
  font-weight: 700;
}
b,
strong {
  font-weight: bolder;
}
small {
  font-size: 80%;
}
.eyebrow {
  font-size: 1.3em;
}
.-text-primary {
  color: var(--color-tertiary);
}
.-text-base {
  color: var(--color-main);
}
.-text-error {
  color: tomato;
}
.-text-gray {
  color: rgba(255, 255, 255, 0.5);
}
.-shadow {
  box-shadow: 0 1px 0.2em 0 rgba(255, 255, 255, 0.2),
    0 1px 0.3em 0 rgba(255, 255, 255, 0.13);
}
.badge {
  display: inline-flex;
  height: 1.55em;
  width: auto;
  padding: 0 0.5em;
  margin: 0 0.3em;
  background: transparent;
  border-radius: 0.8em;
  font-size: 0.8em;
  font-weight: 400;
  line-height: 1.55em;
}
.badge.-fill-gradient {
  background: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-tertiary)
  );
  color: var(--color-bg);
}
button,
label,
input,
optgroup,
select,
textarea {
  display: inline-flex;
  font-family: 'Open sans', sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: none;
}
button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 2px solid var(--color-tertiary);
}
label {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
}
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(255, 255, 255, 0.4);
}
textarea {
  width: 100%;
  overflow: auto;
  font-size: 1.3em;
}
[type='checkbox'],
[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
[type='text'],
[type='number'],
[type='search'],
[type='password'] {
  height: 3.25em;
  width: 100%;
  padding: 0 0.65em;
  font-size: 1.3em;
}
[type='text']:focus,
[type='number']:focus,
[type='search']:focus,
[type='password']:focus {
  border-color: var(--color-tertiary);
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[hidden] {
  display: none;
}
select {
  width: 100%;
  height: 3.25em;
  padding: 0 1.5em 0 0.65em;
  vertical-align: middle;
  background: var(--color-bg)
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 0.75em center;
  background-size: 8px 0.65em;
  border: solid 1px rgba(255, 255, 255, 0.4);
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:focus {
  border-color: var(--color-tertiary);
  outline: 0;
}
select:focus::ms-value {
  color: var(--color-main);
  background: var(--color-bg);
}
select::ms-expand {
  opacity: 0;
}
</style>
