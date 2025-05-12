import { StrictMode, useEffect, useState } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { paths } from './pages/paths';
import { MainPage } from './pages/main/mainPage';


export const App = () => {

    return (
        <StrictMode>
            <HashRouter>
                <Routes>
                    <Route path={paths.main} element={<MainPage />} />
                    <Route path='*' element={<Navigate to={paths.main}/>} />
                </Routes>
            </HashRouter>
        </StrictMode>
    );
};
