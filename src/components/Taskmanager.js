import  React, { useEffect } from 'react';
import { useState } from 'react';
import './taskmanager.css'

const Taskmanager = ({orders, merchants, setOrders}) => {

  const [customer_name, setCustomer] = useState("")
  const [location, setLocation] = useState("")
  const [sale, setSale] = useState(0)
  const [products_ordered, setProducts] = useState("")
  const [merchandiser_id, setMerchantId] = useState(0)

  const [orderToEdit, setOrderEdit] = useState({})

  const [edit_customer_name, setEditCustomer] = useState(orderToEdit.customer_name)
  const [edit_location, setEditLocation] = useState(orderToEdit.location)
  const [edit_sale, setEditSale] = useState(orderToEdit.sale)
  const [edit_products_ordered, setEditProducts] = useState(orderToEdit.products_ordered)
  const [edit_merchandiser_id, setEditMerchantId] = useState(orderToEdit.merchandiser_id)
  const [edited_date, setEditDate] = useState(orderToEdit.date)

  useEffect(()=>{
    setEditCustomer(orderToEdit.customer_name)
    setEditDate(orderToEdit.date)
    setEditLocation(orderToEdit.location)
    setEditMerchantId(orderToEdit.merchandiser_id)
    setEditProducts(orderToEdit.products_ordered)
    setEditSale(orderToEdit.sale)
  }, [orderToEdit])

  const [showCustomerInput, setShowCustomer] = useState(false)
  const [showDateInput, setShowDate] = useState(false)
  const [showLocationInput, setShowLocation] = useState(false)
  const [showSaleInput, setShowSale] = useState(false)
  const [showMerchantInput, setShowMerchant] = useState(false)
  const [showProductsInput, setShowProducts] = useState(false)

  console.log(orderToEdit)

  async function createOrder(e){
    e.preventDefault();

    try {
      const csrfResponse = await fetch("http://localhost:3000/csrf_token");
      const csrfData = await csrfResponse.json();
      const csrfToken = csrfData.csrfToken;
  
      const orderResponse = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ customer_name, products_ordered, merchandiser_id, location, sale}),
      });
  
      if (orderResponse.ok) {
        const orderData = await orderResponse.json();
        setOrders([...orders, orderData])
      } else {
        alert("Please ensure you fill all the fields");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function deleteOrder(e, order){
    e.preventDefault()
    let userConfirm = 'Are you sure you want to delete this order?'

    if(window.confirm(userConfirm)){
      fetch(`http://localhost:3000/orders/${order?.id}`, {
        method: "DELETE"
      })
      .then(res=>{
        if(res.ok){
          setOrders(orders.filter(this_order=>this_order?.id!==order?.id))
          console.log("deleted")
        }
        else{
          alert("There was an error when attempting to delete order. Please try again later")
        }
      })
      .catch(err=>console.log(err))
    }
    else{
      console.log("process haulted")  
    }
  }

  function editOrder(e){
    e.preventDefault()
    const edit_date = new Date(edited_date).toISOString().split('T')[0];

    fetch(`http://localhost:3000/orders/${orderToEdit?.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({edit_customer_name, edit_date, edit_location, edit_merchandiser_id, edit_products_ordered, edit_sale})
    })
    .then(res=>{
      if(res.ok){
        const data = res.json()
        console.log(data)
        alert("edited successfully")
        window.location.reload()
      }
      else{
        alert("Error. Please try again later")
      }
    })
    .catch(err=>console.log(err))
  }

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
                      <select className="form-select select-merchant" onChange={e=>setMerchantId(e.target.value)}>
                        {merchants.map(merchant=>
                          <option value={merchant.id}>{merchant.name}</option>
                        )}
                      </select>
                      
                      <div>
                        <button type="button" className="btn btn-primary mb-3" onClick={e=>createOrder(e)}>Add</button>
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
                        <a href="#!" onClick={e=>setOrderEdit(order)} className="text-info" data-bs-toggle="modal" data-bs-target="#editModal"><i
                          className="fas fa-pencil-alt me-3"></i></a>
                        <a href="#!" onClick={e=>deleteOrder(e, order)} className="text-danger" data-mdb-toggle="tooltip" title="Delete todo"><i
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

        {/** Edit modal */}
        <div class="modal fade edit-modal" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Order</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p className='text-dark'>What do you want to edit?</p>
                <div className='edit-choices d-flex text-dark justify-content-between mb-3 align-items-center'>
                  <input type='checkbox' onChange={e=>setShowCustomer(!showCustomerInput)}/>Customer
                  <input type='checkbox' onChange={e=>setShowMerchant(!showMerchantInput)}/>Merchant
                  <input type='checkbox' onChange={e=>setShowProducts(!showProductsInput)}/>Products
                  <input type='checkbox' onChange={e=>setShowDate(!showDateInput)}/>Date
                  <input type='checkbox' onChange={e=>setShowSale(!showSaleInput)}/>Sale
                  <input type='checkbox' onChange={e=>setShowLocation(!showLocationInput)}/>Location
                </div>
                <input type='text' style={{display: showCustomerInput?"block":"none"}} className='form-control' placeholder={orderToEdit.customer_name} onChange={e=>setEditCustomer(e.target.value)}/>
                <input type='text' style={{display: showProductsInput?"block":"none"}} className='form-control' placeholder={orderToEdit.products_ordered} onChange={e=>setEditProducts(e.target.value)}/>
                <input type='number' style={{display: showSaleInput?"block":"none"}} className='form-control' placeholder={orderToEdit.sale} onChange={e=>setEditSale(e.target.value)}/>
                <input type='text' style={{display: showLocationInput?"block":"none"}} className='form-control' placeholder={orderToEdit.location} onChange={e=>setEditLocation(e.target.value)}/>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setEditDate(e.target.value)}
                  style={{display: showDateInput?"block":"none"}}
                />
                <select style={{display: showMerchantInput?"block":"none"}} className="form-select select-merchant" onChange={e=>setEditMerchantId(e.target.value)}>
                  <option value={merchants.find(merchant=>merchant?.id===orderToEdit?.merchandiser_id)?.id}>
                    {merchants.find(merchant=>merchant?.id===orderToEdit?.merchandiser_id)?.name}
                  </option>
                  {merchants.map(merchant=>
                    merchant.id!==orderToEdit.merchandiser_id&&(
                      <option value={merchant.id}>{merchant.name}</option>
                    )
                  )}
                </select>
                <button className='btn btn-primary' onClick={e=>editOrder(e)}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Taskmanager;
