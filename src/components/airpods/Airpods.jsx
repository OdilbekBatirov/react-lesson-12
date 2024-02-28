import React from 'react'
import styled from 'styled-components'

const Airpoods  = [
    {
        id: '1',
        url: 'https://brobrolab.ru/wp-content/uploads/2023/02/AirPods-Pro-2-2.png',
        productName: 'AirPods Pro 1',
        price: 3600,
    },
    {
        id: '2',
        url: 'https://png.pngtree.com/png-clipart/20231105/original/pngtree-apple-airpods-pro-png-image_13508163.png',
        productName: 'AirPods Pro 2',
        price: 4000,
    },
    {
        id: '3',
         url: 'https://ilounge.ua/files/products/apple-airpods-3-wireless-charging-case_11.1000x.jpg',
        productName: 'AirPods Pro 3',
        price: 5000,
    },
    {
        id: '4',
         url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbO6urPZSnYsBFe0AJvk6o8N_8IQanR0zZSVyOykVZNtNsj3lUCmDDBp7TsU9okVc-74&usqp=CAU',
        productName: 'AirPods Pro 4',
        price: 6000,
    },
    {
        id: '5',
         url: 'https://www.cifrus.ru/photos/big/nayshniki_i_bluetooth-garnityri/apple-airpods-3-3.jpg',
        productName: 'AirPods Pro 5',
        price: 7000,
    },
]

const Airpods = () => {
  return (
    <div style={{ backgroundColor:'white', display: 'flex' }} >
        {Airpoods.map(product => (
                <Timg key={product.id}>
                    <div>
                    <img src={product.url} alt="Photos" />
                    <p>{product.productName}</p>
                    <p>{product.price}</p>
                    </div>
                </Timg>
            ))}
    </div>
  )
}

export default Airpods

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