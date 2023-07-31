export default function MerchantItem({merchant, merchants}){
    return(
        merchant.id === merchants[0].id?
            <li className="list-group-item active d-flex align-items-center" aria-current="true">{merchant.name}</li>
        :
            <li className="list-group-item d-flex align-items-center">{merchant.name}</li>
    )
}