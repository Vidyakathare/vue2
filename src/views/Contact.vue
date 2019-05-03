<template>
  <section class="page" id="contact">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h3 class="text-center">Get In Touch</h3>
        <form method="POST" data-netlify="true">
          <div class="form-group">
            <label>Name</label>
            <input type="text" name="name" id="name" class="form-control">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" id="email" class="form-control">
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea rows="5" name="message" id="message" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <input type="file" name="myfile" placeholder="Upload File">
          </div>
          <div class="form-group">
            <div data-netlify-recaptcha="true"></div>
          </div>
          <button type="submit" name="submit" class="btn btn-default btn-block">Send</button>
        </form>
      </div>
    </div>
  </section>
</template>
