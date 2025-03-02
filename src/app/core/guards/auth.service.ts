// auth.service.ts

import { Injectable, WritableSignal, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { User } from '../../modules/user/user.interface';


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private authenticated: boolean = false;
    loggedIn: WritableSignal<{ status: boolean, user: User }> = signal({
        status: false, user: {}
    });

    isAuthenticated(): boolean {
        return this.authenticated;
    }
    constructor(private localStorageService: LocalStorageService) { }

    login(username: string | null | undefined, password: string | null | undefined): boolean {  
        const value = this.localStorageService.getItem(`${username}${password}`);
        if (value) {
            const user = JSON.parse(value) as User
            console.log(user)
            if (password === user.password) {
                this.authenticated = true;
                this.loggedIn.update((value) => value = { status: true, user: user });
                return true;
            } else {
                return false;
            }
        } else {
            this.authenticated = false;
            this.loggedIn.update((value) => value = { status: false, user: {} });
            return false;
        }
    }

    logout(): void {
        // Implement logout logic if needed
        this.authenticated = false;
    }
}
