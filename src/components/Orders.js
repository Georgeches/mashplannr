import React, { useEffect, useState } from 'react';
import './Orders.css'

function Orders({orders, merchants}) {

    const [searchedValue, setSearchValue] = useState("")
    const [filterBy, setFilterBy] = useState("customer")
    const [duration, setDuration] = useState("forever");
    const [companyOrders, setOrders] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/api/orders/filter?duration=${duration}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setOrders(data)
        })
        .catch(error => console.error('Error fetching orders:', error));
    },[duration])

    function changeFilterBy(e){
        e.preventDefault();
        setFilterBy(e.target.value)
    }

    let searchedOrders;
    if(filterBy==="customer"){
        searchedOrders = companyOrders.filter(order=>order?.customer_name.toLowerCase().includes(searchedValue.toLowerCase()))
    }
    else if(filterBy==="products"){
        searchedOrders = companyOrders.filter(order=>order?.products_ordered.toLowerCase().includes(searchedValue.toLowerCase()))
    }
    else if(filterBy==="merchant"){
        searchedOrders = companyOrders.filter(order=>merchants.find(merchant=>merchant.id===order?.merchandiser_id)?.name.toLowerCase().includes(searchedValue.toLowerCase()))
    }

    const totalSales = searchedOrders?.reduce((sum, order) => sum+order.sale, 0)

    return (
        <div className="container order-page px-2">
            <div className="mb-4 d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex">
                    <span className="position-absolute search"><i className="fa fa-search"></i></span>
                    <input className="form-control w-100" placeholder="Type to Search..." onChange={e=>setSearchValue(e.target.value)}/>
                    <select onChange={e=>changeFilterBy(e)} className='ms-3'>
                        <option value="customer">Search by customer name</option>
                        <option value="products">Search by products</option>
                        <option value="merchant">Search by merchandiser</option>
                    </select>
                </div>
                <div className="px-2">
                    <select onChange={e=>setDuration(e.target.value)} className='ms-3 date-select'>
                        <option value="forever">All orders</option>
                        <option value="today">Today</option>
                        <option value="this_week">This week</option>
                        <option value="this_month">This month</option>
                        <option value="this_year">This year</option>
                    </select>
                </div>
            </div>
            <hr/>
            <div className="table-responsive">
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
                        {searchedOrders.map(order=>
                            <tr>
                                <td>{order?.date}</td>
                                <td>{order?.customer_name}</td>
                                <td>{order?.products_ordered}</td>
                                <td>{order?.location}</td>
                                <td>{merchants.find(merchant=>merchant.id===order?.merchandiser_id)?.name}</td>
                                <td>Ksh. {order?.sale}</td>

                            </tr>
                        )}
                        {searchedOrders.length===0&&(
                            <div className='container d-flex align-center mt-3' style={{position: "fixed"}}>
                                <p className='text-muted'>No orders found</p>
                            </div>
                        )}
                    </tbody>
                </table>
                <hr/>
                <div className='total container me-1'>
                    {searchedValue===""?
                        <p className='lead'>Total sales for the selected period is Kshs. {totalSales?totalSales:0}</p>
                        :
                        <p className='lead'>Total sales for searched orders in selected period is Kshs. {totalSales?totalSales:0}</p>
                    }
                    
                </div>
                <hr/>
            </div>
        </div>
    );
}

export default Orders;
