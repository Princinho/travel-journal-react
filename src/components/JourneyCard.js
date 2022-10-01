import img from '../img/norway.jfif'
import locationImg from '../img/location-icon.svg'
export default function JourneyCard(props){
    return (
        <div className='journey'>
            <img className='journey__img' src={props.imageUrl}/>
            <div>
                <img className='location-icon' src={locationImg}/>
                <span className='journey__location'>{props.location}</span>
                <a href={props.googleMapsUrl} className='journey__maps-link'>View on Google Maps</a>
                <h1 className='journey__place'>{props.title}</h1>
                <span className='journey__date'>{props.startDate} - {props.endDate}</span>
                <p className='journey__description'>{props.description}</p>
            </div>

        </div>
    )
}