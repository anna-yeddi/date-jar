<template>
  <main>
    <h1>Events Listing</h1>
    <!-- iterate with sending each Event as a prop to the EventCard component -->
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </main>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  components: {
    EventCard
  },
  // Use mock API data in the app:
  data() {
    return {
      // reactive property:
      events: []
    }
  },
  // Call mock API inside "created" lifecycle hook
  created() {
    // use EventService and it's exported function:
    EventService.getEvents()
      .then(response => {
        this.events = response.data
        console.log('Reactive property is created:', response.data)
      })
      .catch(err => {
        console.log('There was an error:', err.response)
      })
  }
}
</script>

<style></style>
