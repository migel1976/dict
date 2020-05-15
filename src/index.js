import React from 'react';//подключаем библотеку React
import ReactDOM from 'react-dom';
import App from './components/app/app';//подключаем корневой компонент
import {BrowserRouter} from 'react-router-dom';//подключаем библиотеку обработки маршрутов

ReactDOM.render(<BrowserRouter>
				  {/*вызываем корневой компонент*/}
                    <App />
                </BrowserRouter>
                              ,document.getElementById('root'));

