import { Config } from "./providers/config"
import { Surfline } from "./providers/surfline"

async function main() {
    const config = new Config()
    const surfline = new Surfline()
    await surfline.launch(config.email, config.password)
    let index = 0
    while (index >= 0) {
        await surfline.visitSpot(index)
        await new Promise((resolve) => setTimeout(resolve, config.rotationPeriod))
        index = (index + 1) % surfline.spots.length
    }
}

main().catch((error) => {
    console.error(error)
    process.exit(1)
})