import colors from "@colors/colors"

const logger = {
    success: (message: string) => {
        console.log(colors.green(message));
    },
    error: (message: string) => {
        console.log(colors.red(message));
    }
}

export default logger;
