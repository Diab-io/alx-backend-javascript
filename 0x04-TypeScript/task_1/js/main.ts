interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: Boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any;
}
