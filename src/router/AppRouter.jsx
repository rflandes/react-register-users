import { Navigate, Route, Routes } from 'react-router-dom';

import { GeneralInfoRoutes } from '../general-info/routes/GeneralInfoRoutes';

import { CheckingAuth } from '../ui/';
import { useCheckAuth } from '../hooks';
import { RegisterRoutes } from '../register/routes/RegisterRoutes';


export const AppRouter = () => {

  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <>
      <Routes>

        <Route path="/auth/*" element={<RegisterRoutes />} />

        <Route path="/*" element={<GeneralInfoRoutes />} />

        <Route path='/*' element={<Navigate to='/' />} />

      </Routes>
    </>
  )
}
