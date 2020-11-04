import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Mainpage.css"
import Products from "../Products/Products";

function MainPage() {
    const [inventory, setInventory] = useState([]);

    useEffect(function effectFunction() {
        axios.get('http://localhost:4000/inventory')
            .then(res => {
                setInventory(res.data);
                console.log(inventory);
            });
    }, [])


    return (

        <div className="main-page">
            <img className="main-page-image" src="https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="imageHolder" 
            />

            {/* product id, title, price, rating, image */}
            <div className="main-page-row">
                {inventory.map(item => {
                    return <Products 
                    key={item.id} 
                    id={item.id} 
                    image={item.product_photo} 
                    title={item.product_name} 
                    price={item.price} />
                })}
                <Products
                    id="1234523"
                    title="FEMALE CLOTHES"
                    image="https://images.pexels.com/photos/5210680/pexels-photo-5210680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                />
               
            </div>

            <div className="main-page-row">
                <Products
                    id="1234523"
                    title="the start of web development by Bryan Urias"
                    price={20.0}
                    rating={5}
                    image="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781442499577/random-9781442499577_hr.jpg"
                />
                <Products
                    id="1234523"
                    title="the start of web development by Bryan Urias"
                    price={20.0}
                    rating={5}
                    image="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781442499577/random-9781442499577_hr.jpg"
                />
                <Products
                    id="1234523"
                    title="the start of web development by Bryan Urias"
                    price={20.0}
                    rating={5}
                    image="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781442499577/random-9781442499577_hr.jpg"
                />
            </div>

            <div className="main-page-row">
                <Products
                    id="1234523"
                    title="the start of web development by Bryan Urias"
                    price={20.0}
                    rating={5}
                    image="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781442499577/random-9781442499577_hr.jpg"
                />
            </div>

            {/* product */}
        </div>
    );
}

export default MainPage;