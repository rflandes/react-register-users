import { GeneralInfoLayout } from "../layout/GeneralInfoLayout"

export const HomePage = () => {

    return (
        <GeneralInfoLayout>
            <img
                srcSet={`/logo-congreso.png`}
                src={`/logo-congreso.png`}
                width={300}

                loading="lazy"
            />
            <h1>Universidad Politécnica de Chiapas</h1>
            <p>La Universidad Politécnica de Chiapas y la Licenciatura en Administración/LAGE
                através del comité organizador, convocan cordialmente a toda la comunidad estudiantil,
                académica y profesional al:</p>

            <hr />

            <h2 className="mt-3"> 1er Congreso Internacional de Administración y Negocios </h2>
            <h5> "Del reto a la oportunidad: Lidera, emprende, trasciende." </h5>
            <p>Integrar y difundir el quehacer científico y tecnológico en todos
                los campos de la ciencia que desempeñan actualmente las mujeres dentro
                de su vida profesional y que contribuyen al desarrollo económico
                y a la modernización de México.
            </p>


            <img
                srcSet={`/convocatoria.png`}
                width={600}
                className="box-shadow"
                style={{ borderRadius: '5%' }}
                loading="lazy"
            />

            <hr />

            <img
                srcSet={`/cartel.png`}
                width={600}
                className="box-shadow"
                style={{ borderRadius: '5%' }}
                loading="lazy"
            />
        </GeneralInfoLayout>
    )
}
