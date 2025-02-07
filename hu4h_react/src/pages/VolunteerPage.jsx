import HeaderVolunteer from "../components/HeaderVolunteer";
import PropertyList from "../components/PropertyList";
import PropertyListVolunteer from "../components/PropertyListVolunteer";

export default function VolunteerPage(props) {
    
    const {properties, setProperties} = props

    return (
        <div>
            <HeaderVolunteer />
            <h2>Welcome</h2>
            <div>Volunteer Page</div>
            <PropertyListVolunteer {...props} />
        </div>
    ) 
}