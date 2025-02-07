import React, { useEffect, useState } from 'react'
import { listProperties } from '../services/PropertyService'
import { useNavigate } from 'react-router-dom'

const PropertyListVolunteer = ({ properties, setProperties }) => {

    const navigate = useNavigate();

    useEffect(() => {
        getAllProperties();
    }, [])

    function getAllProperties() {
        listProperties().then((response) => {
            setProperties(response.data);
        }).catch(err => {
            console.error(err);
        })
    }

    function createNewProperty() {
        navigate('/create-property');

    }

    function viewProperty(id) {
        navigate(`/view-property/${id}`)
    }

    function navigateToUpdateProperty(id) {
        navigate(`/update-property/${id}`)
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
                        <th>Actions</th>
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
                            <td>
                                <button className='btn btn-info' onClick={() => viewProperty(property.id)}>View</button>
                                <button className='btn btn-warning' onClick={() => navigateToUpdateProperty(property.id)} style={{marginLeft: '10px'}}
                                >Update</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}

export default PropertyListVolunteer