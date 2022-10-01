import JourneyCard from "./JourneyCard";
import data from '../assets/data'
export default function MainContent(){
    console.log(data)
    return (
        <div className="main-content">
            {
                data.map((journey,index)=>
                    <JourneyCard 
                    key={index}
                    title={journey.title}
                    location={journey.location}
                    startDate={journey.startDate}
                    endDate={journey.endDate}
                    description={journey.description}
                    imageUrl={journey.imageUrl}
                    googleMapsUrl={journey.googleMapsUrl}
                    />
                    )
            }
            {/* <JourneyCard location=''/>
            <JourneyCard/>
            <JourneyCard/> */}
        </div>
        

    )
}