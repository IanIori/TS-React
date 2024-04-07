import ButtonFatec from './components/button-fatec'
import CustomInput from './components/custom-input'

function App() {
  return (
    <div className='center'> 
      <div className='rect'>
      Entre em contato
      <div className='separator'></div>
      
      <form>
      <CustomInput type='input' initialValue='' placeholderText='Nome' />
      <CustomInput type='input' initialValue='' placeholderText='Email' />
      <CustomInput type='input' initialValue='' placeholderText='Telefone' />
      </form>

      <div className='separator'></div>

      <ButtonFatec type='button' label='FATEC: Send Mensage' />
      </div>
    </div>
  )
}

export default App
