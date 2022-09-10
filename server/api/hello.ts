import { readFileSync} from 'fs'

interface Product {
  name: string
  price: number
  description: string
  image: string
  availability: {
    state: 'in-stock' | 'pending' | 'out-of-stock',
    'items-left'?: number 
  }
}

export default defineEventHandler((event) => {
  const products = readFileSync('./public/products.json', 'utf8')

  const data: Product[] = JSON.parse(products)
  console.log('vvvv DATA vvv')

  console.log('---------------------------------------')

  return data
})