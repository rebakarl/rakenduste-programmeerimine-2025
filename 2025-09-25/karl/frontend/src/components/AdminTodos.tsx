import { Box, List, ListItem, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

type Todo = {
  id: string;
  text: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const AdminTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data);
  };

  const fetchAllTodos = async () => {
    // Simulate admin access to all todos, including deleted
    const response = await fetch("http://localhost:3000/admin/todos/all");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchAllTodos();
  }, []);

  const toggleDeleted = async (id: string) => {
    await fetch("http://localhost:3000/admin/todos/toggle-delete", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    fetchAllTodos();
  };

  return (
    <Box>
      <Typography variant="h2">Admin TODO Panel</Typography>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <span>{todo.text}</span>
            <span>{todo.deleted ? "[DELETED]" : "[ACTIVE]"}</span>
            <Button onClick={() => toggleDeleted(todo.id)} variant="contained" color="warning" size="small">
              Toggle Deleted
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminTodos;
