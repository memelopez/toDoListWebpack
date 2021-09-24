import './styles.css';
import UI from './ui';

const todos = [
  {
    description: 'Mow lawn',
    completed: false,
    index: 0
  },
  {
    description: 'Clean bathroom',
    completed: true,
    index: 1
  }
];

// When content loads
document.addEventListener('DOMContentLoaded', UI.addApp(todos));