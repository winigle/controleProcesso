import Modal from 'react-modal';
import styles from './style.module.scss';
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




export function ModalOrder({ isOpen, onRequestClose, controll, handleFinishOrder  }: ModalOrderProps){
  
  
  const [id, setId] = useState('')
  async function excluir(event:FormEvent) {
    event.preventDefault();
     alert(id)
  
    const apiClient = setupAPIClient();
      await apiClient.delete('/delete', {
        
       params:{
        id: id
       }
        
        
        
        
      })
      
  }
    

  
  const customStyles = {
    content:{
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      padding: '20px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#ddd',
      
    }
  };

function deleteItem(id){
  const apiClient = setupAPIClient();
   apiClient.delete('/delete', {
    
   params:{
    id: id
   }
    
    
   
    
  })
  toast.success("Excluido com sucesso!")
  
  
  
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
    <div className={styles.titulo}>Área de Exclusão </div>
    <div className={styles.linha}></div>
    <div className={styles.container}>



   
      
      
     <form>
      {controll.map( item => (
        <section key={item.id} className={styles.containerItem}>


         <label className={styles.label}>Deseja realmente excluir o item {item.name}?
         
         
         </label>
        
        
         
           <div className={styles.linha}></div>
          <button className={styles.button} onClick={() => deleteItem(item.id)} >Excluir</button>
          
         
        </section>
      ))}

</form>
</div>
  


   </Modal>
  )
}