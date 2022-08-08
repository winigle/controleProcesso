import Modal from 'react-modal';
import styles from './style.module.scss';
import {} from 'next/router'
import { FiX } from 'react-icons/fi'
import { useState, FormEvent } from 'react'
import { OrderItemProps } from '../../pages/dashboard'
import { setupAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import Router from 'next/router';
interface ModalOrderProps{
  isOpen: boolean;
  onRequestClose: () => void;
  controll: OrderItemProps[];
  handleFinishOrder: (id: string) => void;
  
}




export function ModalTriagem({ isOpen, onRequestClose, controll, handleFinishOrder  }: ModalOrderProps){
  
 
  const [id, setId] = useState(controll[0].id)
  
  const [name, setName] = useState(controll[0].name)
  const [cargo, setCargo] = useState(controll[0].cargo)
  const [triagem, setTriagem] = useState(controll[0].triagem)
  const [descTriagem, setdescTriagem] = useState(controll[0].descTriagem)
  const [exame, setExame] = useState(controll[0].exame)
  const [clinico, setClinico] = useState(controll[0].clinico)
  const [nr33, setNr33] = useState(controll[0].nr33)
  const [nr35, setNr35] = useState(controll[0].nr35)
  const [cracha, setCracha] = useState(controll[0].cracha)

  function handleInputChange(event){
   
}

  
  const customStyles = {
    content:{
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      padding: '20px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#F2F2F2',
      
    }
  };

async function handatualizar(){
  const apiClient =  setupAPIClient();
  await apiClient.put('/update', {
    
   
    id: id,
    name: name,
    cargo: cargo,
    triagem: triagem,
    descTriagem: descTriagem,
    exame: exame,
    clinico: clinico,
    nr33: nr33,
    nr35: nr35,
    cracha: cracha,
    
   
   
    
    
   
    
  })
  toast.success("Editado com sucesso!")
  
  Router.push('/dashboard')
  
}

  return(
   <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
   >
 <div className={styles.cabecario}>

 <button
    type="button"
    onClick={onRequestClose}
    className="react-modal-close"
    style={{ background: 'transparent', border:0 }}
    >
      <FiX size={20} color="#000"  />
    </button>

   
    
    </div>
    <div className={styles.titulo}>Triagem </div>
    <div className={styles.linha}></div>
    <div className={styles.container}>



   
      
      
     <form onSubmit={handatualizar}>
      {controll.map( item => (
        <section key={item.id} className={styles.containerItem}>

         <input type="hidden" 
         className={styles.input} 
         value={id}
         onChange={(a) => setId(a.target.value)}
         />
  
         <label htmlFor="">Nome:</label>
          <input   
          type="text" 
          id='nome'
          className={styles.input_descricao}
         
          value={name}
          onChange={ (e) => setName(e.target.value) }
          />
      <div className={styles.linha}></div>
         
       <input type="hidden"
  value={cargo}
  className={styles.input_cargo1}
  onChange={(a)=> setCargo(a.target.value)}/>



<input type="hidden"
  value={descTriagem}
  className={styles.input_cargo1}
  onChange={(a)=> setdescTriagem(a.target.value)}/>
   
         <div className={styles.row2}>


      

<label htmlFor="triagem" className={styles.label}> Triagem
<select name="cargo" id="triagem" 
       className={styles.input_cargo}
       value={triagem}
       onChange={(a) => setTriagem(a.target.value)}>
        <option value="Não Agendado">Não Agendado</option>
       <option value="Agendado">Agendar</option>
       <option value="Em andamento">Em andamento</option>
       <option value="Concluido">Concluido</option>
       </select>
</label>










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
   
</div>
        
<label htmlFor="desc" className={styles.labeldesc}>Descrição

<textarea name="" id="desc" 
className={styles.input_desc}
value={descTriagem}
onChange={(a) => setdescTriagem(a.target.value)}

></textarea>

</label>
     
       
        
         
           <div className={styles.linha}></div>
          <button className={styles.button} type="submit" >Atualizar</button>
          
         
        </section>
      ))}

</form>
</div>
  


   </Modal>
  )
}