import DropdownMenu from '../DropdownMenu/DropdownMenu'
import { ROUTES } from '../../routes/routes'
import styles from './Header.module.css'
import { Button } from '@mui/material'

export default function Header({ title, subtitle }) {
  const userMock = {
    initials: 'JF',
    name: 'Jeferson Freitas',
    email: 'jefreitas@email.com',
  }

  const headerMenuItemsMock = [
    { id: 'profile', label: 'Meu perfil', to: ROUTES.PROFILE },
    { id: 'settings', label: 'Configurações da conta', to: ROUTES.SETTINGS },
    { id: 'payment', label: 'Métodos de pagamento' },
    { id: 'support', label: 'Ajuda e suporte' },
    { id: 'logout', label: 'Sair', to: ROUTES.LOGIN },
  ]

  const identityContent = (
    <>
      <p className={styles.name}>{userMock.name}</p>
      <p className={styles.email}>{userMock.email}</p>
    </>
  )

  return (
    <header className="header">
      <div>
        <h1 className="header__title">{title}</h1>
        {subtitle ? <p className="header__subtitle">{subtitle}</p> : null}
      </div>
      <DropdownMenu
        trigger={userMock.initials}
        ariaLabel="Menu do usuário"
        menuLabel="Opções do usuário"
        headerContent={identityContent}
        items={headerMenuItemsMock}
      />
    </header>
  )
}