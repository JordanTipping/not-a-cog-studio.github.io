<section class="section" id="contact" aria-labelledby="contact-heading">
  <h1 id="contact-heading">Contact Us</h1>
  <p>Want to collaborate, hire us, or ask a question? Drop us a message using the form below. We'd love to hear from you.</p>

<!-- Contact Form -->
<!-- Contact Form -->
<form
  id="contact-form"
  action="https://formspree.io/f/xdkepdvk"  <!-- Your Formspree endpoint -->
  method="POST"
  enctype="multipart/form-data"
  onsubmit="showSuccessMessage(event)"
>
  <label>
    Your Name:
    <input type="text" name="name" required>

    
    <input type="text" name="_gotcha" style="display:none">
  </label>
  <label>
    Your Email:
    <input type="email" name="_replyto" required>
  </label>
  <label>
    Your Message:
    <textarea name="message" rows="5" required></textarea>
  </label>
  <button type="submit">Send Message</button>
</form>

<!-- Success Message -->
<div id="success-message" style="display:none; margin-top: 20px;">
  <p>Thank you! We will get back to you shortly.</p>
</div>



  <div class="contact-email">
    <p>Or, email us directly at <a href="mailto:contact@notacog.studio">contact@notacog.studio</a>.</p>
  </div>
</section>
