import React, { useState } from 'react';
import './App.css';

const DEMO_TODOS = [
  { _id: '1', text: 'Set up MERN development environment', completed: true, createdAt: new Date() },
  { _id: '2', text: 'Create Express.js REST API', completed: true, createdAt: new Date() },
  { _id: '3', text: 'Connect MongoDB database', completed: false, createdAt: new Date() },
  { _id: '4', text: 'Build React frontend UI', completed: false, createdAt: new Date() },
  { _id: '5', text: 'Push project to GitHub', completed: false, createdAt: new Date() },
];

function App() {
  const [todos, setTodos] = useState(DEMO_TODOS);
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    setTodos([{ _id: Date.now().toString(), text: inputText.trim(), completed: false, createdAt: new Date() }, ...todos]);
    setInputText('');
  };

  const toggleTodo = (id) => setTodos(todos.map(t => t._id === id ? { ...t, completed: !t.completed } : t));
  const deleteTodo = (id) => setTodos(todos.filter(t => t._id !== id));

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">✓</span>
            <h1>TaskFlow</h1>
          </div>
          <p className="subtitle">Stay organized, get things done</p>
        </div>
        {totalCount > 0 && (
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(completedCount / totalCount) * 100}%` }} />
            </div>
            <span className="progress-label">{completedCount}/{totalCount} completed</span>
          </div>
        )}
      </header>

      <main className="main">
        

        <form className="add-form" onSubmit={addTodo}>
          <input
            type="text"
            className="add-input"
            placeholder="What do you need to do?"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            maxLength={100}
          />
          <button type="submit" className="add-btn" disabled={!inputText.trim()}>Add Task</button>
        </form>

        <div className="filter-tabs">
          {['all', 'active', 'completed'].map(f => (
            <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
              <span className="filter-count">
                {f === 'all' ? todos.length : f === 'active' ? todos.filter(t => !t.completed).length : todos.filter(t => t.completed).length}
              </span>
            </button>
          ))}
        </div>

        <div className="todo-list">
          {filteredTodos.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">{filter === 'completed' ? '🏆' : filter === 'active' ? '🎉' : '📋'}</span>
              <p>{filter === 'completed' ? 'No completed tasks yet' : filter === 'active' ? 'All tasks done!' : 'Add your first task above'}</p>
            </div>
          ) : (
            filteredTodos.map(todo => (
              <div key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <button className={`check-btn ${todo.completed ? 'checked' : ''}`} onClick={() => toggleTodo(todo._id)}>
                  {todo.completed && <span>✓</span>}
                </button>
                <span className="todo-text">{todo.text}</span>
                <span className="todo-date">{new Date(todo.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>✕</button>
              </div>
            ))
          )}
        </div>

        {todos.length > 0 && (
          <div className="list-footer">
            <span>{todos.filter(t => !t.completed).length} tasks remaining</span>
            {completedCount > 0 && (
              <button className="clear-btn" onClick={() => setTodos(todos.filter(t => !t.completed))}>Clear completed</button>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
