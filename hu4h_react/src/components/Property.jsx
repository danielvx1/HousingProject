import React, { useState } from 'react'

const Property = () => {

    const [address, setAddress] = useState('')
    const [landlordEmail, setLandlordEmail] = useState('')
    const [landlordPhoneNumber, setLandlordPhoneNumber] = useState('')
    const [numberOfBedrooms, setNumberOfBedrooms] = useState(null)
    const [numberOfBathrooms, setNumberOfBathrooms] = useState(null)
    const [typeOfProperty, setTypeOfProperty] = useState('')
    const [petsAllowed, setPetsAllowed] = useState('')
    const [adaAccessibility, setAdaAccessibility] = useState('')
    const [incomeRequirements, setIncomeRequirements] = useState(null)
    const [pastEvictionAllowed, setPastEvictionAllowed] = useState('')
    const [offenderListingAllowed, setOffenderListingAllowed] = useState('')
    const [criminalRecordAllowed, setCriminalRecordAllowed] = useState('')
    const [addictionAndIllnessAllowed, setAddictionAndIllnessAllowed] = useState('')

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

    function saveProperty(e) {
        e.preventDefault();

        const property = {address, landlordEmail, landlordPhoneNumber, 
                          numberOfBedrooms, numberOfBathrooms, typeOfProperty,
                          petsAllowed, adaAccessibility, incomeRequirements,
                          pastEvictionAllowed, offenderListingAllowed, 
                          criminalRecordAllowed, addictionAndIllnessAllowed}
        console.log(property)
    }

  return (
    <div className='container'>
        <br />
        <div className='row'>
            <div className='card'>
                <h2>Add Property</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label>Property Address</label>
                            <input
                                type='text'
                                placeholder='Enter Address'
                                name='address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label>Landlord Email</label>
                            <input
                                type='text'
                                placeholder='Enter Landlord Email'
                                name='landlordEmail'
                                value={landlordEmail}
                                onChange={(e) => setLandlordEmail(e.target.value)}
                                >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label>Landlord Phone Number</label>
                            <input
                                type='text'
                                placeholder='Enter Landlord Phone Number'
                                name='landlordPhoneNumber'
                                value={landlordPhoneNumber}
                                onChange={(e) => setLandlordPhoneNumber(e.target.value)}
                                >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label>Number of Bedrooms</label>
                            <input
                                type='number'
                                placeholder='Enter Number of Bedrooms'
                                name='numberOfBedrooms'
                                value={numberOfBedrooms === null ? "" : numberOfBedrooms}
                                onChange={handleNumberOfBedrooms}
                                >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label>Number of Bathrooms</label>
                            <input
                                type='number'
                                placeholder='Enter Number of Bathrooms'
                                name='numberOfBathrooms'
                                value={numberOfBathrooms === null ? "" : numberOfBathrooms}
                                onChange={handleNumberOfBathrooms}
                                >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label>Type of Property</label>
                            <select
                                name='typeOfProperty'
                                value={typeOfProperty}
                                onChange={(e) => setTypeOfProperty(e.target.value)}
                                >
                                <option value=''>Select Type of Property</option>
                                <option value='house'>House</option>
                                <option value='apartment'>Apartment</option>
                                <option value='condo'>Condo</option>
                            </select>
                        </div>

                        <div className='form-group mb-2'>
                            <label>Are Pets Allowed</label>
                            <select
                                name='petsAllowed'
                                value={petsAllowed}
                                onChange={(e) => setPetsAllowed(e.target.value === 'true')}
                                >
                                <option value=''>Select Option</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                        </div>

                        <div className='form-group mb-2'>
                            <label>ADA Accessibility</label>
                            <select
                                name='adaAccessibility'
                                value={adaAccessibility}
                                onChange={(e) => setAdaAccessibility(e.target.value === 'true')}
                                >
                                <option value=''>Select Option</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                        </div>

                        <div className='form-group mb-2'>
                            <label>Income Requirements</label>
                            <input
                                type='number'
                                placeholder='Enter Income Requirements'
                                name='incomeRequirements'
                                value={incomeRequirements === null ? "" : incomeRequirements}
                                onChange={handleIncomeRequirements}
                                >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label>Is Past Eviction Allowed</label>
                            <select
                                name='pastEvictionAllowed'
                                value={pastEvictionAllowed}
                                onChange={(e) => setPastEvictionAllowed(e.target.value === 'true')}
                                >
                                <option value=''>Select Option</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                        </div>

                        <div className='form-group mb-2'>
                            <label>Is Sex Offender Listing Allowed</label>
                            <select
                                name='offenderListingAllowed'
                                value={offenderListingAllowed}
                                onChange={(e) => setOffenderListingAllowed(e.target.value === 'true')}
                                >
                                <option value=''>Select Option</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                        </div>

                        <div className='form-group mb-2'>
                            <label>Is Criminal Record Allowed</label>
                            <select
                                name='criminalRecordAllowed'
                                value={criminalRecordAllowed}
                                onChange={(e) => setCriminalRecordAllowed(e.target.value === 'true')}
                                >
                                <option value=''>Select Option</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                        </div>

                        <div className='form-group mb-2'>
                            <label>Is Drug, Alcohol, or Mental Illness Allowed</label>
                            <select
                                name='addictionAndIllnessAllowed'
                                value={addictionAndIllnessAllowed}
                                onChange={(e) => setAddictionAndIllnessAllowed(e.target.value === 'true')}
                                >
                                <option value=''>Select Option</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                        </div>

                        <button className='btn btn-success' onClick={saveProperty}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Property