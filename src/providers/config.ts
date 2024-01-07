export class Config {
    public readonly email: string
    public readonly password: string
    public readonly rotationPeriod: number
    private readonly requiredEnv = ["EMAIL", "PASSWORD"]

    constructor() {
        this.checkRequiredEnv()
        this.email = process.env.EMAIL as string
        this.password = process.env.PASSWORD as string
        this.rotationPeriod = parseInt(process.env.ROTATION_PERIOD || "60000")
    }

    checkRequiredEnv() {
        const missingEnv = this.requiredEnv.filter((env) => !(env in process.env))
        if (missingEnv.length > 0) {
            throw new Error(`Missing required environment variables: ${missingEnv.join(", ")}`)
        }
    }
}