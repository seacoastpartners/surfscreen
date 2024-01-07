import { firefox, Page } from "playwright"
import * as spots from "../config/spots.json"

export class Surfline {
    public readonly spots: string[]
    private readonly baseUrl = "https://www.surfline.com"
    private page: Page

    constructor() {
        this.spots = spots
    }

    async launch(email: string, password: string) {
        const browser = await firefox.launch({
            headless: false
        })
        this.page = await browser.newPage()
        await this.page.goto(this.baseUrl)
        const signInLink = this.page.getByRole("link", { name: "Sign In" })
        const loggedOut = await signInLink.isVisible()
        if (loggedOut) {
            await signInLink.click()
            const emailInput = this.page.getByLabel("Email")
            const passwordInput = this.page.getByLabel("Password")
            const signInButton = this.page.locator("button", { hasText: "Sign In" }).first()
            await emailInput.fill(email)
            await passwordInput.fill(password)
            await signInButton.click()
            await this.page.waitForEvent("domcontentloaded")
        }
    }

    async visitSpot(index: number) {
        await this.page.goto(`${this.baseUrl}/surf-report/${this.spots[index]}`)
        const video = this.page.locator("video").first()
        const isPaused = await video.evaluate((el: HTMLVideoElement) => el.paused)
        if (isPaused) {
            await video.press(" ")
        }
        await video.press("f")
    }
}