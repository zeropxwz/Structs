




import LinkedList from "./LinkedListB";



class Stack {

    data = new LinkedList()


    push (value: any): void {
        this.data.append(value)
    }

    pop (): any {

        const result: any = this.data.tail

        // this.data.delete()

        return result
    }

    show (): void {
        console.log(this.data)
    }
}


const x = new Stack()


x.push('xwz')
x.push('abc')
x.push('123')

x.show()






