import { MongoClient } from 'mongodb';

let clientPromise: Promise<MongoClient> | undefined;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export default function getMongoClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not configured.');

  const development = process.env.NODE_ENV === 'development';
  const cached = development ? global._mongoClientPromise : clientPromise;
  if (cached) return cached;

  const client = new MongoClient(uri);
  const pending = client.connect().catch((error: unknown) => {
    if (development) global._mongoClientPromise = undefined;
    else clientPromise = undefined;
    void client.close().catch(() => {});
    throw error;
  });

  if (development) global._mongoClientPromise = pending;
  else clientPromise = pending;
  return pending;
}
