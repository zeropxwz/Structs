




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

const person = new HashTable()
