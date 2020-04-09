<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">Social Distancing Events</router-link>
    <nav aria-label="Main navigation">
      <ul>
        <router-link :to="{ name: 'event-list' }">List</router-link
        >&nbsp;|&nbsp;
        <router-link :to="{ name: 'event-create' }">Create</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75em;
}
.nav > .brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: var(--color-secondary);
  text-decoration: none;
}
.nav > .brand:focus,
.nav > .brand:active,
.nav > .brand:hover {
  color: var(--color-bg);
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 0.3em;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: var(--color-tertiary);
  border-bottom: solid 0.125em var(--color-tertiary);
}
</style>
