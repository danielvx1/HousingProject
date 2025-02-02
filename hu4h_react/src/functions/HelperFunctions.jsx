// Form validation (deters entry of empty values)
export function validateForm(address, landlordEmail, landlordPhoneNumber, 
    numberOfBedrooms, numberOfBathrooms, typeOfProperty,
    petsAllowed, adaAccessibility, incomeRequirements,
    pastEvictionAllowed, offenderListingAllowed, 
    criminalRecordAllowed, addictionAndIllnessAllowed, errors, setErrors) {
    let valid = true;

    const err = {...errors}

    if(address.trim()) {
        err.address = '';
    } else {
        err.address = 'Address is required';
        valid = false;
    }

    if(landlordEmail.trim()) {
        err.landlordEmail = '';
    } else {
        err.landlordEmail = 'Landlord email is required';
        valid = false;
    }

    if(landlordPhoneNumber.trim()) {
        err.landlordPhoneNumber = '';
    } else {
        err.landlordPhoneNumber = 'Landlord phone number is required';
        valid = false;
    }

    if(numberOfBedrooms !== null && numberOfBedrooms !== undefined && numberOfBedrooms !== 0 && String(numberOfBedrooms).trim()) {
        err.numberOfBedrooms = '';
    } else {
        err.numberOfBedrooms = 'Number of bedrooms is required';
        valid = false;
    }

    if(numberOfBathrooms !== null && numberOfBathrooms !== undefined && numberOfBathrooms !== 0 && String(numberOfBathrooms).trim()) {
        err.numberOfBathrooms = '';
    } else {
        err.numberOfBathrooms = 'Number of bathrooms is required';
        valid = false;
    }

    if(typeOfProperty !== '' && typeOfProperty !== null && typeOfProperty !== undefined) {
        err.typeOfProperty = '';
    } else {
        err.typeOfProperty = 'Type of property is required';
        valid = false;
    }

    if(petsAllowed !== '' && petsAllowed !== 'none') {
        err.petsAllowed = '';
    } else {
        err.petsAllowed = 'A selction is required';
        valid = false;
    }

    if(adaAccessibility !== '' && adaAccessibility !== 'none') {
        err.adaAccessibility = '';
    } else {
        err.adaAccessibility = 'A selection is required';
        valid = false;
    }

    if(incomeRequirements !== null && incomeRequirements !== undefined && incomeRequirements !== 0 && String(incomeRequirements).trim()) {
        err.incomeRequirements = '';
    } else {
        err.incomeRequirements = 'Income requirements are required';
        valid = false;
    }

    if(pastEvictionAllowed !== '' && pastEvictionAllowed !== "none") {
        err.pastEvictionAllowed = '';
    } else {
        err.pastEvictionAllowed = 'A selection is required';
        valid = false;
    }

    if(offenderListingAllowed !== '' && offenderListingAllowed !== 'none') {
        err.offenderListingAllowed = '';
    } else {
        err.offenderListingAllowed = 'A selection is required';
        valid = false;
    }

    if(criminalRecordAllowed !== '' && criminalRecordAllowed !== 'none') {
        err.criminalRecordAllowed = '';
    } else {
        err.criminalRecordAllowed = 'A selection is required';
        valid = false;
    }

    if(addictionAndIllnessAllowed !== '' && addictionAndIllnessAllowed !== 'none') {
        err.addictionAndIllnessAllowed = '';
    } else {
        err.addictionAndIllnessAllowed = 'A selection is required';
        valid = false;
    }

    setErrors(err);
    return valid;
}