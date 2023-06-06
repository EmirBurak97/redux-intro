import { legacy_createStore} from "redux"

import reducers from "./index"

export default function configureStore()
{
    return legacy_createStore(reducers)
}







