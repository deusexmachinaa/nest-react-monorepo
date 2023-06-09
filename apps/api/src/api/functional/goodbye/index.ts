/**
 * @packageDocumentation
 * @module api.functional.goodbye
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection, Primitive } from "@nestia/fetcher";

/**
 * @controller AppController.getGoodbye()
 * @path GET /goodbye
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getGoodbye(
    connection: IConnection,
): Promise<getGoodbye.Output> {
    return Fetcher.fetch(
        connection,
        getGoodbye.ENCRYPTED,
        getGoodbye.METHOD,
        getGoodbye.path(),
    );
}
export namespace getGoodbye {
    export type Output = Primitive<string>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/goodbye";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/goodbye`;
    }
}