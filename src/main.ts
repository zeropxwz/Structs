let data = [
    'Petr',
    'Ivan',
    'Oleg',
    'Egor',
    'Ogor',
    'Nikolai'
]




function push (list: Array<any>, value: any): void {
    list[list.length] = value
}

function pop (list: Array<any>): any {
    list[list.length - 1] = undefined
    return list
}

function unshift (list: Array<any>, value: any): Array<any> {

    const result: Array<any> = []
    
    for (let i = 0; i < list.length; i++) {

        if (i === 0) {
            push(result, value)
        }
        else {
            push(result, list[i])
        }
    }

    return result
}

function shift (list: Array<any>): Array<any> {

    const result: Array<any> = []


    for (let i = 1; i < list.length; i++) {
        result[i - 1] = list[i]
    }

    

    return result
}


