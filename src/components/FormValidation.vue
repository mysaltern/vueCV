<template>
  <div class="card">
    <h3 class="card-header text-center">Contact Area</h3>
    <div class="card-body">
      <div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.email.$error }"
        >
          <label class="form__label">Email</label>
          <br />
          <input class="form__input" v-model.trim="$v.email.$model" />
        </div>
        <div class="error" v-if="!$v.email.required">Field is required</div>
        <div class="error" v-if="!$v.email.email">
          your email format is incorrect.
        </div>
        <!-- <tree-view
          :data="$v.email"
          :options="{ rootObjectKey: '$v.email' }"
        ></tree-view> -->
        <br />
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.description.$error }"
        >
          <label class="form__label">description</label>
          <br />
          <textarea
            class="form__input"
            v-model.trim.lazy="$v.description.$model"
          />
        </div>
        <div class="error" v-if="!$v.description.required">
          Field is required
        </div>
        <div class="error" v-if="!$v.description.minLength">
          Description must have at least
          {{ $v.description.$params.minLength.min }} letters.
        </div>
        <!-- <tree-view
          :data="$v.description"
          :options="{ rootObjectKey: '$v.description', minLength: 20 }"
        ></tree-view> -->
      </div>
    </div>
    <button
      v-if="submitShow"
      type="submit"
      id="submit"
      class="btn btn-primary"
      @click="submitForm"
    >
      Submit
    </button>

    <transition name="fade">
      <div
        v-if="!errorShow && !submitShow"
        class="alert alert-success"
        role="alert"
      >
        Your message successfully received
      </div>
    </transition>
    <transition name="fade">
      <div v-if="errorShow" class="alert alert-warning" role="alert">
        Connection has error. Please try again!
      </div>
    </transition>
  </div>
</template>


<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      submitShow: true,
      errorShow: false,
      email: "",
      description: "",
      //   Information: {
      //   email1: this.email,
      //   describtion1:  this.description,
      // },
    };
  },
  methods: {
    submitForm() {
      this.disabled = !this.disabled;
      this.$http
        .post("https://cvmysaltern-default-rtdb.firebaseio.com/Contact.json", {
          email: this.email,
          description: this.description,
        })
        .then(
          (response) => {
            if (response.ok === true) {
              this.disabled = 1;
              this.submitShow = false;
              this.errorShow = false;
            } else {
              this.submitShow = true;
              this.errorShow = true;
            }
          },
          (error) => {
            this.submitShow = true;
            this.errorShow = true;
          }
        );
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    description: {
      required,
      minLength: minLength(20),
    },
  },
};
</script>

