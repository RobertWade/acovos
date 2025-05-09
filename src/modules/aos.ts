import { UserModule } from "~/utils/types";
import AOS from 'aos'
import 'aos/dist/aos.css'

export const install: UserModule = ({ app, isClient }) => {
    if (!isClient) return;
    AOS.init()
}
