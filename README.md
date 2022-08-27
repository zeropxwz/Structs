### Массив

тут должна быть иллюстрация массива

Массив - структура данных, которая представляет из себя проиндексированную последовательность данных. В памяти все элементы массива хранятся строго один за другим. Доступ к любому элементу массива осуществляется за константное время O(1).

__Массив в памяти__

тут должно быть изображение массива в памяти

__Основные операции:__  

- получение элемента: O(1)
- добавление в конец: O(1)
- удаление из конеца: O(1)
- добавление в начало: O(n)
- удаление из начала: O(n)
- добавление в середину: O(n - m)
- удаление из середины: O(n - m)
- поиск: O(n) || O(log2n)

__Массив и его основные операци на TypeScript:__

```ts
class DynamicArray {

    data: Array<any> = []

    constructor (...data: any) {
        for (let i = 0; i < data.length; i++) {
            this.data[i] = data[i]
        }
    }

                                                 // O(1)
    get (index: number): any {
        return this.data[index]
    }
    
                                                // O(1)
    addToEnd (value: any): void {               
        this.data[this.data.length] = value
    }

                                                // O(1)
    delToEnd (): any {

        let index:  number = this.data.length -1

        let result: any  = this.data[index] 
        this.data[index] = undefined

        return result
    }

                                                // O(n)
    addToStart (value: any): void {

        for (let i = this.data.length; i >= 0; i-- ) {
            this.data[i + 1] = this.data[i]
        }

        this.data[0] = value
    }

                                                // O(n)
    delToStart (): any {

        const result: any = this.data[0]

        for (let i = 0; i < this.data.length; i++) {
            this.data[i] = this.data[i + 1]
        }

        return result
    }

                                                // O(n)
    insert(value: any, index: number): void {

        for (let i = this.data.length; i >= index; i--) {    
            this.data[i + 1] = this.data[i]
        }

        this.data[index] = value
    }
}
```

### Связный список  

тут должна быть иллюстрация связного списка  

Связнй список - структура данных, которая состоит из линейной последовательности узлов, каждый из которых состоит из двух элементов: значения и ссылки на соседний узел. 

Линейный связные списки бывют:  
- односвязными
- двусвязными
- кольцевыми

Получение прямого доступа возможно только к первому и последнему узлу, а так же к следуйщему и предыдущему относительно текущего узла. Во всех остальных случаях такая операция осуществляется за n времени  

Приемуществом перед массивом является, то что добавление и удаление из начала и конца осуществляется за константное время

__Связный список в памяти__  

тут должно быть изображение связного листа в памяти  

__Основные операции:__  
- получение: O(n)
- Поиск: O(n)
- добавление в конец: O(1)
- удаление из конца: O(1)
- добавление в начало: O(1)
- удаление из начала: O(1)
- добавление в середину: O(1) || O(n + 1)
- удаление из середины: O(1) || O(n + 1)

__Связный список на TypeScript:__  
```ts
class LinkedList {

    head: any | null
    tail: any | null 

    constructor () {
        this.head = null
        this.tail = null
    }

    append (value: any): void {

        const node = {value: value, next: null}

        if (this.head === null) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail 
                ? this.tail.next = node 
                : this.tail.next = null 

            this.tail = node
        }
    }

    prepend (value: any): void {

        const node = {value: value, next: this.head}

        if (this.head === null) {
            this.head = node
            this.tail = node    
        }
        else {
            this.head = node    
        }
    }
}
```


##### таблица сложности алгоритмов распространенных структур:

<img src="/assets/structs.png">

### Хеш таблица  

##### хеш таблица на TypeScript:  

```ts
class HashTable {

    table: Array<any> = []

    hashF(key: string): number {

        let hash: number = 0

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i) * i 
        }

        return hash
    }

    add(key: string, value: any): void {

        let index: number = this.hashF(`${key}`)

        if (!this.table[index]) {
             this.table[index] = [key, value]
        }
    }

    get(key: string): any {
        let index: number = this.hashF(`${key}`)

        if (!this.table[index]) {
            return null
        }
        else {
            return this.table[index][1]
        }
    }
}
```
