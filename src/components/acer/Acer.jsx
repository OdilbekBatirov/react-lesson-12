import React from 'react'
import styled from 'styled-components'

const Acers = [
    {
        id: '1',
        productName: 'Acer Aspire 3',
        url: 'https://ultra.kg/upload/resize_cache/iblock/76e/1148_811_1d0e97ea46f4438969ab06dd5b311ca67/76e7eddd514c84413f30fcd7a6562c6b.jpg',
        price: 3600,
    },
    {
        id: '2',
        productName: 'Acer Aspire 4',
        url: 'https://ultra.kg/upload/resize_cache/iblock/331/1024_768_1d0e97ea46f4438969ab06dd5b311ca67/331f8a4e31cfad129f5a53e99926ef7e.jpg',
        price: 3000,
    },
    {
        id: '3',
        productName: 'Acer Aspire 5',
        url: 'https://m.media-amazon.com/images/I/715luCK53hL._AC_UF894,1000_QL80_.jpg',
        price: 4000,
    },
    {
        id: '4',
        productName: 'Acer Aspire 6',
        url: 'https://avatars.mds.yandex.net/get-mpic/1525355/img_id8278842252271103598/orig',
        price: 5000,
    },
    {
        id: '5',
        productName: 'Acer Aspire 7',
        url: 'https://www.notebookcheck-ru.com/fileadmin/_processed_/4/4/csm_teaser_4_cf86dfc657.jpg',
        price: 7000,
    },
]

const Acer = () => {
  return (
    <div style={{ backgroundColor:'white', display:'flex' }} >
        {Acers.map(product => (
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

export default Acer

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