import Modal from 'react-modal';
import styles from './style.module.scss';
import {} from 'next/router'
import { FiX } from 'react-icons/fi'
import { useState, FormEvent } from 'react'
import { OrderItemProps } from '../../pages/dashboard'
import { setupAPIClient } from '../../services/api'
import { Router} from 'next/router'
import { toast } from 'react-toastify'
import { Value } from 'sass';
interface ModalOrderProps{
  isOpen: boolean;
  onRequestClose: () => void;
  controll: OrderItemProps[];
  handleFinishOrder: (id: string) => void;
  
}




export function ModalUpdate({ isOpen, onRequestClose, controll, handleFinishOrder  }: ModalOrderProps){
  
 
  const [id, setId] = useState(controll[0].id)
  
  const [name, setName] = useState(controll[0].name)
  const [cargo, setCargo] = useState(controll[0].cargo)
  const [triagem, setTriagem] = useState(controll[0].triagem)
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
    exame: exame,
    clinico: clinico,
    nr33: nr33,
    nr35: nr35,
    cracha: cracha,
    
   
   
    
    
   
    
  })
  toast.success("Editado com sucesso!")
  
  
  
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
    <div className={styles.titulo}>Editar </div>
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
         <div className={styles.row2}>

<label htmlFor="triagem" className={styles.label}> Triagem
<select name="cargo" id="triagem" 
       className={styles.input_cargo}
       value={triagem}
       onChange={(a) => setTriagem(a.target.value)}>
        <option value="Não agendado">Não Agendado</option>
       <option value="Agendado">Agendar</option>
       <option value="Em andamento">Em andamento</option>
       <option value="Concluido">Concluido</option>
       </select>
</label>
  <label htmlFor="exame" className={styles.label}>Exame
  <select name="exame" id="exame" 
       className={styles.input_cargo}
       value={exame}
       onChange={(a) => setExame(a.target.value)}>
        <option value="Não agendado">Não Agendado</option>
       <option value="Agendado">Agendar</option>
       <option value="Em andamento">Em andamento</option>
       <option value="Concluido">Concluido</option>
       </select>
   </label>
   <label htmlFor="clinico" className={styles.label}> Clinico
   <select name="clinico" id="clinico" 
       className={styles.input_cargo}
       value={clinico}
       onChange={(a) => setClinico(a.target.value)}>
        <option value="Não agendado">Não Agendado</option>
       <option value="Agendado">Agendar</option>
       <option value="Em andamento">Em andamento</option>
       <option value="Concluido">Concluido</option>
       </select>
</label>
<label htmlFor="nr33" className={styles.label}> NR33
<select name="nr33" id="nr33" 
       className={styles.input_cargo}
       value={nr33}
       onChange={(a) => setNr33(a.target.value)}>
        <option value="Não agendado">Não Agendado</option>
       <option value="Agendado">Agendar</option>
       <option value="Em andamento">Em andamento</option>
       <option value="Concluido">Concluido</option>
       </select>
   </label>
   <label htmlFor="nr35" className={styles.label}> NR35
   <select name="nr35" id="nr35" 
       className={styles.input_cargo}
       value={nr35}
       onChange={(a) => setNr35(a.target.value)}>
        <option value="Não agendado">Não Agendado</option>
       <option value="Agendado">Agendar</option>
       <option value="Em andamento">Em andamento</option>
       <option value="Concluido">Concluido</option>
       </select>
   </label>
   <label htmlFor="cracha" className={styles.label}> Crachá
   <select name="cracha" id="cracha" 
       className={styles.input_cargo}
       value={cracha}
       onChange={(a) => setCracha(a.target.value)}>
        <option value="Não agendado">Não Agendado</option>
       <option value="Agendado">Agendar</option>
       <option value="Em andamento">Em andamento</option>
       <option value="Concluido">Concluido</option>
       </select>
   </label>
</div>
        

     
       
        
         
           <div className={styles.linha}></div>
          <button className={styles.button} type="submit" >Atualizar</button>
          
         
        </section>
      ))}

</form>
</div>
  


   </Modal>
  )
}