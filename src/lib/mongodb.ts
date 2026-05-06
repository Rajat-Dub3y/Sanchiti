import { MongoClient } from "mongodb";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const uri = process.env.MONGODB_URI as string;
 
if (!uri) {
  throw new Error("Please add MONGODB_URI to your .env.local file");
}
 
let client: MongoClient;
let clientPromise: Promise<MongoClient>;
 
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}
 
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}
 
export default clientPromise;