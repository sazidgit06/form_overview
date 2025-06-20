// import SimpleForm from './Components/SimpleForm'
import HookForm from './Components/HookForm/HookForm'
import HookReForm from './Components/HookReForm/HookReForm'
import RefForm from './Components/RefForm/RefForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
import StandardForm from './Components/StandardForm/StandardForm'

function App() {

  const handleSignup = data => {
    console.log('sign up data:', data)
  }
  const handleUpdate = data => {
    console.log('Update data:', data)
  }

  return (
    <>
      <h3>Hello i'm sazid</h3>
      <p>Learning about form submitting in react!</p>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StandardForm></StandardForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <HookReForm></HookReForm> */}
      <ReusableForm 
        formTitle='Sign up' 
        handleSubmit={handleSignup}>
          <div>
            <h4>Sign up</h4>
            <p>You need to sign up if you don't have an account</p>
          </div>
        </ReusableForm>
      <ReusableForm 
        formTitle='Update form' 
        handleSubmit={handleUpdate} 
        submitBtntext='update'>
          <div>
            <h4>Update</h4>
            <p>If need you have to keep always update</p>
          </div>
        </ReusableForm>
    </>
  )
}

export default App
