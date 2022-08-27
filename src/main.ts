





class DynamicArray {

    data: Array<any> = []

    constructor (...data: any) {
        for (let i = 0; i < data.length; i++) {
            this.data[i] = data[i]
        }
    }

    // Methods
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

    // O(1)
    get (index: number): any {
        return this.data[index]
    }

    show (): void {console.log(this.data)}
}








