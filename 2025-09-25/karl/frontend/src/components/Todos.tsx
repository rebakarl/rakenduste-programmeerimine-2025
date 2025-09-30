import { Box, List, ListItem, Typography, Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

type Todo = {
  id: string;
  text: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");
  const [newText, setNewText] = useState<string>("");

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleDelete = async (id: string) => {
    await fetch("http://localhost:3000/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    fetchTodos();
  };

  const handleEdit = (todo: Todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = async () => {
    if (!editId) return;
    await fetch("http://localhost:3000/todos", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: editId, text: editText }),
    });
    setEditId(null);
    setEditText("");
    fetchTodos();
  };

  const handleCreate = async (event: React.FormEvent) => {
    event.preventDefault();
    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newText }),
    });
    setNewText("");
    fetchTodos();
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <Box>
      <Typography variant="h1">TODOs</Typography>
      <form onSubmit={handleCreate}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="New TODO"
            value={newText}
            onChange={e => setNewText(e.target.value)}
          />
          <Button variant="contained" color="success" type="submit">
            Add
          </Button>
        </Stack>
      </form>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {editId === todo.id ? (
              <>
                <TextField
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                  size="small"
                  sx={{ marginRight: 1 }}
                />
                <Button onClick={handleUpdate} variant="contained" color="primary" size="small">Save</Button>
                <Button onClick={cancelEdit} variant="outlined" color="secondary" size="small">Cancel</Button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <Button onClick={() => handleEdit(todo)} variant="outlined" color="primary" size="small">Edit</Button>
                <Button onClick={() => handleDelete(todo.id)} variant="outlined" color="error" size="small">Delete</Button>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Todos;
