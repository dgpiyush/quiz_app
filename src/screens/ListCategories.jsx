import React from 'react'
import Card from '../components/Card'



// circle component

function Circle(props) {
    return (
        <div className={`circle ${props.size} ${props.position}`}  ></div>
    )
}



export const ListCategories = () => {
  return (
    <div className='bg-white'>
        {/* header with back and profile icon */}
        <div className="header">
            <div className='nav'>
                <div className="back-icon">
                    <img src="./assets/back.svg" alt="Back" />
                </div>
                <div className="user-name">
                    <h1>Hi, User</h1>
                </div>
                <div className="profile-icon">
                    <img src="./assets/avatar.jpg" alt="Profile" />
                </div>
            </div>
            <div className="popular-categories">
                <h2>Popular Categories</h2>
                <div className="cards">
                    <Card title="Space" img="./assets/rocket.svg" />
                    <Card title="History" img="./assets/history.svg" />
                    <Card title="Sport" img="./assets/sports.svg" />
                </div>
            </div>
            {/* style elemets */}
            < Circle size="big" position="top-left" />
            < Circle size="medium" position="top-right" />
            < Circle size="small" position="bottom-left" />
            < Circle size="medium" position="bottom-right" />
            

        </div>

        <div className="categories">

        <div className="explore">
            <h2>Explore</h2>
            {/* link to view all */}
            <a href='#' >View All</a>
        </div>
        <div className="cards">
            <Card title="Space" img="./assets/rocket.svg" />
            <Card title="History" img="./assets/history.svg" />
            <Card title="Sport" img="./assets/sports.svg" />
            <Card title="Space" img="./assets/rocket.svg" />
            <Card title="History" img="./assets/history.svg" />
            <Card title="Sport" img="./assets/sports.svg" />
            <Card title="Space" img="./assets/rocket.svg" />
            <Card title="History" img="./assets/history.svg" />
            <Card title="Sport" img="./assets/sports.svg" />
        </div>
        </div>
    </div>
  )
}








