export interface HostBuilder {
  construct(type: string): Promise<HTMLElement>;
  destruct(element: HTMLElement): Promise<void>;
}