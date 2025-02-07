import React, { useEffect, useState } from 'react'
import { createProperty, getProperty, updateProperty } from '../services/PropertyService'
import { validateForm } from '../functions/HelperFunctions'
import { useNavigate, useParams } from 'react-router-dom'
import { useUserRole } from '../functions/useUserRole'

const Property = ({ address, setAddress, landlordEmail, setLandlordEmail, 
                landlordPhoneNumber, setLandlordPhoneNumber, numberOfBedrooms, setNumberOfBedrooms,
                numberOfBathrooms, setNumberOfBathrooms, typeOfProperty, setTypeOfProperty, 
                petsAllowed, setPetsAllowed, adaAccessibility, setAdaAccessibility, incomeRequirements, 
                setIncomeRequirements, pastEvictionAllowed, setPastEvictionAllowed, offenderListingAllowed, 
                setOffenderListingAllowed, criminalRecordAllowed, setCriminalRecordAllowed, addictionAndIllnessAllowed, 
                setAddictionAndIllnessAllowed, initialPropertyState }) => {

    
    const navigate = useNavigate()                
    const {id} = useParams()

    // Validate form (input/on submission)
    const [errors, setErrors] = useState({
        address: '',
        landlordEmail: '',
        landlordPhoneNumber: '',
        numberOfBedrooms: '',
        numberOfBathrooms: '',
        typeOfProperty: '',
        petsAllowed: '',
        adaAccessibility: '',
        incomeRequirements: '',
        pastEvictionAllowed: '',
        offenderListingAllowed: '',
        criminalRecordAllowed: '',
        addictionAndIllnessAllowed: ''
    })

    const handleNumberOfBedrooms = (e) => {
        const value = e.target.value;
        setNumberOfBedrooms(value === "" ? null : Number(value));
    };

    const handleNumberOfBathrooms = (e) => {
        const value = e.target.value;
        setNumberOfBathrooms(value === "" ? null : Number(value));
    };

    const handleIncomeRequirements = (e) => {
        const value = e.target.value;
        setIncomeRequirements(value === "" ? null : Number(value));
    };

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

    function saveAndUpdateProperty(e) {
        e.preventDefault();

        // Form validation (deters entry of empty values)
        if(validateForm(address, landlordEmail, landlordPhoneNumber, 
            numberOfBedrooms, numberOfBathrooms, typeOfProperty,
            petsAllowed, adaAccessibility, incomeRequirements,
            pastEvictionAllowed, offenderListingAllowed, 
            criminalRecordAllowed, addictionAndIllnessAllowed, 
            errors, setErrors)) {

            const property = {address, landlordEmail, landlordPhoneNumber, 
                            numberOfBedrooms, numberOfBathrooms, typeOfProperty,
                            petsAllowed, adaAccessibility, incomeRequirements,
                            pastEvictionAllowed, offenderListingAllowed, 
                            criminalRecordAllowed, addictionAndIllnessAllowed}
            console.log(property)

            // Utilize function that gets "userRole" from local storage and returns it
            const userRole = useUserRole();

            // call createProperty/updateProperty method from PropertyService
            if(id) {
                updateProperty(id, property).then((response) => {
                    console.log(response.data);
                    initialPropertyState();
                    navigate(`/${userRole}`)
                }).catch(err => {
                    console.error(err);
                })
            } else {
                createProperty(property).then((response) => {
                    console.log(response.data);
                    initialPropertyState();
                }).catch(err => {
                    console.error(err);
                })
            }

        }
    }

    function pageTitle() {
       if(id) {
        return (<div><h2>Update Property</h2> <p>Please click submit before returning to home page.</p> </div>)
       } else {
        return <h2>Add Property</h2>
       }
    }

  return (
    <div className='container'>
        <br />
        <div className='row'>
            <div className='card'>
                { 
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label>Property Address</label>
                            <input
                                type='text'
                                placeholder='Enter Address'
                                name='address'
                                value={address}
                                className={`${ errors.address ? 'is-invalid' : ''}`}
                                onChange={(e) => setAddress(e.target.value)}
                                >
                            </input>
                            {errors.address && <div className='invalid-feedback'>{errors.address}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label>Landlord Email</label>
                            <input
                                type='text'
                                placeholder='Enter Landlord Email'
                                name='landlordEmail'
                                value={landlordEmail}
                                className={`${ errors.landlordEmail ? 'is-invalid' : ''}`}
                                onChange={(e) => setLandlordEmail(e.target.value)}
                                >
                            </input>
                            {errors.landlordEmail && <div className='invalid-feedback'>{errors.landlordEmail}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label>Landlord Phone Number</label>
                            <input
                                type='text'
                                placeholder='Enter Landlord Phone Number'
                                name='landlordPhoneNumber'
                                value={landlordPhoneNumber}
                                className={`${ errors.landlordPhoneNumber ? 'is-invalid' : ''}`}
                                onChange={(e) => setLandlordPhoneNumber(e.target.value)}
                                >
                            </input>
                            {errors.landlordPhoneNumber && <div className='invalid-feedback'>{errors.landlordPhoneNumber}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label>Number of Bedrooms</label>
                            <input
                                type='number'
                                placeholder='Enter Number of Bedrooms'
                                name='numberOfBedrooms'
                                value={numberOfBedrooms === null ? "" : numberOfBedrooms}
                                className={`${ errors.numberOfBedrooms ? 'is-invalid' : ''}`}
                                onChange={handleNumberOfBedrooms}
                                >
                            </input>
                            {errors.numberOfBedrooms && <div className='invalid-feedback'>{errors.numberOfBedrooms}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label>Number of Bathrooms</label>
                            <input
                                type='number'
                                placeholder='Enter Number of Bathrooms'
                                name='numberOfBathrooms'
                                value={numberOfBathrooms === null ? "" : numberOfBathrooms}
                                className={`${ errors.numberOfBathrooms ? 'is-invalid' : ''}`}
                                onChange={handleNumberOfBathrooms}
                                >
                            </input>
                            {errors.numberOfBathrooms && <div className='invalid-feedback'>{errors.numberOfBathrooms}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label>Type of Property</label>
                            <select
                                name='typeOfProperty'
                                value={typeOfProperty}
                                className={`${ errors.typeOfProperty ? 'is-invalid' : ''}`}
                                onChange={(e) => setTypeOfProperty(e.target.value)}
                                >
                                <option value=''>Select Type of Property</option>
                                <option value='house'>House</option>
                                <option value='apartment'>Apartment</option>
                                <option value='condo'>Condo</option>
                            </select>
                            {errors.typeOfProperty && <div className='invalid-feedback'>{errors.typeOfProperty}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label>Are Pets Allowed</label>
                            <select
                                name='petsAllowed'
                                value={petsAllowed}
                                className={`${ errors.petsAllowed ? 'is-invalid' : ''}`}
                                onChange={(e) => setPetsAllowed(e.target.value === 'true')}
                                >
                                <option value=''>Select Option</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                            {errors.petsAllowed && <div className='invalid-feedback'>{errors.petsAllowed}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label>ADA Accessibility</label>
                            <select
                                name='adaAccessibility'
                                value={adaAccessibility}
                                className={`${ errors.adaAccessibility ? 'is-invalid' : ''}`}
                                onChange={(e) => setAdaAccessibility(e.target.value === 'true')}
                                >
                                <option value=''>Select Option</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                            {errors.adaAccessibility && <div className='invalid-feedback'>{errors.adaAccessibility}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label>Income Requirements</label>
                            <input
                                type='number'
                                placeholder='Enter Income Requirements'
                                name='incomeRequirements'
                                value={incomeRequirements === null ? "" : incomeRequirements}
                                className={`${ errors.incomeRequirements ? 'is-invalid' : ''}`}
                                onChange={handleIncomeRequirements}
                                >
                            </input>
                            {errors.incomeRequirements && <div className='invalid-feedback'>{errors.incomeRequirements}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label>Is Past Eviction Allowed</label>
                            <select
                                name='pastEvictionAllowed'
                                value={pastEvictionAllowed}
                                className={`${ errors.pastEvictionAllowed ? 'is-invalid' : ''}`}
                                onChange={(e) => setPastEvictionAllowed(e.target.value === 'true')}
                                >
                                <option value=''>Select Option</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                            {errors.pastEvictionAllowed && <div className='invalid-feedback'>{errors.pastEvictionAllowed}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label>Is Sex Offender Listing Allowed</label>
                            <select
                                name='offenderListingAllowed'
                                value={offenderListingAllowed}
                                className={`${ errors.offenderListingAllowed ? 'is-invalid' : ''}`}
                                onChange={(e) => setOffenderListingAllowed(e.target.value === 'true')}
                                >
                                <option value=''>Select Option</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                            {errors.offenderListingAllowed && <div className='invalid-feedback'>{errors.offenderListingAllowed}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label>Is Criminal Record Allowed</label>
                            <select
                                name='criminalRecordAllowed'
                                value={criminalRecordAllowed}
                                className={`${ errors.criminalRecordAllowed ? 'is-invalid' : ''}`}
                                onChange={(e) => setCriminalRecordAllowed(e.target.value === 'true')}
                                >
                                <option value=''>Select Option</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                            {errors.criminalRecordAllowed && <div className='invalid-feedback'>{errors.criminalRecordAllowed}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label>Is Drug, Alcohol, or Mental Illness Allowed</label>
                            <select
                                name='addictionAndIllnessAllowed'
                                value={addictionAndIllnessAllowed}
                                className={`${ errors.addictionAndIllnessAllowed ? 'is-invalid' : ''}`}
                                onChange={(e) => setAddictionAndIllnessAllowed(e.target.value === 'true')}
                                >
                                <option value=''>Select Option</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                            {errors.addictionAndIllnessAllowed && <div className='invalid-feedback'>{errors.addictionAndIllnessAllowed}</div>}
                        </div>

                        <button className='btn btn-success' onClick={saveAndUpdateProperty}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Property