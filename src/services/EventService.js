import axios from 'axios'

// Modularizing using a Service:
// Creating single instance for the entire app:

const apiClient = axios.create({
  // Base URL for all calls to use:
  baseURL: 'http://localhost:3000/',
  withCredentials: false,
  // Authentication & configuration for app to communicate with a server:
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// Create a function that will use this API Client to get events:
export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
