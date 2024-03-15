import React, { useState } from "react";
import "./table-styles.css";
import { fakeDatabase } from "../fakeDatabase";

function Products() {
  const [fakeData, setFakeData] = useState(fakeDatabase);
  const handleRemove = (id) => {
    const array = fakeData.filter(item => item.id !== id)
    setFakeData(array)
  }
  

  return (
    <div className="my-2">
      <table className="table">
        <thead>
          <tr>
            <th>Превью</th>
            <th>Товар</th>
            <th>Цена</th>
            <th>В наличие</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
        {fakeData.map((item, index) => {
            return (
              <tr>
                <td><img src={item.image}></img></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.inStock ? "да" : "нет"}</td>
                
                <td>
                  <button
                  onClick={()=> handleRemove(item.id)}>
                    удалить
                  </button>
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </div>
  );
}

export default Products;
