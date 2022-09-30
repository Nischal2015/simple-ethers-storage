import "dotenv/config";
import { ethers } from "ethers";
import fs from "fs-extra";

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!);
    const encryptedJsonKey = await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD!,
        process.env.PRIVATE_KEY!
    );
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();
