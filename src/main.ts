class Nodeee {
    value: any 
    next:  object | null

    constructor (value: any) {
        this.value = value
        this.next  = null
    }
}

class LinkedList {
    size: number 
    root: any | null    

    constructor () {
        this.size = 0
        this.root = null
    }

    add (value: any): boolean {
        if (this.size === 0) {
            this.root = new Nodeee(value)
            this.size++

            return true
        }

        let node = this.root

        while (node.next) {
            node = node.next
        }

        node.next = new Nodeee(value)
        this.size++

        return true
    }



    print (): void {
        let result: Array<any> = []

        let node = this.root

        while (node.next) {
            result.push(node)
            node = node.next
        }

        console.log(result)
    }

    getSize (): number {
        return this.size
    }
}



 
const x = new LinkedList()

x.add('abc')
x.add('xwz')
x.add('123')
x.add('890')

x.print()