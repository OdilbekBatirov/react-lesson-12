import React from 'react'
import styled from 'styled-components'

const Macbook = [
    {
        id: '1',
        url: 'https://optim.tildacdn.pro/tild3438-3430-4436-a361-313638333230/-/format/webp/image.png',
        productName: 'Macbook pro 13',
        price: 3600,
    },
    {
        id: '2',
        url: 'https://media.cnn.com/api/v1/images/stellar/prod/211025072623-macbook-pro-14-display-5.jpg?q=w_4032,h_2268,x_0,y_0,c_fill',
        productName: 'Macbook pro 14',
        price: 3000,
    },
    {
        id: '3',
        url: 'https://appleinsider.ru/wp-content/uploads/2019/07/mbp_2017_31_screen.jpg',
        productName: 'Macbook pro 15',
        price: 5000,
    },
    {
        id: '4',
        url: 'https://cdn.mos.cms.futurecdn.net/G5fyaRZd2UUbJyA978r9N3-1200-80.jpg',
        productName: 'Macbook pro 16',
        price: 9000,
    },
    {
        id: '5',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0DddO2y3HQXGSADVsrBnGqGcOlCmx2U2pg&usqp=CAU',
        productName: 'Macbook pro 17',
        price: 8000,

    },
]

const Mac = () => {
  return (
    <div style={{ backgroundColor:'white', display:'flex' }}>
        {Macbook.map(product => (
                <Timg key={product.id}>
                    <div>
                    <img src={product.url} alt="photos" />
                    <p>{product.productName}</p>
                    <p>{product.price}</p>
                    </div>
                </Timg>
            ))}
    </div>
  )
}

export default Mac

const Timg = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
    
  img{
    width: 250px;
    object-fit: contain;
    border-radius: 20px;
  }
`