import { readFileSync, readdirSync} from 'fs'
import product from './products'

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
  availability: {
    state: 'in-stock' | 'pending' | 'out-of-stock',
    'items-left'?: number 
  }
  variations: {color: Array<string>, size: Array<string>}
  items: Array<{code: string, amount: number}>
}

const data: ProductDB[] = [{
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
  availability: {
    state: 'in-stock',
    "items-left": 23
  },
  "items": [
    {"code": "KM", "amount": 14},
    {"code": "NM", "amount": 5}
  ]
}]

export default defineEventHandler((event) => {
  // const data = readFileSync('./public/products.json', 'utf8')
  const logogo = readdirSync('../')
  const logo = readdirSync('./')

  try {
    console.log(product)
  } catch (error) {
    console.log(error)
  }
  // const {products, codeToName}: {products: ProductDB[], codeToName: object} = JSON.parse(data)
  // console.log('vvvv DATA vvv')
  // console.log('---------------------------------------')
  console.log({parent: logogo, child: logo})

  return data
})
