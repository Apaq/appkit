export class Logger {
    public static enabled = true;

    public static info(message: string) {
        if(!this.enabled) return;
        console.info(message);
    }

    public static warn(message: string) {
        if(!this.enabled) return;
        console.warn(message);
    }
    
    public static error(message: string) {
        if(!this.enabled) return;
        console.error(message);
    }
}