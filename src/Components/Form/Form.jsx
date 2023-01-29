import './form.scss'

const Form = ({handleSubmit,city,setCity}) => {
  return (
    <div className="py-5 div-form">
        <form onSubmit={handleSubmit} >
            <input type="text" value={city} className=' text-center'placeholder='Add City' onChange={(e)=>setCity(e.target.value)}/>
            <input type="submit" className='btn btn-dark' />
        </form>
    </div>
  )
}

export default Form