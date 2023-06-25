import React from 'react'
import Boton from '../../components/Boton/Boton'
import { PRINCIPAL } from '../../components/Boton/styles'
import TextArea from '../../components/Input/TextArea'
import { FormProvider, useForm } from "react-hook-form";
import DatePicker from '../../components/DatePicker/DatePicker';



export default function ReservePage() {
  const methods = useForm();
  return (
    <div className="flex flex-col content-start justify-start p-12 bg-white ">
    <h1 className="text-orange text-5xl font-extrabold">
      Reservar Tour
    </h1>
    <br></br>
    <h1 className="text-blue text-3xl font-extrabold">Nombre del Tour</h1>
 
<FormProvider {...methods}>
<img className="h:1/3 sm:w-1/3 object-cover rounded-2xl" src="https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2020/10/Diplomados-Arte-Contempor%C3%A1neoo-Archivo.jpg" />
<br></br>

  <DatePicker/>

    <TextArea
    display="Comentarios"
    name="comentarios"
    />

   

</FormProvider>
    <Boton
    display="Reservar"
    style={PRINCIPAL}/>
    </div>
  )
}
