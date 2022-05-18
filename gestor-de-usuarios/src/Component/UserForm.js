import Input from "./Input"
import Button from "./Button"
import useFormulario from '../hooks/useFormulario'
import './Input.css'


const UserForm = ({submit}) =>{

const [formulario, handleChange, reset] = useFormulario({name:'', lastname:'', email:''})

  const handleSubmit = (e) =>{
    e.preventDefault()
    submit(formulario)
    reset()
  }

  return(
 <form onSubmit={handleSubmit}> 
      	<Input
	  label='Nombre: ' 
	  name='name' 
	  value={formulario.name} 
  	  onChange={handleChange} 
	  placeholder="ingrese nombre"
    	/>
      	<Input 
	    label='Apellido: ' 
	    name='lastname' 
	    value={formulario.lastname} 
	    onChange={handleChange} 
	    placeholder="Ingrese Apellido"
	  />
        <Input 
	    label='Email: ' 
	    name='email' 
	    value={formulario.email} 
	    onChange={handleChange} 
	    placeholder="Ingrese email"
	  />
	<Button>Enviar</Button>
	
	</form>
  )
}

export default UserForm
