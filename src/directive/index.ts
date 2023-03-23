import { permision} from './permision'
import type { App } from "vue"
export default function (app:App) {
    app.directive('permision', permision)
}