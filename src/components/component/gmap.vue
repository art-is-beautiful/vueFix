<template>
  <GMapMap
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      class="gmap"
  >
    <GMapMarker
        :key="marker.id"
        v-for="marker in markers"
        :position="marker.position"
    />
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 49.835458, lng: 24.015115 }, //, 
      markers: [
        {
          id: 'dfsldjl3r',
          position: {
            lat: 49.835200, lng: 24.012144  //, 
          },
        },
        {
          id: 'dkdjskdj',
          position: {
            lat: 49.837205, lng: 24.042921  //, 
          },
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

body{
    font-size: 16px;
}

.gmap {
    max-width: 50em;
    max-height: 30em;
    margin-top: 2em;
}

@media (max-width: 2400px) {
    .gmap{
        // width: 100%;
        height: 100%;
    }
}
@media (max-width: 1200px) {
    .gmap{
        // width: 100%;
        height: 100%;
    }
}
</style>

