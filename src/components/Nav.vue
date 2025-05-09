
<script lang="ts" setup>
const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function scrollTo(id) {
  toggleMenu();
  document.getElementById(id).scrollIntoView();
}

</script>
<template>
  <nav class="relative z-10 p-4" :class="isOpen?'bg-primary--l2 md:bg-transparent':''">
    <div class="container max-w-7xl  mx-auto py-12">
      <div class="flex justify-between">
        <div class="cursor-pointer" @click="$router.push('/')"><img src="@/assets/images/logo.svg" alt="" /></div>
        <div class="flex gap-4">
          <a href="tel:+41614868060">
            <Button class="hidden md:flex" outline title="+41.61.486 80 60">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.6448 21.9767C18.5648 21.9767 18.4748 21.9767 18.3948 21.9667C15.2048 21.6167 12.1048 20.5167 9.42485 18.7767C6.93485 17.1967 4.78485 15.0467 3.19485 12.5467C1.45485 9.85669 0.354847 6.74669 0.0148473 3.55669C-0.0251527 3.16669 0.0148473 2.78669 0.144847 2.41669C0.264847 2.04669 0.464847 1.72669 0.724847 1.43669C0.984847 1.15669 1.29485 0.926687 1.64485 0.776687C1.99485 0.626687 2.36485 0.546687 2.75485 0.546687H5.75485C6.38485 0.536687 7.06485 0.776687 7.56485 1.21669C8.07485 1.64669 8.40485 2.25669 8.49485 2.91669C8.61485 3.82669 8.83485 4.71669 9.15485 5.56669C9.33485 6.05669 9.37485 6.58669 9.26485 7.10669C9.15485 7.62669 8.90485 8.09669 8.53485 8.46669L7.67485 9.32669C8.91485 11.3367 10.6048 13.0267 12.6148 14.2667L13.4748 13.4067C13.8548 13.0367 14.3148 12.7767 14.8348 12.6667C15.3548 12.5567 15.8848 12.5967 16.3748 12.7867C17.2248 13.1067 18.1148 13.3267 19.0148 13.4467C19.6848 13.5367 20.2948 13.8767 20.7348 14.3967C21.1648 14.9067 21.4048 15.5567 21.3848 16.2267V19.2167C21.3848 19.5967 21.3048 19.9767 21.1548 20.3267C21.0048 20.6767 20.7748 20.9867 20.4948 21.2467C20.2148 21.5067 19.8848 21.6967 19.5248 21.8267C19.2348 21.9267 18.9448 21.9767 18.6448 21.9767ZM5.77485 2.04669H2.75485C2.58485 2.04669 2.41485 2.08669 2.25485 2.15669C2.09485 2.22669 1.95485 2.32669 1.83485 2.45669C1.71485 2.58669 1.62485 2.73669 1.57485 2.89669C1.51485 3.06669 1.49485 3.23669 1.51485 3.40669C1.82485 6.35669 2.84485 9.23669 4.46485 11.7367C5.93485 14.0467 7.92485 16.0467 10.2348 17.5067C12.7248 19.1267 15.5948 20.1467 18.5448 20.4667C18.7048 20.4867 18.8748 20.4667 19.0448 20.4067C19.2148 20.3467 19.3548 20.2667 19.4848 20.1467C19.6148 20.0267 19.7148 19.8867 19.7848 19.7267C19.8548 19.5667 19.8948 19.3967 19.8948 19.2167V16.1967C19.8948 15.8867 19.7948 15.5867 19.5948 15.3567C19.3948 15.1167 19.1248 14.9667 18.8148 14.9267C17.8048 14.7967 16.8048 14.5467 15.8448 14.1867C15.6148 14.1067 15.3748 14.0867 15.1448 14.1367C14.9048 14.1867 14.6948 14.3067 14.5248 14.4667L13.2548 15.7367C13.0148 15.9767 12.6448 16.0267 12.3548 15.8567C9.73485 14.3667 7.56485 12.1967 6.07485 9.57669C5.90485 9.28669 5.95485 8.91669 6.19485 8.67669L7.46485 7.40669C7.63485 7.23669 7.74485 7.02669 7.79485 6.78669C7.84485 6.55669 7.82485 6.30669 7.74485 6.08669C7.38485 5.12669 7.13485 4.12669 7.00485 3.10669C6.96485 2.81669 6.81485 2.53669 6.58485 2.33669C6.35485 2.13669 6.06485 2.03669 5.77485 2.03669V2.04669Z"
                  fill="#196B73" />
              </svg>
            </Button>
          </a>
          <a href="mailto:info@acovos.ch">
            <Button class="hidden md:flex" outline title="info@acovos.ch">
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.80177 2.6457C1.95604 2.13018 2.43706 1.75 3 1.75H19C19.563 1.75 20.044 2.13021 20.1983 2.64578L11.0001 9.08451L1.80177 2.6457ZM1.75 4.44045V15C1.75 15.6858 2.31421 16.25 3 16.25H19C19.6858 16.25 20.25 15.6858 20.25 15V4.44054L11.4302 10.6144C11.1719 10.7952 10.8282 10.7952 10.57 10.6144L1.75 4.44045ZM21.75 3.01328V15C21.75 16.5142 20.5142 17.75 19 17.75H3C1.48579 17.75 0.25 16.5142 0.25 15V3C0.25 1.48579 1.48579 0.25 3 0.25H19C20.5085 0.25 21.7406 1.47643 21.7499 2.98279C21.7502 2.99296 21.7502 3.00312 21.75 3.01328Z"
                  fill="#196B73" />
              </svg>
            </Button>
          </a>

          <Button  v-if="!isOpen" @click="toggleMenu" title="Menu">
            <svg class="w-6" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H19C19.4142 0.25 19.75 0.585786 19.75 1C19.75 1.41421 19.4142 1.75 19 1.75H1C0.585786 1.75 0.25 1.41421 0.25 1ZM0.25 7C0.25 6.58579 0.585786 6.25 1 6.25H19C19.4142 6.25 19.75 6.58579 19.75 7C19.75 7.41421 19.4142 7.75 19 7.75H1C0.585786 7.75 0.25 7.41421 0.25 7ZM1 12.25C0.585786 12.25 0.25 12.5858 0.25 13C0.25 13.4142 0.585786 13.75 1 13.75H19C19.4142 13.75 19.75 13.4142 19.75 13C19.75 12.5858 19.4142 12.25 19 12.25H1Z"
                fill="#196B73" />
            </svg>
          </Button>
          <Button v-else @click="toggleMenu" title="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967C18.2374 5.17678 17.7626 5.17678 17.4697 5.46967L12 10.9393L6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L10.9393 12L5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L12 13.0607L17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L13.0607 12L18.5303 6.53033Z"
                fill="#196B73" />
            </svg>

          </Button>
        </div>
      </div>

    </div>
    <div v-if="isOpen" class="grid top-100 absolute p-4 md:p-0 top-36 left-0 bg-primary--l2 md:bg-white shadow-md min-h-20 w-full z-2">
      <div @click="toggleMenu" class="container mx-auto py-12 grid md:grid-cols-4 md:gap-6">
        <div class="flex-col">
          <div @click="$router.push('/')" class="menu-point">Home</div>
          <div @click="scrollTo('about')" class="menu-point">About us</div>
          <div @click="scrollTo('contact')" class="menu-point">Contact</div>
        </div>
        <div class="flex-col">
          <div class="menu-point-alt" @click="$router.push('/products?category=Normal%20tissue')">Tissue database</div>
          <div class="menu-point push-right" @click="$router.push('/products?category=Normal%20tissue')">Normal tissue
          </div>
          <div class="menu-point push-right" @click="$router.push('/products?category=Tumor%20tissue')">Tumor tissue
          </div>
          <div class="menu-point push-right" @click="$router.push('/products?category=Inflammatory%20tissue')">
            Inflammatory tissue</div>
          <div class="menu-point push-right" @click="$router.push('/products?category=Degenerative%20tissue')">
            Degenerative tissue</div>
        </div>
        <div class="flex-col">
          <div class="menu-point-alt" @click="$router.push('/matched-ffpe')">Matched FFPE tissue pairs</div>
          <div class="menu-point" @click="$router.push('/antibody-tested-ffpe-tissues')">Antibody-tested FFPE tissues
          </div>
          <div class="menu-point" @click="$router.push('/more')">More product information</div>
        </div>
        <div class="flex-col">
          <div @click="$router.push('/privacy')" class="menu-point-alt alt-link text-text--brand">Privacy policy</div>
          <div @click="$router.push('/imprint')" class="menu-point alt-link text-text--brand">Legal Notice</div>
          <div @click="$router.push('/conditions')" class="menu-point alt-link text-text--brand">Payment/shipment conditions
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.menu-point {
  @apply border-t border-line px-4 py-4 mt-4 text-primary--d2 font-bold cursor-pointer;

  &:hover {
    @apply bg-primary--dark text-white;
  }
}
.menu-point-alt {
  @apply border-t border-dark--lines text-primary--d2 md:border-line px-4 py-4 mt-4  font-bold cursor-pointer;

  &:hover {
    @apply bg-primary--dark text-white;
  }
}

.alt-link{
  @apply text-text--brand;
}

.push-right {
  @apply pl-12;
}
</style>