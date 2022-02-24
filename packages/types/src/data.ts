
/**
 * Interface for transporting data from and to apps.
 */
export interface Data {
    /**
     * The uri of the data, fx. contents://files/my-folder/my-file.png
     */
    uri: string;

    /**
     * The optional mime type of the data, fx. image/png.
     */
    type?: string | null;
}

