import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const Products = [
    { title:'BYANDBY Kids Tablet 10 inch',
      img:'https://pictures-nigeria.jijistatic.com/120030534_MzAwLTMwMC04YTdhMWFhYzM4.webp',
      price:50000,
      discount:2.2
    },
    { title:'Tablet 2023 Newest, Android 11 ',
      img:'https://pictures-nigeria.jijistatic.com/47129915_a47b677f-637d-491b-a851-f6c960e791eb_300x255.webp',
      price:10500,
      discount:2.9
    },
    { title:'kinstone 10 Inch Android 12 Gaming',
      img:'https://pictures-nigeria.jijistatic.com/47007752_561cfac8-ac62-469f-a7a5-52fa9930d75c_300x300.webp',
      price:4000,
      discount:3.9
    },
    { title:'Acer Aspire TC-1760-UA92 Desktop |',
      img:'https://pictures-nigeria.jijistatic.com/114346824_MzAwLTMwMC00ZGJhNzhkYjJm.webp',
      price:22000,
      discount:3.9
    },
    { title:'Lenovo Tab M8 (3rd Gen) 8" HD ',
      img:'https://pictures-nigeria.jijistatic.com/53078487_a7d3c3d7-d4dc-4ae4-8659-ffc04bf43251_1_300x290.webp',
      price:9000,
      discount:3.9
    },
    { title:'HP All-in-One PC, 23.8" FHD Micro',
      img:'https://pictures-nigeria.jijistatic.com/121272000_MzAwLTQwMC1lMzAxOTRmZGE3LTE.webp',
      price:2000,
      discount:3.9
    },
    { title:'ASUS Chromebook Flip C433 2 in 1 ',
      img:'https://pictures-nigeria.jijistatic.com/120373952_MzAwLTMwMC05NjE0YWE0YzVi.webp',
      price:11000,
      discount:3.9
    },
    { title:'Apple iPad Air 16GB WiFi Tablet',
      img:'https://pictures-nigeria.jijistatic.com/120306326_MzAwLTM3MC1iMTU2MzdhZDIx.webp',
      price:59000,
      discount:3.9
    },
    { title:'MSI Pulse GL66 15.6" FHD 144Hz ',
      img:'https://pictures-nigeria.jijistatic.com/35260762_image_300x534.jpg',
      price:69900,
      discount:3.9
    },
    { title:'RUIQIAI Kids Tablet 10 inch with',
      img:'https://pictures-nigeria.jijistatic.com/43767231_img-20200411-wa0016_300x534.webp',
      price:2000,
      discount:3.9
    },
    { title:'DUODUOGO Laptop Windows 10 ',
      img:'https://m.media-amazon.com/images/I/71qilUM7M4L._AC_UL400_.jpg',
      price:4500,
      discount:3.9
    },
    { title:'Tablet Android 11.0 Tablet, 2 in 1 ',
      img:'https://m.media-amazon.com/images/I/61wePZaEMLL._AC_UL400_.jpg',
      price:5500,
      discount:3.9
    },
     ]

  return (
    <>
         <div  className='display'>

<h1 className='view'>SHOP VIEW</h1>

{
Products.map((value,index)=>{
return(
<div key={index}>

<Product title={value.title} img={value.img} price={value.price} discount={value.discount}/>
</div>
)
})
}
</div>


    </>
  )
}
function Product(props){

  return(
    <div className='allbod'>
     <div>
      <img src= {props.img} />
      <h3>Title: {props.title}</h3> 
      <h4 className='hhhtags'>Price:#<mark>{props.price}</mark></h4>
      <h5 className='hhtags'>discount: <em>{props.discount}</em></h5>
     
     </div>
     <div style={{textAlign:'center',}} className='hovery'>
     <a style={{textDecoration:'none',border:'2px solid black',padding:'15px',paddingTop:'10px',textAlign:'center'}} href="#">Shop Quality here</a>
     </div>
     
    </div>
  )
}

export default App
