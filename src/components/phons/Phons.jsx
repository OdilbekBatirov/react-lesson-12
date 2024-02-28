import React from 'react'
import styled from 'styled-components'

const phons = [
    {
        id: '1',
        url: 'https://mobilworld.by/upload/iblock/2dd/2dd908d53c972bd465dbe483ec1abce5.png',
        productName: 'Apple',
        price: 3600,
    },
    {
        id: '2',
        url: 'https://video-shoper.ru/upload/iblock/c56/c56d8de4925e30cc2bb3cb9ae302edea.png',
        productName: 'Samsung',
        price: 3000,
    },
    {
        id: '3',
        url: 'https://mistore.kg/wp-content/uploads/2023/09/1678783690-719015-gray-11-1.jpg',
        productName: 'Redmi',
        price: 2000,
    },
    {
        id: '4',
        url: 'https://softech.kg/image/cache/16c506058cefd803b23ba9360ed6b0d3.jpg',
        productName: 'Hiomi',
        price: 2000,
    },
    {
        id: '5',
        url: 'https://object.pscloud.io/cms/cms/Photo/img_0_76_2_1.jpg',
        productName: 'Nokia',
        price: 2000,
    },
]

const Phons = () => {
  return (
    <div style={{ backgroundColor:'white', display: 'flex' }}>
        {phons.map(product => (
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

export default Phons

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