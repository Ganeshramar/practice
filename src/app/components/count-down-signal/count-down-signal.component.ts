import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-count-down-signal',
  templateUrl: './count-down-signal.component.html',
  styleUrl: './count-down-signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountDownSignalComponent {
  user = { name: 'Ganesh' };
  isVisible = false;
  loadContent = false;
  private readonly expiringReservation = signal({
    expiresAt: new Date('2025-02-09'),
  });
  private readonly currentTime = signal(new Date());
  private readonly currentTimeRefresherSubscription = interval(500)
    .pipe(
      takeWhile(() => this.timeLeft().timeDifference > 0),
      takeUntilDestroyed(),
      tap(() => this.currentTime.set(new Date())),
    )
    .subscribe();

  readonly timeLeft = computed(() => {
    const now = this.currentTime();
    const expiresAt = this.expiringReservation().expiresAt;
    const timeDifference = expiresAt.getTime() - now.getTime();

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isOver: true,
        timeDifference,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds, isOver: false, timeDifference };
  });
  private readonly initialCheck = this.timeLeft();

  updateName(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.user.name = inputElement.value;
    }
  }
}
