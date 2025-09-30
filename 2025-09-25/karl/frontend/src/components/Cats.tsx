import { Box, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat.tsx";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState<string>("");

  const fetchCats = async () => {
    const response = await fetch("http://localhost:3000/cats");
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const handleDelete = async (id: string) => {
    await fetch("http://localhost:3000/cats", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    fetchCats();
  };

  const handleEdit = (cat: Cat) => {
    setEditId(cat.id);
    setEditName(cat.name);
  };

  const handleUpdate = async () => {
    if (!editId) return;
    await fetch("http://localhost:3000/cats", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: editId, name: editName }),
    });
    setEditId(null);
    setEditName("");
    fetchCats();
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditName("");
  };

  return (
    <Box>
      <Typography variant="h1">Cats</Typography>
      <CatsList 
        cats={cats} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
        editId={editId}
        editName={editName}
        setEditName={setEditName}
        onUpdate={handleUpdate}
        cancelEdit={cancelEdit}
      />
      <SubmitCat fetchCats={fetchCats} />
    </Box>
  );
};



type CatsListProps = {
  cats: Cat[];
  onDelete: (id: string) => void;
  onEdit: (cat: Cat) => void;
  editId: string | null;
  editName: string;
  setEditName: (name: string) => void;
  onUpdate: () => void;
  cancelEdit: () => void;
};

const CatsList: React.FC<CatsListProps> = ({ cats, onDelete, onEdit, editId, editName, setEditName, onUpdate, cancelEdit }) => {
  return (
    <List>
      {cats.map((cat) => (
        <ListItem key={cat.id} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {editId === cat.id ? (
            <>
              <input
                value={editName}
                onChange={e => setEditName(e.target.value)}
                style={{ marginRight: 8 }}
              />
              <button onClick={onUpdate}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <span>{cat.name}</span>
              <button onClick={() => onEdit(cat)}>Edit</button>
              <button onClick={() => onDelete(cat.id)}>Delete</button>
            </>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default Cats;
