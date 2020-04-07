<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: '1' } }"
  >
    <div class="event-card -shadow">
      <div class="eyebrow">@{{ event.time }} on {{ event.date }}</div>
      <h3 class="styles">{{ event.title }}</h3>
      <div>{{ event.attendees.length }} attendees</div>
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
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:focus,
.event-card:active,
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(255, 255, 255, 0.2),
    0 1px 15px 0 rgba(255, 255, 255, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: var(--color-tertiary);
  text-decoration: none;
  font-weight: 400;
}

.event-link > h3 {
  color: var(--color-main);
}

.event-link:focus,
.event-link:active,
.event-link:hover {
  text-decoration: underline;
  /* background-color: var(--color-secondary);
  color: var(--color-bg); */
}
</style>
