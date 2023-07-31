import { useState } from "react"
import './Merchants.css'
import MerchantItem from "./MerchantItem"

export default function MerchantPage({merchants}){

    const [merchantSearch, setMerchantSearch] = useState("")

    return(
        <div className="merchants-page d-flex align-items-center justify-content-center container-fluid">
            <div className="merchants-sidebar container-fluid border p-3">
                <form className="mb-3">
                    <input type="text" className="form-control" placeholder="Search merchant" id="merchant-search" onChange={e=>setMerchantSearch(e.target.value)} />
                </form>
                <div className="merchants-list">
                    <ul className="list-group">
                        {merchants.map(merchant=>
                            <MerchantItem merchant={merchant} merchants={merchants}/>
                        )}
                    </ul>
                </div>
            </div>

            <div className="merchants-details container-fluid border p-3">
                <div className="merchants-nav container-fluid">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="tab" href="#merchant-dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#location">Location</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#route-plan">Route plan</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#merchant-profile">Profile</a>
                        </li>
                    </ul>
                </div>

                <div className="merchants-detail-details container-fluid">
                    <div className="tab-content">
                        <div className="tab-pane container active" id="merchant-dashboard">
                            <h1>Dashboard</h1>
                        </div>
                        <div className="tab-pane container fade" id="location">
                            <h2>Location</h2>
                        </div>
                        <div className="tab-pane container fade" id="route-plan">
                            <h2>Route plan</h2>
                        </div>
                        <div className="tab-pane container fade" id="merchant-profile">
                            <h2>Profile</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}