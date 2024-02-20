import React, { useState } from "react";
import foodsJson from "../foods.json"; // Adjust the path as necessary
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import { Card, Row, Col, Divider, Input, Button } from "antd";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods);
  };

  const addFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  const handleSearch = (searchTerm) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  return (
    <div>
      <AddFoodForm onAddFood={addFood} />
      <Divider></Divider>
      <Search onSearch={handleSearch} />
      <Divider></Divider>
      <Row gutter={[16, 16]}>
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <Col span={8} key={food.id}>
              <Card
                title={food.name}
                cover={<img alt={food.name} src={food.image} />}
                actions={[
                  <Button
                    onClick={() => deleteFood(food.id)}
                    type="primary"
                    danger
                  >
                    Delete
                  </Button>,
                ]}
              >
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>
                  <b>Total Calories: {food.calories * food.servings} </b> kcal
                </p>
              </Card>
            </Col>
          ))
        ) : (
          <p>Oops! There is no more content to show.</p>
        )}
      </Row>
      <Row>
        {foods.map((food) => (
          <FoodBox
            key={food.id}
            food={food}
            onDelete={() => deleteFood(food.id)}
          />
        ))}
      </Row>
    </div>
  );
}

export default FoodList;
