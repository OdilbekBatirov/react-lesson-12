import React from 'react'
import styled from 'styled-components'

const Asuss = [
    {
        id: '1',
        url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxERDg4QDw4RDxAQDw0QDg8ODRYPDRANFREiFxYRFRMYHyggGh4lHxMVITEiMTUrMC4wGCI/OD8tNygvOisBCgoKDQ0FDgUNGysZExkrKysrKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALUBFgMBIgACEQEDEQH/xAAcAAEBAQADAQEBAAAAAAAAAAAACAUBAgYDBAf/xABHEAABAgMBCgoIBAUDBQAAAAABAAIDBBEFBhITFiExNJSz0RdBUVNUVWF0ktIHFBUicXOT4TJSkaEjQoGx8CSywSUzYmOD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP7iiIgL4zkwIcKJEd+GGxz3fBoqf7L7LMun0Cd7tMbMoJluk9I9pTkaI8TkaXglzjCgy8V0FrYfEHFhBcaZ68axMZp7rGb12L5l+SyWgx5YEVBjQAQRUEX4yKwcX5PoMtqsPcgknGae6xm9di+ZMZp7rGb12L5lW2L8n0GW1WHuTF+T6DLarD3IJJxmnusZvXYvmTGae6xm9di+ZVti/J9BltVh7kxfk+gy2qw9yCScZp7rGb12L5kxmnusZvXYvmVbYvyfQZbVYe5MX5PoMtqsPcgknGae6xm9di+ZMZp7rGb12L5lW2L8n0GW1WHuTF+T6DLarD3IJJxmnusZvXYvmTGae6xm9di+ZVti/J9BltVh7kxfk+gy2qw9yCScZp7rGb12L5l9DdHOXgPtKbvq0LfXYubl/F8P1VZYvyfQZbVYe5MX5PoMtqsPcgknGae6xm9di+ZMZp7rGb12L5lW2L8n0GW1WHuTF+T6DLarD3IJJxmnusZvXYvmTGae6xm9di+ZVti/J9BltVh7kxfk+gy2qw9yCScZp7rGb12L5kxmnusZvXYvmVbYvyfQZbVYe5MX5PoMtqsPcgknGae6xm9di+ZMZp7rGb12L5lW2L8n0GW1WHuTF+T6DLarD3IJJxmnusZvXYvmTGae6xm9di+ZVti/J9BltVh7kxfk+gy2qw9yCScZp7rGb12L5ly26eeGa0pwfCdi+ZVri/J9BltVh7l+C6CwpQSU4WyUsCJaYIIloYIIhmhBog/hvo39JE7AnpeDMzMWalo8RkJ4jvMWIwvNGva92XISMnIqTUZXPaZJd5ldqFZqAiIgIiICIiAsy6fQJ3u0xsytNZl0+gTvdpjZlBIFkaRLfPl9oFaSi2yNIlvny+0CtJAREQEREBERAREQEREBERAREQEREBERAREQEREBZ10egzvdZnZFaKzro9Bne6zOyKCQ7ntMku8yu1Cs1Rlc9pkl3mV2oVmoCIiAiIgIiICzLp9Ane7TGzK01mXT6BO92mNmUEgWRpEt8+X2gVpKLbI0iW+fL7QK0kBERAREQEREBERAREQEREBERAREQEREBERAREQFnXR6DO91mdkVorOuj0Gd7rM7IoJDue0yS7zK7UKzVGVz2mSXeZXahWagIiICIiAiIgLMun0Cd7tMbMrTWZdPoE73aY2ZQSBZGkS3z5faBWkotsjSJb58vtArSQEREBERAREQEREBERAREQEREBERAREQEREBERAWddHoM73WZ2RWis66PQZ3uszsigkO57TJLvMrtQrNUZXPaZJd5ldqFZqAiIgIiICIiAsy6fQJ3u0xsytNZl0+gTvdpjZlBIFkaRLfPl9oFaSi2yNIlvny+0CtJAREQEREBERAREQEREBERAREQEREBERAREQEREBZ10egzvdZnZFaKzro9Bne6zOyKCQ7ntMku8yu1Cs1Rlc9pkl3mV2oVmoCIiAiIgIiICzLp9Ane7TGzK01mXT6BO92mNmUEgWRpEt8+X2gVpKLbI0iW+fL7QK0kBERAREQEREBERAREQEREBERAREQEREBERAREQFnXR6DO91mdkVorOuj0Gd7rM7IoJDue0yS7zK7UKzVGVz2mSXeZXahWagIiICIiAiIgLMun0Cd7tMbMrTWZdPoE73aY2ZQSBZGkS3z5faBWkotsjSJb58vtArSQEREBERAREQEREBERAREQEREBERAREQEREBERAWddHoM73WZ2RWis66PQZ3uszsigkO57TJLvMrtQrNUZXPaZJd5ldqFZqAiIgIiICIiAsy6fQJ3u0xsytNZl0+gTvdpjZlBIFkaRLfPl9oFaSi2yNIlvny+0CtJAREQEREBERAREQEREBERAREQEREBERAREQEREBZ10egzvdZnZFaKzro9Bne6zOyKCQ7ntMku8yu1Cs1Rlc9pkl3mV2oVmoCIiAiIgIiI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',
        productName: 'ASUS Zenbook',
        price: 5000,
    },
    {
        id: '2',
         url: 'https://abrakadabra.fun/uploads/posts/2022-02/1645801896_28-abrakadabra-fun-p-noutbuk-na-prozrachnom-fone-50.png',
        productName: 'ASUS VivoBook Pro',
        price: 6000,
    },
    {
        id: '3',
         url: 'https://login.kg/image/cache/catalog/new/Notebook/Asus/GO%2015%202023/1-500x400.jpg',
        productName: 'ASUS VivoBook ProMax',
        price: 7000,
    },
    {
        id: '4',
         url: 'https://www.pcworld.com/wp-content/uploads/2024/01/ASUS_ROG_Zephyrus_G14_GA402_1.jpg?quality=50&strip=all',
        productName: 'ASUS VivoBook Se',
        price: 8000,
    },
    {
        id: '5',
         url: 'https://softech.kg/image/cache/5f93da5b842fe72170366c1016ee3c48.jpg',
        productName: 'ASUS VivoBook Xs',
        price: 10000,
    },
]

const Asus = () => {
  return (
    <div style={{ backgroundColor:'white', display: 'flex' }}>
          {Asuss.map(product => (
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

export default Asus

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