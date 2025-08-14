import { Navigate, Route, Routes } from 'react-router-dom';
import { CheckinPage, LoginPage, RegisterPage } from '../pages';
import { useCheckAuth } from '../../hooks';


export const RegisterRoutes = () => {

    const status = useCheckAuth();


    return (
        <Routes>

            {
                (status === 'authenticated') && <Route path="/login" element={<Navigate to="/auth/check-in" />} />
            }

            {
                (status === 'authenticated') && <Route path="/register" element={<Navigate to="/auth/check-in" />} />
            }

            {
                (!(status === 'authenticated')) && <Route path='/check-in' element={<Navigate to="/auth/login" />} />
            }


            <Route path="login" element={<LoginPage />} />
            <Route path="check-in" element={<CheckinPage />} />
            <Route path="register" element={<RegisterPage />} />
            {/* <Route path='/*' element={<Navigate to="/login" />} /> */}

        </Routes>
    )
}
