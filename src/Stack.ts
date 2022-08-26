class Stack {
    data: Array<any> = [] 

    push (value: any): boolean {
        this.data.push(value)
        return true
    }
    pick (): void {
        console.log(this.data[this.data.length - 1])
    }
    pop (): any {
        return this.data.pop()
    }
    show (): void {
        console.log(this.data)
    }
}


