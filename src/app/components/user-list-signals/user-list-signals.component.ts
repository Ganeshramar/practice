import { Component, OnInit, computed, signal } from "@angular/core";
import { FormControl } from "@angular/forms";
import { toSignal } from "@angular/core/rxjs-interop";
import { startWith } from "rxjs/operators";


interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user-list-signals',
  templateUrl: './user-list-signals.component.html',
  styleUrl: './user-list-signals.component.css'
})
export class UserListSignalsComponent {

  users = signal<User[]>([]);
  nameFilterControl = new FormControl("");
  sortControl = new FormControl("age");

  nameFilter = toSignal(
    this.nameFilterControl.valueChanges.pipe(
      startWith(this.nameFilterControl.value)
    )
  )

  sort = toSignal(
    this.sortControl.valueChanges.pipe(
      startWith(this.sortControl.value)
    ),
  )

  filteredUsers = computed(() => {
    const allUsers = this.users();
    const nameFilter = this.nameFilter()?.toLowerCase();
    const sort = this.sort();

    const filtered = allUsers.filter((user) => user.name.toLowerCase().includes(nameFilter ?? ''));
    
    return filtered.sort((a, b) => {
      if (sort === "name") {
        return a.name.localeCompare(b.name);
      } else if (sort === "age") {
        return a.age - b.age;
      }
      return 0;
    });
  })

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    const users: User[] = [
      { name: "Swetha", age: 24 },
      { name: "Bharathy", age: 24 },
      { name: "Laksh", age: 27 },
      { name: "Charlie", age: 35 },
      { name: "Ganesh", age: 25 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Jana", age: 21 },
      { name: "Ramar", age: 29 },
    ];
    this.users.set(users);
  }

}
