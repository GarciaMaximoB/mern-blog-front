import { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext)

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
      setUserInfo(userInfo)
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null)
  }

  const username = userInfo?.username

  return (
    <header>
      <Link to="/" className="logo">
        <p>BD-CRU&apos;s Blog</p>
      </Link>

      <nav>
        {username && (
          <>
            <Link to="/create">Postear</Link>
            <a onClick={logout}>Cerrar sesion</a>
          </>
        )}

        {!username && (
          <>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/register">Registrarse</Link>
          </>
        )}
      </nav>
    </header>
  );
}
