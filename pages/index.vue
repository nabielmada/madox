<template>
  <section
    id="home"
    class="container d-flex flex-column justify-content-center align-items-center"
  >
    <div>
      <h1 class="fw-bold text-title">MadoX</h1>
    </div>
    <div class="mt-2">
      <input
        type="text"
        id="store-number"
        class="form-control"
        v-model="store_number"
        @input="processNumbers"
      />
    </div>
    <div class="mt-2 text-desc">Masukkan urutan angka 10 hari terakhir</div>
    <div class="mt-4">
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" v-model="mrx1" id="mrx1" autocomplete="off">
        <label class="btn btn-outline" for="mrx1">MrX1</label>

        <div class="mx-3">
          <input type="radio" class="btn-check" name="btnradio" v-model="mrx2" id="mrx2" autocomplete="off">
          <label class="btn btn-outline" for="mrx2">MrX2</label>
        </div>

        <input type="radio" class="btn-check" name="btnradio" v-model="mrx3" id="mrx3" autocomplete="off">
        <label class="btn btn-outline" for="mrx3">MrX3</label>
      </div>
    </div>
    <div class="mt-4">
      <button
        type="button"
        class="btn btn-primary px-4"
        @click="generateResult"
      >
        <i class="bi bi-rocket"></i> Generate
      </button>
    </div>
  </section>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="isModalVisible">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-body bg-dark">
          <section
            id="outputs"
            class="container d-flex flex-column justify-content-center align-items-center text-center"
          >
            <div class="card bg-dark w-100">
              <div class="card-body text-white">
                <div class="d-flex flex-column">
                  <div>
                    <div class="fw-bold">Urutan</div>
                    <div>{{ this.store_number }}</div>
                  </div>
                  <div class="container text-center mt-3">
                    <div class="row align-items-start">
                      <div class="col-12 col-md-4">
                        <div class="fw-bold">Result</div>
                        <textarea
                          id="step6-result"
                          rows="5"
                          cols="35"
                          class="bg-dark text-white text-sm w-100"
                          readonly
                          :value="result.join('*')"
                        ></textarea>
                        <p class="text-desc">Total {{ result.length }} Angka</p>
                        <button type="button" class="btn btn-sm btn-primary mb-4 me-2"
                          @click="copyToClipboard(result.join('*'))"
                        >
                          Copy
                        </button>
                        <button type="button" class="btn btn-sm btn-primary mb-4" 
                          @click="shuffleGroup"
                        >
                          Shuffle
                        </button>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="fw-bold">Web 1</div>
                        <textarea
                          id="web1-result"
                          rows="5"
                          cols="35"
                          class="bg-dark text-white w-100"
                          readonly
                          :value="resultWebSatu.join('*')"
                        ></textarea>
                        <p class="text-desc">Total {{ resultWebSatu.length }} Angka</p>
                        <button
                          type="button"
                          class="btn btn-sm btn-primary mb-4 me-2"
                          @click="copyToClipboard(resultWebSatu.join('*'))"
                        >
                          Copy
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-primary mb-4"
                          @click="shuffleGroupWeb1"
                        >
                          Shuffle
                        </button>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="fw-bold">Web 2</div>
                        <textarea
                          id="web2-result"
                          rows="5"
                          cols="35"
                          class="bg-dark text-white w-100"
                          readonly
                          :value="resultWebDua.join('*')"
                        ></textarea>
                        <p class="text-desc">Total {{ resultWebDua.length }} Angka</p>
                        <button
                          type="button"
                          class="btn btn-sm btn-primary mb-4 me-2"
                          @click="copyToClipboard(resultWebDua.join('*'))"
                        >
                          Copy
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-primary mb-4"
                          @click="shuffleGroupWeb2"
                        >
                          Shuffle
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { madoxsStore } from "@/store/madox";

export default {
  name: "Madox",
  data() {
    return {
      mrx1: false,
      mrx2: false,
      mrx3: false,
      store_number: "",
      result: [],
      resultWebSatu: [],
      resultWebDua: [],
      resultJoker: [],
      isGenerate: "N",
      isModalVisible: false,
    };
  },
  mounted() {
    // this.handleBeforeUnload();
  },
  methods: {
    // handleBeforeUnload() {
    //     window.addEventListener("beforeunload", function (e) {
    //       e.preventDefault();
    //       e.returnValue = "";
    //   });
    // },
    generateResult() {
      const store = madoxsStore();
      if (this.mrx1) {
        store.generateNumbersMrX1(this.store_number);
      }
      if (this.mrx2) {
        store.generateNumbersMrX2(this.store_number);
      }
      if (this.mrx3) {
        store.generateNumbersMrX3(this.store_number);
      }
        this.result = store.dataResult;
        this.isGenerate = store.isGenerate;
        this.resultJoker = store.resultJoker
        this.resultWebDua = store.resultWebDua
        this.resultWebSatu = store.resultWebSatu

        this.isModalVisible = true;
        this.$nextTick(() => {
          const modalElement = document.getElementById('exampleModal');
          const modal = new bootstrap.Modal(modalElement);
          modal.show();
        });
    },
    copyToClipboard(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("Copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    },
    shuffleGroup() {
      if (this.result.length > 0) {
        let groupNumbersArray = this.result
          .map(num => num.toString().trim())
          .filter(num => num);
        
        groupNumbersArray.sort(() => Math.random() - 0.5);
        this.result = groupNumbersArray;
      }
    },
    shuffleGroupWeb1() {
      if (this.resultWebSatu.length > 0) {
        this.resultWebSatu.sort(() => Math.random() - 0.5);
      }
    },
    shuffleGroupWeb2() {
      if (this.resultWebDua.length > 0) {
        this.resultWebDua.sort(() => Math.random() - 0.5);
      }
    },
  },
};
</script>
