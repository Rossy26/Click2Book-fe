export class User {
    private id: number;
    private name: string;
    private email: string;
    private passowrd: string;
    private rol_id: number;

    constructor(id: number, name: string, email: string, password: string, rol_id: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passowrd = password;
        this.rol_id = rol_id;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPassowrd(): string {
        return this.passowrd;
    }

    public setPassword(password: string): void {
        this.passowrd = password;
    }

    public getRolId(): number {
        return this.rol_id;
    }

    public setRolId(rol_id: number): void {
        this.rol_id = rol_id;
    }
}