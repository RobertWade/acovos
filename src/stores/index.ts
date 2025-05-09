import { acceptHMRUpdate, defineStore } from 'pinia'
import { watch } from 'vue';


export const useMainStore = defineStore('useMainStore', () => {
    const state = ref({
        isFullScreen: false,
    })
    const actions = {
        openFullscreen(id: String) {
            const element = document.getElementById(id);
            if (element.requestFullscreen) {
                element.requestFullscreen();
                state.value.isFullScreen = true;
            } else if (element.webkitRequestFullScreen) { /* Safari */
                element.webkitRequestFullScreen();
                state.value.isFullScreen = true;
            } else if (element.msRequestFullScreen) { /* IE11 */
                element.msRequestFullscreen();
                state.value.isFullScreen = true;
            } else if (element.element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
                state.value.isFullScreen = true;
            }
        },

        checkIfFullscreen() {
            if (!window.screenTop && !window.screenY) {
                return true;
            }
        },

        closeFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                state.value.isFullScreen = false;
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
                state.value.isFullScreen = false;
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
                state.value.isFullScreen = false;
            }
        }
    }
    return { state, actions };
})


// hot module replacement
if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))