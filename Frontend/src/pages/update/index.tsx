import { useState, FormEvent } from 'react'
import Head from "next/head"
import {Header} from '../../components/Header'
import styles from './styles.module.scss'
import Router from 'next/router';

import { setupAPIClient } from '../../services/api'
import { toast } from 'react-toastify'

import { canSSRAuth } from '../../utils/canSSRAuth'
import Link from 'next/link'
import { FaPinterestSquare } from 'react-icons/fa';

export default function Category(){
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [desenho, setDesenho] = useState('')
  const [tag, setTag] = useState('')
  const [eng, setEng] = useState('')
  const [fabrica, setFabrica] = useState('')
  const [pintura, setPintura] = useState('')
  const [transporte, setTransporte] = useState('')
  const [recebimento, setRecebimento] = useState('')

  

  async function handleRegister(event: FormEvent){
    event.preventDefault();
 

    if(name === ''){
      return;
    }

    const apiClient = setupAPIClient();
    await apiClient.put('/update', {
      id: id,
      name: name,
      
      
      
    })
    

    toast.success('Cadastrada com sucesso!')
    setName('');
    setDesenho('');
    setTag('');
    setFabrica('');
    setPintura('');
    setTransporte('');
    setRecebimento('');

    Router.push('/dashboard')

  

  }


  return(
    <>
    <Head>
      <title>Controll</title>
    </Head>
    <Header/>
    <div className={styles.containerP}>
    <div className={styles.title}>Atualizar</div>
      
      <div className={styles.container}>

      <main >
       
      

<form className={styles.form} onSubmit={handleRegister}>
  
      <div className={styles.row1}>

      

      <input   
          type="text" 
          className={styles.input_descricao}
          placeholder= 'Descrição'
          value={id}
          onChange={ (e) => setId(e.target.value) }
          />
        
          <input   
          type="text" 
          className={styles.input_descricao}
          placeholder= 'Descrição'
          value={name}
          onChange={ (e) => setName(e.target.value) }
          />
       


       <input 
          type="text" 
          className={styles.input_desenho}
          placeholder="Nº Desenho"
          value={desenho}
          onChange={ (e) => setDesenho(e.target.value) }
          />



<input 
   type="text" 
   className={styles.input_tag}
   placeholder="Tag"
   value={tag}
   onChange={ (e) => setTag(e.target.value) }
   />

</div>

  <input 
  className={styles.input} 
  placeholder="Engenharia"
  type="text" 
  value={eng} 
  onChange={(e) => setEng(e.target.value)} />

<input 
  className={styles.input} 
  placeholder="Fabricação"
  type="text" 
  value={fabrica} 
  onChange={(e) => setFabrica(e.target.value)} />


<input 
  className={styles.input} 
  placeholder="Pintura"
  type="text" 
  value={pintura} 
  onChange={(e) => setPintura(e.target.value)} />

<input 
  className={styles.input} 
  placeholder="Transporte"
  type="text" 
  value={transporte} 
  onChange={(e) => setTransporte(e.target.value)} />

<input 
  className={styles.input} 
  placeholder="Recebimento"
  type="text" 
  value={recebimento} 
  onChange={(e) => setRecebimento(e.target.value)} />
    
     

          <button className={styles.buttonAdd} type="submit">
          Cadastrar
            
          </button>
          

        </form>

      </main>
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