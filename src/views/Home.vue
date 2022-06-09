<template>
  <section class="bg-slate-700 m-0">
    <Header />
    <div>
      <div>
        <nav class="mx-2" v-for="(War, index) in star.Wars" :key="index">
          <ul
            class="
              p-2
              text-white
              flex
              my-2
              justify-between
              items-center
              w-full
              h-60
              bg-black
            "
          >
            <div class="space-y-1">
              <li class="text-2xl pb-4">{{ War.name }}</li>
              <li>Idade: {{ War.birth_year }}</li>
              <li>Sexo: {{ War.gender }}</li>
              <li>Peso: {{ War.mass }}</li>
              <li>Altura: {{ War.height }}</li>
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
                src="../assets/beru-whitesun-lars.jpg"
                alt=""
                style="max-width: 90px"
              />
            </div>
            <div v-if="War.name === 'Biggs Darklighter'">
              <img
                src="../assets/555219906da8119104fe49da.jfif"
                alt=""
                style="max-width: 150px"
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
    });

    onMounted(() => {
      GetApi();
    });

    const GetApi = async () => {
      await axios
        .get("https://swapi.dev/api/people/?format=json")
        .then((resp) => {
          console.log(resp.data.results);
          star.value.Wars = resp.data.results;
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    return {
      star,
      GetApi,
    };
  },
});
</script>


