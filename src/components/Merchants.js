import { useState } from "react"
import './Merchants.css'

export default function MerchantPage(){

    const [merchantSearch, setMerchantSearch] = useState("")

    return(
        <div className="merchants-page d-flex align-items-center justify-content-center container-fluid">
            <div className="merchants-sidebar border p-3">
                <form className="mb-3">
                    <input type="text" className="form-control" placeholder="Search merchant" id="merchant-search" onChange={e=>setMerchantSearch(e.target.value)} />
                </form>
                <div className="merchants-list">
                    <ul class="list-group">
                        <li class="list-group-item active d-flex align-items-center" aria-current="true">An active item</li>
                        <li class="list-group-item d-flex align-items-center">A second item</li>
                        <li class="list-group-item d-flex align-items-center">A third item</li>
                        <li class="list-group-item d-flex align-items-center">A fourth item</li>
                        <li class="list-group-item d-flex align-items-center">And a fifth one</li>
                    </ul>
                </div>
            </div>

            <div className="merchants-details border p-3">

            </div>
        </div>
    )
}