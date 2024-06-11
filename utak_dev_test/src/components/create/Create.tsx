import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './style.module.scss'
import { addItem } from '../../lib/controller';

function Create() {

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate();

  const addNewItem = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    addItem({
      name,
      category,
      price,
      description,
      stock,
    })
    console.log('Successfully added a new item');
    navigate('/')
  }

  return (
    <div className={style.create}>
      <h2>Add a new Item</h2>
      <form onSubmit={(e)=> addNewItem(e)}>
        <label>Item Name</label>
        <input type="text" required value={name} onChange={(e)=> setName(e.target.value)}/>
        <label>Item Price</label>
        <input type="text" required value={price} onChange={(e)=> setPrice(e.target.value)}/>
        <label>Item Stock</label>
        <input type="text" required value={stock} onChange={(e)=> setStock(e.target.value)}/>
        <label>Item Category</label>
        <input type="text" required value={category} onChange={(e)=> setCategory(e.target.value)}/>
        <label>Item Description</label>
        <input type="text" required value={description} onChange={(e)=> setDescription(e.target.value)}/>
        <button>Add Item</button>
      </form>
    </div>
  )
}

export default Create