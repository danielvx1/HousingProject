import React, { useState, useEffect } from 'react';
import { useUserRole } from '../functions/useUserRole';
import { filterProperties } from '../services/PropertyService';

const FilterList = ({ properties, setProperties }) => {

    // State for filter inputs
    const [filters, setFilters] = useState({
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
        addictionAndIllnessAllowed: '',
    });

    // Fetch properties (filtered or all)
    const fetchProperties = async () => {
        try {
            const response = await filterProperties(filters); // Use the API function
            setProperties(response.data); // Update state with response data
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    }

    // Handle input changes
    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    // Handle dropdown (Boolean values like Yes/No)
    const handleDropdownChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value === "true" });
    };

    // Handle dropdown (get type of property - 3 options)
    const handleDropdownChangeMultiple = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    // Reset filters and fetch all properties again
    const resetFilters = () => {
        const emptyFilters = {
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
            addictionAndIllnessAllowed: '',
        };
    
        setFilters(emptyFilters);
        fetchProperties(); // Fetch all properties again after resetting
    };

    // Load all properties initially
    useEffect(() => {
        fetchProperties();
    }, []);

    const getTypeOfProperty = (e) => {
        const types = {
            house: "House",
            apartment: "Apartment",
            condo: "Condo"
        };
        return types[e] || "Unknown";
    };

    return (
        <div className='container'>
            <div className='d-flex justify-content-center mb-3'>
                <h2 className='mx-auto'>Filter Properties</h2>
            </div>

            {/* Filter Fields */}
            <div className="row g-4">
                <div className="col-md-4 mb-3">
                    <label htmlFor='address' className='form-label d-block'>Address</label>
                    <input type='text' id='address' name='address' className='form-control' value={filters.address} onChange={handleChange} placeholder='Enter Address' />
                </div>

                <div className="col-md-4 mb-3">
                    <label htmlFor='landlordEmail' className='form-label d-block'>Landlord Email</label>
                    <input type='text' id='landlordEmail' name='landlordEmail' className='form-control' value={filters.landlordEmail} onChange={handleChange} placeholder='Enter Landlord Email' />
                </div>

                <div className="col-md-4 mb-3">
                    <label htmlFor='landlordPhoneNumber' className='form-label d-block'>Landlord Phone Number</label>
                    <input type='text' id='landlordPhoneNumber' name='landlordPhoneNumber' className='form-control' value={filters.landlordPhoneNumber} onChange={handleChange} placeholder='Enter Landlord Phone Number' />
                </div>
            </div>

            <div className="row g-3">
                <div className="col-md-4 mb-3">
                    <label htmlFor='numberOfBedrooms' className='form-label d-block'>Number of Bedrooms</label>
                    <input type='number' id='numberOfBedrooms' name='numberOfBedrooms' className='form-control' value={filters.numberOfBedrooms} onChange={handleChange} placeholder='Enter Number of Bedrooms' />
                </div>

                <div className="col-md-4 mb-3">
                    <label htmlFor='numberOfBathrooms' className='form-label d-block'>Number of Bathrooms</label>
                    <input type='number' id='numberOfBathrooms' name='numberOfBathrooms' className='form-control' value={filters.numberOfBathrooms} onChange={handleChange} placeholder='Enter Number of Bathrooms' />
                </div>

                <div className="col-md-4 mb-3">
                    <label htmlFor='typeOfProperty' className='form-label d-block'>Type of Property</label>
                    <select id='typeOfProperty' name='typeOfProperty' className='form-select' value={filters.typeOfProperty} onChange={handleDropdownChangeMultiple}>
                        <option value=''>Select Option</option>
                        <option value='house'>House</option>
                        <option value='apartment'>Apartment</option>
                        <option value='condo'>Condo</option>
                    </select>
                </div>
            </div>

            {/* Dropdowns for Yes/No fields */}
            <div className="row g-3">
                <div className="col-md-4 mb-3">
                    <label htmlFor='petsAllowed'>Are Pets Allowed</label>
                    <select id='petsAllowed' name='petsAllowed' className='form-select' value={filters.petsAllowed} onChange={handleDropdownChange}>
                        <option value=''>Select Option</option>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>

                <div className="col-md-4 mb-3">
                    <label htmlFor='adaAccessibility'>ADA Accessibility</label>
                    <select id='adaAccessibility' name='adaAccessibility' className='form-select' value={filters.adaAccessibility} onChange={handleDropdownChange}>
                        <option value=''>Select Option</option>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>

                <div className="col-md-4 mb-3">
                    <label htmlFor='incomeRequirements' className='form-label d-block'>Income Requirements</label>
                    <input type='number' id='incomeRequirements' name='incomeRequirements' className='form-control' value={filters.incomeRequirements} onChange={handleChange} placeholder='Enter Income Requirements' />
                </div>
            </div>

            <div className="row g-3">
                <div className="col-md-4 mb-3">
                    <label htmlFor='pastEvictionAllowed' className='form-label d-block'>Is Past Eviction Allowed</label>
                    <select id='pastEvictionAllowed' name='pastEvictionAllowed' className='form-select' value={filters.pastEvictionAllowed} onChange={handleDropdownChange}>
                        <option value=''>Select Option</option>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>

                <div className="col-md-4 mb-3">
                    <label htmlFor='offenderListingAllowed' className='form-label d-block'>Is Sex Offender Listing Allowed</label>
                    <select id='offenderListingAllowed' name='offenderListingAllowed' className='form-select' value={filters.offenderListingAllowed} onChange={handleDropdownChange}>
                        <option value=''>Select Option</option>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>

                <div className="col-md-4 mb-3">
                    <label htmlFor='criminalRecordAllowed' className='form-label d-block'>Is Criminal Record Allowed</label>
                    <select id='criminalRecordAllowed' name='criminalRecordAllowed' className='form-select' value={filters.criminalRecordAllowed} onChange={handleDropdownChange}>
                        <option value=''>Select Option</option>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>
            </div>

            <div className="col-md-4 mb-3">
                <label htmlFor='addictionAndIllnessAllowed' className='form-label d-block'>Is Alcohol, Drugs, or Mental Illness Allowed</label>
                <select id='addictionAndIllnessAllowed' name='addictionAndIllnessAllowed' className='form-select' value={filters.addictionAndIllnessAllowed} onChange={handleDropdownChange}>
                    <option value=''>Select Option</option>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                </select>
            </div>

            {/* Buttons for filtering and resetting */}
            <button onClick={fetchProperties} className="btn btn-primary">Filter</button>
            <button onClick={resetFilters} className="btn btn-secondary">Reset</button>
        </div>
    );
};

export default FilterList;