import axios from 'axios';

interface User {
    id: number;
    name: string;
    phone: string;
    address: string;

}

async function api() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        body: JSON.stringify({
            id: ,
            name: [],
            phone: [],
            address: [];
        })
    });
    
}

export function getPostalAddress(id, name, phone, address) {
    return 
}
