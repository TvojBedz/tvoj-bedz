import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

interface MongooseGlobalCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    const mongoose: MongooseGlobalCache;
}

const globalWithMongoose = globalThis as typeof globalThis & {
    mongoose: MongooseGlobalCache;
};

if (!globalWithMongoose.mongoose) {
    globalWithMongoose.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
    if (globalWithMongoose.mongoose.conn) return globalWithMongoose.mongoose.conn;

    if (!globalWithMongoose.mongoose.promise) {
        globalWithMongoose.mongoose.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
            dbName: "tvojbedz", // replace with your actual DB name
        });
    }

    globalWithMongoose.mongoose.conn = await globalWithMongoose.mongoose.promise;
    return globalWithMongoose.mongoose.conn;
}
