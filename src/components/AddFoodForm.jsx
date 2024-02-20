import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button, Form } from "antd";

function AddFoodForm({ onAddFood }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFood(formData);
    setFormData({ name: '', image: '', calories: 0, servings: 0 }); // Reset form
  };

  return (
    <Card title="Add New Food" bordered={false}>
      <Form onSubmit={handleSubmit} layout="vertical">
        <Divider orientation="center">Food Details</Divider>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Name">
              <Input name="name" type="text" value={formData.name} onChange={handleChange} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Image URL">
              <Input name="image" type="text" value={formData.image} onChange={handleChange} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Calories">
              <Input name="calories" type="number" value={formData.calories} onChange={handleChange} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Servings">
              <Input name="servings" type="number" value={formData.servings} onChange={handleChange} />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Button type="primary" htmlType="submit">Create</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default AddFoodForm;