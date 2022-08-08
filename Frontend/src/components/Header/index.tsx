import { useContext,  } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

import { FiLogOut } from 'react-icons/fi'

import { AuthContext } from '../../contexts/AuthContext'

export function Header(){

  const { signOut } = useContext(AuthContext)

  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
       

        <nav className={styles.menuNav}>

        <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>

          

          <Link href="/controllFab">
            <a>Cadastro de colaborador</a>
          </Link> 

          <Link href="/dashboardResumo">
            <a>Resumo</a>
          </Link> 


          


          <div className={styles.navButton}>
          <button onClick={signOut}>
            <FiLogOut color="#000" size={24} />
          </button>  
          </div>     
        </nav>

      </div>
    </header>
  )
}