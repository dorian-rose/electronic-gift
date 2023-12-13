import giftGive from "../../assets/giftGive.jpg";
import present from "../../assets/present.jpg";

export const HomePage = () => {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-between py-10">
        <h1 className="text-center text-4xl font-bold mb-6 text-primary">
          ~ TeRegalo ~
        </h1>
        <div className="flex-grow w-full max-h-96">
          <img
            className="w-full h-full object-cover"
            src={present}
            alt="A family giving and receiving gifts"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 my-4">
          Bienvenido a TeRegalo!
        </h2>
        <h3 className="mb-8 font-semibold">
          Con nuestra aplicación en React, podrás crear momentos inolvidables y
          regalos especiales. ¡Descubre cómo hacerlo en solo unos pasos!
        </h3>
        <button className="p-2 block m-auto my-2 shadow text-primary ">
          Regístrate
        </button>
        <p>
          Ya tienes cuenta?{" "}
          <span className="text-primary hover:underline">Login</span>
        </p>
      </section>
      <section className="">
        <div className="container mx-auto bg-slate-50 p-10 shadow">
          <article className="mb-8 grid  md:grid-cols-2 lg:grid-cols-4">
            <div className="mb-6 mx-3 bg-white shadow-lg rounded py-2 px-4">
              <h4 className="text-lg font-semibold text-primary mb-2">
                1. Inicio de Sesión Seguro:
              </h4>
              <p className="text-gray-600">
                Inicia sesión para comenzar tu experiencia personalizada acceder
                a todas las funciones increíbles que ofrecemos.
              </p>
            </div>
            <div className="mb-6 mx-3 bg-white shadow-lg rounded py-2 px-4">
              <h4 className="text-lg font-semibold text-primary mb-2">
                2. Crea un nuevo regalo:
              </h4>
              <p className="text-gray-600">
                Escribe mensajes significativos, adjunta fotos emocionantes y
                carga archivos PDF únicos para crear regalos personalizados.
                Genera un código QR único al regalo.
              </p>
            </div>

            <div className="mb-6 mx-3 bg-white shadow-lg rounded py-2 px-4">
              <h4 className="text-lg font-semibold text-primary mb-2">
                4. Accede a Tus Creaciones:
              </h4>
              <p className="text-gray-600">
                Como usuario registrado, mantén un registro de todos tus
                regalos. Visualiza, edita o elimina tus creaciones en cualquier
                momento.
              </p>
            </div>
            <div className="mb-6 mx-3 bg-white shadow-lg rounded py-2 px-4">
              <h4 className="text-lg font-semibold text-primary mb-2">
                5. Comparte Momentos Especiales:
              </h4>
              <p className="text-gray-600">
                Comparte el código QR como un regalo único. Cuando lo escaneen,
                tus seres queridos serán dirigidos a una página especial para
                disfrutar del mensaje y descargar el regalo en formato PDF.
              </p>
            </div>
          </article>{" "}
          <div className="mb-6 mx-3 bg-white shadow-lg rounded py-2 px-4">
            <h4 className="text-center text-lg font-semibold text-primary mb-2">
              ¡Comienza Ahora!
            </h4>
            <p className="text-gray-600">
              Crea, comparte y sorprende a tus amigos y familiares con regalos
              personalizados y memorables. ¡Haz clic en "Iniciar Sesión" y
              comienza a crear momentos inolvidables hoy mismo!
            </p>
            <button className="p-2 block m-auto my-2 shadow text-primary ">
              Iniciar sesión
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
