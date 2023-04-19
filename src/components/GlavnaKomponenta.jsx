import { ConditionalRendering } from "./ConditionalRendering";

export function GlavnaKomponenta(){
    return(
        <div>
            Ispis nove komponente! <ConditionalRendering props={30}/>
        </div>
    )
}