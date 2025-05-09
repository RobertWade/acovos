<script lang="ts" setup>
defineProps({alt:Boolean})
</script>

<template>
  <Section small>
    <div class="flex flex-col items-center gap-4">
      <p  v-if="!alt">Need for custom tissue samples?</p>
      <h2 class="mb-16" v-else>Need for custom tissue samples?</h2>
      <h1 v-if="!alt" class="text-center mb-24">There is a quote for <br> every request</h1>
      <div class="grid md:grid-cols-2 gap-24">
        <div class="flex flex-col gap-8">
          <p>
            If you need a more differentiated selection of samples, cannot find
            what you are looking for, or wish a consultation, please do not
            hesitate using our contact form or get in touch via phone or email.
          </p>
          <div class="flex gap-4">
           <a href="mailto:info@acovos.ch">
             <Button class="hidden md:flex" title="info@acovos.ch">
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.80177 2.6457C1.95604 2.13018 2.43706 1.75 3 1.75H19C19.563 1.75 20.044 2.13021 20.1983 2.64578L11.0001 9.08451L1.80177 2.6457ZM1.75 4.44045V15C1.75 15.6858 2.31421 16.25 3 16.25H19C19.6858 16.25 20.25 15.6858 20.25 15V4.44054L11.4302 10.6144C11.1719 10.7952 10.8282 10.7952 10.57 10.6144L1.75 4.44045ZM21.75 3.01328V15C21.75 16.5142 20.5142 17.75 19 17.75H3C1.48579 17.75 0.25 16.5142 0.25 15V3C0.25 1.48579 1.48579 0.25 3 0.25H19C20.5085 0.25 21.7406 1.47643 21.7499 2.98279C21.7502 2.99296 21.7502 3.00312 21.75 3.01328Z" fill="#196B73" />
            </svg>
          </Button>
          </a>
            <a href="tel:+41614868060">
            <Button class="hidden md:flex" title="+41.61.486 80 60">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.6448 21.9767C18.5648 21.9767 18.4748 21.9767 18.3948 21.9667C15.2048 21.6167 12.1048 20.5167 9.42485 18.7767C6.93485 17.1967 4.78485 15.0467 3.19485 12.5467C1.45485 9.85669 0.354847 6.74669 0.0148473 3.55669C-0.0251527 3.16669 0.0148473 2.78669 0.144847 2.41669C0.264847 2.04669 0.464847 1.72669 0.724847 1.43669C0.984847 1.15669 1.29485 0.926687 1.64485 0.776687C1.99485 0.626687 2.36485 0.546687 2.75485 0.546687H5.75485C6.38485 0.536687 7.06485 0.776687 7.56485 1.21669C8.07485 1.64669 8.40485 2.25669 8.49485 2.91669C8.61485 3.82669 8.83485 4.71669 9.15485 5.56669C9.33485 6.05669 9.37485 6.58669 9.26485 7.10669C9.15485 7.62669 8.90485 8.09669 8.53485 8.46669L7.67485 9.32669C8.91485 11.3367 10.6048 13.0267 12.6148 14.2667L13.4748 13.4067C13.8548 13.0367 14.3148 12.7767 14.8348 12.6667C15.3548 12.5567 15.8848 12.5967 16.3748 12.7867C17.2248 13.1067 18.1148 13.3267 19.0148 13.4467C19.6848 13.5367 20.2948 13.8767 20.7348 14.3967C21.1648 14.9067 21.4048 15.5567 21.3848 16.2267V19.2167C21.3848 19.5967 21.3048 19.9767 21.1548 20.3267C21.0048 20.6767 20.7748 20.9867 20.4948 21.2467C20.2148 21.5067 19.8848 21.6967 19.5248 21.8267C19.2348 21.9267 18.9448 21.9767 18.6448 21.9767ZM5.77485 2.04669H2.75485C2.58485 2.04669 2.41485 2.08669 2.25485 2.15669C2.09485 2.22669 1.95485 2.32669 1.83485 2.45669C1.71485 2.58669 1.62485 2.73669 1.57485 2.89669C1.51485 3.06669 1.49485 3.23669 1.51485 3.40669C1.82485 6.35669 2.84485 9.23669 4.46485 11.7367C5.93485 14.0467 7.92485 16.0467 10.2348 17.5067C12.7248 19.1267 15.5948 20.1467 18.5448 20.4667C18.7048 20.4867 18.8748 20.4667 19.0448 20.4067C19.2148 20.3467 19.3548 20.2667 19.4848 20.1467C19.6148 20.0267 19.7148 19.8867 19.7848 19.7267C19.8548 19.5667 19.8948 19.3967 19.8948 19.2167V16.1967C19.8948 15.8867 19.7948 15.5867 19.5948 15.3567C19.3948 15.1167 19.1248 14.9667 18.8148 14.9267C17.8048 14.7967 16.8048 14.5467 15.8448 14.1867C15.6148 14.1067 15.3748 14.0867 15.1448 14.1367C14.9048 14.1867 14.6948 14.3067 14.5248 14.4667L13.2548 15.7367C13.0148 15.9767 12.6448 16.0267 12.3548 15.8567C9.73485 14.3667 7.56485 12.1967 6.07485 9.57669C5.90485 9.28669 5.95485 8.91669 6.19485 8.67669L7.46485 7.40669C7.63485 7.23669 7.74485 7.02669 7.79485 6.78669C7.84485 6.55669 7.82485 6.30669 7.74485 6.08669C7.38485 5.12669 7.13485 4.12669 7.00485 3.10669C6.96485 2.81669 6.81485 2.53669 6.58485 2.33669C6.35485 2.13669 6.06485 2.03669 5.77485 2.03669V2.04669Z" fill="#196B73" />
            </svg>
          </Button>
          </a>
          </div>
          <p>
            The contact information you submit is being stored and used for the
            purpose of contacting you. There is no transfer of this personal
            data to third parties. Check our privacy policy for further
            information.
          </p>
        </div>
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <label for="">Name</label>
            <input placeholder="Your name" type="text" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="">E-mail</label>
            <input placeholder="Your E-Mail" type="text" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="">Phone</label>
            <input placeholder="Your phone number" type="text" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="">Message</label>
            <textarea rows="6" type="text" />
          </div>
          <div class="w-full flex justify-end">
            <Button secondary title="Submit">
             <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0422 0.481805C22.0383 0.47773 22.0343 0.473691 22.0303 0.469691C21.8977 0.337094 21.7278 0.264526 21.5544 0.251986C21.5094 0.248703 21.4639 0.249474 21.4186 0.254426C21.3567 0.261143 21.2955 0.275545 21.2365 0.29763L1.25224 7.29213C0.961991 7.39371 0.763163 7.66219 0.750627 7.96945C0.738092 8.27671 0.914389 8.56049 1.1954 8.68538L9.9318 12.5682L13.8146 21.3046C13.9395 21.5856 14.2233 21.7619 14.5306 21.7494C14.8378 21.7369 15.1063 21.538 15.2079 21.2478L22.2025 1.2633C22.3004 1.00148 22.247 0.6959 22.0422 0.481805ZM18.6457 2.79363L3.53331 8.08297L10.3339 11.1055L18.6457 2.79363ZM11.3946 12.1661L19.7064 3.85428L14.4171 18.9667L11.3946 12.1661Z" fill="#196B73"/>
             </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
input,
textarea {
  @apply bg-primary--l1 border-b border-transparent outline-none p-4 focus:border-primary--dark outline-none;
  resize: none;
}

p{
  font-size: 16px;
  line-height: 24px;
}
</style>