import { useState } from 'react'
import './App.css'
import UserLoginPage from './components/UserLoginPage'
import { Router, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/AdminPage'
import SocialPage from './pages/SocialPage'
import VolunteerPage from './pages/VolunteerPage'
import Property from './components/Property'
import ViewProperty from './components/ViewProperty'
import ProtectedRoute from './functions/ProtectedRoute'

function App() {

  const [properties, setProperties] = useState([])

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

  return (
    <>    
      <Routes>
        <Route path="/" element={<UserLoginPage />} />

        <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
          <Route path="/admin" element={<AdminPage properties={properties} setProperties={setProperties} />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["SOCIAL"]} />}>
          <Route path="/social" element={<SocialPage properties={properties} setProperties={setProperties} />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["VOLUNTEER"]} />}>
          <Route path="/volunteer" element={<VolunteerPage properties={properties} setProperties={setProperties} />} />
        </Route>

        <Route path="/create-property" element={<Property address={address} setAddress={setAddress} landlordEmail={landlordEmail}
         setLandlordEmail={setLandlordEmail} landlordPhoneNumber={landlordPhoneNumber} setLandlordPhoneNumber={setLandlordPhoneNumber}
         numberOfBedrooms={numberOfBedrooms} setNumberOfBedrooms={setNumberOfBedrooms} numberOfBathrooms={numberOfBathrooms} 
         setNumberOfBathrooms={setNumberOfBathrooms} typeOfProperty={typeOfProperty} setTypeOfProperty={setTypeOfProperty}
         petsAllowed={petsAllowed} setPetsAllowed={setPetsAllowed} adaAccessibility={adaAccessibility} setAdaAccessibility={setAdaAccessibility}
         incomeRequirements={incomeRequirements} setIncomeRequirements={setIncomeRequirements} pastEvictionAllowed={pastEvictionAllowed}
         setPastEvictionAllowed={setPastEvictionAllowed} offenderListingAllowed={offenderListingAllowed} setOffenderListingAllowed={setOffenderListingAllowed}
         criminalRecordAllowed={criminalRecordAllowed} setCriminalRecordAllowed={setCriminalRecordAllowed} addictionAndIllnessAllowed={addictionAndIllnessAllowed}
         setAddictionAndIllnessAllowed={setAddictionAndIllnessAllowed} />} />

        <Route path="/update-property/:id" element={<Property address={address} setAddress={setAddress} landlordEmail={landlordEmail}
         setLandlordEmail={setLandlordEmail} landlordPhoneNumber={landlordPhoneNumber} setLandlordPhoneNumber={setLandlordPhoneNumber}
         numberOfBedrooms={numberOfBedrooms} setNumberOfBedrooms={setNumberOfBedrooms} numberOfBathrooms={numberOfBathrooms} 
         setNumberOfBathrooms={setNumberOfBathrooms} typeOfProperty={typeOfProperty} setTypeOfProperty={setTypeOfProperty}
         petsAllowed={petsAllowed} setPetsAllowed={setPetsAllowed} adaAccessibility={adaAccessibility} setAdaAccessibility={setAdaAccessibility}
         incomeRequirements={incomeRequirements} setIncomeRequirements={setIncomeRequirements} pastEvictionAllowed={pastEvictionAllowed}
         setPastEvictionAllowed={setPastEvictionAllowed} offenderListingAllowed={offenderListingAllowed} setOffenderListingAllowed={setOffenderListingAllowed}
         criminalRecordAllowed={criminalRecordAllowed} setCriminalRecordAllowed={setCriminalRecordAllowed} addictionAndIllnessAllowed={addictionAndIllnessAllowed}
         setAddictionAndIllnessAllowed={setAddictionAndIllnessAllowed} />} />

        <Route path="/view-property/:id" element={<ViewProperty address={address} setAddress={setAddress} landlordEmail={landlordEmail}
         setLandlordEmail={setLandlordEmail} landlordPhoneNumber={landlordPhoneNumber} setLandlordPhoneNumber={setLandlordPhoneNumber}
         numberOfBedrooms={numberOfBedrooms} setNumberOfBedrooms={setNumberOfBedrooms} numberOfBathrooms={numberOfBathrooms} 
         setNumberOfBathrooms={setNumberOfBathrooms} typeOfProperty={typeOfProperty} setTypeOfProperty={setTypeOfProperty}
         petsAllowed={petsAllowed} setPetsAllowed={setPetsAllowed} adaAccessibility={adaAccessibility} setAdaAccessibility={setAdaAccessibility}
         incomeRequirements={incomeRequirements} setIncomeRequirements={setIncomeRequirements} pastEvictionAllowed={pastEvictionAllowed}
         setPastEvictionAllowed={setPastEvictionAllowed} offenderListingAllowed={offenderListingAllowed} setOffenderListingAllowed={setOffenderListingAllowed}
         criminalRecordAllowed={criminalRecordAllowed} setCriminalRecordAllowed={setCriminalRecordAllowed} addictionAndIllnessAllowed={addictionAndIllnessAllowed}
         setAddictionAndIllnessAllowed={setAddictionAndIllnessAllowed}
         />} />
      </Routes>
    </>
  )
}

export default App
