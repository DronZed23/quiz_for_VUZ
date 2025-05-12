import { StrictMode, useEffect, useState } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { paths } from './pages/paths';
import { MainPage } from './pages/main/mainPage';
import { getDataLocalStorageQuiz } from './API/quizLocalStorage';
import { QuizCard } from './pages/questions';


export const App = () => {

    const [step, setStep] = useState(getDataLocalStorageQuiz('step') as number || 1);

    return (
        <StrictMode>
            <HashRouter>
                <Routes>
                    <Route path={paths.questions} element={<QuizCard />} />
                    <Route path={paths.main} element={<MainPage setStep={setStep}/>} />
                    <Route path='*' element={<Navigate to={paths.main}/>} />
                </Routes>
            </HashRouter>
        </StrictMode>
    );
};
