// import { readFileSync} from 'fs'
import productdb from './productdb'
interface ProductDB {
  name: string
  category: string
  id: string
  price: number
  description: string
  images: {
    main?: string
    detail?: string
    extra?: string
  }
  variations: {color: Array<string>, size: Array<string>}
  items: Array<{code: string, amount: number}>
}

const data = {
  "name": "Premium Journal",
  "category": "journal",
  "id": "PJ",
  "price": 22.99,
  "description": "The best materials and all of the features for all the power self improvers out there.",
  "images": {
    "main": "/img/colorblock-front.webp",
    "detail": "/img/colorblock-inside.webp"
  },
  "variations": {
    "color": ["K", "N"],
    "size": ["M"]
  },
  "items": [
    {"code": "KM", "amount": 14},
    {"code": "NM", "amount": 5}
  ]
}
// interface Product extends ProductDB {

// }

export default defineEventHandler(async (event) => {
  // const data = readFileSync('./public/products.json', 'utf8')
  // const {products, codeToName}: 
  //   {products: ProductDB[], codeToName: object} = JSON.parse(data)

  const {name} = await event.context.params
  const { products} = productdb  

  console.log('vvvv DATA vvv')
  console.log(name.split('%20').join(' ').toLowerCase())
  console.log('---------------------------------------')

  try {
    return products.find(product => product.name.toLowerCase() === name.split('%20').join(' ').toLowerCase())
  } catch (error) {
    return data
  }
})