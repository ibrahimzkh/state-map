import React from "react";
import "./table-styles.css";

function Products() {
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
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Products;
