import HeaderSocial from "../components/HeaderSocial";
import PropertyListSocial from "../components/PropertyListSocial";

export default function SocialPage(props) {

    const {properties, setProperties} = props

    return (
        <div>
            <HeaderSocial />
            <h2>Welcome</h2>
            <div>Social Worker Page</div>
            <PropertyListSocial {...props} />
        </div>
    )
}