import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

interface User {
  name: string;
  age: number;
}


@Component({
  selector: 'app-user-list-declarative',
  templateUrl: './user-list-declarative.component.html',
  styleUrl: './user-list-declarative.component.css'
})
export class UserListDeclarativeComponent implements OnInit {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  nameFilterControl = new FormControl("");
  sortControl = new FormControl("name");

  nameFilter$ = this.nameFilterControl.valueChanges.pipe(
    startWith(this.nameFilterControl.value),
    takeUntilDestroyed(),
  );

  sort$ = this.sortControl.valueChanges.pipe(
    startWith(this.sortControl.value),
    takeUntilDestroyed(),
  );

  filteredUsers$: Observable<User[]> = combineLatest([
    this.users$,
    this.nameFilter$,
    this.sort$,
  ]).pipe(
    map(([users, nameFilter, sort]) => {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes((nameFilter || "").toLowerCase()),
      );

      return filtered.sort((a, b) => {
        if (sort === "name") {
          return a.name.localeCompare(b.name);
        } else if (sort === "age") {
          return a.age - b.age;
        }
        return 0;
      });
    }),
  );

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    const users: User[] = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: 35 },
      { name: "Ganesh", age: 25 },
      { name: "Jana", age: 21 },
      { name: "Ramar", age: 29 },
      { name: "Swetha", age: 24 },
      { name: "Bharathy", age: 24 },
      { name: "Laksh", age: 27 },
    ];
    this.usersSubject.next(users);
  }
}
