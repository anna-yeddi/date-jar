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
  --color-primary: #b9bbc5;
  --color-secondary: #d3969f;
  --color-tertiary: #a2cde2;
  --color-success: #72c89e;
  --color-error: tomato;
}

body {
  margin: 0;
  background-color: var(--color-bg);
  color: var(--color-main);
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.03rem;
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
  width: 40rem;
  padding: 0 1.3rem 1.3rem;
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
  font-size: 3.25rem;
  font-weight: 700;
}
h2 {
  font-size: 2.3rem;
  font-weight: 700;
}
h3 {
  font-size: 1.6rem;
  font-weight: 700;
}
h4 {
  font-size: 1.3rem;
  font-weight: 700;
}
h5 {
  font-size: 1rem;
  font-weight: 700;
}
h6 {
  font-size: 0.9rem;
  font-weight: 700;
}
b,
strong {
  font-weight: bolder;
}
small {
  font-size: 0.8rem;
}
.eyebrow {
  font-size: 1.3rem;
}
.flex {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
}
.flex-item {
  flex-basis: 1 0 auto;
}
.inline {
  display: inline;
}
.value {
  margin-inline-start: 0.4rem;
}
.-text-primary {
  color: var(--color-primary);
}
.-text-secondary {
  color: var(--color-secondary);
}
.-text-base {
  color: var(--color-main);
}
.-text-error {
  color: var(--color-error);
}
.-text-gray {
  color: rgba(255, 255, 255, 0.5);
}
.-shadow {
  box-shadow: 0 1px 0.2rem 0 rgba(255, 255, 255, 0.2),
    0 1px 0.3rem 0 rgba(255, 255, 255, 0.13);
}
.badge {
  display: inline-flex;
  height: 1.625rem;
  width: auto;
  padding: 0 0.437rem;
  margin: 0 0.313rem;
  background: transparent;
  border-radius: 0.813rem;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 1.625rem;
}
.badge.-fill-gradient {
  background: linear-gradient(
    to right,
    var(--color-tertiary),
    var(--color-main)
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
  outline: 0.125rem solid var(--color-primary);
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
  font-size: 1.3rem;
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
  outline-offset: -0.125rem;
}
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
[type='text'],
[type='number'],
[type='search'],
[type='password'] {
  height: 3.25rem;
  width: 100%;
  padding: 0 0.65rem;
  font-size: 1.3rem;
}
[type='text']:focus,
[type='number']:focus,
[type='search']:focus,
[type='password']:focus {
  border-color: var(--color-primary);
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
  height: 3.25rem;
  padding: 0 1.5rem 0 0.65rem;
  vertical-align: middle;
  background: var(--color-bg)
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 0.75rem center;
  background-size: 0.5rem 0.65rem;
  border: solid 1px rgba(255, 255, 255, 0.4);
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:focus {
  border-color: var(--color-primary);
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
