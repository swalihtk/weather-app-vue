<template>
  <div class="bg-[#F3F6FA] h-full md:h-[100vh] p-8 md:p-14">
    <!-- weather container -->
    <div class="bg-white h-full flex items-center flex-col md:flex-row">
      <!-- left container -->
      <div class="p-7 flex-[0.3]">
        <!-- yourcity label -->
        <div class="flex gap-3 items-center justify-center">
          <label class="font-semibold w-[70px]">Your City</label>
          <input
            type="text"
            value="Mannarkkad"
            disabled
            class="px-3 py-2 rounded-md bg-white"
            style="border: 1px solid #b8b8b8"
          />
        </div>
        <!-- time -->
        <div class="mt-8 md:mt-24 text-center">
          <p class="text-lg">05:05 PM, Mon, Nov 23, 2020</p>
        </div>
        <!-- weather details -->
        <div class="flex gap-3 mt-9 justify-center items-center">
          <img src="../assets/clouds.png" alt="cloudes" class="w-[7rem]" />
          <h1 class="font-extrabold text-[45px] relative">
            72
            <span class="text-[12px] absolute right-[-10px] top-[10px]">F</span>
          </h1>
        </div>
        <!-- weather status -->
        <h1 class="text-[30px] font-extrabold mt-2">Cloudy</h1>
        <!-- humidity and wind speed -->
        <div class="flex justify-around mt-6">
          <div>
            <h1>Humidity</h1>
            <h1 class="font-bold mt-2">45%</h1>
          </div>
          <div>
            <h1>Wind Speed</h1>
            <h1 class="font-bold mt-2">19.2 km/j</h1>
          </div>
        </div>
      </div>

      <!-- right container -->
      <div class="p-5 lg:p-7 flex-[0.7]">
        <h1 class="font-bold text-xl md:mt-10 text-left">Temperature</h1>
        <!-- graph -->
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/55b6a6dce4b089e11621d3ed/1585087896250-R3GZ6OFWYQRZUJRCJU3D/produce_monthly.png"
            alt=""
            class="w-full h-[250px]"
          />
        </div>
        <!-- daily based humidity -->
        <div class="flex mt-3">
          <!-- humidity card -->
          <div
            class="
              w-[25%]
              flex flex-col
              items-center
              py-4
              gap-1
              rounded-md
              bg-[#5596F6]
              text-white
              font-bold
            "
          >
            <p>Today</p>
            <img src="../assets/clouds.png" alt="" class="w-[30%]" />
            <p>Humidity</p>
            <p>30%</p>
          </div>
          <!-- humidity card -->
          <div
            class="
              w-[25%]
              flex flex-col
              items-center
              py-4
              gap-1
              rounded-md
              font-bold
            "
          >
            <p>Today</p>
            <img src="../assets/clouds.png" alt="" class="w-[30%]" />
            <p>Humidity</p>
            <p>30%</p>
          </div>
          <!-- humidity card -->
          <div
            class="
              w-[25%]
              flex flex-col
              items-center
              py-4
              gap-1
              rounded-md
              font-bold
            "
          >
            <p>Today</p>
            <img src="../assets/clouds.png" alt="" class="w-[30%]" />
            <p>Humidity</p>
            <p>30%</p>
          </div>
          <!-- humidity card -->
          <div
            class="
              w-[25%]
              flex flex-col
              items-center
              py-4
              gap-1
              rounded-md
              font-bold
            "
          >
            <p>Today</p>
            <img src="../assets/clouds.png" alt="" class="w-[30%]" />
            <p>Humidity</p>
            <p>30%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherMain",
};
</script>
