
const productos=[
    {
     id: '1202',
     nombre: 'Marketing digital',
     precio: '4000',
     categoryID: 'Cursos',
     img:'./imagenes/marketing-digital.jpeg',
     stock: '0',
    },
    {
     id: '1310',
     nombre: 'Finanzas Personales',
     precio: '5000',
     categoryID:'Cursos',
     img:'./imagenes/finanzas-personales.jpg',
     stock: '1',
    },
    {
    id: '0302',
    nombre: 'Clases ingles',
    precio: '3000',
    categoryID: 'Cursos',
    img: './imagenes/clases-ingles.jpg',
    stock: '100',
    },
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