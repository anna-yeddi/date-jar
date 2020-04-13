<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h1 class="title">{{ event.title }}</h1>
      <dl class="flex">
        <div class="flex-item">
          <dt class="inline -text-primary">Organized by</dt>
          <dd class="inline value">{{ event.organizer }}</dd>
        </div>
        <div class="flex-item">
          <dt class="inline -text-primary">Category:</dt>
          <dd class="inline value">{{ event.category }}</dd>
        </div>
      </dl>
    </div>
    <BaseIcon name="map"><h2>Location</h2></BaseIcon>
    <address>{{ event.location }}</address>
    <h2>Event details</h2>
    <p>{{ event.description }}</p>
    <h2>
      Attendees
      <span class="badge -fill-gradient">
        <!-- as Events array is returned after the API call and not on load: -->
        {{ event.attendees ? event.attendees.length : 0 }}
      </span>
    </h2>
    <ul class="list-group">
      <li
        v-for="(attendee, index) in event.attendees"
        :key="index"
        class="list-item"
      >
        <strong>{{ attendee.name }}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
  props: ['id'],
  // specify new reactive property
  data() {
    return {
      event: {}
    }
  },
  // call API inside Created lifecycle hook:
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data
        console.log('Reactive property is created:', response.data)
      })
      .catch(err => {
        console.log('There was an error:', err.response)
      })
  }
}
</script>

<style scoped>
h2 {
  color: var(--color-tertiary);
}
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 0.625em;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  color: var(--color-primary);
  padding: 1em 0;
  border-bottom: solid 1px var(--color-tertiary);
}
</style>
