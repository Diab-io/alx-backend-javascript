interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: Boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

class StudentClass{
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomeWork(): string {
        return "Currently working";
    }

    displayName(): string {
        return this._firstName;
    }
}
