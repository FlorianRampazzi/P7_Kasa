import { Link } from 'react-router-dom'
import './NotFound.css'

/* Création du composant NotFound et redirection vers la page d'accueil*/
export default function NotFound() {
  return (
    <section className="kasa-error">
      <h1 className="kasa-error-title">404</h1>
      <p className="kasa-error-text">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="kasa-error-link">
        Retourner sur la page d’accueil
      </Link>
    </section>
  )
}
