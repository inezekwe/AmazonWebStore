import React from "react";
import "./Mainpage.css"
import Products from "../Products/Products";
import axios from "axios"

function MainPage() {



const allInventory = () => {
        axios.get('http://localhost:4000/inventory')
            .then(res => {
                console.log(res.data);
            })
    }

    console.log(allInventory())


    return (
        <div className="main-page">
            <img className="main-page-image" src="https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="imageHolder" 
            />

            {/* product id, title, price, rating, image */}
            <div className="main-page-row">
                <Products
                    id="1234523"
                    title="FEMALE CLOTHES"
                    image="https://images.pexels.com/photos/5210680/pexels-photo-5210680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
