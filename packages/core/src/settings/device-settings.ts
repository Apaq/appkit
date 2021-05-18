import { SettingsTable } from "./settings-table";

export class DeviceSettings implements SettingsTable {
    getInt(key: string): number {
        const value = localStorage.getItem(key);
        return !!value ? parseInt(value) : null;
    }

    getFloat(key: string): number {
        const value = localStorage.getItem(key);
        return !!value ? parseFloat(value) : null;
    }

    getString(key: string): string {
        return localStorage.getItem(key);
    }

    getBoolean(key: string): boolean {
        const value = localStorage.getItem(key);
        return !!value;
    }

    setInt(key: string, value: number): void {
        localStorage.setItem(key, !!value ? value.toString() : null);
    }
    
    setFloat(key: string, value: number): void {
        localStorage.setItem(key, !!value ? value.toString() : null);
    }

    setString(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    setBoolean(key: string, value: boolean): void {
        localStorage.setItem(key, !!value ? value.toString() : null);
    }


}