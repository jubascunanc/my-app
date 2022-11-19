
const products=[
    {
     id: '4405',
     name: 'Curso programación Front end',
     price: '7000',
     categoryID: 'Cursos',
     img: './imagenes/programador-frontend.jpeg',
     stock: '100',
    },
    {
     id: '1202',
     name: 'Marketing digital',
     price: '4000',
     categoryID: 'Cursos',
     img:'./imagenes/marketing-digital.jpeg',
     stock: '0',
    },
    {
     id: '1310',
     name: 'Finanzas Personales',
     price: '5000',
     categoryID:'Cursos',
     img:'./imagenes/finanzas-personales.jpg',
     stock: '1',
    },
    {
    id: '0302',
    name: 'Clases ingles',
    price: '3000',
    categoryID: 'Cursos',
    img: './imagenes/clases-ingles.jpg',
    stock: '100',
    },
    {
     id:'1901',
     name: 'Clases Español',
     price: '4000',
     categoryID: 'Cursos',
     img: './imagenes/curso-gramatica-espanola-gratis.jpg',
     stock: '100',
    },
    {
     id: '1997',
     name: 'Aprender a leer y escribir',
     price: '5000',
     categoryID: 'Cursos',
     img: './imagenes/curso-español.jpg',
     stock: '100',
    }
    ];
    
    
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 1000)
    })
}
    
export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
    
    
 
    export default asyncMock;