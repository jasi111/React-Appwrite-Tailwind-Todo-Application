import {Client, Account, Databases} from 'appwrite'

const client = new Client();


client.setEndpoint("http://localhost/v1").setProject("63d224c44b1afa3e6adf")// appwrite projectid

export const account = new Account(client)

//Database

export const databases = new Databases(client, "63d2260ec050426cde61") //appwrite database id