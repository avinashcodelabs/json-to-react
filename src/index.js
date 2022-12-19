import React from 'react';
import { createRoot } from 'react-dom/client';

import { Form } from './Form';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<Form />);
