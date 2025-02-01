import React, { useEffect, useState } from 'react'
import { listProperties } from '../services/PropertyService'
import { useNavigate } from 'react-router-dom'

const PropertyList = () => {
    
    const [properties, setProperties] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        listProperties().then((response) => {
            setProperties(response.data);
        }).catch(err => {
            console.error(err);
        })
    }, [])

    function createNewProperty() {
        navigate('/create-property');

    }
  
    return (
        <div className='container'> 
            <h2 className='text-center'>List of Properties</h2>
            <button className='btn btn-primary' onClick={createNewProperty}>Create New Property</button>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Property Id</th>
                        <th>Property Address</th>
                        <th>Number of Bedrooms</th>
                        <th>Number of Bathrooms</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        properties.map((property) =>
                        <tr key={property.id}>
                            <td>{property.id}</td>
                            <td>{property.address}</td>
                            <td>{property.numberOfBedrooms}</td>
                            <td>{property.numberOfBathrooms}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}

export default PropertyList
