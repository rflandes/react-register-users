import { Navigate, Route, Routes } from "react-router-dom"
import { ComitePage, FormatoPage, HomePage, ObjetivoPage, PostersRegistradosPage, PreguntasPage, ProgramaPage, SedePage } from "../pages"


export const GeneralInfoRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/comite" element={<ComitePage />} />
            <Route path="/formato" element={<FormatoPage />} />
            <Route path="/objetivo" element={<ObjetivoPage />} />
            <Route path="/posters" element={<PostersRegistradosPage />} />
            <Route path="/preguntas" element={<PreguntasPage />} />
            <Route path="/programa" element={<ProgramaPage />} />
            <Route path="/sede" element={<SedePage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
