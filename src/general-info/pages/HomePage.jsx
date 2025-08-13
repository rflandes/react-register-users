import { GeneralInfoLayout } from "../layout/GeneralInfoLayout"

export const HomePage = () => {

    const onNavigateBack = () => {
        console.log('back')
    }

    return (
        <GeneralInfoLayout>


            <h1>UPCH Congreso 2025</h1>

            <h5 className="mt-3"> Objetivo del Encuentro </h5>
            <p>Integrar y difundir el quehacer científico y tecnológico en todos
                los campos de la ciencia que desempeñan actualmente las mujeres dentro
                de su vida profesional y que contribuyen al desarrollo económico
                y a la modernización de México.
            </p>

        </GeneralInfoLayout>
    )
}
