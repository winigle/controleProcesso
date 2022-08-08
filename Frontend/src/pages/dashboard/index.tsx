import { useState } from 'react'
import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head';
import styles from './styles.module.scss';

import { Header } from '../../components/Header'
import { FiDelete, FiRefreshCcw } from 'react-icons/fi'

import { setupAPIClient } from '../../services/api'

import { ModalOrder } from '../../components/ModalOrder'
import { ModalUpdate} from '../../components/ModalUpdate'
import { ModalCreate } from '../../components/ModalCreate'
import {ModalTriagem} from '../../components/ModalTriagem'
import { ModalExame} from '../../components/ModalExame'
import { ModalClinico} from '../../components/ModalClinico'
import { ModalNr33} from '../../components/ModalNr33'
import { ModalNr35} from '../../components/ModalNr35'
import { ModalCracha} from '../../components/ModalCracha'


import Modal from 'react-modal';



type OrderProps = {
  
  id: string;
  name: string;
  cargo: string;
  triagem: string;
  descTriagem: string;
  exame: string;
  descExame: string;
  clinico: string;
  descClinico: string;
  nr33: string;
  descNr33: string;
  nr35: string;
  descNr35: string;
  cracha: string;
  descCracha: string;

}

interface HomeProps{
  tbcontrolls: OrderProps[];
}

export type OrderItemProps = {
  id: string;
  name: string;
  cargo: string;
  triagem: string;
  descTriagem: string;
  exame: string;
  descExame: string;
  clinico: string;
  descClinico: string;
  nr33: string;
  descNr33: string;
  nr35: string;
  descNr35: string;
  cracha: string;
  descCracha: string;
 
}

export default function Dashboard({ tbcontrolls }: HomeProps){

  const [orderList, setOrderList] = useState(tbcontrolls || [])

  const [modalItem, setModalItem] = useState<OrderItemProps[]>()
  const [modalVisible, setModalVisible] = useState(false);

  const [ModalItemUpdate, setModalUpdate] = useState<OrderItemProps[]>()
  const [modalVisibleUpdate, setModalVisibleUpdate] = useState(false);

  const [ModalItemTriagem, setModalTriagem] = useState<OrderItemProps[]>()
  const [modalVisibleTriagem, setModalVisibleTriagem] = useState(false);

  const [ModalItemExame, setModalExame] = useState<OrderItemProps[]>()
  const [modalVisibleExame, setModalVisibleExame] = useState(false);

  const [ModalItemClinico, setModalClinico] = useState<OrderItemProps[]>()
  const [modalVisibleClinico, setModalVisibleClinico] = useState(false);

  const [ModalItemNr33, setModalNr33] = useState<OrderItemProps[]>()
  const [modalVisibleNr33, setModalVisibleNr33] = useState(false);

  const [ModalItemNr35, setModalNr35] = useState<OrderItemProps[]>()
  const [modalVisibleNr35, setModalVisibleNr35] = useState(false);

  const [ModalItemCracha, setModalCracha] = useState<OrderItemProps[]>()
  const [modalVisibleCracha, setModalVisibleCracha] = useState(false);

  const [ModalItemCreate, setModalCreate] = useState<OrderItemProps[]>()
  const [modalVisibleCreate, setModalVisibleCreate] = useState(false);

  function handleCloseModal(){
    setModalVisible(false);
    setModalVisibleUpdate(false);
    setModalVisibleCreate(false);
    setModalVisibleTriagem(false);
    setModalVisibleExame(false);
    setModalVisibleClinico(false);
    setModalVisibleNr33(false);
    setModalVisibleNr35(false);
    setModalVisibleCracha(false);

  }

  
  async function handleOpenModalView(id: string){
   
     const apiClient = setupAPIClient(); 

     const response = await apiClient.get('/detalhes', {
       params:{
        id: id,
       } 
     })

     setModalItem(response.data);
     setModalVisible(true);

  }

  function contar(){


    
    var quantidadeElementos = orderList.filter(item => item.exame === "Concluido").length;
    alert(quantidadeElementos)


  }
    

    
    




  async function handleOpenModalUpdate(id: string){
   
    const apiClient = setupAPIClient(); 

    const response = await apiClient.get('/detalhes', {
      params:{
       id: id,
      } 
    })

    setModalUpdate(response.data);
    setModalVisibleUpdate(true);
    

 }

// Modal Triagem

async function handleOpenModalTriagem(id: string){
   
  const apiClient = setupAPIClient(); 

  const response = await apiClient.get('/detalhes', {
    params:{
     id: id,
    } 
  })

  setModalTriagem(response.data);
  setModalVisibleTriagem(true);
  

}

// Modal Descrição exame
async function handleOpenModalExame(id: string){
  const apiClient = setupAPIClient(); 
  const response = await apiClient.get('/detalhes', {
    params:{
     id: id,
    } 
  })
  setModalExame(response.data);
  setModalVisibleExame(true);
}

// Modal Descrição Clinico
async function handleOpenModalClinico(id: string){
  const apiClient = setupAPIClient(); 
  const response = await apiClient.get('/detalhes', {
    params:{
     id: id,
    } 
  })
  setModalClinico(response.data);
  setModalVisibleClinico(true);
}

// Modal Descrição NR33
async function handleOpenModalNr33(id: string){
  const apiClient = setupAPIClient(); 
  const response = await apiClient.get('/detalhes', {
    params:{
     id: id,
    } 
  })
  setModalNr33(response.data);
  setModalVisibleNr33(true);
}

// Modal Descrição NR35
async function handleOpenModalNr35(id: string){
  const apiClient = setupAPIClient(); 
  const response = await apiClient.get('/detalhes', {
    params:{
     id: id,
    } 
  })
  setModalNr35(response.data);
  setModalVisibleNr35(true);
}

// Modal Descrição Cracha
async function handleOpenModalCracha(id: string){
  const apiClient = setupAPIClient(); 
  const response = await apiClient.get('/detalhes', {
    params:{
     id: id,
    } 
  })
  setModalCracha(response.data);
  setModalVisibleCracha(true);
}



 async function handleOpenModalCreate(){
   

  setModalVisibleCreate(true);
  

}




  async function handleFinishItem(id: string){
    const apiClient = setupAPIClient();
    await apiClient.put('/detalhes', {
      controll_id: id,
    })

    const response = await apiClient.get('/controll');

    setOrderList(response.data);
    setModalVisible(false);
  }


  async function handleRefreshOrders(){
    const apiClient = setupAPIClient();

    const response = await apiClient.get('/controll')
    setOrderList(response.data);

  }

  Modal.setAppElement('#__next');


  return(


    
 
    <>
    <Head>
      <title>Painel - Controll</title>
    </Head>
    <div>
      <Header/>
    
     <div className={styles.container}>
     <div className={styles.containerButton}>
      <a href='/controllFab' className={styles.button}>Cadastrar</a>
      </div>
     <div className={styles.containerIntro}>
      
    
     
      <table className={styles.table}>
           <thead >
            
             <tr>
              <th className={styles.colDescription}>Nome</th>
              <th className={styles.coltag}>Função</th>
               <th className={styles.colDesenho}>Patrimonial</th>
               <th className={styles.colDesenho}>Exame</th>
               <th className={styles.colDesenho}>Exame Clinico</th>
               <th className={styles.colDesenho}>NR33</th>
               <th className={styles.colDesenho}>NR35</th>
               <th className={styles.colDesenho}>Crachá</th>

              
               <th className={styles.colDeletar}>Deletar</th>
             </tr>
            
           </thead>


        

        {orderList.map(item => (

          
        
           <tbody>
             <tr>
              <td className={styles.colDescription}>
                <a onClick={ () => handleOpenModalUpdate(item.id) } className={styles.bt}>
                {item.name}
                </a>
              </td>
              <td className={styles.coltag}>{item.cargo}</td>


              {item.triagem === "Concluido" ? (
                <td className={styles.concluido}><div ><a onClick={ () => handleOpenModalTriagem(item.id) }>Concluido</a></div></td>
              ) : item.triagem === "Em andamento" ? (
                <td className={styles.andamento}><div ><a onClick={ () => handleOpenModalTriagem(item.id) }>Em Andamento</a></div></td>
              ) : item.triagem === "Agendado" ?(
                <td className={styles.agendado}><div ><a onClick={ () => handleOpenModalTriagem(item.id) }>Agendado</a></div></td>
              ) : (
                <td className={styles.marcacao}><div ><a onClick={ () => handleOpenModalTriagem(item.id) }>Não Agendado</a></div></td>
              )}


              
               {item.exame === "Concluido" ? (
                <td className={styles.concluido}><div ><a onClick={ () => handleOpenModalExame(item.id) }>Concluido</a></div></td>
              ) : item.exame === "Em andamento" ? (
                <td className={styles.andamento}><div ><a onClick={ () => handleOpenModalExame(item.id) }>Em andamento</a></div></td>
              ) : item.exame === "Agendado" ?(
                <td className={styles.agendado}><div ><a onClick={ () => handleOpenModalExame(item.id) }>Agendado</a></div></td>
              ) : (
                <td className={styles.marcacao}><div ><a onClick={ () => handleOpenModalExame(item.id) }>Não Agendado</a></div></td>
              )}

              {item.clinico === "Concluido" ? (
                <td className={styles.concluido}><div ><a onClick={ () => handleOpenModalClinico(item.id) }>Concluido</a></div></td>
              ) : item.clinico === "Em andamento" ? (
                <td className={styles.andamento}><div ><a onClick={ () => handleOpenModalClinico(item.id) }>Em andamento</a></div></td>
              ) : item.clinico === "Agendado" ?(
                <td className={styles.agendado}><div ><a onClick={ () => handleOpenModalClinico(item.id) }>Agendado</a></div></td>
              ) : (
                <td className={styles.marcacao}><div ><a onClick={ () => handleOpenModalClinico(item.id) }>Não Agendado</a></div></td>
              )}

              {item.nr33 === "Concluido" ? (
                <td className={styles.concluido}><div ><a onClick={ () => handleOpenModalNr33(item.id) }>Concluido</a></div></td>
              ) : item.nr33 === "Em andamento" ? (
                <td className={styles.andamento}><div ><a onClick={ () => handleOpenModalNr33(item.id) }>Em andamento</a></div></td>
              ) : item.nr33 === "Agendado" ?(
                <td className={styles.agendado}><div ><a onClick={ () => handleOpenModalNr33(item.id) }>Agendado</a></div></td>
              ) : (
                <td className={styles.marcacao}><div ><a onClick={ () => handleOpenModalNr33(item.id) }>Não Agendado</a></div></td>
              )}

              {item.nr35 === "Concluido" ? (
                <td className={styles.concluido}><div ><a onClick={ () => handleOpenModalNr35(item.id) }>Concluido</a></div></td>
              ) : item.nr35 === "Em andamento" ? (
                <td className={styles.andamento}><div ><a onClick={ () => handleOpenModalNr35(item.id) }>Em andamento</a></div></td>
              ) : item.nr35 === "Agendado" ?(
                <td className={styles.agendado}><div ><a onClick={ () => handleOpenModalNr35(item.id) }>Agendado</a></div></td>
              ) : (
                <td className={styles.marcacao}><div ><a onClick={ () => handleOpenModalNr35(item.id) }>Não Agendado</a></div></td>
              )}

              {item.cracha === "Liberado" ? (
                <td className={styles.concluido}><div ><a onClick={ () => handleOpenModalCracha(item.id) }>Liberado</a></div></td>
              ) : (
                <td className={styles.marcacao}><div ><a onClick={ () => handleOpenModalCracha(item.id) }>Não Liberado</a></div></td>
              )}




            
              
              
             


             
              






              <td className={styles.colDeletar}><FiDelete onClick={ () => handleOpenModalView(item.id) }  className={styles.curso} /></td>
              
             </tr>
           </tbody>
         
        )

        )}
        </table>
        </div>
        </div>
      { modalVisible && (
        <ModalOrder
          isOpen={modalVisible}
          onRequestClose={handleCloseModal}
          controll={modalItem}
          handleFinishOrder={ handleFinishItem }
        />
      )}

     {modalVisibleUpdate &&(
      <ModalUpdate
      isOpen={modalVisibleUpdate}
      onRequestClose={handleCloseModal}
      controll={ModalItemUpdate}
      handleFinishOrder={ handleFinishItem }
    />
     )}   

     
     {modalVisibleCreate &&(
      <ModalCreate
      isOpen={modalVisibleCreate}
      onRequestClose={handleCloseModal}
      controll={ModalItemCreate}
      handleFinishOrder={ handleFinishItem }
    />
     )}  

{modalVisibleTriagem &&(
      <ModalTriagem
      isOpen={modalVisibleTriagem}
      onRequestClose={handleCloseModal}
      controll={ModalItemTriagem}
      handleFinishOrder={ handleFinishItem }
    />
     )} 

     {modalVisibleExame &&(
      <ModalExame
      isOpen={modalVisibleExame}
      onRequestClose={handleCloseModal}
      controll={ModalItemExame}
      handleFinishOrder={ handleFinishItem }
    />
     )} 

     {modalVisibleClinico &&(
      <ModalClinico
      isOpen={modalVisibleClinico}
      onRequestClose={handleCloseModal}
      controll={ModalItemClinico}
      handleFinishOrder={ handleFinishItem }
    />
     )} 

     {modalVisibleNr33 &&(
      <ModalNr33
      isOpen={modalVisibleNr33}
      onRequestClose={handleCloseModal}
      controll={ModalItemNr33}
      handleFinishOrder={ handleFinishItem }
    />
     )} 

      

      {modalVisibleNr35 &&(
      <ModalNr35
      isOpen={modalVisibleNr35}
      onRequestClose={handleCloseModal}
      controll={ModalItemNr35}
      handleFinishOrder={ handleFinishItem }
    />
     )} 


     {modalVisibleCracha &&(
      <ModalCracha
      isOpen={modalVisibleCracha}
      onRequestClose={handleCloseModal}
      controll={ModalItemCracha}
      handleFinishOrder={ handleFinishItem }
    />
     )} 


    
       

    </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get('/controll');
  //console.log(response.data);


  return {
    props: {
      tbcontrolls: response.data
    }
  }
})

