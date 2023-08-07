import  React from 'react';
import { useState } from 'react';
import './taskmanager.css'

const Taskmanager = ({orders, merchants}) => {

  const [orderCustomer, setCustomer] = useState("")
  const [orderLocation, setLocation] = useState("")
  const [orderSale, setSale] = useState("")
  const [orderProducts, setProducts] = useState("")

  return (
    <div className="container task-planner-page">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12">
          <div className="card border-0" id="list1">
            <div className="card-body">

              <p className="d-flex align-items-center">
                <i className="fas fa-check-square me-2 mb-2"></i>
                <h4>Order Manager</h4>
              </p>

              <div className="">
                <div className="card ms-4 ms-lg-0">
                  <div className="card-body">
                  <p className='lead'>New Order</p>
                    <div className="d-flex align-items-center flex-wrap flex-lg-nowrap">
                      <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
                        placeholder="Customer" onChange={e=>setCustomer(e.target.value)}/>
                      <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
                      placeholder="Products ordered" onChange={e=>setProducts(e.target.value)}/>
                      <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
                        placeholder="Customer Location" onChange={e=>setLocation(e.target.value)}/>
                      <input type="number" className="form-control form-control-lg" id="exampleFormControlInput1"
                      placeholder="Sale" onChange={e=>setSale(e.target.value)}/>
                      
                      <div>
                        <button type="button" className="btn btn-primary mb-3">Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="list-group rounded-0 ms-4 ms-lg-0 bg-transparent">
                {orders.map(order=>
                  <li className="list-group-item mb-4 border-0 bg-transparent d-flex justify-content-between">
                    <div>
                      <h6 className="fw-normal mb-0">{order?.customer_name}</h6>
                      <p className='fw-light text-muted mt-2'>{merchants.find(merchant=>merchant.id===order?.merchandiser_id)?.name}</p>
                    </div>

                    <div>
                      <div className="d-flex flex-row justify-content-end mb-1">
                        <a href="#" className="text-info" data-mdb-toggle="tooltip" title="Edit todo"><i
                          className="fas fa-pencil-alt me-3"></i></a>
                        <a href="#!" className="text-danger" data-mdb-toggle="tooltip" title="Delete todo"><i
                          className="fas fa-trash-alt"></i></a>
                      </div>
                      <div className="text-end text-muted">
                        <a href="#" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
                          <p className="small mb-0"><i className="fas fa-info-circle me-2"></i>{order?.date}</p>
                        </a>
                      </div>
                    </div>
                  </li>
                )}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskmanager;
