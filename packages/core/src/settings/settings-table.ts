
export interface SettingsTable {
    getInt(key: string): number;
    getFloat(key: string): number;
    getString(key: string): string;
    getBoolean(key: string): boolean;

    setInt(key: string, value: number): void;
    setFloat(key: string, value: number): void;
    setString(key: string, value: string): void;
    setBoolean(key: string, value: boolean): void;
}