import { readFileSync} from 'fs'

interface ProductDB {
  name: string
  category: string
  id: string
  price: number
  description: string
  image: string
  availability: {
    state: 'in-stock' | 'pending' | 'out-of-stock',
    'items-left'?: number 
  }
  variations: {color: Array<string>, size: Array<string>}
  items: Array<{code: string, amount: number}>
}

// interface Product extends ProductDB {

// }

export default defineEventHandler(async (event) => {
  const {name} = await event.context.params
  //
  const data = readFileSync('./public/products.json', 'utf8')

  const {products, codeToName}: 
    {products: ProductDB[], codeToName: object} = JSON.parse(data)
  
  console.log('vvvv DATA vvv')
  console.log(name.split('%20').join(' ').toLowerCase())
  console.log(products.find(product => product.name.toLowerCase() === name.split('%20').join(' ').toLowerCase()))
  console.log('---------------------------------------')

  return products.find(product => product.name.toLowerCase() === name.split('%20').join(' ').toLowerCase())
})