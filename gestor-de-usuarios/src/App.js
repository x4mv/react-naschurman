import {useState} from 'react';
import Card from './Component/Card'
import Container from './Component/Container'
import Userform  from './Component/UserForm'

function App() {
  const [ usuarios, setUsuarios ] = useState([])

  const submit = usuario =>{
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }
  console.log(usuarios)
  return (
    <div style={{ marginTop: '15%' }}>
    <Container>
      <Card>
	<div style={{padding: 20 }}>
	    <Userform submit={submit}/>
       	</div>
      </Card>
    <Card>
	<ul>	
	    {usuarios.map(x => 
	      <li key={x.email}>{`${x.name} ${x.lastname} ${x.email}`}</li>
	    )}
	</ul>
    </Card>
    </Container>
    </div>
  )
}

export default App;
