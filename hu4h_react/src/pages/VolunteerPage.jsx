import HeaderVolunteer from "../components/HeaderVolunteer";
import PropertyList from "../components/PropertyList";

export default function VolunteerPage(props) {
    
    const {properties, setProperties} = props

    return (
        <div>
            <HeaderVolunteer />
            <h2>Welcome</h2>
            <div>Volunteer Page</div>
            <PropertyList {...props} />
        </div>
    ) 
}