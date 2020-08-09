import { InjectionToken } from '@angular/core';

// This is an example of how to manually create a token for an external service

// Token for Angular's DI container
export const TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

// Interface is not required but provides type inference and safety
export interface Toastr {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}
