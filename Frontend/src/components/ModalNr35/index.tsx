import Modal from 'react-modal';
import styles from './style.module.scss';
import {} from 'next/router'
import { FiX } from 'react-icons/fi'
import { useState, FormEvent } from 'react'
import { OrderItemProps } from '../../pages/dashboard'
import { setupAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
interface ModalOrderProps{
  isOpen: boolean;
  onRequestClose: () => void;
  controll: OrderItemProps[];
  handleFinishOrder: (id: string) => void;
}
export function ModalNr35({ isOpen, onRequestClose, controll, handleFinishOrder  }: ModalOrderProps){
  const [id, setId] = useState(controll[0].id)
  const [name, setName] = useState(controll[0].name)
  const [descNr35, setDescNr35] = useState(controll[0].descNr35)
  const [nr35, setNr35] = useState(controll[0].nr35)
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
    descNr35: descNr35,
    nr35: nr35,
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
    <div className={styles.titulo}>Marcação de NR35 </div>
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
         <div className={styles.row2}>
<label htmlFor="exame" className={styles.label}> Exame
<select name="cargo" id="exame" 
       className={styles.input_cargo}
       value={nr35}
       onChange={(a) => setNr35(a.target.value)}>
        <option value="Não Agendado">Não Agendado</option>
       <option value="Agendado">Agendar</option>
       <option value="Em andamento">Em andamento</option>
       <option value="Concluido">Concluido</option>
       </select>
</label>
</div>
<label htmlFor="desc" className={styles.labeldesc}>Descrição
<textarea name="" id="desc" 
className={styles.input_desc}
value={descNr35}
onChange={(a) => setDescNr35(a.target.value)}
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