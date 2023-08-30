import './donationCard.css';

const DonationCard = ({ urlImg }) => {
    return (
        <div className='donation-card'>
            <img className='img-card-donation' src={urlImg} alt='donation-img'/>
        </div>
    )
}
export default DonationCard;