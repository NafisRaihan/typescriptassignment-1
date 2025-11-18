type AnyType = string | number | boolean;

function formatValue(value: AnyType): AnyType {
    if (typeof value === 'string'){
        return value.toUpperCase();
    } else if (typeof value === 'number'){
        return value*10;
    } else if (typeof value === 'boolean'){
        return !value;
    }
    
    return value;
}


type LengthType = string | number[];

function getLength(value: LengthType): number {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}





type BookType = {
    title: string;
    rating: number;
}


function filterByRating(books: BookType[]): BookType[] {
  return books.filter(book => book.rating >= 4);
}

const books: BookType[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];



type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive === true);
}





interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? 'Yes' : 'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);

}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);



function getUniqueValues<T extends string | number>(array1: T[], array2: T[]): T[] {
  const combinedArray: T[] = [];
  const uniqueValues: T[] = [];


    for (let i = 0; i<array1.length; i++){
        combinedArray.push(array1[i]);
    }
    
    for (let j = 0; j<array2.length; j++){ 
        combinedArray.push(array2[j]);
    }

    for (let k = 0; k<combinedArray.length; k++){
        let isDuplicate = false;
        for (let l = 0; l<uniqueValues.length; l++){
            if (combinedArray[k] === uniqueValues[l]){
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate){
            uniqueValues.push(combinedArray[k]);
        }
    }
    
    return uniqueValues;
}





interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number; 
}

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) {
        return 0;
    }

    return products.map(product => {
        const baseTotal = product.price * product.quantity;
            const discountAmount = product.discount ? baseTotal * (product.discount / 100) : 0;

            return baseTotal - discountAmount;
    }).reduce((sum, price) => sum + price, 0); 
}




