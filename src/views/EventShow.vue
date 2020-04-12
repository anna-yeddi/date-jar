<template>
  <h1>Showing Event {{ event.title }}</h1>
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
