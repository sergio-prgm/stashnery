import { watch } from 'vue'

interface ProductCart {
  name: string,
  quantity: number,
  // color: string,
  price: number
}

// [ ] Maybe run encapsulate everything in a function??

// const store: ProductCart[] = reactive([])
export const useStore = () => useState<ProductCart[]>('store', () => ([{
  name: 's', quantity: 0, price: 0
}]))

export const watchSmn = () => {
  console.log('help')
  if (typeof window !== 'undefined') {
    watchEffect(async () => {
      console.log('heleleel')
      if (useStore().value.some(p => p.name === 's')) {
        useStore().value = await JSON.parse(window.localStorage.getItem('Cart') as string) ?? []
      } else {
        await window.localStorage.setItem('Cart', JSON.stringify(useStore().value))
      }
    })
  }
}

const productToModify = (prodName: string) => useStore().value.findIndex(prod => prod.name === prodName)

export const addProduct = (product: ProductCart) => {
  useStore().value.push(product)
}

// Different colors/types of product have to be added as distinct products

export const removeProduct = (name: string) => {
  useStore().value.splice(productToModify(name), 1)
}

export const increaseQuantity = (name: string) => {
  useStore().value[productToModify(name)].quantity++
}

export const decreaseQuantity = (name: string) => {
  const quantity = useStore().value[productToModify(name)].quantity
  quantity > 1 && useStore().value[productToModify(name)].quantity--
}

const localCart = (id: string): ProductCart[] => JSON.parse(window.localStorage.getItem(id) as string)

// const watchStore = useStore()
// watch(() => [...useStore.value], (store) => { console.log(store)})

// const level = ref([1, 2, 3, 4])
// watch(() => [...level.value], (current, old) => console.log(current))


// watch(useStore().value, (currentStore, oldStore) => {
// })

export const totalProd = (name: string) => computed(() =>{
  const product = useStore().value.find(prod => prod.name === name)!
  const total = product?.price * product?.quantity
  return Math.floor(total * 100) / 100
})

export const totalCart = () => {
  let result = 0

  useStore().value
    .filter(prod => prod.quantity)
    .forEach(prod => {
      result+= prod.price * prod.quantity
    })
  return Math.floor(result * 100) / 100
}