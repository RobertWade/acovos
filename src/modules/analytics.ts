import { UserModule } from "~/utils/types";
import VueGtag from "vue-gtag";


export const install: UserModule = ({ app, isClient }) => {
    if (!isClient) return;
    app.use(VueGtag, {
        config: {
            id: "G-C72XF03YME",
            params: {
                anonymize_ip: true
            }
        }
    })
}
