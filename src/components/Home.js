import React from "react";
import './Home.css'

const Home = ({orders, merchants}) => {
  return (
    <div className="container-fluid bg-light home">
      <div className="container pt-4">
        <h3>Dashboard</h3>

        <div className="admin-summary row mt-4">
          <div className="col-lg-3 col-md-6">
          <div class="card" style={{height: "154px"}}>
            <div class="card-body mt-3">
              <div className="mb-4">
              <h4 className="fw-bold text-success">Total Revenue</h4>
              </div>
              <h4 className="fw-normal text-muted">Ksh 2000000</h4>
            </div>
          </div>
          </div>

          <div className="col-md-6 col-lg-3">
          <div class="card" style={{height: "154px"}}>
            <div class="card-body mt-3">
              <div className="mb-4">
                <h4 className="fw-bold text-primary">Total Sales</h4>
              </div>
              <h4 className="fw-normal text-muted">Ksh 5000000</h4>
            </div>
          </div>
          </div>

          <div className="col-md-6 col-lg-3">
          <div class="card" style={{height: "154px"}}>
            <div class="card-body mt-3">
              <div className="mb-4">
                <h4 className="fw-bold" style={{color: "rgb(0, 72, 187)"}}>Total Expenses</h4>
              </div>
              <h4 className="fw-normal text-muted">Ksh 3000000</h4>
            </div>
          </div>
          </div>

          <div className="col-md-6 col-lg-3">
          <div class="card" style={{height: "154px"}}>
            <div class="card-body mt-3">
              <div className="mb-4">
                <h4 className="fw-bold" style={{color: "rgb(255, 55, 55)"}}>Total Expenses</h4>
              </div>
              <h4 className="fw-normal text-muted">Ksh 3000000</h4>
            </div>
          </div>
          </div>
        </div>

        <div className="row mt-5 associates">
          <div className="col-12 px-4 mx-md-3 my-3 my-md-0 bg-white border col-md-5 col-lg-5" style={{height: "400px", overflow: "hidden"}}>
              <div className="customers-header pt-4">
                <h4>Customers</h4>
              </div>
              <hr/>
              <div className="customers-list">
                <ul class="list-group" style={{height: "300px", overflowY: "scroll"}}>
                  {orders.map(order=>
                    <li class="list-group-item">{order?.customer_name}</li>
                  )}
                </ul>
              </div>
          </div>

          <div className="col-12 px-4 bg-white border col-md-6 col-lg-6" style={{height: "400px", overflow: "hidden"}}>
              <div className="customers-header pt-4 d-flex justify-content-between">
                <h4>Merchants</h4>
                <a href="/merchants" className="text-muted">View all</a>
              </div>
              <hr style={{marginTop: "8px"}}/>
              <div className="customers-list">
                <ul class="list-group" style={{height: "300px", overflowY: "scroll"}}>
                  {merchants.map(merchant=>
                    <li class="list-group-item">{merchant?.name}</li>
                  )}
                </ul>
              </div>
          </div>
        </div>

        <div style={{}} className="recent-orders mt-5 mb-5 bg-white border">
          <div className="customers-header pt-4 mb-4 ps-4 d-flex justify-content-between">
            <h4>Recent Orders</h4>
            <a href="/merchants" className="text-muted me-4">View all</a>
          </div>
          <hr/>
          <div style={{overflowX: "scroll"}}>
          <div className="orders-table" style={{overflowX: "scroll"}}>
          <table style={{overflowX: "scroll"}} className="ms-md-3 table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Customer name</th>
                <th scope="col">Products ordered</th>
                <th scope="col">Location</th>
                <th scope="col">Merchandiser assigned</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order=>
                <tr>
                  <th scope="row">{order?.date}</th>
                  <td>{order?.customer_name}</td>
                  <td>{order?.products_ordered}</td>
                  <td>{order?.location}</td>
                  <td>{merchants.find(merchant=>merchant.id===order?.merchandiser_id)?.name}</td>
                </tr>
              )}
            </tbody>
          </table>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
