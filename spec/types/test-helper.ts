import { AccessToken } from "./secrets"
import { Client } from "@microsoft/microsoft-graph-client"

export function getClient():Client {
    return Client.init({
        authProvider: (done) => {
            done(null, AccessToken);
        }
    });
}


export function randomString () {
    return Math.random().toString(36).substring(7);
}