import { Navigate, Route, Routes } from "react-router-dom"
import { ComitePage, EventosAnterioresPage, FechasImportantesPage, FormatoPage, HomePage, HotelesPage, ObjetivoPage, PagosPage, PostersRegistradosPage, PreguntasPage, SedePage } from "../pages"


export const GeneralInfoRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/comite" element={<ComitePage />} />
            <Route path="/eventos-anteriores" element={<EventosAnterioresPage />} />
            <Route path="/fechas-importantes" element={<FechasImportantesPage />} />
            <Route path="/formato" element={<FormatoPage />} />
            <Route path="/hoteles" element={<HotelesPage />} />
            <Route path="/objetivo" element={<ObjetivoPage />} />
            <Route path="/pagos" element={<PagosPage />} />
            <Route path="/posters" element={<PostersRegistradosPage />} />
            <Route path="/preguntas" element={<PreguntasPage />} />
            <Route path="/sede" element={<SedePage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
