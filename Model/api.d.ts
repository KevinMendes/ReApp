import {App, User, PDF} from './data';

export type DeepPartial<T> = T extends Function
    ? T
    : T extends object
        ? { [P in keyof T]?: DeepPartial<T[P]> }
        : T;


export namespace Api {

    interface All {
        "/all/connexion": {
            method: "post";
            args: {
                body: {}
        };
            response: {
                result: "ok";
                user: {name: string}
            }
        }
    } // TODO Kevin/Jimmy delete ?

    interface WebSite {
        "/api/app/pdf": {
            method: "post";
            args: {
                userUid: User["uid"];
            }
        };
        response: {
            result: "ok";
            pdfList: PDF.PDF;
        }
    }

    interface App {

        "/api/app/isUpdate": {
            method: "post"
            args: {
                version: string;
            }
            response: {
                result: "ok" | "deprecated";
            }
        }

        "/api/app/all": {
            method: "post";
            args: {};
            response: {
                result: "ok";
                drugs: App.Drugs[];
                defibrilation: App.Choc[]; // TODO Kevin/Jimmy bien un tableau?
                maneuver: App.Maneuver[];
                approach: App.Approach[];
                reanimation: App.Protocol;
                version: string;
            };
        };
    }
}
