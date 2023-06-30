import React, { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { HOME_URL } from "../../constants/URLS";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";
import { set } from "react-hook-form";
import { addContribution } from "../../firebase/firestore/firestore-user";

export default function PopUpCheckout({
  message,
  setter,
  completed,
  loading,
  helper,
  resID,
}) {
  const navigate = useNavigate();
  const [payment, setPayment] = useState("");
  const [success, setSuccess] = useState(false);
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: `${payment}`,
            },
          },
        ],
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = async (data, actions) => {
    return actions.order.capture().then(async function (details) {
      console.log(resID);
      loading(true);
      await addContribution(payment, details.id, resID);
      setSuccess(true);

      loading(false);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    alert("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      completed(true);
      setter(false);
    }
  }, [success]);

  const onChange = (e) => {
    setPayment(e.target.value);
  };

  return (
    <>
      <PayPalScriptProvider
        options={{
          clientId:
            "AYy28XIJVUkRSRxHt0yZ2rBxFwbzBhK0Ji_XzErYqPYfO1wTBbKdRTpSlu0GwtHv-hR6kmso9aOv3fDZ",
        }}
      >
        <div className="justify-center items-start  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none py-56 px-24">
          <div className="relative bg-white shadow-lg w-fit h-fit px-20 py-16 rounded-2xl flex flex-row overflow-auto flex-wrap items-start justify-center gap-12">
            <div className="flex flex-col gap-4 w-1/2 items-center">
              <svg
                className="w-[56px] h-[56px] fill-blue text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
              </svg>

              <h1 className="text-lg font-extrabold">{message}</h1>
              <p>{helper}</p>

              <input
                type="text"
                className="border-2 h-8 w-56 indent-2 border-blue rounded-2xl text-sm"
                placeholder="Ingrese el monto deseado"
                onChange={onChange}
              />
            </div>
            {payment > 0 ? (
              <PayPalButtons
                style={{ layout: "vertical", shape: "pill" }}
                forceReRender={[payment]}
                createOrder={createOrder}
                onApprove={onApprove}
                onError={onError}
              />
            ) : (
              <div className="flex flex-col gap-2 items-center justify-center content-center">
                <svg
                  className="w-[24px] h-[24 px] fill-bluegray text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                </svg>
                <h3>Por favor ingrese un monto</h3>
              </div>
            )}
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </PayPalScriptProvider>
    </>
  );
}
