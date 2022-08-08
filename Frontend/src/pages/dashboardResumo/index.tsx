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
      <title>Resumo</title>
    </Head>
    <div>
      <Header/>
  
      <div className={styles.Cp}>

      <div className={styles.container}>
      <span className={styles.spTitulo}>Patrimonial</span>
      <div className={styles.spCon}>
      <span >Concluido: </span>
      { orderList.filter(item => item.triagem === "Concluido").length}
      </div>

      <div className={styles.spNg}>
      <span >Não Agendado: </span>
      
      { orderList.filter(item => item.triagem === "Não Agendado").length}
      
      </div>

      <div className={styles.spAg}>
      <span >Agendado: </span>
      { orderList.filter(item => item.triagem === "Agendado").length}
      </div>

      <div className={styles.spEa}>
      <span >Em Andamento: </span>
      { orderList.filter(item => item.triagem === "Em andamento").length}
      </div>

    </div>

  

    <div className={styles.container}>
      <span className={styles.spTitulo}>Exame</span>
      <div className={styles.spCon}>
      <span >Concluido: </span>
      { orderList.filter(item => item.exame === "Concluido").length}
      </div>

      <div className={styles.spNg}>
      <span >Não Agendado: </span>
      
      { orderList.filter(item => item.exame === "Não Agendado").length}
      
      </div>

      <div className={styles.spAg}>
      <span >Agendado: </span>
      { orderList.filter(item => item.exame === "Agendado").length}
      </div>

      <div className={styles.spEa}>
      <span >Em Andamento: </span>
      { orderList.filter(item => item.exame === "Em andamento").length}
      </div>

    </div>


    <div className={styles.container}>
      <span className={styles.spTitulo}>Retorno Clinico</span>
      <div className={styles.spCon}>
      <span >Concluido: </span>
      { orderList.filter(item => item.clinico === "Concluido").length}
      </div>

      <div className={styles.spNg}>
      <span >Não Agendado: </span>
      
      { orderList.filter(item => item.clinico === "Não Agendado").length}
      
      </div>

      <div className={styles.spAg}>
      <span >Agendado: </span>
      { orderList.filter(item => item.clinico === "Agendado").length}
      </div>

      <div className={styles.spEa}>
      <span >Em Andamento: </span>
      { orderList.filter(item => item.clinico === "Em andamento").length}
      </div>

    </div>

    <div className={styles.container}>
      <span className={styles.spTitulo}>NR33</span>
      <div className={styles.spCon}>
      <span >Concluido: </span>
      { orderList.filter(item => item.nr33 === "Concluido").length}
      </div>

      <div className={styles.spNg}>
      <span >Não Agendado: </span>
      
      { orderList.filter(item => item.nr33 === "Não Agendado").length}
      
      </div>

      <div className={styles.spAg}>
      <span >Agendado: </span>
      { orderList.filter(item => item.nr33 === "Agendado").length}
      </div>

      <div className={styles.spEa}>
      <span >Em Andamento: </span>
      { orderList.filter(item => item.nr33 === "Em andamento").length}
      </div>

    </div>

    <div className={styles.container}>
      <span className={styles.spTitulo}>NR35</span>
      <div className={styles.spCon}>
      <span >Concluido: </span>
      { orderList.filter(item => item.nr33 === "Concluido").length}
      </div>

      <div className={styles.spNg}>
      <span >Não Agendado: </span>
      
      { orderList.filter(item => item.nr33 === "Não Agendado").length}
      
      </div>

      <div className={styles.spAg}>
      <span >Agendado: </span>
      { orderList.filter(item => item.nr33 === "Agendado").length}
      </div>

      <div className={styles.spEa}>
      <span >Em Andamento: </span>
      { orderList.filter(item => item.nr33 === "Em andamento").length}
      </div>

    </div>

    <div className={styles.container}>
      <span className={styles.spTitulo}>Liberação de Crachá</span>
      <div className={styles.spCon}>
      <span >Liberado: </span>
      { orderList.filter(item => item.cracha === "Liberado").length}
      </div>

      <div className={styles.spNg}>
      <span >Não Liberado: </span>
      
      { orderList.filter(item => item.cracha === "Não Liberado").length}
      
      </div>

     


    </div>

    </div>
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

