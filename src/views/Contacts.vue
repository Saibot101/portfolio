<template>
  <div>
    <h1 class="text-center mt-10 mb-5 text-h3">Contact</h1>
    <h5 class="text-center text-subtitle-1 mt-2">
      If you want to get in touch with me, you send me an email with this form.
    </h5>
    <v-form
      justify="center"
      ref="form"
      method="POST"
      action="https://formsubmit.co/tobisamaas98@gmail.com"
      lazy-validation
      id="form"
      v-model="valid"
      class="mt-10"
    >
      <v-text-field
        label="Email"
        outlined
        class="mx-15"
        :name="email"
        :rules="emailRules"
        required
        v-model="email"
      >
      </v-text-field>
      <v-textarea
        label="Message"
        outlined
        height="400"
        class="mx-15"
        :name="message"
        :rules="messsageRules"
        required
        v-model="message"
      >
      </v-textarea>
      <v-row justify="center">
        <v-btn
          width="250"
          x-large
          type="Submit"
          value="Submit"
          :disabled="!valid"
          @click="send"
          >Send Message</v-btn
        >
      </v-row>
    </v-form>
  </div>
</template>
<script>
import { useHead } from '@vueuse/head'
export default {
  data: () => ({
    valid: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    messsageRules: [(v) => !!v || "Message is required"],
  }),
  methods: {
    send() {
      this.$refs.form.validate();
      //form.submit()
    },
  },
  setup(){
    useHead({
      // Can be static or computed
      title: "Contact Tobias Maas",
      meta:{
        description:"This site shows allows site visitors to contact Tobias Maas.",
      }
    })
  },
};
</script>
