<template>
  <section class="page" id="contact">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h3 class="text-center">Get In Touch</h3>
        <form
          @submit.prevent="handleSubmit"
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <p style="display: none;" class="hidden">
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field">
            </label>
          </p>
          <div class="form-group">
            <label>Name</label>
            <input v-model="form.name" type="text" name="name" id="name" class="form-control">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="form.email" type="email" name="email" id="email" class="form-control">
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea
              v-model="form.message"
              rows="5"
              name="message"
              id="message"
              class="form-control"
            ></textarea>
          </div>
          <div class="form-group">
            <input type="file" name="myfile" placeholder="Upload File">
          </div>
          <div class="form-group">
            <div name="captcha" data-netlify-recaptcha="true"></div>
          </div>
          <button type="submit" name="submit" class="btn btn-default btn-block">Send</button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Basic",
  data: () => ({
    form: {
      name: "",
      email: "",
      message: ""
      // someData: []
    }
  }),
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: this.encode({
          "form-name": "contact",
          ...this.form
        })
      })
        .then(() => alert("successfully sent"))
        .catch(e => console.error(e));
    }
    // processFile(event) {
    //   this.someData = event.target.files[0];
    // }
    // @change="processFile($event)"
  }
};
</script>