import { useState } from 'react'
import Card from './Card'
import './App.css'
function App() {
  const cardData = [
    {
      title: "Card 1",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 2",
      description: "This is the description for Card 2.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 3",
      description: "This is the description for Card 3.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 1",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 2",
      description: "This is the description for Card 2.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 3",
      description: "This is the description for Card 3.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 1",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 2",
      description: "This is the description for Card 2.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 3",
      description: "This is the description for Card 3.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 1",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 2",
      description: "This is the description for Card 2.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 3",
      description: "This is the description for Card 3.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 1",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 2",
      description: "This is the description for Card 2.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 3",
      description: "This is the description for Card 3.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 1",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 2",
      description: "This is the description for Card 2.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
    {
      title: "Card 3",
      description: "This is the description for Card 3.",
      imageUrl: "https://via.placeholder.com/300x180/000000/ffffff",
    },
  ];
  return (
    <>
    <div className="container">
       <p style={{textAlign:'center',color:'white'}}>All cards are here:</p>
    </div>
    <div className="app">
    {cardData.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        description={card.description}
        imageUrl={card.imageUrl}
      />
    ))}
  </div>
  </>
  )
}

export default App
