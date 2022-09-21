import React from 'react';
import ReactDOM from 'react-dom/client';
import { Padre } from './07-tarea-memo/Padre';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { MemoHook } from './06-memos/MemoHook';
//import { ShowIncrement } from './06-memos/ShowIncrement';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { Memorize } from './06-memos/Memorize';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHooks';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { HooksApp } from './HooksApp';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Padre />
  </React.StrictMode>
)
