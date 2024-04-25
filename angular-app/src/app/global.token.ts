import { InjectionToken } from "@angular/core"

export interface config{
    experimental: boolean
}

export const APP_CONFIG = new InjectionToken<config>('app.config', {
    providedIn: 'root',
    factory: () => ({
        experimental: true
    })
})