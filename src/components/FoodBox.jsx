import React from 'react';
import { Card, Button } from "antd";

function FoodBox({ food, onDelete }) {
  return (
    <Card
      title={food.name}
      style={{ width: 300, margin: '20px' }}
      cover={<img alt={food.name} src={food.image} style={{ maxHeight: '150px', objectFit: 'cover' }} />}
      actions={[
        <Button onClick={onDelete} type="primary" danger>
          Delete
        </Button>
      ]}
    >
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p><b>Total Calories: {food.calories * food.servings}</b> kcal</p>
    </Card>
  );
}

export default FoodBox;