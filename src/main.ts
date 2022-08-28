class LinkedList {

    head: any | null
    tail: any | null 

    constructor () {
        this.head = null
        this.tail = null
    }

    addToEnd (value: any): void {

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

    addToStart (value: any): void {

        const node = {value: value, next: this.head}

        if (this.head === null) {
            this.head = node
            this.tail = node    
        }
        else {
            this.head = node    
        }
    }

    delStart () {
        this.head = this.head.next
    }

    delEnd () {
        // 
    }


    
    find (value: any): any {

        if (this.head === null) {
            return
        }

        let node = this.head

        while (node) {
            if (node.value === value) {
                return node
            }

            node = node.next
        }

        return null
    }

    insert (value: any, index: any): void {

        const found: any | null = this.find(index)

        if (found === null) {
            return
        }

        const node = {value: value, next: found.next}
        found.next = node
    }

    print (): void {

        let result = []
        let node   = this.head

        while (node) {
            result.push(node.value)
            node = node.next
        }

        console.log(result)
    }


    printHEAD(): void {
        console.log(this.head.value)
    }
    printTAIL(): void {
        console.log(this.tail.value)
    }
}


const x = new LinkedList()










