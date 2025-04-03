import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() === "") return; // Проверяем, что поле не пустое

    const newItem = {
      id: Date.now(), // Генерация уникального id
      text: inputValue,
    };

    setItems([...items, newItem]); // Добавляем новый элемент в список
    setInputValue(""); // Очищаем поле ввода
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Список элементов</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите текст..."
      />
      <button onClick={addItem} disabled={!inputValue.trim()}>
        Добавить
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
