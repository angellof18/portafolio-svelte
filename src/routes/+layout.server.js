import { TraslatePage } from "../functions/Traductor.js"
export function load({ url }) {
    return {
        url: url.pathname,
        traslate: TraslatePage()
    }
}