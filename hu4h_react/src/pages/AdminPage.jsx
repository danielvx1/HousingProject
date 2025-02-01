import Header from "../components/Header";
import PropertyList from "../components/PropertyList";

export default function AdminPage() {
    return (
        <div>
            <Header />
            <h2>Welcome</h2>
            <div>Admin Page</div>
            <PropertyList />
        </div>
    )
}