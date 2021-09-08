 <template>
  <div>
    <br />
    <br />
    <form-validation></form-validation>
  </div>
</template>

<script>
import FormValidation from "../../components/FormValidation.vue";
export default {
  data() {
    return {
      errors: [],
      disabled: false,
      submitShow: true,
      errorShow: false,
      Information: {
        email: "",
        describtion: "",
      },
    };
  },
  components: {
    formValidation: FormValidation,
  },
  methods: {},
};
</script>