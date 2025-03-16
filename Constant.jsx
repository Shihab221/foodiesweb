import { image } from "framer-motion/client";

export const categoriesData = [
    
      
        { name:"Bakery", image: "/images/food icon 7.png", path: "/categorizedFood"},
        { name: "Burger", image: "/images/food icon 1.png", path: "/categorizedFood" },
        { name: "Coffee", image: "/images/food icon 3.png", path: "/categorizedFood" },
        { name: "Fish", image: "/images/food icon 4.png", path: "/categorizedFood" },
        { name: "Ice-Cream", image: "/images/food icon 2.png", path: "categorizedFood" },
        { name: "Juice", image: "/images/food icon 8.png" , path: "/categorizedFood" },
        { name: "Kebab", image: "/images/food icon 6.png", path: "/orderPage" },
        { name: "meat", image: "/images/food icon 5.png", path: "/categorizedFood" },
        { name: "Beer", image: "/images/food icon 9.png", path: "/categorizedFood" },
        { name: "Fruits", image: "/images/food icon 11.png", path: "/categorizedFood" },
        // { name: "Cake", image: "/images/food icon 10.png", path: "/categorizedFood" },
      
  ];

export const kitchens = [
  {
    name: "Shihab kitchen",
    image: "/images/pasta.jpg",
    delivery: "Free Delivery",
    time:"10-12min",
    rating: 4.5 ,
    foods:["burger", "chichen" ,"fish", "pizza", "pasta"]

  },
  {
    name: "Parthib kitchen",
    image: "/images/burger.jpg",
    delivery: "Free Delivery",
    time:"10-12min",
    rating: 4.5 ,
    foods:["burger", "chichen" ,"fish", "pizza", "pasta"]

  },
  {
    name: "Kawsar kitchen",
    image: "/images/biriyani.jpg",
    delivery: "Free Delivery",
    time:"10-12min",
    rating: 4.5 ,
    foods:["burger", "chichen" ,"fish", "pizza", "pasta"]

  },
]

export const featuredSellers = [
  {
    name: "Shihab Ahemed",
    image: "/images/pasta.jpg",
  },
  {
    name: "Kawsar Khan",
    image: "/images/burger.jpg",
  },
  {
    name: "Parthiv gorilla",
    image: "/images/biriyani.jpg",
  },
  {
    name: "Rafid Sharif",
    image: "/images/pizza.jpg",
  },
  {
    name: "Shihab Ahemed",
    image: "/images/pasta.jpg",
  },
  {
    name: "Kawsar Khan",
    image: "/images/burger.jpg",
  },
  {
    name: "Parthiv gorilla",
    image: "/images/biriyani.jpg",
  },
  {
    name: "Rafid Sharif",
    image: "/images/pizza.jpg",
  },

]

export const foods = [
    {
      id: 1,  
      name: "Penne pasta",
        image: '/images/pasta.jpg',
        price: '200',
        rating: '4.5',
        review: '30',
        delivery_time: '15-20',    
    },
    {
      id: 2,  
      name: "Burger",
        image: '/images/burger.jpg',
        price: '100',
        rating: 4.5,
        review: '30',
        delivery_time: '15-20',    
    },
    {
      id: 3,  
      name: "Pizza  Mutton",
        image: '/images/pizza.jpg',
        price: '320',
        rating: '4.5',
        review: '30',
        delivery_time: '15-20',    
    },
    {
      id: 4,
      name: "Biriyani Mutton",
      image: '/images/biriyani.jpg',
      price: '320',
      rating: '4.5',
      review: '30',
      delivery_time: '10-12',    
    },
]

export const categorizedFood = [
  {
    id: 1,  
    name: "Penne pasta",
      image: '/images/pasta.jpg',
      price: '200',
      rating: '4.5',
      review: '30',
      delivery_time: '15-20',    
  },
  {
    id: 2,  
    name: "Burger",
      image: '/images/burger.jpg',
      price: '100',
      rating: 4.5,
      review: '30',
      delivery_time: '15-20',    
  },
  {
    id: 3,  
    name: "Pizza  Mutton",
      image: '/images/pizza.jpg',
      price: '320',
      rating: '4.5',
      review: '30',
      delivery_time: '15-20',    
  },
  {
    id: 4,
    name: "Biriyani Mutton",
    image: '/images/biriyani.jpg',
    price: '320',
    rating: '4.5',
    review: '30',
    delivery_time: '10-12',    
  },
  {
    id: 5,  
    name: "Pizza  Mutton",
      image: '/images/pizza.jpg',
      price: '320',
      rating: '4.5',
      review: '30',
      delivery_time: '15-20',    
  },
  {
    id: 6,
    name: "Biriyani Mutton",
    image: '/images/biriyani.jpg',
    price: '320',
    rating: '4.5',
    review: '30',
    delivery_time: '10-12',    
  },
  {
    id: 7,  
    name: "BucategorizedFoodr",
      image: '/images/burger.jpg',
      price: '100',
      rating: 4.5,
      review: '30',
      delivery_time: '15-20',    
  },
  {
    id: 8,  
    name: "Pizza  Mutton",
      image: '/images/pizza.jpg',
      price: '320',
      rating: '4.5',
      review: '30',
      delivery_time: '15-20',    
  },
  {
    id: 9,
    name: "Biriyani Mutton",
    image: '/images/biriyani.jpg',
    price: '320',
    rating: '4.5',
    review: '30',
    delivery_time: '10-12',    
  },
  {
    id: 10,  
    name: "BucategorizedFoodr",
      image: '/images/burger.jpg',
      price: '100',
      rating: 4.5,
      review: '30',
      delivery_time: '15-20',    
  },
  
]


export const shopProfile = [
  {
    image:"/images/product.png",
    text: "Products",
  },
  {
    image:"/images/about.png",
    text: "About",
  },
  {
    image:"/images/review.png",
    text: "Review",
  },
  {
    image:"/images/map.png",
    text: "Map",
  },
]


export const userProfile = {
  General: [
    {
      image: "/images/about.png",
      text: "Acount",
    },
    {
      image: "/images/review.png",
      text: "Manage Profile",
    },
    {
      image: "/images/payment.png",
      text: "Wallet",
    },
    {
      image: "/images/payment.png",
      text: "Payment History",
    },
    
  ],
  System: [
    {
      text: "Notifications",
      image:"/images/notification.png"
    },
    {
      text: "Theme",
      image: "/images/filter.png"
    },
    {
      text: "Account Switch",
      image: "/images/edit.png"
    }
  ],
  vertical: [
    {
      image: "/images/about.png",
      text: "Order",
    },
    {
      image: "/images/review.png",
      text: "To Ship",
    },
    {
      image: "/images/payment.png",
      text: "Received",
    },
    {
      image: "/images/payment.png",
      text: "Return",
    },
    {
      image: "/images/payment.png",
      text: "Review",
    },
  ]
};

export const cartedfood = [
  {
      name: "Penne pasta",
      image: '/images/pasta.jpg',
      price: '200',
      rating: '4.5',
      review: '30',
      delivery_time: '15-20',    
  },
  {
      name: "Burger",
      image: '/images/burger.jpg',
      price: '100',
      rating: '4.5',
      review: '30',
      delivery_time: '15-20',    
  },
  {
      name: "Pizza  Mutton",
      image: '/images/pizza.jpg',
      price: '320',
      rating: '4.5',
      review: '30',
      delivery_time: '15-20',    
  },
]

