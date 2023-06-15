import React from "react";
import Boton from "../../components/Boton/Boton";
import { Link } from "react-router-dom";
import { AUXILIAR, GOOGLE, TODO } from "../../components/Boton/styles";
import Input from "../../components/Input/Input";
import { registerWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth-service";
import { HOME_URL } from "../../constants/URLS";

export default function LoginPage() {
  const navigate = useNavigate()
  const handleSignInWithGoogle = async () => {
    await signInWithGoogle()
    
  }

  const [formData, setFormData]= useState({
    name: "",
    email: "",
    password:""
  })

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value,

    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email,password, ...extraData} = formData;
    await registerWithEmailAndPassword(email, password, extraData);
    navigate(HOME_URL);   // esto es para que despues de que se registre lo lleve al home page
  };
  return (
    <>
      <div className="flex flex-overlay justify-center bg-[url(https://www.unimet.edu.ve/wp-content/uploads/2019/09/IMG_0437.jpg)] bg-cover m-0 ">
        <div className="bg-white drop-shadow-4xl flex flex-col gap-2 max-w-xl justify-center content-center m-16 w-3/4 p-12 z-10 rounded-3xl">
          <h4 className="text-3xl text-left font-extrabold text-orange">
            Crea tu cuenta
          </h4>

          <div className=" w-full flex flex-col justify-around sm:grid-cols-2 sm:grid-rows-none gap-0 ">
            <form className="flex flex-col place-content-center gap-4 " onSubmit={handleSubmit}>
              <div className="w-full h-fit grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none ">
                <Input label="Nombre" type="text" name="name" id="name" onChange = {handleOnChange} />
                <Input label="Teléfono" type="text" name="phone" id="phone" onChange = {handleOnChange} />
              </div>
              <div className="w-3/4 flex flex-col gap-3">
                <Input
                  label="Correo Electrónico"
                  type="email"
                  name="email"
                  id="email"
                  onChange = {handleOnChange}
                />
                <Input
                  label="Contraseña"
                  type="text"
                  name="password"
                  id="password"
                  onChange = {handleOnChange}
                />
                <Input
                  label="Confirme su contraseña"
                  type="text"
                  name="pass_confirm"
                  id="pass_confirm"
                  onChange = {handleOnChange}
                />
              </div>
              <Boton style={TODO} action="Crear Cuenta" />
            </form>
            <Boton style = {GOOGLE} onClick = {handleSignInWithGoogle}/>
          </div>
          <div className="flex flex-col justify-center">
            <h6 className="text-center">¿Ya tienes cuenta?</h6>
            <Link to="/login">
              <Boton style={AUXILIAR} action="Iniciar Sesión" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
