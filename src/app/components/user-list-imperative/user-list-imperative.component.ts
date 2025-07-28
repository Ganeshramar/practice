import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user-list-imperative',
  templateUrl: './user-list-imperative.component.html',
  styleUrl: './user-list-imperative.component.css',
})
export class UserListImperativeComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];

  nameFilterControl = new FormControl('');
  sortControl = new FormControl('name');

  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.fetchUsers();

    this.nameFilterControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.applyFilters();
      });

    this.sortControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.applyFilters();
      });
  }

  fetchUsers() {
    this.users = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 },
      { name: 'Ganesh', age: 25 },
      { name: 'Jana', age: 21 },
      { name: 'Ramar', age: 29 },
      { name: 'Swetha', age: 24 },
      { name: 'Bharathy', age: 24 },
      { name: 'Laksh', age: 27 },
    ];

    this.applyFilters();
  }

  applyFilters() {
    const filtered = this.users.filter((user) =>
      user.name
        .toLowerCase()
        .includes(this.nameFilterControl.value?.toLowerCase() ?? ''),
    );

    this.filteredUsers = filtered.sort((a, b) => {
      const sort = this.sortControl.value;
      if (sort === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sort === 'age') {
        return a.age - b.age;
      }
      return 0;
    });
  }
}
