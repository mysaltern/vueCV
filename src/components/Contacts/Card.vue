<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">
    {{
        contact
    }}
      </p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<script>
export default {
    props:
    {
        contact:Object
    },
  data() {
    return {
      errors: [],
    };
  },
  components: {},
  methods: {},
};
</script>