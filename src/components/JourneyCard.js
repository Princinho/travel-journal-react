import img from '../img/norway.jfif'
import locationImg from '../img/location-icon.svg'
export default function JourneyCard(props){
    return (
        <div className='journey'>
            <img className='journey__img' src={img}/>
            <div>
                <img className='location-icon' src={locationImg}/>
                <span className='journey__location'>Norway</span>
                <a href='#' className='journey__maps-link'>View on Google Maps</a>
                <h1 className='journey__place'>Geirangerfjord</h1>
                <span className='journey__date'>01 Oct,2021 - 18 Nov, 2021</span>
                <p className='journey__description'>The Geiranger Fjord is a fjord in the Sunnmøre
                     region of Møre og Romsdal county, Norway. 
                     It is located entirely in the Stranda Municipality.</p>
            </div>

        </div>
    )
}