import { Component } from "react";
import Logo from "./logo"
import Carro from "./carro"
const styles = {
    navbar:{
        display: ' flex',
        flexDirection: 'row',
        alignItems:'center',
        height:'100px',
        justifyContent: 'space-between',
        position:'relative',
        padding: '0px 50px',
        boxShadow: '0px 2px 3px rgba(0,0,0,0.3)'
    }
}

class Navbar extends Component {
    render(){
        const { carro, esCarroVisible, mostrarCarro } = this.props
        return(
           <nav style ={styles.navbar}>
               <Logo /> 
               <Carro carro= { carro} 
                    esCarroVisible= {esCarroVisible}
                    mostrarCarro={mostrarCarro}
               />
           </nav>
        )
    }
}

export default Navbar
