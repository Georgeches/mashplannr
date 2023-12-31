import { useState, useEffect } from "react";
import "./Merchants.css";
import MerchantItem from "./MerchantItem";
import LeafletMap from "./LeafletMap";
import MerchantProfile from "./MerchantProfile";

export default function MerchantPage({merchants, currentMerchant, setCurrentMerchant, orders}) {
  const [merchantSearch, setMerchantSearch] = useState("");

  const merchantsShown = merchants.filter((merchant) =>
    merchant.name.toLowerCase().includes(merchantSearch.toLowerCase())
  );
  //console.log(merchantsShown)

  useEffect(() => {
    if (!currentMerchant || currentMerchant.name === undefined) {
      setCurrentMerchant(merchants[0]);
    }
    
  }, [currentMerchant, merchants]);

  let merchant_orders = orders?.filter(order=>order?.merchandiser_id===currentMerchant?.id)
  console.log(merchant_orders);
  return (
    <div className="merchants-page d-md-flex align-items-center justify-content-center container-fluid">
      <div className="merchants-sidebar d-lg-block d-none container-fluid border p-3">
        <form className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search merchant"
            id="merchant-search"
            onChange={(e) => setMerchantSearch(e.target.value)}
          />
        </form>
        <div className="merchants-list">
          <ul className="list-group">
            {merchantsShown
              .filter((this_merchant) =>
                this_merchant.name
                  .toLowerCase()
                  .includes(merchantSearch.toLowerCase())
              )
              .map((merchant) => (
                <MerchantItem
                  key={merchant.id}
                  merchant={merchant}
                  setCurrentMerchant={setCurrentMerchant}
                  currentMerchant={currentMerchant}
                  merchants={merchants}
                />
              ))}
          </ul>
        </div>
      </div>

      <div className="merchants-details text-start container-fluid p-3">
        <div className="container d-flex align-items-center justify-content-between">
          <button
            className="btn btn-link bg-none d-lg-none ms-3 mb-4 text-secondary border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
            style={{ background: "transparent" }}
          >
            <i style={{ fontSize: "20px"}} className="fa-solid fa-bars"></i>
          </button>
          <button
            className="btn btn-link d-lg-none ms-3 mb-4 text-dark border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTopTabs"
            aria-controls="offcanvasTop"
            style={{ background: "transparent" }}
          >
            <i
              style={{ fontSize: "20px" }}
              className="fa-solid fa-ellipsis-vertical"
            ></i>
          </button>
        </div>
        <hr style={{ marginTop: "-10px" }} />
        <div className="merchants-nav d-none d-lg-block container-fluid">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#location">
                Location
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#route-plan">
                Assigned Routes
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#merchant-profile"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>

        <div className="merchants-detail-details container-fluid">
          <div className="tab-content">
            <div className="tab-pane container active" id="location">
              <h4>
                Location for {currentMerchant?.name}
                <LeafletMap
                  currentMerchant={currentMerchant}
                  merchants={merchants}
                  setCurrentMerchant={setCurrentMerchant}
                />
              </h4>
            </div>
            <div className="tab-pane container fade" id="route-plan">
              <h4>Route plan for {currentMerchant?.name}</h4>
              <div className="table-responsive mt-5">
                <table className="table table-responsive table-borderless">
                    <thead>
                        <tr className="bg-light">
                            <th scope="col" width="10%">Date</th>
                            <th scope="col" width="15%">Customer</th>
                            <th scope="col" width="15%">Products ordered</th>
                            <th scope="col" width="15%">Location</th>
                            <th scope="col" width="15%">Merchandiser assigned</th>
                            <th scope="col" width="10%">Sale</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.filter(order=>order?.merchandiser_id===currentMerchant?.id).map(order=>
                            <tr>
                                <td>{order?.date}</td>
                                <td>{order?.customer_name}</td>
                                <td>{order?.products_ordered}</td>
                                <td>{order?.location}</td>
                                <td>{merchants.find(merchant=>merchant.id===order?.merchandiser_id)?.name}</td>
                                <td>Ksh. {order?.sale}</td>

                            </tr>
                        )}
                    </tbody>
                </table>
                <hr/>
                <hr/>
            </div>
            </div>
            <div className="tab-pane container fade" id="merchant-profile">
              <MerchantProfile currentMerchant={currentMerchant}/>
            </div>
          </div>
        </div>
      </div>

      {/**offcanvas for merchants*/}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h4 id="offcanvasTopLabel">Merchants</h4>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search merchant"
              id="merchant-search"
              onChange={(e) => setMerchantSearch(e.target.value)}
            />
          </form>
          <div className="merchants-list">
            <ul className="list-group">
              {merchantsShown
                .filter((this_merchant) =>
                  this_merchant.name
                    .toLowerCase()
                    .includes(merchantSearch.toLowerCase())
                )
                .map((merchant) => (
                  <MerchantItem
                    key={merchant.id}
                    merchant={merchant}
                    setCurrentMerchant={setCurrentMerchant}
                    currentMerchant={currentMerchant}
                    merchants={merchants}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/**offcanvas for tabs*/}
      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTopTabs"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul
            className="nav nav-tabs border-0 container-fluid"
            style={{ width: "370px", marginLeft: "-20px", marginTop: "-20px" }}
          >
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#location">
                Location
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#route-plan">
                Routes
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#merchant-profile"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
