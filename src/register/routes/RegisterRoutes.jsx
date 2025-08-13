import { Navigate, Route, Routes } from 'react-router-dom';
import { CheckinPage, LoginPage, RegisterPage } from '../pages';
import { useCheckAuth } from '../../hooks';


export const RegisterRoutes = () => {

    const status = useCheckAuth();


    return (
        <Routes>
            {/* <Route path="login" element={<LoginPage />} /> */}

            {
                (status === 'authenticated')
                    ? <Route path="check-in" element={<CheckinPage />} />
                    : <Route path="login" element={<LoginPage />} />
            }


            {
                (!(status === 'authenticated')) && <Route path='/*' element={<Navigate to="/" />} />
            }

            <Route path="register" element={<RegisterPage />} />
            <Route path='/*' element={<Navigate to="/auth/check-in" />} />
        </Routes>
    )
}
