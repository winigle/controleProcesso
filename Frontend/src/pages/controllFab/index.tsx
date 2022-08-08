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
import { extname } from 'node:path/win32';

export default function Category(){
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [cargo, setCargo] = useState('')
  const [triagem, setTriagem] = useState('Não Agendado')
  const [descTriagem, setdescTriagem] = useState('')
  const [exame, setExame] = useState('Não Agendado')
  const [descExame] = useState('')
  const [clinico, setClinico] = useState('Não Agendado')
  const [descClinico] = useState('')
  const [nr33, setNr33] = useState('Não Agendado')
  const [descNr33] = useState('')
  const [nr35, setNr35] = useState('Não Agendado')
  const [descNr35] = useState('')
  const [cracha, setCracha] = useState('Não Postado')
  const [descCracha] = useState('')


  

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
    exame: exame,
    descExame: descExame,
    clinico: clinico,
    descClinico: descClinico,
    nr33: nr33,
    descNr33: descNr33,
    nr35: nr35,
    descNr35: descNr35,
    cracha: cracha,
    descCracha: descCracha,
      
    })
    

    toast.success('Cadastrada com sucesso!')
    setName('');
    setCargo('');
    setTriagem('');
    setExame('');
    setClinico(''),
    setNr33('');
    setNr35('');
    setCracha('');
  

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

       <label htmlFor="cargo" className={styles.label}> Cargo
       
       <select name="cargo" id="cargo" 
       className={styles.input_cargo1}
       value={cargo}
       onChange={(a) => setCargo(a.target.value)}>
       <option value="Coordenador">Coordenador</option>
       <option value="Supervisor de Manutenção">Supervisor de Manutenção</option>
       <option value="Administrativo de obra">Administrativo de obra</option>
       <option value="Técnico de Segurança">Técnico de Segurança</option>
       <option value="Técnico de Planejamento">Técnico de Planejamento</option>
       <option value="Técnico de materiais">Técnico de Materiais</option>
       <option value="Inspertor de Qualidade">Inspertor de Qualidade</option>
       <option value="Almoxarife">Almoxarife</option>
       <option value="Encarregado de Mecânica">Encarregado de Mecânica</option>
       <option value="Encarregado de Elétrica">Encarregado de Elétrica</option>
       <option value="Encarregado de Andaime">Encarregado de Andaime</option>
       <option value="Líder de Mecânica">Líder de Mecânica</option>
       <option value="Mecânico Montador">Mecânico Montador</option>
       <option value="Caldeireiro">Caldeireiro</option>
       <option value="Soldador">Soldador</option>
       <option value="Eletricista">Eletricista</option>
       <option value="Técnico de Segurança">Técnico de Segurança</option>
       <option value="Montador de Andaime">Montador de Andaime</option>
       <option value="Isolador Industrial">Isolador Industrial</option>
       <option value="Funileiro Industrial">Funileiro Industrial</option>
       <option value="Ajudante">Ajudante</option>


       </select>

      
   </label>


</div>
<input type="hidden"
  value={triagem}
  onChange={(a)=> setTriagem(a.target.value)}/>

<input type="hidden"
  value={exame}
  onChange={(a)=> setExame(a.target.value)}/>

<input type="hidden"
  value={clinico}
  onChange={(a)=> setClinico(a.target.value)}/>

<input type="hidden"
  value={nr33}
  onChange={(a)=> setNr33(a.target.value)}/>

<input type="hidden"
  value={nr35}
  onChange={(a)=> setNr35(a.target.value)}/>

   <input type="hidden"
  value={cracha}
  onChange={(a)=> setCracha(a.target.value)}/>


  
     

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