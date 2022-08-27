### Связный список  

тут должна быть иллюстрация связного списка  

Связнй список - структура данных, которая состоит из линейной последовательности узлов, каждый из которых состоит из двух элементов: значения и ссылки на соседний узел. 

Линейный списки бывют:  
- односвязными
- двусвязными
- кольцевыми

Получение прямого доступа возможно только к первому и последнему узлу, а так же к следуйщему и предыдущему относительно текущего узла. Во всех остальных случаях такая операция осуществляется за n времени  

Приемуществом перед массивом является, то что добавление и удаление из начала и конца осуществляется за константное время

__Связный список в памяти__  

тут должно быть изображение связного листа в памяти  

__Таблица сложности:__  
- Поиск:      O(n)
- получение:  O(n)
- вставка:    O(n)
- Добавление: O(1)
- удаление:   O(1)

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
