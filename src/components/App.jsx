import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import AuthPage from './Authen/AuthPage';
import Registration from './Authen/Registration';

export default function App() {
  const location = useLocation();
  return (
    <div className="container">
      {location.pathname === '/' || '/Registration' ? <></> : <NavBar />}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

// как узнать предыдущее состояние юз эффект? ответ в ЧузХиро с prev => ...
// или просто использовать в выпадающем окошке крестик(отмена состояния)

// как мне установить картинку фоном для определенного состояния если она меняется в тайтле?
// пока что я просто изменил ее в самом шаблоне

// как добавить иконку сайта? не получается

// добавить счетчик по типу у тебя есть 10 свободных очков, распредели их в свободные статы + запись на бэк? вопрос про модель бека с такими фичами,
// позволят ли данные таблицы их делать или придется стартовые таблицы переделывать 10:00 na vidose
