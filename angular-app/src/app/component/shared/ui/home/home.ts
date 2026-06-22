import { Component, computed, effect, inject, OnInit, Signal, signal } from '@angular/core';
import { CstButton } from '../cst-button/cst-button';
import { FormsModule } from '@angular/forms';
import { Counter } from '../counter/counter';
import { Person } from '../../model/Types';
import { MatTableModule } from '@angular/material/table';
import { HttpPersonService } from '../../service/http-person-service';
import { catchError, debounceTime, filter } from 'rxjs';
import { form, FormField } from '@angular/forms/signals';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [CstButton, FormsModule, Counter, MatTableModule, FormField],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  varBinding = 'binding';
  signalBinding = signal('binding');
  count = signal(3);
  firstName = 'Ada';
  initialCount = 18;
  filter: any;

  ariaLabel = computed(() =>
    this.count() > 0 ? `${this.count()} notifications non lues` : `Aucune notification`,
  );

  displayedColumns: string[] = ['lastName', 'firstName', 'city'];
  dataSource = signal<Person[]>([]);
  personService = inject(HttpPersonService);
  currentPage = signal<number>(0);
  nbPage = signal<number>(0);
  personModel = signal<Person>({
    id: -1,
    lastName: '',
    firstName: '',
    city: '',
  });
  personForm = form(this.personModel);
  debouncedPersonFilter = toSignal(toObservable(this.personModel).pipe(debounceTime(1000)), {
    initialValue: {
      id: -1,
      lastName: '',
      firstName: '',
      city: '',
    },
  });

  constructor() {
    effect(() => {
      this.filter = this.debouncedPersonFilter();
      if (this.filter) {
        this.updateDataSource(
          0,
          undefined,
          undefined,
          undefined,
          this.filter.lastName,
          this.filter.firstName,
          this.filter.city,
        );
      }
    });
  }

  ngOnInit(): void {
    this.personService
      .getAllPerson()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        }),
      )
      .subscribe((page) => {
        this.dataSource.set(page.content);
        this.currentPage.set(page.number);
        this.nbPage.set(page.totalPages);
      });
  }

  NextPage() {
    if (this.currentPage() + 1 < this.nbPage()) {
      this.currentPage.update((p) => p + 1);
      this.updateDataSource(
        this.currentPage(),
        undefined,
        undefined,
        undefined,
        this.filter.lastName,
        this.filter.firstName,
        this.filter.city,
      );
    }
  }

  PreviousPage() {
    if (this.currentPage() - 1 >= 0) {
      this.currentPage.update((p) => p - 1);
      this.updateDataSource(
        this.currentPage(),
        undefined,
        undefined,
        undefined,
        this.filter.lastName,
        this.filter.firstName,
        this.filter.city,
      );
    }
  }

  updateDataSource(
    page?: number,
    size?: number,
    sortBy?: string,
    sortOrder?: string,
    lastName?: string,
    firstName?: string,
    city?: string,
  ) {
    this.personService
      .getAllPerson(page, size, sortBy, sortOrder, lastName, firstName, city)
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        }),
      )
      .subscribe((page) => {
        this.dataSource.set(page.content);
        this.currentPage.set(page.number);
        this.nbPage.set(page.totalPages);
      });
  }
}
