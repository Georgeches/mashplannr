import './MerchantProfile.css'

export default function MerchantProfile({currentMerchant}){
    return(
        <div className="container merchant-profile d-flex align-center justify-content-evenly">
            <div className="profile-img">
                <img src={currentMerchant?.profile_picture} alt="merchant"/>
            </div>
            <div className="merchant-details">
                <div className="merchant-detail d-flex">
                    <p>Name: </p><p>{currentMerchant?.name}</p>
                </div>
                <div className="merchant-detail d-flex">
                    <p>ID Number: </p><p>{currentMerchant?.id_number}</p>
                </div>
                <div className="merchant-detail d-flex">
                    <p>Vehicle registration: </p><p>{currentMerchant?.vehicle_registration}</p>
                </div>
                <div className="merchant-detail d-flex">
                    <p>Status: </p><p>{currentMerchant?.status}</p>
                </div>
                <div className="merchant-detail d-flex">
                    <p>Phone number: </p><p>{currentMerchant?.phone_number}</p>
                </div>
            </div>
        </div>
    )
}