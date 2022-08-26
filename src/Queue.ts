class Queue {

    data: Array<any> = []


    enque (value: any): void {
        this.data.unshift(value)
    }

    deque (): any {
        return this.data.pop()
    }

    show (): void {
        console.log(this.data)
    }
}