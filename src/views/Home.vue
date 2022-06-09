<template>
  <section class="bg-slate-800 2xl:h-screen sm:h-screen lg:h-fit md:h-fit  ">
    <Header />
    <div>
      <div class=" mx-auto w-full  md:justify-center md:items-center md:w-full md:flex  flex-wrap">
        <nav class="mx-2  " v-for="(War, index) in star.Wars" :key="index">
          <ul
            class="
              p-2
              text-white
              flex
              my-2
              justify-between
              items-center
              sm:w-full
              md:w-96
              h-60
              bg-black
            "
          >
            <div class="space-y-1 md:space-y-2">
              <li class="md:text-2xl text-xl pb-4">{{ War.name }}</li>
              <li>Idade: {{ War.birth_year }}</li>
              <li>Sexo: {{ War.gender }}</li>
              <li>Peso: {{ War.mass }}</li>
              <li>Altura: {{ War.height }}</li>  
              <div class="  bg-orange-500 h-auto w-18 px-4 rounded-md  " v-if="War.name === 'Luke Skywalker'">
                <li>Starships: {{ star.ships12 }} e {{star.ships22}}</li>
              </div> 
              <div class="  bg-orange-500 h-6 w-18 px-4 rounded-md " v-if="War.name === 'Darth Vader'">
                <li>Starships: {{ star.ships13 }} </li>
              </div>
              <div class="bg-orange-500 h-auto w-auto px-4 rounded-md  " v-if="War.name === 'Obi-Wan Kenobi'">
                <li>Starships: {{ star.ships59 }} e {{star.ships65}}</li>
              </div>          
            </div>
            
            <div v-if="War.name === 'Luke Skywalker'">
              <img src="../assets/luke.png" alt="" style="max-width: 110px" />
            </div>
            <div v-if="War.name === 'C-3PO'">
              <img src="../assets/c3po.png" alt="" style="max-width: 100px" />
            </div>
            <div v-if="War.name === 'R2-D2'">
              <img src="../assets/r2d2.png" alt="" style="max-width: 115px" />
            </div>
            <div v-if="War.name === 'Darth Vader'">
              <img src="../assets/darth.png" alt="" style="max-width: 115px" />
            </div>
            <div v-if="War.name === 'Leia Organa'">
              <img src="../assets/leia.png" alt="" style="max-width: 115px" />
            </div>
            <div v-if="War.name === 'Obi-Wan Kenobi'">
              <img src="../assets/obi.png" alt="" style="max-width: 115px" />
            </div>
            <div v-if="War.name === 'Owen Lars'">
              <img src="../assets/Ows.png" alt="" style="max-width: 90px" />
            </div>
            <div v-if="War.name === 'R5-D4'">
              <img src="../assets/r2d5.png" alt="" style="max-width: 90px" />
            </div>
            <div v-if="War.name === 'Beru Whitesun lars'">
              <img
                src="../assets/beru-whitesun-lars.png"
                alt=""
                style="max-width: 90px"
              />
            </div>
            <div v-if="War.name === 'Biggs Darklighter'">
              <img
                src="../assets/BiggsDarklighter.png"
                alt=""
                style="max-width: 170px"
              />
            </div>
            
          </ul>
          
        </nav>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import Header from "../components/header.vue";
import axios from "axios";
export default defineComponent({
  name: "Home",
  components: {
    Header,
  },
  setup() {
    const star = ref({
      Wars: {},
      ships12: null,
      ships22: null,
      ships13: null,
      ships59: null,
      ships65: null
    });

    onMounted(() => {
      GetApi();
    });

    const GetApi = async () => {
      await 
        axios
        .get("https://swapi.dev/api/people/?format=json")
        .then((resp) => {star.value.Wars = resp.data.results})
        .catch((err) => {console.log(err.message)})
        
        //STARTSHIPS LUKE 12
        axios
        .get("https://swapi.dev/api/starships/12/?format=json")
        .then((resp) => {star.value.ships12 = resp.data.name})
        .catch((err) => {console.log(err.message)})
        
        //STARTSHIPS LUKE 22
        axios
        .get("https://swapi.dev/api/starships/22/?format=json")
        .then((resp) => {star.value.ships22 = resp.data.name})
        .catch((err) => {console.log(err.message)})
        
        //DARTH VADER 13
        axios
        .get("https://swapi.dev/api/starships/13/?format=json")
        .then((resp) => {star.value.ships13 = resp.data.name})
        .catch((err) => {console.log(err.message)})
        
        //OBI-WAN-KENOBI 64
        axios
        .get("https://swapi.dev/api/starships/59/?format=json")
        .then((resp) => {star.value.ships59 = resp.data.name})
        .catch((err) => {console.log(err.message)})
        
        //OBI-WAN-KENOBI 65
        axios
        .get("https://swapi.dev/api/starships/65/?format=json")
        .then((resp) => {star.value.ships65 = resp.data.name})
        .catch((err) => {console.log(err.message)})
    };

    return {
      star,
      GetApi,
    };
  },
});
</script>


