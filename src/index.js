import React from 'react';
import { createRoot } from 'react-dom/client';

import { Form } from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<Form />);
