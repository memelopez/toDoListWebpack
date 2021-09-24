import './styles.css';
import UI from './ui';

const todos = [
  {
    description: 'Mow lawn',
    completed: false,
    index: 3,
  },
  {
    description: 'Clean bathroom',
    completed: true,
    index: 5,
  },
];

// When content loads
document.addEventListener('DOMContentLoaded', UI.addApp(todos));