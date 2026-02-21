import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollLockService {
  private lockCount = 0;
  private scrollY = 0;

  lock() {
    if (this.lockCount === 0) {
      this.scrollY = window.scrollY;

      document.body.classList.add('no-scroll');
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    }

    this.lockCount++;
  }

  unlock() {
    if (this.lockCount === 0) return;

    this.lockCount--;

    if (this.lockCount === 0) {
      document.body.classList.remove('no-scroll');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';

      window.scrollTo(0, this.scrollY);
    }
  }
}
