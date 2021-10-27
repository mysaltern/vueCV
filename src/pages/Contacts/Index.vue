 <template>
  <div>
    <br />
    <br />
    <div class="row">
      {{ info }}
      <div class="col-md-6" v-for="contact in contacts" :key="contact">
        <ContactCard :contact="contact" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import ContactCard from "../../components/Contacts/Card.vue";
export default {
  data() {
    return {
      contacts: null,
    };
  },
  components: {
    ContactCard,
  },
  methods: {},
  mounted() {
    axios
      .get("https://cvmysaltern-default-rtdb.firebaseio.com/Contact.json")
      .then((response) => (this.contacts = response));
  },
};
</script>