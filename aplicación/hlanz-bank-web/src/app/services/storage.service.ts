import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  createSession(name : string, value : string){
    localStorage.setItem(name, value);
  }

  
}
