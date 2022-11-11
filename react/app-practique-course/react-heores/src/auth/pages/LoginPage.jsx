import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const navigate = useNavigate(); /*
                                    Usamos este custom Hook que nos devuelve una funcion que nos permite
                                    programar hacia donde que ruta queremos ir. 
                                  */

  const onLogin = () => {
    navigate('/', { //Le pasamos como primer parametro al ruta hacia la cual queremos navegar
      replace: true //Nos sirve para evitar que la persona retroceda en el historial
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin } //Le pasamos la funcion dentro de la variable.
      >
        Login
      </button>

    </div>
  )
}
