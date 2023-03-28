import { Button, Input } from '@chakra-ui/react'
import './form.scss'

const Form = ({handleSubmit,city,setCity}) => {
  return (
    <div >
        <form style={{display:'flex',gap:'10px'}} onSubmit={handleSubmit} >
            <Input size='lg' type="text" value={city} placeholder='Add City' onChange={(e)=>setCity(e.target.value)} variant='Outline'  />
            <Button size='lg' color='white' bg='blue.600' type='submit'> Submit</Button>
        </form>
    </div>
  )
}

export default Form