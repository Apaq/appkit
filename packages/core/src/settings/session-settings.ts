import { SettingsTable } from "./settings-table";

export class SessionSettings implements SettingsTable {
    private table: Map<string, string> = new Map<string, string>();

    getInt(key: string): number {
        const value = this.table.get(key);
        return !!value ? parseInt(value) : null;
    }

    getFloat(key: string): number {
        const value = this.table.get(key);
        return !!value ? parseFloat(value) : null;
    }

    getString(key: string): string {
        return this.table.get(key);
    }

    getBoolean(key: string): boolean {
        const value = this.table.get(key);
        return !!value;
    }

    getObject<T>(key: string): T {
        return JSON.parse(this.getString(key)) as T;
    }

    setInt(key: string, value: number): void {
        this.table.set(key, !!value ? value.toString() : null);
    }
    
    setFloat(key: string, value: number): void {
        this.table.set(key, !!value ? value.toString() : null);
    }

    setString(key: string, value: string): void {
        this.table.set(key, value);
    }

    setBoolean(key: string, value: boolean): void {
        localStorage.setItem(key, !!value ? value.toString() : null);
    }

    setObject<T>(key: string, value: T): void {
        this.setString(key, JSON.stringify(value));
    }

}