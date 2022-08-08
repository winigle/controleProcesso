import Modal from 'react-modal';
import styles from './style.module.scss';
import {} from 'next/router'
import { FiX } from 'react-icons/fi'
import { useState, FormEvent } from 'react'
import { OrderItemProps } from '../../pages/dashboard'
import { setupAPIClient } from '../../services/api'
import { Router} from 'next/router'
import { toast } from 'react-toastify'
interface ModalOrderProps{
  isOpen: boolean;
  onRequestClose: () => void;
  controll: OrderItemProps[];
  handleFinishOrder: (id: string) => void;
}
export function ModalCreate({ isOpen, onRequestClose, controll, handleFinishOrder  }: ModalOrderProps){
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [cargo, setCargo] = useState('')
  const [triagem, setTriagem] = useState('0')
  const [exame, setExame] = useState('0')
  const [clinico, setClinico] = useState('0')
  const [nr33, setNr33] = useState('0')
  const [nr35, setNr35] = useState('0')
  const [cracha, setCracha] = useState('0')
  function handleInputChange(event){
    {controll.map( item => (
      setName(item.name)
    ))}
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
  await apiClient.post('/controll', {
    id: id,
    name: name,
    cargo: cargo,
    triagem: triagem,
    exame: exame,
    clinico: clinico,
    nr33: nr33,
    nr35: nr35,
    cracha: cracha
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
      <FiX size={20} color="skyblue"  />
    </button>
    </div>
    <div className={styles.titulo}>Cadastro de Colaborador </div>
    <div className={styles.container}>
     <form onSubmit={handatualizar}>
         <input type="hidden" 
         className={styles.input} 
         value={id}
         onChange={(a) => setId(a.target.value)}
         />
         <div className={styles.p1}>
           <label htmlFor="name"> Digite o Nome  </label>
           <input type="text" id='name'
         
         className={styles.inputNome} 
         value={name}
         onChange={(a) => setName(a.target.value)}
         />


         
         <div>
          
          <div className={styles.p1}>
          <label htmlFor="cargo">Cargo
          <select name="cargo" 
          className={styles.inputFunction}
          id="cargo"
          value={cargo}
           onChange={(a) => setCargo(a.target.value)} >
           <option value="ADM">ADM</option>
           <option value="Supervisor">Supervisor</option>
           <option value="Mecânico">Mecânico Montador</option>
          </select>
          </label>
          </div>


         
          <input type="text" 
         className={styles.inputFunction} 
         placeholder='Patrimonial'
         value={triagem}
         onChange={(a) => setTriagem(a.target.value)}
         />
         </div>
         <div>
         <input type="text" 
         className={styles.input} 
         placeholder='Exame Clínico'
         value={exame}
         onChange={(a) => setExame(a.target.value)}
         />
         <input type="text" 
         className={styles.input} 
         placeholder='Retorno Médico'
         value={clinico}
         onChange={(a) => setClinico(a.target.value)}
         />

<input type="text" 
         className={styles.input} 
         placeholder='NR33'
         value={nr33}
         onChange={(a) => setNr33(a.target.value)}
         />

         <input type="text" 
         className={styles.input} 
         placeholder='NR35'
         value={nr35}
         onChange={(a) => setNr35(a.target.value)}
         />

         <input type="text" 
         className={styles.input} 
         placeholder='Retorno Médico'
         value={cracha}
         onChange={(a) => setCracha(a.target.value)}
         />
         </div>
         </div>
           <div className={styles.linha}></div>
          <button className={styles.button} type="submit" >Atualizar</button>
</form>
</div>
   </Modal>
  )
}