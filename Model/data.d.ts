export interface User {
    uid: string;
    email: string;
    password: string;
    name: string;
}

export namespace App {

    export type Categorie = 'Nouveau-né' | 'Nourrison' | 'Enfant' | 'Adolescent' | 'Adulte';

    interface Drugs {
        Name: string;
        BasiqSolution: string;
        Protocol: string;
        CalculDose: string;
        Result: string;
        InjectionTime: string[];
        DelayBetweenTwoInjection: number[];
    }

    interface Choc {
        Name: string;
        BasiqCalcul: string;
        Protocol: string;
        CalculDose: string;
        Result: string;
        ChocTime: string[];
        DelayBetweenTwoChoc: number[];
    }

    interface Approach {
        Type: "Véneuse Catétaire" | "Intra-Osseux" | "Véneuse périphérique" | "Véneuse centrale";
        Protocol: string;
        ApprocheTime: string;
    }

    interface Maneuver {
        Name: string
        Protocol?: string;
        isProtocolized: boolean; // TODO Kevin utilité ?
        ManeuverTime: string;
    }

    interface Protocol {
        BeginningDate: string;
        EndDate: string;
        HeartMassage: string;
        ReanimationDuration: string;
        Categorie: Categorie;
        Age: number;
        Poids: number;
        Drugs: Drugs[];
        Defibrilation: Choc[];
        VoieDAbord: Approach[];
    }
}

export namespace PDF {
    interface PDF {
        Data: App.Protocol;
        isArchived: boolean;
        isFav: boolean;
    }
}