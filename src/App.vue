<template>
  <weather-main v-if="latitude && longitude" />
  <home-error v-else-if="coordsFetchError" :error="coordsFetchError" />
  <loader v-else />
</template>

<script>
import WeatherMain from "./components/WeatherMain.vue";
import Loader from "./components/Loader.vue";
import HomeError from "./components/HomeError.vue";
import { onMounted, provide, ref } from "vue";
// import VueGoogleMap from "vuejs-google-maps";

// use(VueGoogleMap, {
//   load: {
//     apiKey: "AIzaSyA8QY-6_5cMdyochLiDP1m6NyHorH-jvfw",
//   },
// });

export default {
  name: "App",
  components: {
    WeatherMain,
    Loader,
    HomeError,
  },
  setup() {
    const latitude = ref(null);
    const longitude = ref(null);
    const coordsFetchError = ref(null);
    provide("latitude", latitude);
    provide("longitude", longitude);

    const getLatAndLong = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            latitude.value = position.coords.latitude;
            longitude.value = position.coords.longitude;
          },
          (err) => {
            if (!err) {
              return;
            }
            coordsFetchError.value =
              "Please enable location to use this weather app!";
          }
        );
      } catch (e) {
        console.log(e);
      }
    };

    onMounted(() => {
      getLatAndLong();
    });

    return {
      latitude,
      longitude,
      coordsFetchError,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
