import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProperty } from '../services/PropertyService'
import { useUserRole } from '../functions/useUserRole'

const ViewProperty = ({ address, setAddress, landlordEmail, setLandlordEmail, 
    landlordPhoneNumber, setLandlordPhoneNumber, numberOfBedrooms, setNumberOfBedrooms,
    numberOfBathrooms, setNumberOfBathrooms, typeOfProperty, setTypeOfProperty, 
    petsAllowed, setPetsAllowed, adaAccessibility, setAdaAccessibility, incomeRequirements, 
    setIncomeRequirements, pastEvictionAllowed, setPastEvictionAllowed, offenderListingAllowed, 
    setOffenderListingAllowed, criminalRecordAllowed, setCriminalRecordAllowed, addictionAndIllnessAllowed, 
    setAddictionAndIllnessAllowed, initialPropertyState }) => {
        
    const {id} = useParams();

    const navigate = useNavigate();

    // Utilize function that gets "userRole" from local storage and returns it
    const userRole = useUserRole();

    useEffect(() => {
            if(id) {
                getProperty(id).then((response) => {
                    setAddress(response.data.address);
                    setLandlordEmail(response.data.landlordEmail);
                    setLandlordPhoneNumber(response.data.landlordPhoneNumber);
                    setNumberOfBedrooms(response.data.numberOfBedrooms);
                    setNumberOfBathrooms(response.data.numberOfBathrooms);
                    setTypeOfProperty(response.data.typeOfProperty);
                    setPetsAllowed(response.data.petsAllowed);
                    setAdaAccessibility(response.data.adaAccessibility);
                    setIncomeRequirements(response.data.incomeRequirements);
                    setPastEvictionAllowed(response.data.pastEvictionAllowed);
                    setOffenderListingAllowed(response.data.offenderListingAllowed);
                    setCriminalRecordAllowed(response.data.criminalRecordAllowed);
                    setAddictionAndIllnessAllowed(response.data.addictionAndIllnessAllowed);
                }).catch(err => {
                    console.error(err);
                })
            }
    }, [])

    function goBack() {
        initialPropertyState();
        navigate(`/${userRole}`);
    }

    return (
        <div className='container'>
            <br />
            <div className='row'>
                <div className='card'>
                    <h2>View Property</h2>
                    <div className='card-body'>
                        
                            <div className='form-group mb-2'>
                                <h6 className='card-title'>Property Address</h6>
                                <p className='card-text'>{address}</p>
                            </div>
    
                            <div className='form-group mb-2'>
                                <h6 className='card-title'>Landlord Email</h6>
                                <p className='card-text'>{landlordEmail}</p>
                            </div>

                            <div className='form-group mb-2'>
                                <h6 className='card-title'>Landlord Phone Number</h6>
                                <p className='card-text'>{landlordPhoneNumber}</p>
                            </div>

                            <div className='form-group mb-2'>
                                <h6 className='card-title'>Number of Bedrooms</h6>
                                <p className='card-text'>{numberOfBedrooms}</p>
                            </div>

                            <div className='form-group mb-2'>
                                <h6 className='card-title'>Number of Bathrooms</h6>
                                <p className='card-text'>{numberOfBathrooms}</p>
                            </div>

                            <div className='form-group mb-2'>
                                <h6 className='card-title'>Type of Property</h6>
                                <p className='card-text'>{typeOfProperty}</p>
                            </div>

                            <div className='form-group mb-2'>
                                <h6 className='card-title'>Are Pets Allowed</h6>
                                <p className='card-text'>
                                    {petsAllowed === true && 'Yes'}
                                    {petsAllowed === false && 'No'}
                                </p>
                            </div>

                            <div className='form-group mb-2'>
                                <h6 className='card-title'>ADA Accessibility</h6>
                                <p className='card-text'>
                                    {adaAccessibility === true && 'Yes'}
                                    {adaAccessibility === false && 'No'}
                                </p>
                            </div>

                            <div className='form-group mb-2'>
                                <h6 className='card-title'>Income Requirements</h6>
                                <p className='card-text'>{incomeRequirements}</p>
                            </div>

                            <div className='form-group mb-2'>
                                <h6 className='card-title'>Is Past Eviction Allowed</h6>
                                <p className='card-text'>
                                    {pastEvictionAllowed === true && 'Yes'}
                                    {pastEvictionAllowed === false && 'No'}
                                </p>
                            </div>

                            <div className='form-group mb-2'>
                                <h6 className='card-title'>Is Sex Offender Listing Allowed</h6>
                                <p className='card-text'>
                                    {offenderListingAllowed === true && 'Yes'}
                                    {offenderListingAllowed === false && 'No'}
                                </p>
                            </div>

                            <div className='form-group mb-2'>
                                <h6 className='card-title'>Is Criminal Record Allowed</h6>
                                <p className='card-text'>
                                    {criminalRecordAllowed === true && 'Yes'}
                                    {criminalRecordAllowed === false && 'No'}
                                </p>
                            </div>

                            <div className='form-group mb-2'>
                                <h6 className='card-title'>Is Drug, Alcohol, or Mental Illness Allowed</h6>
                                <p className='card-text'>
                                    {addictionAndIllnessAllowed === true && 'Yes'}
                                    {addictionAndIllnessAllowed === false && 'No'}
                                </p>
                            </div>

                            <button className='btn btn-secondary' onClick={goBack}>Back</button>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default ViewProperty