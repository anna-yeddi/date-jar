<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: '1' } }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h3 class="title">{{ event.title }}</h3>
      <!-- includes a default slot -->
      <BaseIcon name="users">{{ event.attendees.length }} attendees</BaseIcon>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: 'Park Cleanup',
        date: 'Tues Apr 21, 2020',
        time: '6:30',
        attendees: [
          { id: 'qwer0987', name: 'Bob Bobson' },
          { id: 'abcd4321', name: 'Jane Janesova' }
        ]
      }
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 1.3em;
  margin-bottom: 1.5em;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:focus,
.event-card:active,
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 0.1em 0.75em 0 rgba(255, 255, 255, 0.2),
    0 1px 0.95em 0 rgba(255, 255, 255, 0.19);
}
.event-card > .title {
  margin: 0;
  color: var(--color-main);
}
.event-link {
  color: var(--color-tertiary);
  text-decoration: none;
  font-weight: 400;
}
.event-link:focus,
.event-link:active,
.event-link:hover {
  color: var(--color-secondary);
}
</style>
