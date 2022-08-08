import { useState, FormEvent } from 'react'
import Head from "next/head"
import {Header} from '../../components/Header'
import styles from './styles.module.scss'
import Router from 'next/router';

import { setupAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { OrderItemProps } from '../../pages/dashboard'
import { canSSRAuth } from '../../utils/canSSRAuth'

interface ModalOrderProps{
  isOpen: boolean;
  onRequestClose: () => void;
  controll: OrderItemProps[];
  handleFinishOrder: (id: string) => void;
  
}

export function ModalTriagem({ isOpen, onRequestClose, controll, handleFinishOrder  }:ModalOrderProps){
  const [id, setId] = useState(controll[0].id)
  const [name, setName] = useState(controll[0].name)
  const [cargo, setCargo] = useState('')
  const [triagem, setTriagem] = useState('Não Agendado')
  const [descTriagem, setdescTriagem] = useState('')



  

  async function handleRegister(event: FormEvent){
    event.preventDefault();
 

    if(name === ''){
      return;
    }

    const apiClient = setupAPIClient();
    await apiClient.post('/controll', {
      id: id,
    name: name,
    cargo: cargo,
    triagem: triagem,
    descTriagem: descTriagem,
   
      
    })
    

    toast.success('Cadastrada com sucesso!')
    setName('');
    setCargo('');
    setTriagem('');
  
  

    Router.push('/dashboard')

  

  }


  return(
    <>
    <Head>
      <title>Controll</title>
    </Head>
    <Header/>
    <div className={styles.containerP}>
    
      
      <div className={styles.container}>
      <div className={styles.title}>Tela de Cadastro</div>

      <div className={styles.container2}>
      <main >
       
      

<form className={styles.form} onSubmit={handleRegister}>
  
      <div className={styles.row1}>

        <label htmlFor="nome" className={styles.label}> Nome
          <input   
          type="text" 
          id='nome'
          className={styles.input_descricao}
         
          value={name}
          onChange={ (e) => setName(e.target.value) }
          />
       </label>

      


</div>
<input type="Text"
  value={cargo}
  />
<input type="hidden"
  value={triagem}
  onChange={(a)=> setTriagem(a.target.value)}/>




  
     

          <button className={styles.buttonAdd} type="submit">
          Cadastrar
            
          </button>
          

        </form>

      </main>
      </div>
      </div>
    </div>
    </>
  )
}


export const getServerSideProps = canSSRAuth(async (ctx) => {

  return {
    props: {}
  }

})


  
  
