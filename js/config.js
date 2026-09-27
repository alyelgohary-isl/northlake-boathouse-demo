/* Northlake Boathouse Co — site configuration (edit this file only)
   ------------------------------------------------------------------
   FORMS. Every form on the site posts to one Formspree form, which relays
   each submission by email to the recipient configured in Formspree
   (hello@northlakeboathouse.ca). The form name and page are included
   in the email subject so quote requests and newsletter sign-ups are easy
   to tell apart.

     1. formspree.io → New form → recipient: hello@northlakeboathouse.ca
        (Formspree emails that address a one-time verification link).
     2. Copy the form's endpoint, e.g. https://formspree.io/f/abcdwxyz, below.

   SPAM. Google reCAPTCHA v3 runs invisibly on every submit; Formspree
   verifies the token server-side and drops anything that scores as a bot.

     3. google.com/recaptcha/admin → Create → type: v3 → domains:
        northlakeboathouse.ca, www.northlakeboathouse.ca → copy the SITE key below.
     4. In Formspree → the form → Settings → Spam protection → reCAPTCHA v3:
        paste the SECRET key there (never in this file).

   Leave either value empty and the site degrades gracefully: forms show
   the local "sent" state without sending (endpoint) or send without a
   captcha token (site key). A hidden honeypot field is always included. */
window.STALLION = {
  formEndpoint: "",          // e.g. "https://formspree.io/f/abcdwxyz"
  recaptchaSiteKey: "",      // e.g. "6Lc...-...-...."
  notifyEmail: "hello@northlakeboathouse.ca",
};
