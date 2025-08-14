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
        {/* 
        {
          (!(status === 'authenticated'))
            ? <Route path="/*" element={<GeneralInfoRoutes />} />
            : <Route path="/auth/*" element={<RegisterRoutes />} />
        } */}

        <Route path='/*' element={<Navigate to='/' />} />


        {/* {
          (status === 'authenticated')
          ? <Route path="/*" element={ <JournalRoutes /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> } />
          }
          
          <Route path='/*' element={ <Navigate to='/auth/login' />  } /> */}

        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

        {/* JournalApp */}
        {/* <Route path="/*" element={ <JournalRoutes /> } /> */}

      </Routes>
    </>
  )
}
